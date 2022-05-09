import { useRef } from 'react';
import { useFrame, MeshProps } from '@react-three/fiber';
import * as three from 'three';

type IPlanetProps = {
  isSelected: boolean;
  onClick?: () => void;
} & MeshProps;

const Planet = ({ isSelected, ...props }: IPlanetProps) => {
  const ref = useRef<three.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color={isSelected ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

export default Planet;
