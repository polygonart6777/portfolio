import React from 'react';

interface TorusProps {
  isMobile: boolean;
}

export default function Torus({ isMobile }: TorusProps) {
  const [radius, setRadius] = React.useState(1);

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        rotation={[-5, 10, 3]}
        onClick={() => {
          !isMobile && setRadius(1.025);
        }}
        onPointerOver={() => {
          !isMobile && setRadius(1.025);
        }}
        onPointerOut={() => {
          setRadius(1);
        }}
      >
        <torusBufferGeometry attach="geometry" args={[8, radius * 2.6, 20, 80]} name="torus" />
        <meshNormalMaterial opacity={0.65} transparent />
      </mesh>
    </>
  );
}
