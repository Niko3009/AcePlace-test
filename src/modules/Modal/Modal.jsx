'use client'

import Wrapper from 'react-modal'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import useDisableScroll from '@/hooks/useDisableScroll'

import WindowModal from './WindowModal'
import SwipeModal from './SwipeModal'

import styles from './styles/Modal.module.scss'

export default function CustomModal({
  children,
  isModalOpen,
  setModalOpen,
  type,
  callbackControl = () => {},
}) {
  const [modalComponents, setModalComponents] = useState(null)
  const [isInitialized, setInitialized] = useState(false)
  const [isOverlayHidden, setOverlayHidden] = useState(true)

  const disableScroll = useDisableScroll()
  const isDesktopMode = useMediaQuery('desktop')

  const availableModals = { window: WindowModal, swipe: SwipeModal }
  const DefaultModal = isDesktopMode ? WindowModal : SwipeModal
  const Modal = availableModals[type] || DefaultModal

  const closeModal = () => {
    setOverlayHidden(true)
    setTimeout(() => setModalOpen(false), overlayHidingDurationInMS)
  }

  useEffect(() => {
    if (isInitialized) disableScroll(isModalOpen)
    return () => {
      if (isInitialized) disableScroll(false)
    }
  }, [isModalOpen])

  useEffect(() => {
    setInitialized(true)
  }, [])

  return (
    <Wrapper
      isOpen={isModalOpen}
      ariaHideApp={false} // close
      shouldCloseOnOverlayClick={false}
      onAfterOpen={() => setOverlayHidden(false)}
      className={styles.modal}
      contentClassName={styles.window}
      overlayClassName={classNames(styles.overlay, {
        [styles.hidden]: isOverlayHidden,
      })}
    >
      <Modal
        {...{
          isModalOpen,
          closeModal,
          overlayHidingDurationInMS,
          callbackControl,
          modalComponents,
          setModalComponents,
        }}
      >
        {children}
      </Modal>
    </Wrapper>
  )
}
export { CustomModal as Modal }

export const overlayHidingDurationInMS = styles['hiding-duration-ms']
