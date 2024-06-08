import './App.css'
import Head from './Components/Head'
import Navbar from './Components/Navbar'
import DropDownNavbar from './Components/DropDownNavbar'
import Footer from './Components/Footer'
import CardSlider1 from './Components/CardSlider1'
import CardSlider2 from './Components/CardSlider2'
import ImageSlider from './Components/ImageSlider'
// import BigCardSlider from './Components/BigCardSlider'



function App() {

  return (
    <>
      <Head/>
      <Navbar/>
      <DropDownNavbar/>
      <ImageSlider/>
      <CardSlider1/>
      <CardSlider2/>
      {/* <BigCardSlider/> */}
      <Footer/>
    </>
  )
}

export default App
