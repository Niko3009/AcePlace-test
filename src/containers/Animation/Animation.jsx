'use client'

import AOS from 'aos'
import classNames from 'classnames'
import { useState, useEffect, useContext, createContext } from 'react'

import 'aos/dist/aos.css'
import styles from './Animation.module.scss'

export default function Animation({
  children,
  animation,
  disable = false,
  delay = 0,
  duration = 1000,
  anchor = null,
  anchorPlacement = null,
}) {
  const contextData = useContext(Context)
  const options = contextData?.animation?.options
  const isCommonDisable = options?.disable
  return (
    <AnimationWrapper
      {...{ animation, delay, duration, anchor, anchorPlacement }}
      disable={disable || isCommonDisable}
    >
      {children}
    </AnimationWrapper>
  )
}
export { Animation }

export function AnimationObserver({
  children,
  isDisable = false,
  once = false,
}) {
  const { isDataLoaded } = useContext(OuterContext)
  const [isAosInitialize, setAosInitialize] = useState(false)
  const isCommonDisable = isDisable

  useEffect(() => {
    if (isDataLoaded && !isAosInitialize) {
      AOS.init({ once, disable: isCommonDisable })
      setAosInitialize(true)
      const refresh = () => AOS.refresh()
      const target = document.body
      target
        .querySelectorAll('div')
        .forEach((div) => div.addEventListener('scroll', refresh, false))
    }
  }, [isDataLoaded, isAosInitialize])

  return (
    <Context.Provider value={{ animation: { isDisable: isCommonDisable } }}>
      {children}
    </Context.Provider>
  )
}

export function AnimationWrapper({
  animation,
  delay,
  duration,
  anchor,
  anchorPlacement,
  children,
}) {
  return (
    <div
      className={classNames(styles.wrapper)}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor={anchor}
      data-aos-anchor-placement={anchorPlacement}
      suppressHydrationWarning
    >
      {children}
    </div>
  )
}

export const Context = createContext()
export const OuterContext = createContext()
