/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model3({xMov=0, yMov=0, xRot=0, ...props }) {
  const group = useRef()

 
  
  useFrame(() => {
    group.current.position.x += xMov 
    // group.current.position.x += Math.cos(Math.PI*group.current.position.x*xMov) 
    // group.current.position.x *= Math.cos((Math.PI*group.current.position.x))
    // console.log(group.current.position.x)
    // group.current.position.x +=xMov*Math.cos((Math.PI*xMov)) 
    group.current.rotation.x += xRot
  });
  
  const { nodes, materials } = useGLTF('/landingShip.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.91}>
        <group position={[44.49, -35.63, -6.06]} rotation={[Math.PI / 2, -1.44, 0]} scale={[0.54, 0.54, 0.48]}>
          <mesh geometry={nodes.Ch123ferCyl004_567_0.geometry} material={materials.material} />
        </group>
        <group position={[14.17, 37.43, -10.57]} rotation={[-Math.PI / 2, -1.44, 0]} scale={[-0.54, -0.54, -0.48]}>
          <mesh geometry={nodes.Ch12ferCyl006_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-22.31, -0.64, -4.31]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.15}>
          <mesh geometry={nodes.Ch345ferCyl011_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-22.31, -2.39, -6.7]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.15}>
          <mesh geometry={nodes.Ch34yl010_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-2.72, -0.03, 0.83]} rotation={[0, -1.48, -Math.PI / 2]} scale={[0.9, 0.15, 0.15]}>
          <mesh geometry={nodes['Cham678rCyl012_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
        </group>
        <group position={[44.49, -32.44, -10.57]} rotation={[Math.PI / 2, -1.44, 0]} scale={[0.54, 0.54, 0.48]}>
          <mesh geometry={nodes.Chamfe1233_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-22.31, 2.19, -6.7]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.Chamfe34_567_0.geometry} material={materials.material} />
        </group>
        <group position={[14.17, 40.84, -6.06]} rotation={[-Math.PI / 2, -1.44, 0]} scale={[-0.54, -0.54, -0.48]}>
          <mesh geometry={nodes.Chamfer12_567_0.geometry} material={materials.material} />
        </group>
        <group position={[13.59, 0.46, -2.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.62, 1.19, 0.54]}>
          <mesh geometry={nodes['ChamferBox001_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
        </group>
        <group position={[13.59, 0.46, -10.77]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-0.62, -1.19, -0.54]}>
          <mesh geometry={nodes.ChamferBox002_567_0.geometry} material={materials.material} />
        </group>
        <group position={[16.85, -4.24, -3.99]} rotation={[-Math.PI, 0, 0]} scale={[0.62, 1.17, 0.54]}>
          <mesh geometry={nodes['ChamferBox003_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
        </group>
        <group position={[16.85, 4.29, -3.99]} rotation={[0, 0, Math.PI]} scale={[-0.62, -1.17, -0.54]}>
          <mesh geometry={nodes['ChamferBox004_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
        </group>
        <group position={[-32.14, 0.57, -17.09]} rotation={[-Math.PI / 2, 0, 0.09]} scale={[-0.44, -0.85, -0.38]}>
          <mesh geometry={nodes.ChamferBox005_567_0.geometry} material={materials.material} />
        </group>
        <group position={[44.49, -32.44, -2.47]} rotation={[Math.PI / 2, -1.44, 0]} scale={[0.54, 0.54, 0.48]}>
          <mesh geometry={nodes.ChamferC123_567_0.geometry} material={materials.material} />
        </group>
        <group position={[14.17, 37.43, -2.47]} rotation={[-Math.PI / 2, -1.44, 0]} scale={[-0.54, -0.54, -0.48]}>
          <mesh geometry={nodes.ChamferCy12_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-22.31, 0.44, -4.31]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.ChamferCyl0034345_567_0.geometry} material={materials.material} />
        </group>
        <group position={[50.29, -9.18, 15.22]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.ChamferCyl013_567_0.geometry} material={materials.material} />
        </group>
        <group position={[50.29, 9.3, 15.22]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.ChamferCyl014_567_0.geometry} material={materials.material} />
        </group>
        <group position={[79.35, -0.06, -6.13]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={5.24}>
          <mesh geometry={nodes['ChamferCyl2134_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
          <mesh geometry={nodes.ChamferCyl2134_567_0.geometry} material={materials.material} />
          <mesh geometry={nodes.ChamferCyl2134_black_mat_for_body_0.geometry} material={materials.black_mat_for_body_0} />
        </group>
        <group position={[-47.97, 1.93, -6.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.Cylin3402_567_0.geometry} material={materials.material} />
        </group>
        <group position={[-47.97, -2.29, -6.26]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.15}>
          <mesh geometry={nodes.Cylinder001_567_0.geometry} material={materials.material} />
        </group>
        <group position={[30.25, 26.94, -10.7]} rotation={[0.17, 0, Math.PI]} scale={[-0.3, -0.3, -0.19]}>
          <mesh geometry={nodes.Spher32_567_0.geometry} material={materials.material} />
        </group>
        <group position={[41.57, 26.94, -2.37]} rotation={[-0.17, 0, 0]} scale={[0.3, 0.3, 0.19]}>
          <mesh geometry={nodes.Sphere001_567_0.geometry} material={materials.material} />
        </group>
        <group position={[30.25, 26.94, -2.37]} rotation={[-0.17, 0, 0]} scale={[0.3, 0.3, 0.19]}>
          <mesh geometry={nodes.Sphere002_567_0.geometry} material={materials.material} />
        </group>
        <group position={[41.57, 26.94, -10.7]} rotation={[0.17, 0, Math.PI]} scale={[-0.3, -0.3, -0.19]}>
          <mesh geometry={nodes.Sphere004234_567_0.geometry} material={materials.material} />
        </group>
        <group position={[30.25, -26.98, -10.7]} rotation={[2.97, 0, 0]} scale={[0.3, 0.3, 0.19]}>
          <mesh geometry={nodes.Sphere005456_567_0.geometry} material={materials.material} />
        </group>
        <group position={[41.57, -26.98, -10.7]} rotation={[2.97, 0, 0]} scale={[0.3, 0.3, 0.19]}>
          <mesh geometry={nodes.Sphere006765_567_0.geometry} material={materials.material} />
        </group>
        <group position={[41.57, -26.98, -2.37]} rotation={[-2.97, 0, Math.PI]} scale={[-0.3, -0.3, -0.19]}>
          <mesh geometry={nodes.Sphere007_567_0.geometry} material={materials.material} />
        </group>
        <group position={[30.25, -26.98, -2.37]} rotation={[-2.97, 0, Math.PI]} scale={[-0.3, -0.3, -0.19]}>
          <mesh geometry={nodes.Sphere008_567_0.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/landingShip.gltf')
