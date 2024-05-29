'use client'

import { useEffect } from 'react'

export default function ScrollEvent() {
  useEffect(() => {
    const el = document.querySelector('body') as HTMLBodyElement
    el.style.overflowY = 'hidden'

    return () => {
      el.style.overflowY = 'auto'
    }
  }, [])
  return null
}
