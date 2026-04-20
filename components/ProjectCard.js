export default function ProjectCard({ title, description, link }) {
    return (
      <div className="max-w-sm bg-white rounded-lg shadow-md p-6 m-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href={link} target="_blank" className="block mt-4 text-blue-500 hover:underline">View Project</a>
      </div>
    );
  }
  