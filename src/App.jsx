import './App.css';
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
  <Header />
  <Body 
   heading = "C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time."
   list1 = "C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy."
   list2 = "C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. "
   image1 = "/1.png"
   image2 = "/2.png"


  />
  <Carousel 
    image = "/3.png"
  />

  <Footer />
    </>
  )
}

export default App;
