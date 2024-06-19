import { useRef, useState } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { defaults } from '../lib/game.config'
/**
 *
 * @param {{}} [props]
 * @param {string} [props.mapId]
 * @param {string} [props.mapId]
 * @returns {JSX.Element}
 * @constructor
 */
const Map = (props) => {
  const {mapId}=props;
  const size = defaults.tile_size;
  const ref = useRef();
  const map = useLoader(THREE.TextureLoader,`src/img/${mapId}.png`);
  // const s = new THREE.Sprite();
  const mapWidth = document.getElementById(mapId).width;
  const mapHeight = document.getElementById(mapId).height;

  const geo = new THREE.BoxGeometry(mapWidth/size,0,mapHeight/size);

  // const image =
  return(
    <mesh
    geometry={geo} position={[0,0,0]}>
      {/*<boxGeometry />*/}
      <meshBasicMaterial map={map} />
    </mesh>
    // <sprite position={[0,0,0]}>
    //   <spriteMaterial map={map}  />
    // </sprite>
  )
}
export default Map;