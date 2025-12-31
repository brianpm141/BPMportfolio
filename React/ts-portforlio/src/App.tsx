import './App.css'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import ProjectTemplate from './projects/ProjectTemplate'
import Profile from './Profile/Profile'
import Contact from './contact/Contact'

function App() {

  return (
    <main className='
    bg-primary-background
    h-screen
    w-full
    flex-1
    text-text-main
    '>
      <Header/>
      <Intro/>
      <ProjectTemplate/>
      <Profile/>
      <Contact/>
    </main>
  )
}

export default App
