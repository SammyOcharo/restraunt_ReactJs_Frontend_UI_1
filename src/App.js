import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import SpecialMenu from './Components/SpecialMenu/SpecialMenu'
import Chef from './Components/Chef/Chef'
import Intro from './Components/Intro/Intro'
import Laurels from './Components/Laurels/Laurels'
import Gallery from './Components/Gallery/Gallery'
import Find from './Components/FindUs/Find'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Find />
      <Footer />
    </div>
  );
}

export default App;
