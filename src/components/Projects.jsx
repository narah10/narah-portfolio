import { projects } from "../data"

export default function Project() {
  // console.log(projects)
    return (
    <section id="projects" className="my-10 px-10">
      <div className="">
          <h1 className="sm:text-4xl tracking-tight font-extrabold text-gray-900 text-3xl mb-4">
          Featured Projects
          </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {/* {projects.map((project) => (
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
                  <p className="leading-relaxed text-white">{project.description}</p>
                </div>
              </div>
            </a>
          ))} */}
          {projects.map((project) => (
          <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="w-full" src={project.image} alt={project.alt}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.subtitle} {project.title}</div>
            <p className="text-gray-700 text-base">
            {project.description}
            </p>
          </div>
        {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
      </div>
          ))}
        </div>
      </div>
    </section>
    )
}