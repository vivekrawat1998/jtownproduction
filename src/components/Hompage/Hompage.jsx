import React from 'react'
import Herosection from '../Hero/Herosection'
import Carousal from '../Carousal/Carousal'
import Secondsection from '../Secondsection/Secondsection'
import Thirdsection from '../Thirdsection/Thirdsection'
import Fourthsection from '../fourthsection/Fourthsection'
import FifthSection from '../fifthsection/Fifthsection'

const Hompage = () => {
  return (
    <div>
      <div id="home"><Herosection /></div>
      <div ><Carousal /></div>
      <div id="pricing"><Secondsection /></div>
      <div id="services"><Thirdsection /></div>
      <div ><Fourthsection /></div>
      <div id='projects'><FifthSection /></div>
    </div>
  )
}

export default Hompage
