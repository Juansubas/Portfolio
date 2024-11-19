import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App
