'use client'

import { ReactNode, useState } from 'react'

interface InteractiveCardProps {
children: ReactNode
className?: string
}

export default function InteractiveCard({ children, className }: InteractiveCardProps) {

const [isHovered, setIsHovered] = useState(false)

return (
<div
className={`rounded-xl bg-white overflow-hidden transition-all duration-300 
      ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'} 
      ${className}`}
style={{
boxShadow: isHovered
? '0 25px 60px rgba(0,0,0,0.35)'
: '0 10px 25px rgba(0,0,0,0.25)'
}}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
>
{children} </div>
)
}
