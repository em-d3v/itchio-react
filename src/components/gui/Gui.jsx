

/**
 * Gui Container
 * @param [props] {any}
 * @param [props.id] {string}
 * @param [props.classes] {string}
 * @param [props.id] {string}
 * @param [props.children]
 *
 */
const Gui = (props)=>{
  const id = props.id;
return (
  <div id={id? id : "gui"} className="gui">
    {this.props.children}
  </div>
);

}
export default Gui;