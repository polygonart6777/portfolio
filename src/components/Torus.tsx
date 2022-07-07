import React from 'react';

interface TorusProps {
  isMobile: boolean;
}

export default function Torus({ isMobile }: TorusProps) {
  const [opacity, setOpacity] = React.useState(0.5);

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation={[-5, 10, 3]}
        onClick={() => {
          !isMobile && setOpacity(0.7);
        }}
        onPointerOver={() => {
          !isMobile && setOpacity(0.7);
        }}
        onPointerOut={() => {
          setOpacity(0.5);
        }}
      >
        <torusBufferGeometry attach="geometry" args={[8, 2.6, 20, 80]} name="torus" />
        <meshNormalMaterial opacity={opacity} transparent />
      </mesh>
    </>
  );
}
