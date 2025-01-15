'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselImage = {
  src: string;
  alt: string;
  year: number;
}

const images: CarouselImage[] = [
  { src: '/Team_photo_2024.JPG?height=400&width=600&text=Featured+Image+1', alt: 'Team with 2024 Mars Rover, Accompanied by Faculty Advisor Prof. Sohom Chakrabarty', year: 2024 },
  { src: '/Team_photo_2023.JPG?height=400&width=600&text=Featured+Image+1', alt: '2023 Team with Faculty Advisor Prof. Shailesh Ghanpule', year: 2023 },
  { src: '/Team_photo_2022.JPG?height=400&width=600&text=Featured+Image+1', alt: 'Team in the year 2022', year: 2022 },
  { src: '/Team_photo_2018.JPG?height=400&width=600&text=Featured+Image+1', alt: '2018 Team in a competition', year: 2018 },
  { src: '/Team_photo_2017.jpg?height=400&width=600&text=Featured+Image+1', alt: 'Team after winning Best aesthetic robot', year: 2016 },
  { src: '/Team_photo_2016.jpg?height=400&width=600&text=Featured+Image+1', alt: '2016 Team at competition site with Prof. P.N. Pathak', year: 2016 },
  { src: '/Team_photo_2014.jpg?height=400&width=600&text=Featured+Image+1', alt: 'Class of 2014', year: 2014 },
  { src: '/Team_photo_2013.jpg?height=400&width=600&text=Featured+Image+1', alt: 'Team in 2013', year: 2013 },
]

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
              <div className="pt-[66.666%] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm">{image.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous image</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next image</span>
      </Button>
    </div>
  )
}

