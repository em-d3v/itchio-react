const defaults = {
  player: {
    scale: [1, 0, 1],
    speed: 0.1,
    camera: { fov: 50, aspect: 2, near: 1, far: 100 },
    controls:{
      up: ["w","up"],
      down: ["s","down"],
      left: ["a","left"],
      right: ["d","right"],
      interact: ["e"]
    }
  },
  tile_size: 32,
  map: {},
};
const resources = [
  { name: 'player', type: 'texture', value: 'img/player.png' },
];
export { defaults, resources };