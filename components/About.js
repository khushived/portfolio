import siteContent from '../data/siteContent';

export default function About() {
  const { about } = siteContent;

  return (
    <section className="section-padding bg-[#0f0f0f] min-h-screen">
      <div className="container-custom">
        <h2 className="section-title text-center">{about.title}</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-300 leading-relaxed text-center">{about.summary}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {about.focuses.map((focus, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300 card-hover"
            >
              <div className="text-5xl mb-4">{focus.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">{focus.title}</h3>
              <p className="text-gray-400 leading-relaxed">{focus.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-400">Education</h3>
          <div className="space-y-4">
            {about.education.map((edu, index) => (
              <div key={index} className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-200">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-gray-500 md:text-right">
                    <p>{edu.period}</p>
                    <p>{edu.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-green-400">Positions of Responsibility</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {about.responsibilities.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-green-400">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {about.hobbies.map((hobby, index) => (
                <span key={index} className="skill-tag">{hobby}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}