function GuiEvent(eventName, data){
  let evt = new CustomEvent(eventName, {detail: data});
  document.dispatchEvent(evt);
}
function subscribe(eventName, listener) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(eventName, listener) {
  document.removeEventListener(eventName, listener);
}

/**
 *
 * @param evtName {string}
 * @param listener {function}
 */
function toggleWindow(evtName,listener){

}

export {subscribe,unsubscribe,GuiEvent}