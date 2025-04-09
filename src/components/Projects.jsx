import { projects } from "../data"

export default function Project() {
  // console.log(projects)
    return (
    <section id="projects" className="my-10">
      <div className="text-white">
      <h1 className="mb-4 text-5xl tracking-tight font-extrabold"> <span className="text-accentColor">Projects</span> I've played with.</h1>
      <p className="my-2">These are personal projects I’ve explored out of curiosity and a drive to grow as a developer. I researched, designed, and built most of them from scratch, often experimenting with new tools, frameworks, and design ideas. Each one reflects my learning process and passion for creating accessible, user-friendly web experiences.</p>
        <div className="flex gap-10 flex-wrap mt-10">
          {projects.map((project) => (
          <div className="max-w-md bg-bgDark rounded overflow-hidden shadow-lg hover:shadow-lg hover:shadow-accentLightColor">
            <a href={project.link} target="_blank">
                <img className="h-auto max-w-md" src={project.image} alt={project.alt}/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.subtitle} {project.title}</div>
                  <p className="text-white text-base">
                  {project.description}
                  </p>
                </div>
            </a>
          </div>
          ))}
        </div>
      </div>
    </section>
    )
}