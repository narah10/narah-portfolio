import React from 'react'
import { experiences } from '../experience'

export default function ExperienceSection() {
    return (
        <section id="experience" className='px-10'>
        <h3 className="font-semibold py-0 font-passion text-3xl text-gray-700">Experience</h3>
        <p>I earned my bachelor's degree from <span className="font-bold">Brigham Young University–Idaho</span>, where I developed a strong foundation in web development and software engineering principles. Through internships at <span className="font-bold">BYU-I and FamilySearch</span>, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I love working on projects that solve real problems and improve the way people interact with technology.</p>
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
    </section>
    )
}