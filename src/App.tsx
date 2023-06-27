import'./global.module.scss'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import DevelopmentTool from './components/developmentTool/DevelopmentTool'
import Cards from './components/cards/Cards';
import Electromobility from './components/electromobility/Electromobility'
import Participation from './components/participation/Participation'
import Selection from './components/selection/Selection'
import Expectations from './components/expectations/Expectations'
import Cooperation from './components/cooperation/Cooperation'
import PartButton from './components/partButton/PartButton'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <DevelopmentTool />
      <Cards />
      <Electromobility />
      <Participation />
      <Selection />
      <Expectations />
      <Cooperation />
      <PartButton />
      <Footer />
    </>
  )
}

export default App
