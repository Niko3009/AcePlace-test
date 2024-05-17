import classNames from 'classnames'
import { FaSearch } from 'react-icons/fa'

import styles from './Search.module.scss'

export default function Search({ className }) {
  const outerClassName = className
  return (
    <div className={styles.wrapper}>
      <FaSearch
        className={classNames(styles.icon, [
          { [outerClassName]: !!outerClassName },
        ])}
      />
    </div>
  )
}
export { Search }
