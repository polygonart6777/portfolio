import React from "react";

export default function Torus() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-5, 10, 3]}>
      <torusBufferGeometry attach="geometry" args={[8, 2.6, 20, 80]} />
      <meshNormalMaterial opacity=".5" transparent />
    </mesh>
  );
}
