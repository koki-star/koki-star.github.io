import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Resume } from './components/Resume'
import { Skills } from './components/Skills'

export function App() {
  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
