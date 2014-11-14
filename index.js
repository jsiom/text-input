var merge = require('create/merge-props')
var VirtualNode = require('create/node')

function TextInput(cursor, props){
  if (!(this instanceof TextInput)) return new TextInput(cursor, props)
  this.cursor = cursor
  this.properties = {type: 'text', value: cursor.value}
  this.events = {keydown: handleSubmit, keypress: updateCursor}
  merge(this, props)
}

TextInput.prototype = Object.create(VirtualNode.prototype, {
  constructor: {value: TextInput},
  tagName: {value: 'input'}
})

function handleSubmit(event){
  if (event.which ==  8/*delete*/) this.cursor.slice(0, -1)
  if (event.which == 13/*enter*/) this.emit('submit', event.target.value)
  if (event.which == 27/*esc*/) this.emit('cancel')
}

function updateCursor(event){
  if (!event.charCode || event.which == 13/*enter*/) return
  var char = String.fromCharCode(event.charCode)
  return this.cursor.update(event.target.value + char)
}

module.exports = TextInput
