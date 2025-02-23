import hero from '../assets/hero-img.svg';
import { GoArrowUpRight } from "react-icons/go";

export default function Profile() {
    return (
        <div className='m-auto place-self-center lg:col-start-3 lg:col-span-8'>
            <div className="grid grid-cols-5 border-2 border-gray-950  rounded-sm">
                <div className="col-span-3 my-auto pl-10">
                    <p className="font-passion text-gray-800">Oct 11 1998</p>
                    <h1 className="font-bold py-0 font-passion text-7xl text-gray-800">NA RAH</h1>
                    <h2 className="font-medium font-passion text-5xl text-gray-800">HERNANDEZ</h2>
                    <p className="text-gray-800 mt-5"> Hi! I am a <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">web developer</span> passionate about <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">accessibility</span> and <span className="underline underline-offset-4 decoration-blue-400 dark:decoration-blue-600">user-centric</span> functionality. I create intuitive, inclusive experiences that make the web work for everyone.</p>
                    <div>
                        <ul className='grid grid-flow-col mt-5'>
                            <li className=''>
                                <a target='_blank' href="https://github.com/narah10" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Github
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="https://linkedin.com/in/narahkwak" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                LinkedIn
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="https://www.behance.net/narahkwak/projects" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Behance
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                            <li className=''>
                                <a target='_blank' href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-sm hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Resume
                                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 transition-all duration-700 rounded-lg cursor-pointer filter grayscale hover:grayscale-0">
                <img className="h-100 w-100" src={hero} alt={"hero"} />
                </div>
            </div>
        </div>
    )
}