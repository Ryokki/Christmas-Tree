import * as THREE from 'three';
import { Object3DNode, MaterialNode, BufferGeometryNode } from '@react-three/fiber';

export type TreeState = 'CHAOS' | 'FORMED';

export interface TreeColors {
  bottom: string;
  top: string;
}

export interface HandGesture {
  isOpen: boolean;
  position: { x: number; y: number }; // Normalized -1 to 1
  isDetected: boolean;
}

// Augment the global JSX namespace to include React Three Fiber elements.
// This fixes the "Property does not exist on type 'JSX.IntrinsicElements'" errors.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Objects
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      points: Object3DNode<THREE.Points, typeof THREE.Points>;
      instancedMesh: Object3DNode<THREE.InstancedMesh, typeof THREE.InstancedMesh>;
      
      // Geometries
      bufferGeometry: BufferGeometryNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>;
      boxGeometry: BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      planeGeometry: BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      sphereGeometry: BufferGeometryNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      torusKnotGeometry: BufferGeometryNode<THREE.TorusKnotGeometry, typeof THREE.TorusKnotGeometry>;
      
      // Materials
      meshStandardMaterial: MaterialNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      meshBasicMaterial: MaterialNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      shaderMaterial: MaterialNode<THREE.ShaderMaterial, typeof THREE.ShaderMaterial>;
      
      // Lights
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
      
      // Helpers
      bufferAttribute: Object3DNode<THREE.BufferAttribute, typeof THREE.BufferAttribute>;
    }
  }
}
