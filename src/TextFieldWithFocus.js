import React from 'react'

export const TextFieldWithFocus = () => {
  // inputRef = React.createRef()

  // componentDidMount () {
  //   console.log(this.inputRef)

  //   const inputDOMElement = this.inputRef.current

  //   inputDOMElement.focus()
  // }

  //   console.log(this.inputRef)

  return (
    <input
      // ref={this.inputRef}
      type={'text'}
    />
  )
}

export default TextFieldWithFocus
