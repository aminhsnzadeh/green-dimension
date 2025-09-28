
export default function MainLight() {

    return (
        <>
            <directionalLight
                position={[5, 10, 5]}
                intensity={5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />
            <ambientLight intensity={0.6} />
        </>
    )
}