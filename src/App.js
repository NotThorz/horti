import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import ContactForm from './Components/ContactForm/ContactForm';
function App() {
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
        Some Of Our Products
        </h1>
      <Products />
      </div>

      
      {/* Contact */}
      <div id="ContactForm">
        <ContactForm/>
        </div>

    </div>
  );
}

export default App;
