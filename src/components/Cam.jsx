import { useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

/**
 *
 * @param [props]
 * @param [props.position]
 * @param [props.target]
 * @returns {JSX.Element}
 * @constructor
 */
const Cam = (props) => {
  const { target } = props;
  // useThree(({ camera }) => {
  //   camera.aspect = 2;
  //   camera.up.set(0, 0, -1);
  //   camera.lookAt();
  // });
  return (
    <PerspectiveCamera makeDefault />
  );
};
export default Cam;