import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer'
const canvas = () => {
  return (
    <Canvas camera={{fav:20, position:[0 , 1, 60]}} >
    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr"]} />
    <ScrollControls pages={3}>
    <MacContainer />
    </ScrollControls>
  </Canvas>
  )
}

export default canvas