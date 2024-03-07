import React from 'react'
import Presentation from '../components/Presentation/Presentation'
import Projects from '../components/Projects/Projects'
import './syles/ProjectsPage.css'


const ProjectsPage = () => {
  return (
    <div className='container'>
      <Presentation />
      <Projects />
    </div>
  )
}

export default ProjectsPage
