{/* <Model
              ref={s2}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.005}
            /> */}
            {/* <Model
              ref={s3}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.005}
              position={[22, 2, 0]}
            /> */}

            {/* <Text
              ref={t1}
              color={"white"}
              fontSize={2}
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
              position={[-18, 13, 0]}
            >
              Alnitak
            </Text> */}
            {/* <Model
              ref={s4}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.002}
              position={[-30, 30, 0]}
            /> */}
            {/* <Model
              ref={s5}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.002}
              position={[-6, 44, 0]}
            /> */}
            {/* <Model
              ref={s6}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.002}
              position={[30, 31, 0]}
            /> */}
            {/* <Model
              ref={s7}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.002}
              position={[-30, -45, 0]}
            /> */}
            {/* <Model
              ref={s8}
              material={
                new THREE.MeshPhongMaterial({
                  color: new THREE.Color(0xffe927),
                  shininess: 10,
                })
              }
              scale={0.002}
              position={[31, -38, 0]}
            /> */}
            {/* <group ref={lines}>
              <Line
                points={[
                  [0, 0, 0],
                  [22, 2, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [0, 0, 0],
                  [-12, -2, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [-18, 0, 0],
                  [-30, 28, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [-6, 44, 0],
                  [-30, 30, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [-3, 44, 0],
                  [30, 32, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [30, 32, 0],
                  [21, 2, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [21, 2, 0],
                  [31, -38, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [31, -38, 0],
                  [-30, -45, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
              <Line
                points={[
                  [-30, -45, 0],
                  [-18, 0, 0],
                ]}
                color="white"
                lineWidth={0.5}
                dashed={true}
              />
            </group> */}

// function Bloom({ children }) {
    //   const { gl, camera, size } = useThree();
    //   const ref = useState();
    //   const composer = useRef();
    //   const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
    //     size
    //   ]);
    //   useEffect(
    //     () => void ref.current && composer.current.setSize(size.width, size.height),
    //     [size]
    //   );
    //   useFrame(() => ref.current && composer.current.render(), 1);
    //   return (
    //     <>
    //       <scene ref={ref}>{children}</scene>
    //       <EffectComposer ref={composer} args={[gl]}>
    //         <RenderPass attachArray="passes" scene={ref.current} camera={camera} />
    //         <UnrealBloomPass attachArray="passes" args={[aspect, 1.5, 1, 0]} />
    //       </EffectComposer>
    //     </>
    //   );
    // }


      // useFrame(() => {
    //   const r1 = scroll.range(1 / 10 , 1 / 10 )
    //   const r2 = scroll.range(1 / 10 , 1 / 4)
    //   const r3 = scroll.range(1 / 4, 1 / 2)
    //   const r4 = scroll.range(1 / 10 , 1 / 11)
    //   const r5 = scroll.range(1/2, 7/13)
    //   const r6 = scroll.visible(7/14, 1 / 1)
    //   const r7 = scroll.visible(99/100, 1 / 1)
    //   // ref.current.rotation.y = Math.PI - (Math.PI / 1)  + r1 * 12.2
    //   // ref.current.position.x = r2 * 50
  
    //   alnitak.current.scale.x = alnitak.current.scale.y = alnitak.current.scale.z = 1 + r1 * .5
    //   s2.current.scale.x = s2.current.scale.y = s2.current.scale.z =  r2 * 1
    //   s3.current.scale.x = s3.current.scale.y = s3.current.scale.z =  r3 * 1
    //   t1.current.scale.x = t1.current.scale.y = t1.current.scale.z = 1 * r4
    //   ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = 1 + r5 * -.3
    //   s4.current.scale.x = s4.current.scale.y = s4.current.scale.z = r6 * 1.5
    //   s5.current.scale.x = s5.current.scale.y = s5.current.scale.z = r6 * 1.5
    //   s6.current.scale.x = s6.current.scale.y = s6.current.scale.z = r6 * 1.5
    //   s7.current.scale.x = s7.current.scale.y = s7.current.scale.z = r6 * 1.5
    //   s8.current.scale.x = s8.current.scale.y = s8.current.scale.z = r6 * 1.5
    //   lines.current.scale.x =lines.current.scale.y = lines.current.scale.z = r7
  
    // })