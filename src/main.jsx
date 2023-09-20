import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Canvas>
    <App />
  </Canvas>
);
