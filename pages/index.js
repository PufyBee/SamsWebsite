// pages/index.js
// ⬇️ put this at the very top to silence the casing check
// @ts-nocheck

import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* …other sections */}
    </>
  )
}