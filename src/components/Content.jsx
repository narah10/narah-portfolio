import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import ExperienceSection from './ExperienceSection'

export default function Content() {
    const [activeTab, setActiveTab] = React.useState('about')
    const tabs = ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CONTACT']
    return (
      <div className=''>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                {tabs.map((tab) => (
                    <li key={tab} className="flex-auto">
                        <button
                            className={`${
                                activeTab === tab.toLowerCase()
                                    ? ' dark:text-gray-900 text-blue-800 dark:border-gray-700'
                                    : 'border-transparent dark:text-gray-500 hover:text-blue-600 dark:hover:text-gray-400'
                            } w-full py-4 px-1 text-gray-900 dark:text-gray-500 dark:hover:text-gray-400 hover:text-blue-600`}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            role="tab"
                            aria-selected={activeTab === tab.toLowerCase()}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            {activeTab === 'about' && <About />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'contact' && <Contact />}
        </div>
      </div>
        
    )
}