import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Track from "./Track";
import Ground from "./Ground";
import Car from "./Car";

const Scene = () => {
  // 3인칭 시점 관리
  const [thirdPerson, setThirdPerson] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
  return (
    <Suspense fallback={null}>
      {/* 배경 */}
      <Environment files={"/textures/envmap.hdr"} background="both" />

      {/* 카메라 및 배경 컨트롤러 */}
      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {!thirdPerson && <OrbitControls target={[-2.64, -0.71, 0.03]} />}

      {/* 트랙 */}
      <Track />
      {/* 지면 */}
      <Ground />
      {/* 차량 */}
      <Car thirdPerson={thirdPerson} />
    </Suspense>
  );
};

export default Scene;
