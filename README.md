# A simple React inline editing component.
This is an inline, editable text/label component built in React.

The `<EditableLabel />` allows the user to simply click and edit text inline. It consists of a `<label>` element to display the unedited text and an `<input />` element to allow editing.

![example](https://i.imgur.com/pvvQWU3.gif )

# Installation
`npm install --save react-inline-editing`

# Component props
_* Required_ 

| Prop | Type   | Description
| -----| -------| -------- |
| text (*)| string | Text to be displayed on both the label and initially in the editor |
| isEditing | bool | Flags whether the label should be in editor mode
| labelClassName | string | Class name for the text styling
| labelFontSize | string | Font size for the text 
| labelFontWeight | string | Font weight for the text
| inputMaxLength | number | Max length for the input in editing mode
| inputPlaceHolder | string | Placeholder for the input in editing mode
| inputWidth | string | Width of the input in editing mode
| inputHeight | string | Height of the input in editing mode
| inputFontSize | string | Font size for the input in editing mode
| inputFontWeight | string | Font weight for the input in editing mode 
| inputClassName | string | Class name for the input editor's styling
| inputBorderWidth | string | Border width for the input in editing mode
| onFocus | function | Callback for text focusing. Parameter(s): `text`
| onFocusOut | function | Callback for focus leaving editor. Parameter(s): `text`


# Example
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import EditableLabel from 'react-inline-edit';

class App extends React.Component {
    constructor(props){
      super(props);

      this._handleFocus = this._handleFocus.bind(this);
      this._handleFocusOut = this._handleFocusOut.bind(this);
    }

    _handleFocus(text) {
        console.log('Focused with text: ' + text);
    }

    _handleFocusOut(text) {
        console.log('Left editor with text: ' + text);
    }

    render() {
        return <div>
            <EditableLabel text='Hello!'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputWidth='200px'
                inputHeight='25px'
                inputMaxLength='50'
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocus={this._handleFocus}
                onFocusOut={this._handleFocusOut}
            />
        </div>
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
```
