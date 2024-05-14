'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function () {
  const redirect = useRouter().push
  useEffect(() => {
    redirect('/')
  })
  return null
}
