import { useState } from 'react';
import './App.css';
import HeroSection from './Components/HeroSection';
import Input from './Components/Input';
import CircularGallery from './Components/CircularGallery';
import SVRangaRao from "./assets/CircularGallerySection/SV Ranga Rao.png"
import Savitri from "./assets/CircularGallerySection/Savitri.png"
import NTR from "./assets/CircularGallerySection/NTR.png"
import ANR from "./assets/CircularGallerySection/ANR.png"
import Krishna from "./assets/CircularGallerySection/Krishna.png"

function App() {
  return (
    <>
      <HeroSection />
      <Input />


      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
        items={[
          {image:SVRangaRao,text:"SV Ranga Rao"},
          {image:Savitri,text:"Savitri"},
          {image:NTR,text:"NT Rama Rao"},
          {image:ANR,text:"A Nageshwarao"},
          {image:Krishna,text:"G Krishna"}
        ]}
        bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
    </>
  )
}

export default App
