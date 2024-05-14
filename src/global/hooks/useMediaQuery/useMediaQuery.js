'use client'

import { useMediaQuery } from 'react-responsive'

import { tablet, desktop } from './breakpoints.module.scss'

export default function useCustomQuery(mode) {
  const availableModes = { tablet, desktop }
  const isModeAvailable = !!availableModes[mode]

  const query = JSON.parse(isModeAvailable ? availableModes[mode] : '')
  const isCurrentMode = useMediaQuery({ query })

  const response = isModeAvailable ? isCurrentMode : null
  return response
}
export { useCustomQuery as useMediaQuery }
