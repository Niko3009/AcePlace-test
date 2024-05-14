'use client'

import { useState, useEffect } from 'react'
import classNames from 'classnames'

import styles from './styles/FiltersInput.module.scss'

export default function Input({
  name,
  value,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  //
  styleClass = false,
  error = false,
  //
  placeholder = 'placeholder',
  type = 'text',
  //
}) {
  const [controlledValue, setControlledValue] = useState('')
  const inputValue = value !== undefined ? value : controlledValue

  const [isFilled, setFilled] = useState(false)
  const [isFocus, setFocus] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if (error !== isError) setError(!!error)
    else if (!!inputValue !== isFilled) setFilled(!!inputValue)
  })

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles[styleClass]]: !!styleClass,
        [styles.filled]: isFilled,
        [styles.error]: isError,
        [styles.focus]: isFocus,
      })}
    >
      <label name={placeholder} className={styles.label}>
        {placeholder}
      </label>

      <input
        name={name}
        type={type}
        className={classNames(styles.input)}
        //
        value={inputValue}
        onFocus={(event) => {
          setFocus(true)
          onFocus(event)
        }}
        onBlur={(event) => {
          setFocus(false)
          onBlur(event)
        }}
        onChange={(event) => {
          setControlledValue(event.target.value)
          onChange(event)
        }}
      />
    </div>
  )
}
