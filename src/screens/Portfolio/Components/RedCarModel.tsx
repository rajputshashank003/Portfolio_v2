// @ts-nocheck
import { Environment, OrbitControls } from "@react-three/drei"
import { PlaneCar } from "../../../../public/RedCar"
import { Canvas } from "@react-three/fiber"

const RedCarModel = () => {
    return (
        <Canvas
            camera={{
                position: [30, 95, 45],
                fov: 50
            }}
            gl={{ antialias: true, alpha: true, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
            style={{ background: 'transparent', width: "100%" }}
        >
            <ambientLight intensity={2} />
            <Environment preset="park" />
            <PlaneCar scale={0.16} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}

                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}

                target={[0, 12, 0]} // slightly above ground
                rotateSpeed={0.6}
                enableDamping
                dampingFactor={0.05}
            />
            <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
            <directionalLight position={[0, 150, 10]} intensity={2} castShadow />
        </Canvas>
    )
}

export default RedCarModel