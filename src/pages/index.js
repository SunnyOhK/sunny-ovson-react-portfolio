import { PageContext } from '../providers/PageProvider'
import { useContext } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'


const PageContainer = () => {
  const { page } = useContext(PageContext)
  switch (page) {
    case 'About':
      return <About />

    case 'Projects':
      return <Projects />

    case 'Contact':
      return <Contact />

    case 'Resume':
      return <Resume />
    
    default:
      return <Home />
  }
}

export default PageContainer