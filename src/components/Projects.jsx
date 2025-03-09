import { projects } from "../data"

export default function Project() {
  console.log(projects)
    return (
    <section id="projects" className="my-10 px-10">
      <div className="">
          <h1 className="sm:text-4xl tracking-tight font-extrabold text-gray-900 text-3xl mb-4">
          Featured Projects
          </h1>
        <div className="flex flex-wrap">
          {projects.map((project) => (
            <a
              target="_blank"
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full object-cover "
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
    )
}