import React, { Suspense } from 'react'
import styled from "styled-components"
import {Canvas} from "@react-three/fiber";
import Earth2 from '../components/earth2';
import "../index.css"


const CanvasContainer = styled.div`
border: 2px solid palevioletred;
width:119rem;
height:55rem;
background: black;
@media (max-width: 1068px) {
  width:30rem;
  height:38rem;
}
`

const Home = () => {
 
  return (
<div className='homePage'>
    <CanvasContainer>
    <Canvas>
   <Suspense fallback={null}>
<Earth2 />
   </Suspense>
    </Canvas>
</CanvasContainer>
</div>
 
  )
}

export default Home;