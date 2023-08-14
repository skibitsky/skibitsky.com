import React from 'react'
import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger } from '@/components/hover-card'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Props {
  text: string
  color: string
  href: string
  image: StaticImport
}

export default ({text, color, href, image}: Props) => {
  const textColor = `text-[${color}]`
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <a className={`${textColor} font-medium hover:underline`} href={href} target="_blank" rel="noreferrer">{text}</a>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <HoverCardArrow/>
        <Image src={image} alt="@gleb.skibitsky"/>
      </HoverCardContent>
    </HoverCard>
  )
}