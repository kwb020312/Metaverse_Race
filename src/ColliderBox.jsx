import { useBox } from "@react-three/cannon";

const debug = false;

// 박스 형태의 경계 생성
export function ColliderBox({ position, scale }) {
  // debug 가 false 인 경우, 물리 엔진에는 적용 되나 return 부의 렌더링 박스는 표시되지 않음
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    )
  );
}
