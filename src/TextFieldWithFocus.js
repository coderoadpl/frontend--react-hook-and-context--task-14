import React from 'react'

export class TextFieldWithFocus extends React.Component {
  inputRef = React.createRef()

  componentDidMount () {
    console.log(this.inputRef)

    const inputDOMElement = this.inputRef.current

    inputDOMElement.focus()
  }

  render () {
    console.log(this.inputRef)

    return (
      <input
        ref={this.inputRef}
        type={'text'}
      />
    )
  }
}

export default TextFieldWithFocus
