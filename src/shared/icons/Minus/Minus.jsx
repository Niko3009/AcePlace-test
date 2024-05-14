import classNames from 'classnames'
import { GrSubtract } from 'react-icons/gr'

import styles from './Minus.module.scss'

export default function Minus({ styleClass = 'blue', className }) {
  const outerClassName = className
  return (
    <div className={styles.wrapper}>
      <GrSubtract
        className={classNames([
          styles[styleClass],
          { [outerClassName]: !!outerClassName },
        ])}
      />
    </div>
  )
}
export { Minus }
