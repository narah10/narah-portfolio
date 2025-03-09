import React from 'react'
import { Suspense, lazy } from "react"
import ContentContainer from './components/ContentContainer'

const Profile = lazy(() => import('./components/Profile'))

const Landing = () => {
    const [dark, setDark] = React.useState(false)

    const darkModeHandler = () => {
        setDark(!dark)
        document.body.classList.toggle("dark")
    }
    const handleClick = () => {
        darkModeHandler()
    }
  return (
    <div className="grid py-8 gap-8 lg:py-16 lg:grid-cols-12 mx-auto px-4">
        <button className="absolute" onClick={handleClick}>Click Me</button>
        <Suspense fallback={<div>Loading...</div>}>
            <Profile />
        </Suspense>

      <ContentContainer />
    </div>
  )
}

export default Landing