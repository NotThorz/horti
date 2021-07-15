import React from 'react'
import Body from '../Components/Body/Body';
import Header from '../Components/Header/Header'
import Products from '../Components/Products/Products'
import About from '../Components/About/About'
import ContactForm from '../Components/ContactForm/ContactForm';
const Home = () => {
    return (
            <div className="App" id="navbar">
      {/* Nav bar */}
      <Header />

      {/* Main Picture */}
      <div id="main">
      <Body/>
      </div>
    {/* About */}
      <div id="About">
        <About/>
      </div>
      {/* products Set */}
      <div className="app__products" id="Products">
        <h1>
        Quelques Produits
        </h1>
      <Products />
      </div>

      
      {/* Contact */}
      <div id="ContactForm">
        <ContactForm/>
        </div>

    </div>
    )
}

export default Home
