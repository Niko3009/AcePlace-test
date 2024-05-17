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

export async function generateMetadata({ params }, parent) {
  const { taxID } = params
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: `Информация об ИНН ${taxID}`,
    description: `Информация об ИНН ${taxID}`,
    openGraph: {
      title: `Информация об ИНН ${taxID}`,
      images: ['#', ...previousImages],
    },
  }
}
