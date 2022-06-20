import React from "react";

export default function Torus() {
  const [opacity, setOpacity] = React.useState(0.5);
  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation={[-5, 10, 3]}
        onClick={() => {
          setOpacity(0.7);
        }}
        onPointerOver={() => {
          setOpacity(0.7);
        }}
        onPointerOut={() => {
          setOpacity(0.5);
        }}
      >
        <torusBufferGeometry
          attach="geometry"
          args={[8, 2.6, 20, 80]}
          name="torus"
        />
        <meshNormalMaterial opacity={opacity} transparent />
      </mesh>
    </>
  );
}
