import React from "react"
import { Link } from "react-router-dom"
import ExperienceSection from "../components/ExperienceSection"

const Home = () => {
    return (
            <div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 mb-10">
                    <div class="">
                        <div class="max-w-sm p-6 md:mx-none bg-accentDarkColor border-gray-200 rounded-lg shadow-sm text-white transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-accentLightColor">
                            <p className="font-passion">Oct 11 1998</p>
                            <h1 className=" font-passion text-6xl">NA RAH</h1>
                            <h2 className=" font-passion text-4xl">HERNANDEZ</h2>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-white mb-4 text-5xl tracking-tight font-extrabold"><span className="text-accentColor">Hi!</span> Welcome.</h1>
                        <p className="text-white mt-5">I'm a  <span className="underline underline-offset-4 decoration-accentColor">web developer</span> with a passion for <span className="underline underline-offset-4 decoration-accentColor">accessibility</span> and <span className="underline underline-offset-4 decoration-accentColor">user-focused design</span>. I build intuitive, inclusive React applications that ensure the web is usable and enjoyable for everyone.</p>
                        <p className="text-white mt-5">With 2 years of professional experience, I’ve crafted engaging, user-centered interfaces that put people first. Take a look around—check out my work and let’s explore how we can build something great together.</p>
                    </div>
                </div>
                <div className="mb-20">
                    <a
                        target="_blank"
                        href="https://github.com/narah10"
                        rel="noopener noreferrer"
                        className="inline-block text-white border md:animate-bounce border-accentLightColor font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 hover:text-accentColor hover:border-accentColor transition-colors duration-300 ease-in-out"
                    >
                        Github
                    </a>

                    <a
                        target="_blank"
                        href="https://linkedin.com/in/narahkwak"
                        rel="noopener noreferrer"
                        className="inline-block text-white border border-accentLightColor font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 hover:text-accentColor hover:border-accentColor transition-colors duration-300 ease-in-out"
                    >
                        LinkedIn
                    </a>

                    <a
                        target="_blank"
                        href="https://www.behance.net/narahkwak/projects"
                        rel="noopener noreferrer"
                        className="inline-block text-white border border-accentLightColor font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 hover:text-accentColor hover:border-accentColor transition-colors duration-300 ease-in-out"
                    >
                        Behance
                    </a>

                    <a
                        type="application/pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="../assets/Na_Rah_Hernandez_Resume_2025.pdf"
                        className="inline-block text-white border border-accentLightColor font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 hover:text-accentColor hover:border-accentColor transition-colors duration-150 ease-in-out"
                    >
                        Resume
                    </a>
                </div>
                <ExperienceSection />
            </div>

        
    )
  }
  
  export default Home;
  