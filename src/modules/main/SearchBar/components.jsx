'use client'

import { useRef } from 'react'
import { useRedirect } from '@/hooks/useRedirect'
import classNames from 'classnames'

import SearchIcon from '@/shared/icons/Search'

import styles from './styles/SearchBar.module.scss'

export function Frame() {
  const inputRef = useRef()
  const redirect = useRedirect()

  const makeRequest = () => redirect(`/info/${inputRef.current.value}`)

  return (
    <div className={styles.frame}>
      <input
        ref={inputRef}
        className={styles.input}
        type="number"
        placeholder="Укажите ИНН"
        onKeyDown={({ key }) => {
          if (key === 'Enter') makeRequest()
        }}
      />

      <RequestButton onClick={makeRequest} isEnable={true} />
    </div>
  )
}

const RequestButton = ({ onClick, isEnable }) => {
  return (
    <div
      className={classNames(styles['request-button'], {
        [styles['request-button-enable']]: isEnable,
      })}
      onClick={onClick}
    >
      <SearchIcon />
    </div>
  )
}
