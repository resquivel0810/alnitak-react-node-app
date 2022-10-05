import React from "react";
import { Canvas  } from "@react-three/fiber";

const ThreeScene = ({children, style, onMouseMove, onMouseOver, rotation, className}) => {
    return <Canvas className={className} onMouseOver={onMouseOver} onMouseMove={onMouseMove} style={style} camera={{ position: [0, 0, 450], fov: 13 }}>
        {children}
        
    </Canvas>
}

export default ThreeScene