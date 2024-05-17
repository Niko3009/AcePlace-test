import SearchBar from '@/modules/main/SearchBar'

import styles from './page.module.scss'

export default function () {
  return (
    <div className={styles.modules}>
      <SearchBar />
    </div>
  )
}

export async function generateMetadata(props, parent) {
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: `Поиск ИНН`,
    description: `Поиск ИНН`,
    openGraph: {
      title: `Поиск ИНН`,
      images: ['#', ...previousImages],
    },
  }
}
