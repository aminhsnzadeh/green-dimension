import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import useMainSceneDebugger from "../debugs/scene/main.tsx";
import WindTurbine from "../objects/wind-turbine.tsx";
import MainLight from "../light/main-light.tsx";

export default function MainScene() {

    const { background } = useMainSceneDebugger()

    return (
        <Canvas shadows dpr={[1, 2]} style={{width:'100%', height:'100vh', backgroundColor: background}} gl={{ antialias: false, powerPreference: "high-performance" }} >
            <WindTurbine />
            <OrbitControls  />
            <MainLight/>
        </Canvas>
    )
}