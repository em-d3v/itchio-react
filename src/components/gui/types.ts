/**
 * Gui Types:
 * -
 *
 */
/**
 * gui
 */
export namespace gui {
  interface GuiObject {
    id: string;
    // guiType: 'Window'
    //   | 'TabPanel'
    // ;
    title?: string;
    name?: string;
    draggable: boolean;
    width: string;
    height: string;
    classes: string;
    children: {};
  }

  type GuiObjectType =
    | 'container'
    | 'control'
    | 'item'
    | 'text'
  type GuiType =
    | 'Window'
    | 'MsgBox'
    | 'Log'
    | 'LogItem'
    | 'Button'
    | 'Textbox'
    | 'Checkbox'
    | 'Radio'
    | 'Group'
    | 'SlotsContainer'
    | 'Slot'
    | 'TabPanel'
    | 'Tab'
    | 'TabPage'

  const GuiClasses = {
    'Window': 'win',
    'TabPane': 'tab-pane',
    'TabPage': 'tab-page',
    'Tab': 'tab-btn',
    'Input': {
      "General":"gui-input",
      "TextBox":"",
      "Checkbox":"",
      "RadioButton":"gui-rad",
      "Button":"gui-btn",
    },
    'Log': 'gui-log',
    'LogItem': 'gui-log',
    'button': 'gui-btn',
    'textbox': 'gui-btn',
  };

}