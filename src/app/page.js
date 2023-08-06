import HomeBanner from '@/components/HomeBanner'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <NavBar/>
      <HomeBanner/>
      <About/>
      <Projects/>
      <Skills/>
    </>
  )
}
