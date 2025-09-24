import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import useMainSceneDebugger from "../debugs/scene/main.tsx";
import Cube from "../objects/test-cube.tsx";

export default function MainScene() {

    const { background } = useMainSceneDebugger()

    return (
        <Canvas style={{width:'100%', height:'100vh', backgroundColor: background}} gl={{ antialias: false, powerPreference: "high-performance" }} >
            <Cube />
            <OrbitControls  />
        </Canvas>
    )
}