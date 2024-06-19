import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import PlayerSprite from '../img/player.png';
import { PerspectiveCamera } from '@react-three/drei';
import { defaults } from '../lib/game.config';


function getKey(evt) {
  const key = evt.key.toLowerCase();

  if (key.startsWith('arrow')) {
    if (key.endsWith('up')) return 'up';
    else if (key.endsWith('down')) return 'down';
    else if (key.endsWith('left')) return 'left';
    else if (key.endsWith('right')) return 'right';
  } else return key;
}

const OrthoCam = (props) => {

};
/**
 * Player Camera
 * @param props
 * @param [props.pos]
 * @param [props.lookAt]
 * @param [props.fov]
 * @returns {JSX.Element}
 * @constructor
 */
const PlayerCam = (props) => {
  const { pos, fov, lookAt } = props;
  const config = defaults.player.camera;
  const near = config.near, far = config.far, aspect = config.aspect;
  const camFov = fov || config.fov;

  const up = new THREE.Vector3(0, 0, -1);
  const update = (e) => {
    // e.preventDefault();
    // console.log(e);
  };
  return (
    <PerspectiveCamera
      name="playerCam"
      near={near} far={far} position={pos ? pos : [0, 10, 0]}
      aspect={aspect} up={[0, 0, -1]}
      // lookAt={lookAt}
      fov={camFov}
      onUpdate={update} makeDefault={true} manual={true}
    ></PerspectiveCamera>
  );
};
/**
 * Player Entity
 * @param props
 * @param props.scale
 * @param props.size
 * @param [props.id]
 * @param [props.pos]
 * @param [props.settings] {object}
 * @param [props.objType] {string}
 * @returns {JSX.Element}
 * @constructor
 */
const Player = (props) => {
  const { size, scale } = props;
  const [movement, setMove] = useState('idle');
  const [position, setPosition] = useState([0, 0.125, 0]);
  const camConfig = defaults.player.camera;
  // const camera = new THREE.PerspectiveCamera(camConfig.fov,
  //   camConfig.aspect, camConfig.near, camConfig.far);

  // const [direction, setDirection] = useState('down');
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader,"./src/img/player.png");
  texture.colorSpace=THREE.SRGBColorSpace;
  texture.repeat.set(1/4,1/4)
  texture.offset.set(0.0,0.25);
  // texture.
  // const geo = new THREE.BoxGeometry(size, 0, size);

  // const map = useLoader(THREE.TextureLoader, '/img/player.png');
  // map.colorSpace = 'srgb';
  // map.offset.set(-0.75, 0.75);
  // const mat = new THREE.MeshBasicMaterial({ alphaMap: map });
  useFrame((state, delta, frame) => {
    // console.log(state);
    // console.log(delta)
  });
  // useThree(({t})=>{
  //
  // })
  /**
   *
   * @param position {number[]}
   */
  const setCamPos = function(position) {

  };
  /**
   * @param {string} d direction
   */
  const move = (d) => {
  };
  const keydown = async (evt) => {
    // evt.preventDefault();
    // let code = evt.code;
    const k = getKey(evt);

    console.log(evt);
  };
  const update = (e) => {
    console.log(e);
  };
  const updateCam = (e) => {
    console.log(e);
  };
  return (
    <>
      <PerspectiveCamera
        position={[position[0], 10, position[2]]}
        makeDefault aspect={camConfig.aspect} up={[0, 0, -1]} fov={camConfig.fov}
        near={camConfig.near} far={camConfig.far} onUpdate={updateCam}
        // lookAt={[position[0], 0, position[2]]}
        name={'pov'}
      />
      <mesh
        ref={ref}
        name="Player"
        onKeyDown={keydown}
        onUpdate={update}
        position={position}
      >
        <boxGeometry args={[size, 0.125, size]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>

      {/*<PlayerCam pos={[position[0],10,position[2]]} lookAt={[0,0,0]} />*/}
    </>
  );
};
export default Player;