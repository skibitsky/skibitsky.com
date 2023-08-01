import { memo } from 'react'

export default memo(({color}: {color: string}) => {
  const bgColor = `bg-${color}`
  return <div className={`absolute h-full w-full z-[-1] ${bgColor}`}/>
})