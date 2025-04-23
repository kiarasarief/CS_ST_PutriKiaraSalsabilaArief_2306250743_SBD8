import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Subscription from './components/Subscription'
import InternetPlans from './components/InternetPlans'
import Entertainment from './components/Entertainment' 
import LocationCheck from './components/LocationCheck'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Subscription />
      <InternetPlans />
      <Entertainment /> 
      <LocationCheck 
        id="location-check" 
        city={city} 
        setCity={setCity}
        address={address}
        setAddress={setAddress}
      />
      <Footer />
    </div>
  )
}

export default App