import { useEffect, useRef, useState } from 'react'

/** Fades an element in (opacity + slight rise) the first time it enters the viewport. */
export function useScrollFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    className: `transition-all duration-500 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
    }`,
  }
}
