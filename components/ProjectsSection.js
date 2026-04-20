import { useEffect, useState } from 'react';
import siteContent from '../data/siteContent';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [githubProjects, setGithubProjects] = useState([]);
  const [loadingGithub, setLoadingGithub] = useState(true);

  const projects = siteContent.projects;
  const githubProfileUrl = siteContent.integrations.github.profileUrl;
  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    fetch('/api/github-projects')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to fetch GitHub projects');
        }
        return response.json();
      })
      .then((data) => {
        setGithubProjects(data.projects || []);
      })
      .catch(() => {
        setGithubProjects([]);
      })
      .finally(() => {
        setLoadingGithub(false);
      });
  }, []);

  return (
    <section className="section-padding bg-[#0f0f0f] min-h-screen">
      <div className="container-custom">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-green-500 transition-all duration-300 card-hover"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-green-400">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-green-500 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">GitHub Projects</h3>
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              View full GitHub profile →
            </a>
          </div>

          {loadingGithub ? (
            <p className="text-gray-400">Loading GitHub repositories...</p>
          ) : githubProjects.length === 0 ? (
            <p className="text-gray-400">GitHub repositories are unavailable right now.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-green-500 transition-all duration-300 card-hover"
                >
                  <h4 className="text-lg font-semibold text-green-400 mb-2">{repo.name}</h4>
                  <p className="text-sm text-gray-400 mb-4 min-h-14">
                    {repo.description || 'No description added yet.'}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{repo.language || 'N/A'}</span>
                    <span>★ {repo.stargazers_count} | Forks {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
