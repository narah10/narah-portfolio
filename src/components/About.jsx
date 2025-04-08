import React from "react"
import {skills} from "../skills"
import hero from "../assets/hero-img.svg"

export default function AboutSection() {
    return (
      <section id="about">
      <div className="mb-10 text-white">
        <h1 className="mb-4 text-5xl tracking-tight font-extrabold">A Bit About <span className="text-accentColor">Me</span>.</h1>
        <div className="grid md:grid-cols-3 gap-5 justify-center items-center">
          <div className="md:col-span-2">
            <p className="my-2">I'm a web developer with experience in <span className="font-bold text-accentLightColor">React, JavaScript, GraphQL</span>, and modern web technologies.</p>
            <p>At BYU-I and FamilySearch, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I enjoy building solutions that enhance user experiences and make technology more intuitive.</p>
            <p className="my-2">I'm a web developer with experience in <span className="font-bold text-accentLightColor">React, JavaScript, GraphQL</span>, and modern web technologies.</p>
            <p>At BYU-I and FamilySearch, I’ve worked on full-stack and front-end projects, contributing to API integrations, performance optimizations, and accessible design. I enjoy building solutions that enhance user experiences and make technology more intuitive.</p>
            
          </div>
          <img src={hero} className="max-w-xs mx-auto rounded-full bg-accentLightColor" alt="Image of NaRah"/>
        </div>

      </div>
      <div>

      </div>
      <div className="text-white">
        <h3 className="font-semibold py-0 text-white mb-2 text-2xl tracking-tight overflow-hidden after:h-[1px] after:bg-accentColor after:inline-block after:relative after:align-middle after:w-3/4 
           after:left-10">Skills</h3>
        <p className="mb-5">I have my go-to tools, but I always focus on finding the best solution for the job—even if it means learning something new. I'm always eager to explore new technologies to ensure each project gets the right approach.</p>
        {skills.map((skillLevel, index) => (
          <div className="mb-10" key={index}>
            <h4 className="mb-2 text-xl text-accentLightColor tracking-tight font-medium ">{skillLevel.level}</h4>
            <ul className="flex flex-row gap-3 flex-wrap">
              {skillLevel.skillsList.map((skill, idx) => (
                <li className="border border-accentLightColor rounded-lg w-auto py-1.5 px-3" key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    )
}