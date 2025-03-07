import React from 'react'
import ContentContainer from './components/ContentContainer'
import Profile from './components/Profile'

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
    <div className="grid px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12">
        <button onClick={handleClick}>Click Me</button>
      <Profile />
      <ContentContainer />
    </div>
  )
}

export default Landing