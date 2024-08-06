
import './App.css';
import Blog from './Component/Blog';
import Cards from './Component/Cards';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import HeroSection from './Component/HeroSection';
import Navbaar from './Component/Navbaar';
function App() {
  return (
    <div className="App">
  
     <Navbaar/>
     <HeroSection/>
     <Cards/>
     <Blog/>
     <Contact/>
     <Footer/>
     
    </div>
   
  );
}

export default App;
