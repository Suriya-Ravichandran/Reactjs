import Header from './template/Header'
import About from './template/About'
import Skills from './template/Skills'
import Project from './template/Project'
import Footer from './template/footer'
import Hero from './template/Hero'

function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </>
  )
}

export default Home
