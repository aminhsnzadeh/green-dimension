import {useGLTF} from "@react-three/drei";
import {useRef} from "react";

export default function SolarPanel() {

    const group = useRef(null);
    const gltf = useGLTF("/models/solar-panel.gltf");


    return (
        <primitive castShadow receiveShadow position={[0, 0, 0]} object={gltf.scene} ref={group} />
    )
}

