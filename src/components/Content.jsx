import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

export default function Content() {
    const [activeTab, setActiveTab] = React.useState('about')
    const tabs = ['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT']
    return (
      <div className=''>
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                {tabs.map((tab) => (
                    <li key={tab} className="flex-auto">
                        <button
                            className={`${
                                activeTab === tab.toLowerCase()
                                    ? 'border-gray-300 dark:text-gray-900 dark:border-gray-700'
                                    : 'border-transparent dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-400'
                            } w-full py-4 px-1 text-gray-900 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-400`}
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
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'contact' && <Contact />}
        </div>
      </div>
        
    )
}