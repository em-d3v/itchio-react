/**
 *
 * @param props
 * @param props.id {string}
 * @param props.classes {string}
 * @param props.type {string}
 * @returns {JSX.Element}
 * @constructor
 */
export const Pane = (props) => {
  const {id,classes}=props;
  return (
    <div id={id} className={"pane"}>
      {this.props.children}
    </div>
  )
}
export function TabPane(props){

}
