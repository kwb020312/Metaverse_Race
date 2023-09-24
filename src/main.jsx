import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./main.css";
import { Physics } from "@react-three/cannon";
import Scene from "./Scene";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <Scene />
      </Physics>
    </Canvas>
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      이동: w,a,s,d
      <br />
      회전: 방향키
      <br />
      다시시작: r
      <br />
      시점변환: k
    </div>
  </>
);
