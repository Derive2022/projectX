import React, { useRef } from "react";
import {useFrame, useLoader} from "@react-three/fiber"
import {OrbitControls, Stars} from "@react-three/drei"
import EarthDayMap from "../../images/earth_daymap.jpg"
import EarthCloudsMap from "../../images/earth_clouds.jpg"
import EarthNormalMap from "../../images/earth_normal-map.jpg"
import EarthSpecularMap from "../../images/8k_earth_specular_map.jpg";
// import EarthNightMap from "../../images/earth_nightmap.jpg";
import { TextureLoader } from "three";
import * as THREE from "three"

export default function Earth2(props){

    const [colorMap , normalMap , specularMap , cloudsmap,] = useLoader(TextureLoader ,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloudsMap,]);
   
    const earth2Ref = useRef();
    const cloudsRef = useRef();

    useFrame(({clock}) =>{
        const elapsedTime = clock.getElapsedTime();
        earth2Ref.current.rotation.y = elapsedTime / 14;
        cloudsRef.current.rotation.y = elapsedTime / 14 ;
    })


return (
<>
<ambientLight intensity={0}/>
<pointLight color="#f6f3ea" position={[2,0,8]} intensity={1.2}/>
<Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true}/>
    <mesh ref={cloudsRef} position={[0,0,3]}>
        <sphereGeometry args={[1.004,32,32]}/>
        <meshPhongMaterial 
        map={cloudsmap} 
        opacity={0.4} 
        depthWrite={true} 
        transparent={true} 
        side={THREE.DoubleSide}/>
       
    </mesh>
   
  
    <mesh ref={earth2Ref} position={[0,0,3]}>
        <sphereGeometry args={[1,32,32]}/>
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
        <OrbitControls 
         enableZoom={true}
         enablePan={true} 
         enableRotate={true} 
         zoomSpeed={0.6}
         panSpeed={0.5} 
         rotateSpeed={0.4}/>
         target={}
    </mesh>
    </>
    )
   
};

// position={[0,0,3]}