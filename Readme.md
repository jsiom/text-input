
# text-input

  A text-input component

## Installation

With [packin](//github.com/jkroso/packin): `packin add jsiom/text-input`

then in your app:

```js
var TextInput = require('text-input')
```

## API

### `TextInput(cursor, [properties])`

The `TextInput` component takes a [cursor](//github.com/jsiom/cursor) to a `String`. The cursors value will set the initial value of the rendered input element and it will be updated whenever the user types into it

__special events:__

- _submit_: fires when the user hits the enter key
- _cancel_: fires when the user hits the esc key
