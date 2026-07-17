import { useEffect, useRef, useState, type CSSProperties } from 'react'

const HIDDEN: CSSProperties = { opacity: 0, transform: 'translateY(20px)' }
const VISIBLE: CSSProperties = { opacity: 1, transform: 'translateY(0)' }

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
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return {
    ref,
    // Inline style guarantees the hidden state applies before paint, regardless
    // of class purge/specificity — matters here since the state is dynamic.
    style: {
      ...(visible ? VISIBLE : HIDDEN),
      transition: 'opacity 500ms ease-out, transform 500ms ease-out',
    } satisfies CSSProperties,
  }
}
