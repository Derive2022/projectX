import React, { Suspense } from 'react'
import styled from "styled-components"
import {Canvas} from "@react-three/fiber";
import Earth2 from '../components/earth2';


const CanvasContainer = styled.div`
padding:1rem;
width:120rem;
height:60rem;
background: black;
`

const Home = () => {
 
  return (

    <CanvasContainer>
    <Canvas>
   <Suspense fallback={null}>
<Earth2 />
   </Suspense>
    </Canvas>
</CanvasContainer>
 
  )
}

export default Home;