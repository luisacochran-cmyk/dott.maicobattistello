"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface QuadrantItem {
  title: string
  image: string
  link: string
}

interface QuadrantCarouselProps {
  items?: QuadrantItem[]
  showTitles?: boolean
  fullWidthMobile?: boolean
}

export default function QuadrantCarousel({
  items = [
    {
      title: "Ozonoterapia + Osteopatia",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ozonosteopic.jpg-8YPM2ER5BSHlgZEDoA1kWc8izXQr9f.jpeg",
      link: "/ozone-osteopathy",
    },
    {
      title: "Osteopatia",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osteopic.jpg-1DghIg2avBhDEuGOkg7IMcB61GdHay.jpeg",
      link: "/osteopathy",
    },
    {
      title: "Ozonoterapia",
      image: "/images/piccolaemo.jpg",
      link: "/ozone-therapy",
    },
  ],
  showTitles = false,
  fullWidthMobile = false,
}: QuadrantCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)
  const minSwipeDistance = 50
  const maxVerticalDistance = 100 

  // Touch event handlers - solo per le aree laterali di swipe
  const handleSwipeTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleSwipeTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleSwipeTouchEnd = () => {
    const horizontalDistance = touchStartX.current - touchEndX.current
    const verticalDistance = Math.abs(touchStartY.current - touchEndY.current)

    if (Math.abs(horizontalDistance) > minSwipeDistance && verticalDistance < maxVerticalDistance) {
      if (horizontalDistance > 0) {

        handleNext()
      } else {
        handlePrev()
      }
    }
  }

  const getVisibleIndices = () => {
    const total = items.length
    return [
      (activeIndex - 1 + total) % total,
      activeIndex,
      (activeIndex + 1) % total,
    ]
  }

  // Handle automatic rotation
  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      timerRef.current = setTimeout(() => {
        handleNext()
      }, 6000)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [activeIndex, isPaused, isTransitioning])

  const handlePrev = () => {
    if (isTransitioning) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection("prev")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const handleNext = () => {
    if (isTransitioning) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection("next")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % items.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const handleItemClick = (index: number, e: React.MouseEvent) => {
    if (index === activeIndex || isTransitioning) return

    e.preventDefault()

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    setDirection(index > activeIndex ? "next" : "prev")
    setIsTransitioning(true)
    setActiveIndex(index)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div
      ref={carouselRef}
      className={`relative w-full h-[400px] overflow-hidden ${fullWidthMobile ? "max-w-none" : "max-w-4xl mx-auto"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setHoveredIndex(null)
      }}
    >
      {/* Aree di swipe laterali - MOLTO PIÙ PICCOLE per lasciare spazio al centro */}
      <div
        className="absolute left-0 top-0 w-8 h-full z-40 md:hidden"
        onTouchStart={handleSwipeTouchStart}
        onTouchMove={handleSwipeTouchMove}
        onTouchEnd={handleSwipeTouchEnd}
      />
      <div
        className="absolute right-0 top-0 w-8 h-full z-40 md:hidden"
        onTouchStart={handleSwipeTouchStart}
        onTouchMove={handleSwipeTouchMove}
        onTouchEnd={handleSwipeTouchEnd}
      />

      {/* Main carousel container with 3D perspective */}
      <div className="absolute inset-0 flex items-center justify-center perspective">
        {/* Render the three visible items */}
        {visibleIndices.map((itemIndex, positionIndex) => {
          const isCurrent = itemIndex === activeIndex
          const isHovered = itemIndex === hoveredIndex
          const position = positionIndex - 1 // -1 (prev), 0 (current), 1 (next)

          const xPosition = position * 100
          let zPosition = 0
          let scale = 1
          let opacity = 1
          let zIndex = 10
          const rotate = position * 8
          
          if (isCurrent) {
            zIndex = 20
            scale = 1
          } else {
            opacity = 0.7
            scale = 0.85
            zPosition = -150
          }

          // Adjust for hovered item - only apply special effects to current item
          if (isHovered && isCurrent) {
            scale = 1.08
          }

          // Determine if this item is being repositioned (moving from one edge to another)
          const isRepositioning =
            (direction === "next" && position === -1 && isTransitioning) ||
            (direction === "prev" && position === 1 && isTransitioning)

          return (
            <div
              key={itemIndex}
              className={`carousel-item absolute ${isCurrent ? "z-20" : "z-10"} ${
                isRepositioning ? "transition-none" : "transition-all duration-800"
              }`}
              style={{
                transform: `translateX(${xPosition}%) translateZ(${zPosition}px) rotateY(${rotate}deg) scale(${scale})`,
                opacity,
                zIndex,
                width: fullWidthMobile ? "90%" : "70%",
                height: isCurrent ? "350px" : "300px",
                transformOrigin: position < 0 ? "right center" : position > 0 ? "left center" : "center",
                transition: `transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.8s ease, height 0.8s ease`,
              }}
              onMouseEnter={() => setHoveredIndex(itemIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={items[itemIndex].link}
                className={`block w-full h-full relative rounded-xl overflow-hidden shadow-lg transition-shadow duration-500 ${
                  isHovered && isCurrent ? "shadow-xl" : ""
                }`}
                onClick={(e) => handleItemClick(itemIndex, e)}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <Image
                    src={items[itemIndex].image || "/placeholder.png"}
                    alt={items[itemIndex].title}
                    fill
                    unoptimized
                    className={`transition-transform duration-500 ${
                      items[itemIndex].image.includes("medlegale.jpg")
                        ? "object-cover object-[70%_center] md:object-bottom"
                        : items[itemIndex].image.includes("osteopic.jpg")
                          ? "object-cover object-bottom"
                          : items[itemIndex].image.includes("nuovaosteo1.jpg")
                            ? "object-cover object-[center_bottom]"
                            : items[itemIndex].image.includes("osteopatiacervicale.jpg")
                              ? "object-cover object-[center_bottom]"
                              : items[itemIndex].image.includes("osteopatiacervicale2.jpg")
                                ? "object-cover object-bottom"
                                : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={isCurrent}
                  />
                  {/* Enhanced overlay gradient for depth effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"
                    style={{
                      opacity: isCurrent ? 0.7 : 0.9,
                      transition: "opacity 0.5s ease",
                    }}
                  ></div>
                </div>
                {showTitles && !items[itemIndex].image.includes("placeholder") && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-center backdrop-blur-sm rounded-b-xl">
                    <h3
                      className={`${isCurrent ? "text-lg font-semibold" : "text-base font-medium"} transition-all duration-300`}
                    >
                      {items[itemIndex].title}
                    </h3>
                  </div>
                )}

                {/* Enhanced cascading reveal effect for next/prev items */}
                {!isCurrent && (
                  <div
                    className="absolute inset-0 bg-black transition-transform duration-700 rounded-xl"
                    style={{
                      transform: `translateX(${position < 0 ? "-80%" : "80%"})`,
                      opacity: 0.5,
                    }}
                  ></div>
                )}
              </Link>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 z-50 transition-all duration-300 shadow-lg hover:scale-110 touch-manipulation"
        aria-label="Slide precedente"
        disabled={isTransitioning}
        style={{ minWidth: "56px", minHeight: "56px" }}
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 z-50 transition-all duration-300 shadow-lg hover:scale-110 touch-manipulation"
        aria-label="Slide successiva"
        disabled={isTransitioning}
        style={{ minWidth: "56px", minHeight: "56px" }}
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Indicator dots - with added shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30 pb-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`rounded-full transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.4)] ${
              index === activeIndex ? "bg-white w-5 h-3" : "bg-white/70 w-3 h-3"
            }`}
            onClick={() => {
              if (!isTransitioning && index !== activeIndex) {
                setDirection(index > activeIndex ? "next" : "prev")
                setActiveIndex(index)
                setIsTransitioning(true)
                setTimeout(() => setIsTransitioning(false), 800)
              }
            }}
          />
        ))}
      </div>
    </div>
  )
}
