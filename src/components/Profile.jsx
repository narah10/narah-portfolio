import hero from '../assets/hero-img.svg';

export default function Profile() {
    return (
        <div className='m-auto place-self-center lg:col-start-3 lg:col-span-8'>
            <div className="flex w-full h-full border-2 border-gray-400 rounded-sm pt-5">
                <div className="col-span-3 my-auto pl-10 pr-10">
                    <div className='sm:grid sm:grid-flow-col gap-3'>
                        <div className='bg-gray-200 w-[50%]rounded-lg p-3 pr-5 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-200'>
                            <p className="font-passion text-gray-800">Oct 11 1998</p>
                            <h1 className="font-bold py-0 font-passion text-5xl lg:text-7xl text-gray-800">NA RAH</h1>
                            <h2 className="font-medium font-passion text-3xl lg:text-5xl text-gray-800">HERNANDEZ</h2>
                        </div>
                        <div className='px-3 py-2 content-center'>
                                <div className='mb-3'>
                                    <h3 className='font-extrabold text-sm'>Academics</h3>
                                    <p className='font-medium text-sm'>Brigham Young University-Idaho</p>
                                    <p className='font-light text-xs'>Bachelor of Software Engineering (GPA 3.9)</p>
                                    <p className='font-light text-xs'>Minor in Web Design</p>
                                </div>
                                <div className=''>
                                    <h3 className='font-extrabold text-sm'>Interests</h3>
                                    <div>
                                        <p className='font-light text-sm'>Books | Gaming | Cooking | Piano | Movies | Music | Anime | Travelling </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <p className="text-gray-800 mt-5"> Hi! I am a <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">web developer</span> passionate about <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">accessibility</span> and <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">user-centric</span> functionality. I create intuitive, inclusive experiences that make the web work for everyone.</p>
                    <div className='mb-3'>
                        <ul className='flex flex-wrap gap-1.5 sm:gap-5 mt-5 lg:flex-nowrap'>
                            <li className='md:animate-bounce rounded font-bold text-white'>
                                <a target='_blank' href="https://github.com/narah10" className="inline-flex items-center px-2 py-1.5 text-xs lg:px-5 lg:py-2.5 md:text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Github
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="https://linkedin.com/in/narahkwak" className="inline-flex items-center px-2 py-1.5 text-xs lg:px-5 lg:py-2.5 md:text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                LinkedIn
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="https://www.behance.net/narahkwak/projects" className="inline-flex items-center px-2 py-1.5 text-xs lg:px-5 lg:py-2.5 md:text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Behance
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="#" className="inline-flex items-center px-2 py-1.5 text-xs lg:px-5 lg:py-2.5 md:text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Resume
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 col-span-2 transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
                    <img id="hero-image" className="hidden sm:block w-full" src={hero} alt={"Image of Narah's avatar character wearing a blue hoodie"} />
                </div>
            </div>
        </div>
    )
}