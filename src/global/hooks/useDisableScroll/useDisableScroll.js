'use client'

import { useEffect, useState } from 'react'

export default function useDisableScroll() {
  const initState = { target: null, isTargetDisable: false, scrollTop: null }
  const [state, setState] = useState(initState)
  const { scrollTop } = state

  const updateState = (isDisableRequired = false) => {
    if (isDisableRequired === state.isTargetDisable) return
    state.isTargetDisable = isDisableRequired
    state.scrollTop = window.scrollY
    setState({ ...state })
  }

  const handleScrollEvent = () => {
    const isWindowReady = typeof window !== 'undefined'
    const scrollOptions = { top: scrollTop, behavior: 'auto' }
    if (isWindowReady) window.scrollTo(scrollOptions)
  }

  useEffect(() => {
    state.target = document.body
    setState({ ...state })
  }, [])

  useEffect(() => {
    const { target, isTargetDisable, scrollTop } = state
    const isScrollTopDefined = scrollTop !== null
    const scrollOptions = { top: scrollTop, behavior: 'auto' }
    const isInitialized = !!target

    if (isInitialized)
      if (isTargetDisable) {
        window.addEventListener('scroll', handleScrollEvent)
      } else {
        window.removeEventListener('scroll', handleScrollEvent)
        if (isScrollTopDefined) window.scrollTo(scrollOptions)
      }

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
      if (isScrollTopDefined) window.scrollTo(scrollOptions)
    }
  }, [state])

  return updateState
}
export { useDisableScroll }
