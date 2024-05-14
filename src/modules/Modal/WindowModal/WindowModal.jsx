import { useEffect, useRef } from 'react'
import CrossIcon from '@/shared/icons/Cross'

import styles from './WindowModal.module.scss'

export default function WindowModal({
  closeModal,
  callbackControl,
  setModalComponents,
  children,
}) {
  const overlayRef = useRef()
  const windowRef = useRef()

  const reactOnClick = (clickTarget) => {
    const overlay = overlayRef.current
    const isWasClickOnOverlay = overlay === clickTarget
    if (isWasClickOnOverlay) closeModal()
  }

  useEffect(() => {
    const overlay = overlayRef.current
    const window = windowRef.current
    setModalComponents({ overlay, window })
    callbackControl({ closeModal })
  }, [])

  return (
    <div
      className={styles.wrapper}
      ref={overlayRef}
      onClick={({ target }) => reactOnClick(target)}
    >
      <div className={styles.window} ref={windowRef}>
        <div className={styles.scrollWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.closeButtonBox} onClick={() => closeModal()}>
          <CrossIcon className={styles.closeIcon} />
        </div>
      </div>
    </div>
  )
}
export { WindowModal }
