const {JSX} = require('mana')

const onKeydown = (e, node) => {
  if (e.which == 13/*enter*/) node.emit('submit', node.dom.value)
  if (e.which == 27/*esc*/) node.emit('cancel')
}

const onKeyup = (e, node) => {
  const oldValue = node.params.value
  const newValue = node.dom.value
  if (oldValue == newValue) return
  node.params.cursor.update(newValue)
  node.emit('change', newValue)
}

const killEvent = e => {
  if (typeof e == 'string') return // internally generated event
  e.stopPropagation()
  e.preventDefault()
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
         onChange={killEvent}
         value={params.cursor.value || ''}
  />.mergeParams(params)

export default TextInput
