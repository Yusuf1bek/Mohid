import './App.css'
import "@fontsource/poppins"; 
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <Products/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
