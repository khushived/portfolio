import siteContent from '../data/siteContent';

export default function Skills() {
  const skillCategories = siteContent.skills;

  return (
    <section className="section-padding bg-[#0a0a0a] min-h-screen">
      <div className="container-custom">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {(category.items || category.skills).map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
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
