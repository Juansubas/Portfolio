import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {

  return (
    <main className='flex flex-col items-center justify-between w-full h-screen'>
      <Header/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App
