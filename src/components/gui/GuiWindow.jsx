/**
 * Creates a Gui Window using div
 * @param props properties
 * @param {string} props.type
 * @param {string} props.id
 * @param {string} [props.classes]
 * @param {boolean} [props.overlay]
 * @param {number} [props.width] in px
 * @param {number} [props.height] - in px
 * @param {boolean} props.toggleable -
 * @param {boolean} props.minimize -
 * @param {boolean} props.close -
 * @param {boolean} props.draggable -
 * @param {boolean} props.maximize -
 *
 */
export const GuiWindow = (props) => {
  const {
    id, classes, overlay, width, height,
    toggleable,
  } = props;
  console.log(props);
  if (!id) throw 'missing window id';
  let str = '';
  if (width || height) {
    if (width) str += `width: ${width};`;
    if (height) str += `height: ${height};`;
    const style = str;
    return (
      <div className={'win'} id={id} style={style}>
        {toggleable && <a role="button" data-win={`#${id}`} className="exit">X</a>}
      </div>
    );
  }
  return (
    <div className={'win'} id={id} data-gui={type}>
      <div className="win-ctrls"></div>
      {toggleable && <a role="button" data-win={`#`} className="exit">X</a>}
      {/*<div className={'head'}>*/}
      {/*  <a role="button" data-win={`#`} className="exit">X</a>*/}
      {/*</div>*/}
      {/*<div className="body">*/}

      {/*</div>*/}

    </div>
  );
};
export const WinHeader = (props) => {

};
export const WinFooter = (props) => {

};