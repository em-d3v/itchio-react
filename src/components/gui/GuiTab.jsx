
export function TabPanel(props) {
  const { id } = props;
  return (
    <div id={id} className={'tab-pane'}>
      {props.children}
    </div>
  );
}

export const TabPage = (props) => {
  const {id} = props;
  return (
    <div className="tab-page" id={`tab-page-${id}`}  >
      {this.props.children}
    </div>
  );
};
export const Tab = (props) => {
  const {id, title} = props;
  return (
    <a role="button" id={`tab-${id}`}
       className={"tab-btn"} data-target={`tab-page-${id}`}>{title}</a>
  );
};