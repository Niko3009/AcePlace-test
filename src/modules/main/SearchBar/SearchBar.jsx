import { Frame } from './components'

import styles from './styles/SearchBar.module.scss'

export default function SearchBar() {
  return (
    <div className={styles.module}>
      <div className={styles.wrapper}>
        <Frame />
      </div>
    </div>
  )
}
