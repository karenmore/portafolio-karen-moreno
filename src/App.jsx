import React, { useContext } from 'react';
import './components/HeaderShared/syles/App.css';
import { ThemeProvider, ThemeContext } from './components/HeaderShared/ThemeContext';
import HeaderShared from './components/HeaderShared/HeaderShared'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import EducationPage from './pages/EducationPage'
import ContactoPage from './pages/ContactoPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  


  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
      {({ darkMode }) => (
          <div className={`dark-mode ${darkMode ? 'light-mode' : 'dark-mode'} mobile-background`}>
            <HeaderShared/>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/skills' element={<SkillsPage/>} />
              <Route path='/projects' element={<ProjectsPage/>} />
              <Route path='/education' element={<EducationPage/>} />
              <Route path='/contacto' element={<ContactoPage/>} />
            </Routes>
            <ToastContainer />
          </div>
        )}
      </ThemeContext.Consumer>
      </ThemeProvider>
    )
}

export default App
