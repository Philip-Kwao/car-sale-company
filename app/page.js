import Image from 'next/image'
import Slider from './components/Slider'
import CallToAction from './components/CallToAction'
import Cars from './components/Cars'
import OurService from './components/OurService'
import GetInTouch from './components/GetInTouch'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Slider />
      <CallToAction />
      <OurService />
      <GetInTouch />
    </main>
  )
}
