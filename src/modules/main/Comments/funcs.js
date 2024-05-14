import { apiAxiosFetch } from '@/global/data/api'

const loadData = async () => {
  const url = '/reviews'
  const params = {}
  const responseData = await apiAxiosFetch.get(url, { params })
  return responseData
}
export default loadData
export { loadData }
