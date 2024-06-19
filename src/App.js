import './styles/App.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import Player from './components/Player';
import { useRef } from 'react';
import Map from './components/Map';
import Gui from './components/gui/Gui';
import {Win} from './components/gui/containers/Win'
import guiStyle from './styles/gui.css';
import { CameraControls } from '@react-three/drei';
function App() {
  const textureLoader = new THREE.TextureLoader();
  const cam = new THREE.PerspectiveCamera(50, 2, 0.1, 100);
  cam.position.set(0, 10, 0);
  cam.up.set(0, 0, -1);
  cam.lookAt(0, 0, 0);
  const bkg = new THREE.Color(0,0,0);
  // const canv = new Game();
  const ref = useRef();

  return (
    <>
      <Gui>
        <Win id="test-win" title={"Test Window"} type={"Window"}>

        </Win>
      </Gui>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Player scale={[1, 0, 1]} size={1} position={[0, 0.5, 0]} />
        <gridHelper size={50} divisions={200} />
        <Map mapId={"map-inf"} />
        {/*<PerspectiveCamera position={[0,10,0]} up={{ x: 0, y: 0, z: -1 }}*/}
        {/*        fov={50} aspect={2} near={0.1} far={100} lookAt={{ x: 0, y: 0, z: 0 }} />*/}
        <CameraControls />
      </Canvas>
      {/*<div className="game">*/}
        {/*<canvas id="game"></canvas>*/}
        {/*<Game/>*/}
        {/* gl={{canvas:  document.getElementById("map")}}*/}
      {/*</div>*/}

    </>
  );
}

export default App;
