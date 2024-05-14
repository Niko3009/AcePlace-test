import classNames from 'classnames'

import styles from './CoverBox.module.scss'

export default function Cover({
  isSmoothlyTransition = false,
  isCovered = false,
  isOpacity = false,
  isHidden = false,
  children,
}) {
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles['smoothly-transition']]: isSmoothlyTransition,
        [styles.covered]: isCovered,
        [styles.opacity]: isOpacity,
        [styles.hidden]: isHidden,
      })}
    >
      {children}
    </div>
  )
}
export { Cover }

export const coverHidingDurationInMS = styles['hiding-duration-ms']
