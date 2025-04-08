import React from 'react'
import { experiences } from '../experience'

export default function ExperienceSection() {
    return (
        <section id="experience" className='my-10'>
        <h3 className="mb-4 text-3xl tracking-tight font-extrabold py-0 text-white">Work Experience</h3>
        <div>
          <ol className="relative border-s border-accentColor">
            {experiences.map((experience, index) => (
              <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-accentLightColor rounded-full mt-1.5 -start-1.5 border border-accentLightColor"></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">{experience.date}</time>
                      <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                      <p className='text-white mb-3'>{experience.company}</p>
                      <ul className="text-base font-normal text-white list-disc pl-5">
                          {experience.responsibilities.map((detail) => (<li>{detail}</li>))}
                      </ul>
                </li>
            ))}
          </ol>                  


        </div>
    </section>
    )
}