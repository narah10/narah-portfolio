import React from "react"
import { experiences } from "../experience"

export default function About() {
    return (
      <section id="about" className="">
      <div className="px-10">
        <h3 className="font-semibold py-0 font-passion text-3xl text-gray-700">A Bit About Me</h3>
        <p className="my-2">I'm a web developer with experience in <span className="font-bold">React, JavaScript, GraphQL, and modern web technologies</span>. I enjoy building intuitive, high-performing applications that prioritize accessibility and user experience.</p>
        <p>I earned my bachelor's degree from <span className="font-bold">Brigham Young University–Idaho</span>, where I developed a strong foundation in web development and software engineering principles. Through internships at <span className="font-bold">BYU-I and FamilySearch</span>, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I love working on projects that solve real problems and improve the way people interact with technology.</p>
        <p className="my-2">I'm always learning and refining my skills, excited about new challenges that push me to grow as a developer. But when I am not at my computer, I like to spend my time reading, playing with my two adorable cats and playing video games with my husband.</p>
      </div>
      <div className="px-10">
        <h3 className="font-semibold py-0 font-passion text-3xl text-gray-700">Experience</h3>
        <div>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((experience, index) => (
              <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{experience.date}</time>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                      <p>{experience.company}</p>
                      <ul className="text-base font-normal text-gray-500 dark:text-gray-400 list-disc pl-5">
                          {experience.responsibilities.map((detail) => (<li>{detail}</li>))}
                      </ul>
                </li>
            ))}
          </ol>                  


        </div>
      </div>
    </section>
    )
}