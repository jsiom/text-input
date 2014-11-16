var merge = require('create/merge-props')
var VirtualNode = require('create/node')

function TextInput(cursor, props) {
  if (!(this instanceof TextInput)) return new TextInput(cursor, props)
  this.cursor = cursor
  this.properties = {value: cursor.value}
  this.events = {keydown: keydown, keyup: keyup}
  merge(this, props)
}

TextInput.prototype = Object.create(VirtualNode.prototype, {
  constructor: {value: TextInput},
  tagName: {value: 'input'}
})

function keydown(event) {
  if (event.which == 13/*enter*/) this.emit('submit', event.target.value)
  if (event.which == 27/*esc*/) this.emit('cancel')
}

function keyup(event) {
  this.cursor.isCurrent && this.cursor.update(event.target.value)
}

module.exports = TextInput
