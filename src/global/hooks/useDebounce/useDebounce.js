'use client'

import { useMemo } from 'react'
import { debounce } from 'lodash'

export default function useDebounce(func, delay, deps) {
  return useMemo(() => debounce(func, delay), deps)
}
export { useDebounce }
