'use client'

import { useState } from 'react'

import Modal from '@/modules/Modal'
import Button from '@/ui/Button'

import styles from './styles/Info.module.scss'

export default function Info({ apiData }) {
  const { info, error } = apiData
  const isIDwasNotFound = !info && !error

  console.log(apiData)

  const [isModalOpen, setModalOpen] = useState()
  const [selectedAddress, setSelectedAddress] = useState(null)

  const openModalOfAddress = (address) => {
    setSelectedAddress(address)
    setModalOpen(true)
  }

  return (
    <div className={styles.wrapper}>
      {info &&
        info.map((companyInfo, index) => (
          <CompanyInfo
            info={companyInfo}
            selectAddress={openModalOfAddress}
            key={index + JSON.stringify(info)}
          />
        ))}
      {isIDwasNotFound && <p>{'ИНН не найден'}</p>}
      {error && <p>{'Ошибка запроса'}</p>}

      <CompanyAddressModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        selectedAddress={selectedAddress}
      />
    </div>
  )
}

export function CompanyInfo({ info, selectAddress }) {
  const { name, post, manager, address, phone, email, inn } = info || {}

  return (
    <div className={styles['company-info']}>
      <h1>{`${name || '-'}`}</h1>
      {post && <p>{`${post}: ${manager}`}</p>}
      <p>{`inn: ${inn}`}</p>
      <p>
        {`адрес: `}
        <span onClick={() => selectAddress(address)} className={styles.address}>
          {`${address || '-'}`}
        </span>
      </p>
      <p>{`телефон: ${phone || '-'}`}</p>
      <p>{`почта: ${email || '-'}`}</p>
    </div>
  )
}

export function CompanyAddressModal({
  isModalOpen,
  setModalOpen,
  selectedAddress,
}) {
  const [modalControl, setModalControl] = useState({})
  const closeModal = modalControl?.closeModal

  const openExternalServiceOfAddress = (address) => {
    const serviceUrl = `https://maps.yandex.ru?text=${address}`
    window.open(serviceUrl, '_blank')
    closeModal()
  }

  return (
    <Modal
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      callbackControl={(control) => setModalControl(control)}
    >
      <div className={styles['modal-warning']}>
        <h1>{`Проверить адрес: ${selectedAddress}.`}</h1>
        <h1>{`Вы действительно хотите перейти на внешний ресурс?`}</h1>

        <div className={styles['modal-warning-buttons']}>
          <Button onClick={() => closeModal()}>{'Отказаться'}</Button>{' '}
          <Button onClick={() => openExternalServiceOfAddress(selectedAddress)}>
            {`Перейти`}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
