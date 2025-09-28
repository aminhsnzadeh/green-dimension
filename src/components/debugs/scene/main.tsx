import {useControls} from "leva";

export default function useMainSceneDebugger() {

    const controls = useControls("Main Scene Controls", {
        background: {
            value: "#FFFFFF"
        }
    })

    return controls
}