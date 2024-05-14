import classNames from 'classnames'
import { GrAdd } from 'react-icons/gr'

import styles from './Plus.module.scss'

export default function Plus({ styleClass = 'blue', className }) {
  const outerClassName = className
  return (
    <div className={styles.wrapper}>
      <GrAdd
        className={classNames([
          styles[styleClass],
          { [outerClassName]: !!outerClassName },
        ])}
      />
    </div>
  )
}
export { Plus }
