const {JSX} = require('mana')

function onKeydown(e) {
  if (e.which == 13/*enter*/) this.emit('submit', this.dom.value)
  if (e.which == 27/*esc*/) this.emit('cancel')
}

function onKeyup() {
  if (this.params.cursor.isCurrent) {
    this.params.cursor.update(this.dom.value)
  }
}

/**
 * A simple text input box
 *
 * @type {Object} the only required parameter is `curser`
 * @return {VirtualElement}
 */

const TextInput = params =>
  <input type='text'
         onKeyup={onKeyup}
         onKeydown={onKeydown}
         value={params.cursor.value}
         {...params}/>

export default TextInput
