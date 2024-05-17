import '@/global/styles.scss'
import styles from './layout.module.scss'

export default function ({ children }) {
  return (
    <html lang="en">
      <body>
        <div id={'layout'} className={styles.layout}>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  )
}
