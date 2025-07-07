import { useState } from 'react'
import herobg from './assets/herobg.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './template/Header'
import Hero from './template/Hero'
import About from './template/About'
import Skills from './template/Skills'
import Project from './template/Project'
import Footer from './template/footer'

function App() {
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

export default App
