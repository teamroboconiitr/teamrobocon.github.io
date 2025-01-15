'use client'

import React from 'react'
import Image from 'next/image'

const sponsors = [
  { name: 'Sponsor 1', logo: '/Ansys_logo.png?height=100&width=200&text=Sponsor+1' },
  { name: 'Sponsor 2', logo: '/Solidworks_logo.png?height=100&width=200&text=Sponsor+2' },
  { name: 'Sponsor 3', logo: '/Altium_logo.png?height=100&width=200&text=Sponsor+3' },
]

export default function SponsorLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={200}
            height={100}
            className="h-auto"
          />
        </div>
      ))}
    </div>
  )
}
