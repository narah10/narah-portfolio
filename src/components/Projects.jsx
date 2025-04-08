import { projects } from "../data"

export default function Project() {
  // console.log(projects)
    return (
    <section id="projects" className="my-10">
      <div className="text-white">
      <h1 className="mb-4 text-5xl tracking-tight font-extrabold"> <span className="text-accentColor">Projects</span> I've played with.</h1>
      <p className="my-2">I'm a web developer with experience in <span className="font-bold text-accentLightColor">React, JavaScript, GraphQL</span>, and modern web technologies.</p>
      <p>At BYU-I and FamilySearch, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I enjoy building solutions that enhance user experiences and make technology more intuitive.</p>
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