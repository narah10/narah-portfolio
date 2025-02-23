import React from 'react'
import windowActions from '../assets/window-actions.png'
import Content from './Content'
export default function ContentContainer() {
    return(
        <div className="m-auto place-self-center lg:col-start-3 lg:col-span-8">
            <div className="border-2 border-gray-950 rounded-sm">
                <div className='border-b-2 border-gray-950 py-2 px-3'>
                    <img src={windowActions} alt={windowActions} className="window-action ms-auto" />
                </div>
                <div>
                    <Content />
                </div>
            </div>
            
        </div>
    )
}