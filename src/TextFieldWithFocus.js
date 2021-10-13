import React from 'react'

export const TextFieldWithFocus = () => {
  const inputRef = React.useRef()

  console.log(inputRef)

  React.useEffect(() => {
    console.log(inputRef)

    const inputDOMElement = inputRef.current

    inputDOMElement.focus()
  }, [])

  return (
    <input
      ref={inputRef}
      type={'text'}
    />
  )
}

export default TextFieldWithFocus
