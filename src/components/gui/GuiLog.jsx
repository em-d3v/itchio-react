/**
 *
 */
/**
 *
 * @param props
 * @param props.message
 * @param props.from
 * @constructor
 */
export const LogItem = (props) => {
  return (
    <p className="log-item">
      <p className="user-id">{this.props.from}</p>
      {this.props.message}
    </p>
  );
};
/**
 *
 * @param props
 * @param props.id
 * @param props.name
 * @constructor
 */
export const LogPane = (props) => {
  const { id } = props;
  /**
   *
   * @param evt {CustomEvent}
   * @returns {Promise<void>}
   */
  const add = async (evt) => {

  };
  const item = function() {
   const x= <LogItem />
  };
  return (
    <div id={id} className={'log-pane'}>

    </div>
  );
};
