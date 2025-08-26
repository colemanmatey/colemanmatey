import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Projects from '../components/home/Projects'
import Contact from '../components/home/Contact'

function Home() {

  return (
    <div className='bg-gray-50'>
      <Header />
      <main className='pt-16'> {/* Add padding-top to account for fixed header */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
