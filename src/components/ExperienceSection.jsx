import React from 'react'
import { experiences } from '../experience'

export default function ExperienceSection() {
    return (
        <section id="experience" className='px-10 my-10'>
        <h3 className="mb-4 text-3xl tracking-tight font-extrabold py-0 text-gray-800">Work History</h3>
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