import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Success from './success/Success'
import Services from './services/Services'
import Work from './work/Work'
import Ajenc from './components/agenc/Ajenc'
import ClientReviews from './components/client reviews/ClientReviews'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Success/>
      <Services/>
      <Work/>
      <Ajenc/>
      <ClientReviews/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App