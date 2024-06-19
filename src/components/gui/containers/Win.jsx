import { useState } from 'react';

/**
 * Creates a Gui Window using div
 * @param props properties
 * @param {string} props.type
 * @param {string} props.id
 * @param {string} [props.classes]
 * @param {boolean} [props.overlay]
 * @param {string} props.title
 * @param {number} [props.width] in px
 * @param {number} [props.height] - in px
 * @param {{w:string,h:string}} [props.size] - Object size (this will add a style to the container, with the width (w)
 * and height (h))
 * @param {{min: boolean?,close?:boolean,max?:boolean}} props.toggleable adds extra buttons to your Gui window (miminize, close, and maximize)
 * @param {boolean} [props.minimize] -
 * @param {boolean} [props.close] -
 * @param {boolean} [props.toggleable] -
 * @param {boolean} [props.draggable] -
 * @param {boolean} [props.maximize] -
 * @param props.children -
 */
export const Win = (props) => {

  // const {id,title, classes,close,toggleable,
  // size,draggable,maximize,minimize} = props;
  const [visible, setVisible] = useState(true);
  const [winsize, setWinSize] = useState({w:500,h:500})
  if (props.size) {
  }
  /**
   *
   * @param evt {Event}
   * @returns {Promise<void>}
   */
  const toggle = async (evt) => {
    evt.preventDefault();
    const source = evt.target;
    // const p = source.
    // if (source.name === 'close'){
    //
    // }else if (source.name === 'min'){
    //
    // }
    console.log(source);
  };
  return (
    <div id={props.id} className={'win overlay'} data-visible={`${visible}`}>
      {props.toggleable &&
        <div className="win-ctrls">
          {props.minimize && <a role="button" data-win={`#${id}`} className="win-btn min" onClick={toggle}>--</a>}
          {props.maximize && <a role="button" data-win={`#${id}`} className="win-btn max" onClick={toggle}>[]</a>}
          {props.close &&
            <a role="button" data-win={`#${id}`} name="close" className="win-btn exit" onClick={toggle}>X</a>}
        </div>
      }
      <div className={'title'} id={`${id}-${title}`}>
        {props.title}
      </div>
      <div className={'body'}>
        {this.props.children}
      </div>
    </div>
  );
};

/**
 *
 * @param props
 * @param props.id
 * @param props.title
 * @param props.message
 * @param props.options
 * @param props.
 * @constructor
 */
export function MsgBox(props) {

  return(
    <div></div>
  );
}