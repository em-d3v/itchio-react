

/**
 *
 * @param [props]
 * @param props.map {resource[]}
 * @param props.name {string}
 * @param [props.resType] resource type
 * @param [props.value] {any} value
 * @
 */
const Resource = (props) => {
  const {map, name, resType, value } = props;
  /**@type{resource}*/
  let resource = {};
  let i,match=false;
  if (map.length > 0){
    for (i of map){
      if (i.name === name){
        resource = i;
      }
    }
  }
  if (resType){
    if (resource.type ===resType) {

    }
  }
  return resource;
};

export default Resource;