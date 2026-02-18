import { useState, useCallback } from 'react'

export function useToast() {
  const [message, setMessage] = useState<string | null>(null)

  const showToast = useCallback((msg: string) => {
    setMessage(msg)
    // 3 soniyadan keyin o'chadi
    setTimeout(() => setMessage(null), 3000)
  }, [])

  const hideToast = useCallback(() => setMessage(null), [])

  return { message, showToast, hideToast }
}
