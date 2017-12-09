# A simple React inline editing component.
This is an inline, editable text/label element built in React.

The `<EditableLabel />` allows the user to simply click and edit text inline. It consists of a `<label>` element to display the unedited text and an `<input />` element to allow editing.

# Component props
_* Required_ 

| Prop | Type   | Description
| -----| -------| -------- |
| text | string | Text to be displayed on both the label and initially in the editor | *
| isEditing | bool | Flags whether the label should be in editor mode
