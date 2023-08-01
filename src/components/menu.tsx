'use client'

import { useRef, useState, MouseEvent, useCallback, memo, useEffect } from 'react'

interface MenuItemProps {
  text: string
  accentColor: string
  bgColor: string
  onHover: (e: MouseEvent<HTMLDivElement>, color: string) => void
}

interface HoverState {
  color: string
  width: number
  left: number
}

export default () => {
  const [active, setActive] = useState<HoverState | null>(null)
  const [opacity, setOpacity] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback((e: MouseEvent<HTMLDivElement>, color: string) => {
    setOpacity(1)
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current!.getBoundingClientRect();
    setActive({
      color,
      width: rect.width,
      left: rect.left - containerRect.left,
    });
  }, [])

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (opacity === 0) {
      timer = setTimeout(() => setActive(null), 200)  // same as transition duration
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [opacity])

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl max-w-fit relative flex justify-between gap-1 text-xl font-semibold"
         onMouseLeave={handleMouseLeave}
         ref={containerRef}>
      {active && <div className={`${active.color} absolute min-h-full rounded-2xl`}
                      style={{
                        width: active.width,
                        left: active.left,
                        opacity: opacity,
                        transition: 'all 0.2s ease',
                      }}
      />}
      <MenuItem text="Home" accentColor="home-main" bgColor="home-secondary" onHover={handleMouseEnter}/>
      <MenuItem text="Projects" accentColor="projects-main" bgColor="projects-secondary" onHover={handleMouseEnter}/>
      <MenuItem text="Contact" accentColor="contact-main" bgColor="contact-secondary" onHover={handleMouseEnter}/>
    </div>
  )
}

const MenuItem = memo(({text, accentColor, bgColor, onHover}: MenuItemProps) => {
  const circleBg = `bg-${accentColor}`
  const hoverBg = `bg-${bgColor}`
  return (
    <div className="flex items-center gap-2 px-4 py-2 font-semibold z-10 select-none cursor-pointer" onMouseEnter={(e) => onHover(e, hoverBg)}>
      <div className={`${circleBg} h-3 w-3 rounded-full border border-white/80`}/>
      {text}
    </div>
  )
})
