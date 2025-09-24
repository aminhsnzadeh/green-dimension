import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";

export default function WindTurbine() {

    const group = useRef(null);
    const gltf = useGLTF("/models/wind-turbine.gltf");

    console.log(gltf, "gltf")

    const { actions } = useAnimations(gltf.animations, group)

    useEffect(() => {
        if (actions && Object.keys(actions).length > 0) {
            const firstAnim = actions[Object.keys(actions)[0]]
            firstAnim?.play()
        }
        gltf.scene.traverse((child) => {
            console.log(child)
            if (child.type === "Mesh") {
                child.castShadow = true
                child.receiveShadow = true
            }
        });
    }, [actions])


    return (
        <primitive castShadow receiveShadow position={[0, -3, 0]} object={gltf.scene} ref={group} />
    )
}

