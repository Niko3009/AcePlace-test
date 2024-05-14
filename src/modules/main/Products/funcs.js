import { apiAxiosFetch } from '@/global/data/api'

const loadData = async (page, productsPerPage) => {
  const url = '/products'
  const params = { page, page_size: productsPerPage }
  const responseData = await apiAxiosFetch.get(url, { params })
  return responseData
}
export default loadData
export { loadData }
