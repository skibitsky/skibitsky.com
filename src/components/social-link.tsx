import React from 'react'
import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger } from '@/components/hover-card'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Props {
  text: string
  color: string
  href: string
  image: StaticImport
  imageAlt: string
}

export default ({text, color, href, image, imageAlt}: Props) => {
  const textClassName = `text-${color} font-medium hover:underline`
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <a className={textClassName} href={href} target="_blank" rel="noreferrer">{text}</a>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <HoverCardArrow/>
        <Image src={image} alt={imageAlt} priority={true}/>
      </HoverCardContent>
    </HoverCard>
  )
}