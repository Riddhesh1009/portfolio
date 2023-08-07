import HomeBanner from '@/components/HomeBanner'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Socials from '@/components/Socials'

export default function Home() {
  return (
    <div className='w-full'>
      <NavBar/>
      <HomeBanner/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Socials/>
    </div>
  )
}
