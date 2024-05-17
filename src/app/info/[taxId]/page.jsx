import SearchBar from '@/modules/main/SearchBar'
import Info from '@/modules/main/Info'

import styles from './page.module.scss'

export default async function ({ params }) {
  const { taxId } = params
  return (
    <div className={styles.modules}>
      <SearchBar />
      <Info taxId={taxId} />
    </div>
  )
}
