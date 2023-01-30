// function TechnologiesCanvas() {
//   const [hoveredSatar1, setHoverSatar1] = useState(false);
//   const [hoveredSatar2, setHoverSatar2] = useState(false);
//   const [hoveredSatar3, setHoverSatar3] = useState(false);
//   // const []
//   if (window.innerWidth < 480) {
//     return (
//       <group>
//         <group position={[-10, 40, 0]}>
//           <Html position={[1, 7, 0]} style={{ width: "235px" }}>
//             <h2 style={{ fontSize: "17px" }}>Sitios inmersivos en 3D</h2>
//             <p style={{ fontSize: "13px" }}>
//               Haz que tus clientes interactúen con tu marca.
//             </p>
//             <p style={{ fontSize: "13px" }}>
//               Brinda profundidad y data en un solo lugar. Tus clientes vivirán
//               una experiencia inmersiva cada que visiten tu sitio. Sé parte del
//               metaverso.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <group position={[-10, 15, 0]}>
//           <Html
//             position={[1, 7, 0]}
//             zIndexRange={[-0, -0]}
//             style={{ width: "235px" }}
//           >
//             <h2 style={{ fontSize: "17px" }}>Visualización de datos</h2>
//             <p style={{ fontSize: "13px" }}>Transmitimos ideas con imágenes.</p>
//             <p style={{ fontSize: "13px" }}>
//               Tus usuarios te conocerán de una manera más fácil y productivas.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <group position={[-10, -5, 0]}>
//           <Html
//             position={[1, 7, 0]}
//             zIndexRange={[-0, -0]}
//             style={{ width: "235px" }}
//           >
//             <h2 style={{ fontSize: "17px" }}>Formularios dinámicos</h2>
//             <p style={{ fontSize: "13px" }}>
//               Obtén data de una manera sencilla y divertida.
//             </p>
//             <p style={{ fontSize: "13px" }}>
//               Con nuestros formularios dinámicos puede obtener la
//               retroalimentación que esperas, mientras tus usuarios exploran de
//               una manera creativa e ingeniosa cómo depositar su información.
//             </p>
//           </Html>
//           <Model
//             position={[-3, 0, 0]}
//             scale={0.0025}
//             material={
//               new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//             }
//           />
//         </group>
//         <hemisphereLight
//           skycolor={new THREE.Color(0xe6ce4a)}
//           groundColor={new THREE.Color(0xe6ce4a)}
//           intensity={
//             hoveredSatar1 || hoveredSatar2 || hoveredSatar3 ? 0.0 : 0.65
//           }
//           position={[0, 100, 10]}
//         />
//       </group>
//     );
//   }
//   return (
//     <group scale={0.9}>
//       <Model
//         onClick={() => setHoverSatar1(true)}
//         onPointerOver={() => setHoverSatar1(true)}
//         onPointerOut={() => setHoverSatar1(false)}
//         material={
//           hoveredSatar2 || hoveredSatar3
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//         }
//         scale={hoveredSatar1 ? 0.025 : 0.02}
//         position={[-50, 0, 0]}
//       />
//       <Html position={[-80, 20, 0]}>
//         <h2>Sitios inmersivos en 3D</h2>
//       </Html>
//       {hoveredSatar1 && (
//         <group>
//           <Html position={[-45, 0, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Haz que tus clientes interactúen con tu marca.</p>
//               <p>
//                 Brinda profundidad y data en un solo lugar. Tus clientes vivirán
//                 una experiencia inmersiva cada que visiten tu sitio. Sé parte
//                 del metaverso.
//               </p>
//             </div>
//           </Html>

//           <pointLight color="#e6cc51" intensity={1} position={[-45, 0, 10]} />
//           <pointLight color="#e6cc51" intensity={1} position={[45, 0, 10]} />
//         </group>
//       )}
//       <Line
//         points={[
//           [-50, 0, 0],
//           [0, 5, 0],
//         ]}
//         color="white"
//         lineWidth={0.5}
//         dashed={true}
//       />
//       <Model
//         onPointerOver={() => setHoverSatar2(true)}
//         onPointerOut={() => setHoverSatar2(false)}
//         material={
//           hoveredSatar1 || hoveredSatar3
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xffffff),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xffffff),
//               })
//         }
//         scale={hoveredSatar2 ? 0.02 : 0.015}
//         position={[0, 5, 0]}
//       />
//       <Html position={[-30, 25, 0]}>
//         <h2>Visualización de datos</h2>
//       </Html>
//       {hoveredSatar2 && (
//         <group>
//           <Html position={[5, 5, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Transmitimos ideas con imágenes.</p>
//               <p>
//                 Tus usuarios te conocerán de una manera más fácil y productivas.
//               </p>
//             </div>
//           </Html>
//           <pointLight intensity={1} position={[0, 5, 10]} />
//         </group>
//       )}
//       <Line
//         points={[
//           [0, 5, 0],
//           [50, 10, 0],
//         ]}
//         color="white"
//         lineWidth={0.5}
//         dashed={true}
//       />
//       <Model
//         onPointerOver={() => setHoverSatar3(true)}
//         onPointerOut={() => setHoverSatar3(false)}
//         material={
//           hoveredSatar2 || hoveredSatar1
//             ? new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//                 metalness: 1,
//               })
//             : new THREE.MeshStandardMaterial({
//                 color: new THREE.Color(0xe6cc51),
//               })
//         }
//         scale={hoveredSatar3 ? 0.02 : 0.015}
//         position={[50, 10, 0]}
//       />
//       <Html position={[20, 30, 0]}>
//         <h2>Formularios dinámicos</h2>
//       </Html>
//       {hoveredSatar3 && (
//         <group>
//           <Html position={[45, 0, 0]}>
//             <div
//               style={{
//                 width: "300px",
//                 backgroundColor: "rgba(0, 0, 0, 0.8)",
//                 padding: "30px",
//                 borderRadius: "30px 0 0 0",
//               }}
//             >
//               <p>Obtén data de una manera sencilla y divertida.</p>
//               <p>
//                 Con nuestros formularios dinámicos puede obtener la
//                 retroalimentación que esperas, mientras tus usuarios exploran de
//                 una manera creativa e ingeniosa cómo depositar su información.
//               </p>
//             </div>
//           </Html>

//           <pointLight color="#e6cc51" intensity={1} position={[-45, 0, 10]} />
//           <pointLight color="#e6cc51" intensity={1} position={[45, 0, 10]} />
//         </group>
//       )}
//       <hemisphereLight
//         skycolor={new THREE.Color(0xe6ce4a)}
//         groundColor={new THREE.Color(0xe6ce4a)}
//         intensity={hoveredSatar1 || hoveredSatar2 || hoveredSatar3 ? 0.0 : 0.65}
//         position={[0, 100, 10]}
//       />
//     </group>
//   );
// }
