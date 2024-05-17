import classNames from 'classnames'
import { GrClose } from 'react-icons/gr'

import styles from './Cross.module.scss'

export default function Cross({ styleClass = 'blue', className }) {
  const outerClassName = className
  return (
    <div className={styles.wrapper}>
      <GrClose
        className={classNames([
          styles[styleClass],
          { [outerClassName]: !!outerClassName },
        ])}
        style={{ height: '16px', width: '16px' }}
      />
    </div>
  )
}
export { Cross }
