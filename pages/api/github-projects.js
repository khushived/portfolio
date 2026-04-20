import siteContent from '../../data/siteContent';

function pickFeaturedRepos(repos, featuredRepos) {
  if (!Array.isArray(featuredRepos) || featuredRepos.length === 0) {
    return repos.slice(0, 6);
  }

  const featuredSet = new Set(featuredRepos.map((name) => name.toLowerCase()));
  const filtered = repos.filter((repo) => featuredSet.has(repo.name.toLowerCase()));
  return filtered.length > 0 ? filtered : repos.slice(0, 6);
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { username, featuredRepos } = siteContent.integrations.github;
    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Unable to fetch GitHub repositories' });
    }

    const repos = await response.json();
    const selected = pickFeaturedRepos(repos, featuredRepos).map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
      updated_at: repo.updated_at,
    }));

    return res.status(200).json({ username, projects: selected });
  } catch (error) {
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
