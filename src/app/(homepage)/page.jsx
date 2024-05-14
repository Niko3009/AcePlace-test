import Comments from '@/main/Comments'
import Products from '@/main/Products'

import styles from '@/app/layout.module.scss'

export default function () {
  return (
    <div className={styles.modules}>
      <Comments />
      <Products />
    </div>
  )
}
