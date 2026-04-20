import siteContent from '../data/siteContent';

export default function Experience() {
  const experiences = siteContent.experience;

  return (
    <section className="section-padding bg-[#0f0f0f] min-h-screen">
      <div className="container-custom">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-base mt-2 md:mt-0">{exp.period}</span>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

              {exp.highlights && exp.highlights.length > 0 ? (
                <ul className="text-gray-400 text-sm mb-4 space-y-2">
                  {exp.highlights.map((point, pointIndex) => (
                    <li key={pointIndex}>• {point}</li>
                  ))}
                </ul>
              ) : null}
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-800 text-green-500 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
