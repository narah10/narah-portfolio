import React from "react"
import {skills} from "../skills"

export default function About() {
    return (
      <section id="about" className="my-10">
      <div className="px-10 mb-10">
        <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">A Bit About Me</h3>
        <p className="my-2">I'm a web developer with experience in <span className="font-bold">React, JavaScript, GraphQL, and modern web technologies</span>. I enjoy building intuitive, high-performing applications that prioritize accessibility and user experience.</p>
        <p>I earned my bachelor's degree from <span className="font-bold">Brigham Young University–Idaho</span>, where I developed a strong foundation in web development and software engineering principles. Through internships at <span className="font-bold">BYU-I and FamilySearch</span>, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I love working on projects that solve real problems and improve the way people interact with technology.</p>
        <p className="my-2">I'm always learning and refining my skills, excited about new challenges that push me to grow as a developer. But when I am not at my computer, I like to spend my time reading, playing with my two adorable cats and playing video games with my husband.</p>
      </div>
      <div className="px-10">
        <h3 className="font-semibold py-0 text-gray-800 mb-2 text-2xl tracking-tight">Skills</h3>
        <p className="mb-5">I have my go-to tools, but I always prioritize the best solution for the job—even if it means learning something new. I'm always eager to explore new technologies to ensure each project gets the right approach.</p>
        {skills.map((skillLevel, index) => (
          <div className="mb-10" key={index}>
            <h4 className="mb-2 text-xl text-gray-700 tracking-tight font-medium dark:text-white ">{skillLevel.level}</h4>
            <ul className="flex flex-row gap-3 flex-wrap">
              {skillLevel.skillsList.map((skill, idx) => (
                <li className=" border border-gray-200 rounded-lg w-auto p-2" key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
))}
      </div>
    </section>
    )
}