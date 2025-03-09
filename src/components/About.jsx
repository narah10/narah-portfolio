import React from "react"
import {skills} from "../skills"

export default function About() {
    return (
      <section id="about" className="my-10">
      <div className="px-10 mb-10">
        <h3 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">A Bit About Me</h3>
        <p className="my-2">I'm a web developer with experience in <span className="font-bold">React, JavaScript, GraphQL, and modern web technologies</span>.</p>
        <p>At BYU-I and FamilySearch, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I enjoy building solutions that enhance user experiences and make technology more intuitive.</p>
      </div>
      <div className="px-10">
        <h3 className="font-semibold py-0 text-gray-800 mb-2 text-2xl tracking-tight">Skills</h3>
        <p className="mb-5">I have my go-to tools, but I always focus on finding the best solution for the job—even if it means learning something new. I'm always eager to explore new technologies to ensure each project gets the right approach.</p>
        {skills.map((skillLevel, index) => (
          <div className="mb-10" key={index}>
            <h4 className="mb-2 text-xl text-gray-700 tracking-tight font-medium dark:text-white ">{skillLevel.level}</h4>
            <ul className="flex flex-row gap-3 flex-wrap">
              {skillLevel.skillsList.map((skill, idx) => (
                <li className="border border-gray-200 rounded-lg w-auto py-1.5 px-3" key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
))}
      </div>
    </section>
    )
}