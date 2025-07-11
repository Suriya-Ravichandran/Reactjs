import Header from './template/Header'
import AboutDetail from './template/About'
import Skills from './template/Skills'
import Project from './template/Project'
import Footer from './template/footer'
import Hero from './template/Hero'

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutDetail/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home
