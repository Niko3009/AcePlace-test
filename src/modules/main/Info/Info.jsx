import List from './List'

import styles from './styles/Info.module.scss'

export default async function Info({ taxId }) {
  const apiData = await getData(taxId)
  return (
    <div className={styles.module}>
      <List apiData={apiData} />
    </div>
  )
}

const getData = async (taxId) => {
  const domain = 'http://suggestions.dadata.ru' // process.env.API_DOMAIN
  const path = '/suggestions/api/4_1/rs/findById/party'
  const url = domain + path

  const token = '9b20cc11e67a8066ed9762aec69cbb81d7dfb0a2' // process.env.API_TOKEN
  const query = taxId

  const body = JSON.stringify({ query: query })
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + token,
  }
  const options = { method: 'POST', mode: 'cors', headers, body }

  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const info = await getCompanyInfo(data)
    return { info, data }
  } catch (error) {
    return { error }
  }
}

const getCompanyInfo = async (data) => {
  const companiesInfo = []

  const suggestions = data?.suggestions
  if (!suggestions?.[0]) return null

  for (const company of suggestions) {
    const allInfo = company
    const name = allInfo?.value
    const management = allInfo?.data?.management
    const post = management?.post
    const manager = management?.name
    const address = allInfo?.data?.address?.value
    const phone = allInfo?.data?.phones?.[1]?.value
    const email = allInfo?.data?.emails?.[1]?.value
    const inn = allInfo?.data?.inn
    const comInfo = { name, post, manager, address, phone, email, inn }
    companiesInfo.push(comInfo)
  }

  return companiesInfo
}
