import { useEffect, useRef } from 'react'

export default function InputRef() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <input ref={inputRef} type="text" placeholder="Type smth here..." />
}
