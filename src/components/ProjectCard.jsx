const TYPE_COLORS = {
  Skolprojekt: 'bg-amber-400/20 text-amber-200',
  'School Project': 'bg-amber-400/20 text-amber-200',
  Volontär: 'bg-green-400/20 text-green-200',
  Volunteer: 'bg-green-400/20 text-green-200',
  Hobby: 'bg-purple-400/20 text-purple-200',
};

function ProjectCard({ emoji, title, description, technologies, type, link, linkLabel, featured }) {
  const badgeClass = TYPE_COLORS[type] || 'bg-white/10 text-white/70';

  return (
    <div
      className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200/50 rounded-l-2xl" />
      <div className="p-6 md:p-8 pl-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{emoji}</span>
            <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          </div>
          {type && (
            <span className={`text-xs font-semibold rounded-full px-3 py-1 ${badgeClass}`}>
              {type}
            </span>
          )}
        </div>
        <p className="text-blue-100 mb-5 leading-relaxed">{description}</p>
        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-200/20 text-blue-100 rounded-full px-3 py-1 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-5 text-blue-200 hover:text-white text-sm font-medium transition-colors"
          >
            {linkLabel || 'View Project'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
