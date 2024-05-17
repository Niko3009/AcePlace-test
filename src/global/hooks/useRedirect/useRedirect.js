'use client'

import { useRouter } from 'next/navigation'

export default function useRedirect() {
  const router = useRouter()
  const redirect = router.push
  return redirect
}
export { useRedirect }
