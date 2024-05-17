import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Spinner from 'react-spinners/PuffLoader'

import styles from './Loader.module.scss'

export default function Loader({
  isActive,
  position = 'relative',
  color,
  className,
}) {
  const defaultColor = styles['grey-color']
  const [isInitialized, setInitialized] = useState(false)

  useEffect(() => {
    setInitialized(true)
  }, [])

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.relative]: position === 'relative',
        [styles.fixed]: position === 'fixed',
        [styles.sticky]: position === 'sticky',
        [styles.absolute]: position === 'absolute',
      })}
    >
      <div
        className={classNames(styles['spinner-box'], {
          [className]: !!className,
        })}
      >
        <Spinner
          loading={isActive && isInitialized}
          color={color || defaultColor}
          size={'100%'}
        />
      </div>
    </div>
  )
}
export { Loader }
