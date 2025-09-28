import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import useMainSceneDebugger from "../debugs/scene/main.tsx";
import MainLight from "../light/main-light.tsx";
import SolarPanel from "../objects/solar-panel.tsx";

export default function MainScene() {

    const { background } = useMainSceneDebugger()

    return (
        <Canvas shadows dpr={[1, 2]} style={{width:'100%', height:'100vh', backgroundColor: background}} gl={{ antialias: false, powerPreference: "high-performance" }} >
            <OrbitControls  />
            <MainLight/>
            <SolarPanel />
        </Canvas>
    )
}