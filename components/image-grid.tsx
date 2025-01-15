'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { galleryImages } from '@/lib/gallery-data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ImageGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    const el = scrollRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      el.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => {
        el.removeEventListener('wheel', onWheel)
        el.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (el) {
      const scrollAmount = el.clientWidth
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      <div 
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-max grid-rows-2 gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {galleryImages.map((image) => (
           <div className="w-[250px] scroll-snap-align-start">
            <div className="relative aspect-[4/3]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="250px"
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <p className="text-sm font-semibold truncate">{image.alt}</p>
                <p className="text-xs">{image.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {canScrollLeft && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      )}
      {canScrollRight && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      )}
    </div>
  )
}

