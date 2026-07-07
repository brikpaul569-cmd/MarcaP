import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Timeline } from '@/components/sections/Timeline'
import { SoftwareProjects } from '@/components/sections/SoftwareProjects'
import { MusicProjects } from '@/components/sections/MusicProjects'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <SoftwareProjects />
      <MusicProjects />
      <Contact />
    </main>
  )
}
