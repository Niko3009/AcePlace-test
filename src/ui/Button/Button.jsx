'use client'

import classNames from 'classnames'

import styles from './styles/Button.module.scss'

export default function Button({
  children = 'button',
  onClick = () => {},
  className = null,
  disabled = false,
}) {
  return (
    <button
      className={classNames(styles.button, {
        [className]: !!className,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <h2>{children}</h2>
    </button>
  )
}
export { Button }
