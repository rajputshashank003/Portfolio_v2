// @ts-nocheck
import { Environment, OrbitControls } from "@react-three/drei"
import { PlaneCar } from "../../../../public/RedCar"
import { Canvas } from "@react-three/fiber"

const RedCarModel = () => {
  return (
    <Canvas camera={{ position: [40.81179373106988,19.674589892349776,43.969398506466185], fov: 50 }}
        gl={{ antialias: true, alpha: true, pixelRatio: Math.min(window.devicePixelRatio, 2) }}
        style={{ background: 'transparent', width : "100%" }}
    >
        <ambientLight intensity={2} />
        <Environment preset="park" />
        <PlaneCar scale={0.16} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
          target={[0, 0, 0]}
          enableRotate={true}
        />
        <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
        <directionalLight position={[0, 150 , 10]} intensity={2} castShadow />
    </Canvas>
  )
}

export default RedCarModel