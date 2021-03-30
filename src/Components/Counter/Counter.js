import React from 'react'
import { StyledCounter } from './Conter.style'

const Counter = React.forwardRef(({ label, id, name, min = 1, value, step = 1, onChange, ...rest}, ref) => {
  // let currentValue = value
  const handleDecrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.nextElementSibling
    inputNumber.stepDown()
    // const inputValue = event.target.nextElementSibling.value
    // value = inputValue
  }
  const handleIncrement = (event) => {
    event.preventDefault()
    const inputNumber = event.target.previousElementSibling
    inputNumber.stepUp()
    console.log(event);
    console.log(inputNumber);
    handleChange(event)
    // const inputValue = event.target.previousElementSibling.value
    // value = inputValue
  }

  const handleChange = internalHandler => (e) => {
    console.log(e);
    if (internalHandler === undefined) {
      return
    }
    return internalHandler(e)
  }

  return (
    <StyledCounter>
      <label htmlFor={id}>{label}</label>
      <button
        id="decrement"
        aria-label="Decrement value"
        onClick={(e) => handleDecrement(e)}
      >-</button>
      <input
        type="number"
        min={min}
        id={id}
        name={name}
        step={step}
        value={value}
        {...rest}
        ref={ref}
        onChange={handleChange(onChange)}
      />
      <button
        id="increment"
        aria-label="Increment Value"
        onClick={(e) => handleIncrement(e)}
      >+</button>
    </StyledCounter>
  )
})

export default Counter
