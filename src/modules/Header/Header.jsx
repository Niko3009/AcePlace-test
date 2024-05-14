import classNames from 'classnames'

import styles from './styles/Header.module.scss'

export default function () {
  return (
    <header className={classNames(styles.header, styles.wrapper)}>
      <div className={styles.content}>
        <div className={styles['title-box']}>
          <h1>тестовое задание</h1>
        </div>
      </div>
    </header>
  )
}
