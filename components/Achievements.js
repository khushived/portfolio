import siteContent from '../data/siteContent';

export default function Achievements() {
  const { items: achievements, certifications } = siteContent.achievements;
  const leetcode = siteContent.integrations.leetcode;

  return (
    <section className="section-padding bg-[#0a0a0a] min-h-screen">
      <div className="container-custom">
        <h2 className="section-title text-center">Achievements</h2>
        
        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-green-500 transition-all duration-300 card-hover"
            >
              <div className="h-40 bg-gradient-to-br from-green-900 to-gray-900 flex items-center justify-center text-6xl">
                {achievement.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-green-400">{achievement.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{achievement.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400">LeetCode Profile</h3>
          <a
            href={leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h4 className="text-xl font-bold text-gray-100">@{leetcode.username}</h4>
                <p className="text-gray-400 text-sm mt-1">Practice profile for DSA and problem solving.</p>
              </div>
              <div className="flex gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-800 text-green-400">Solved: {leetcode.solved}</span>
                <span className="px-3 py-1 rounded-full bg-gray-800 text-green-400">{leetcode.badge}</span>
              </div>
            </div>
          </a>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-green-500 transition-all duration-300 flex items-center gap-3"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div className="flex-1">
                  <p className="text-gray-200">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
