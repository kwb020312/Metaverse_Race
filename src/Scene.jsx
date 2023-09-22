import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Track from "./Track";
import Ground from "./Ground";
import Car from "./Car";

const Scene = () => {
  return (
    <Suspense fallback={null}>
      {/* 배경 */}
      <Environment files={"/textures/envmap.hdr"} background="both" />

      {/* 카메라 및 배경 컨트롤러 */}
      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      {/* 트랙 */}
      <Track />
      {/* 지면 */}
      <Ground />
      {/* 차량 */}
      <Car />
    </Suspense>
  );
};

export default Scene;
