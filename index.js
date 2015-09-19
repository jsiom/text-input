const {JSX} = require('mana')

const onKeydown = (e, node, dom) => {
  if (e.which == 13/*enter*/) node.emit('submit', dom, dom.value)
  if (e.which == 27/*esc*/) node.emit('cancel', dom)
}

const onKeyup = (e, node, dom) => {
  const oldValue = node.params.value
  const newValue = dom.value
  if (oldValue == newValue) return
  node.params.cursor.value = newValue
  node.emit('change', dom, newValue)
}

const killEvent = e => {
  if (typeof e == 'string') return // internally generated event
  e.stopPropagation()
  e.preventDefault()
}

/**
 * A simple text input box
 *
 * @type {Object} the only required parameter is `cursor`
 * @return {VirtualElement}
 */

const TextInput = params =>
  <input type='text'
         onKeyup={onKeyup}
         onKeydown={onKeydown}
         onChange={killEvent}
         value={params.cursor.value || ''}/>.mergeParams(params)

export default TextInput
