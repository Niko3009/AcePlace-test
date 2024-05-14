'use client'

import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'

import styles from './SwipeModal.module.scss'

export default function SwipeModal({
  isModalOpen,
  closeModal,
  overlayHidingDurationInMS,
  callbackControl,
  setModalComponents,
  children,
}) {
  const [isWindowHidden, setWindowHidden] = useState(true)

  const overlayRef = useRef()
  const windowRef = useRef()

  const closeModalWithSwipe = () => {
    setWindowHidden(true)
    setTimeout(() => closeModal(), windowHidingDurationInMS)
  }

  const reactOnClick = (clickTarget) => {
    const overlay = overlayRef.current
    const isWasClickOnOverlay = overlay === clickTarget
    if (isWasClickOnOverlay) closeModalWithSwipe()
  }

  useEffect(() => {
    if (isModalOpen && isWindowHidden)
      setTimeout(() => setWindowHidden(false), overlayHidingDurationInMS)
  }, [isModalOpen])

  useEffect(() => {
    const overlay = overlayRef.current
    const window = windowRef.current
    setModalComponents({ overlay, window })
    callbackControl({ closeModal: closeModalWithSwipe })
  }, [])

  return (
    <div
      className={styles.wrapper}
      ref={overlayRef}
      onClick={({ target }) => reactOnClick(target)}
    >
      <div
        className={classNames(styles.window, {
          [styles.hidden]: isWindowHidden,
        })}
        ref={windowRef}
      >
        <Tap {...{ closeModalWithSwipe }} />
        <div className={styles.scrollWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}
export { SwipeModal }

export function Tap({ closeModalWithSwipe }) {
  const { ref } = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    onSwipedDown: () => closeModalWithSwipe(),
  })

  return (
    <div
      className={styles.tap}
      onClick={() => closeModalWithSwipe()}
      ref={ref}
    />
  )
}

export const windowHidingDurationInMS = styles['hiding-duration-ms']
