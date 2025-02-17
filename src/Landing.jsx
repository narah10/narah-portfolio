import React from 'react'
import ContentContainer from './components/ContentContainer'
import Profile from './components/Profile'

const Landing = () => {
  return (
    <div className="grid px-4 py-8 mx-auto gap-8 lg:py-16 lg:grid-cols-12">
      <Profile />
      <ContentContainer />
    </div>
  )
}

export default Landing