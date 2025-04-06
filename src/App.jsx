import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import Section from './Section'
import Cards from './Cards'
import Footer from './Footer'
import Accordion from "./Accordion"
import Products from './Products'
import {Provider } from 'react-redux'
import store from "./store"
import Chimpnavbar from './Chimpnavbar'
import Herosection from './Herosection'
import Maharajaa from './Pages'
function App() {
 
  return (
    <div >
      <Provider store={store}>

          <Chimpnavbar/>
          <Herosection/>
          <Cards/>
          <Footer/>
          

      </Provider>
        
      
    </div>
    
  )
}

export default App
