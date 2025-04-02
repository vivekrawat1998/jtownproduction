import React from 'react'
import Herosection from '../Hero/Herosection'
import TabsSection from '../Practo'
import ScrollingTextEffect from '../Hero/Scrollintext'
import Carousal from '../Carousal/Carousal'
import Secondsection from '../Secondsection/Secondsection'
import Thirdsection from '../Thirdsection/Thirdsection'
import Fourthsection from '../fourthsection/Fourthsection'
import FifthSection from '../fifthsection/Fifthsection'

const Hompage = () => {
  return (
    <div>
        <Herosection/>
        <Carousal />
        <Secondsection />
        <Thirdsection />
        <Fourthsection />
        <FifthSection />
        {/* <ScrollingTextEffect />
        <TabsSection /> */}
    </div>
  )
}

export default Hompage