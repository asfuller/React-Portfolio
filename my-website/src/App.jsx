import React from 'react'
import './App.css'
import Footer from './page-parts/footer/footer'
import Header from './page-parts/header/header'
import Home from './pages/home/Home'


  const App = () => {
    return (
      <>
        <div><Header /></div>
        <div><Home /></div>
        <div><Footer /></div>
      </>
    )
  }


export default App
