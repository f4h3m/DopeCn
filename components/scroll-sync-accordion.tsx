"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image, { StaticImageData } from "next/image"

interface ScrollSyncAccordionProps {
  images: StaticImageData[]
  accordionItems: {
    id: string
    title: string
    content: React.ReactNode
  }[]
}

export function ScrollSyncAccordion({ images, accordionItems }: ScrollSyncAccordionProps) {
  const [activeTab, setActiveTab] = useState("item-1")
  const imageRefs = useRef<(HTMLLIElement | null)[]>([])
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update if we're programmatically scrolling
        if (isScrollingRef.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLLIElement)
            if (index !== -1) {
              setActiveTab(`item-${index + 1}`)
            }
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    const currentRefs = imageRefs.current
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const handleAccordionChange = (value: string) => {
    setActiveTab(value)
    
    // Extract index from accordion ID (e.g., "item-1" -> 0, "item-2" -> 1)
    const match = value.match(/item-(\d+)/)
    if (match) {
      const index = parseInt(match[1], 10) - 1
      const imageElement = imageRefs.current[index]
      
      if (imageElement) {
        isScrollingRef.current = true
        imageElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
        
        // Reset the flag after scrolling completes
        setTimeout(() => {
          isScrollingRef.current = false
        }, 1000)
      }
    }
  }

  return (
    <div className="flex flex-1 gap-8">
      <div className="w-4/12 sticky top-8 h-fit">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={activeTab}
          onValueChange={handleAccordionChange}
        >
          {accordionItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-2xl font-bold cursor-pointer">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-8/12 relative h-full">
        <ul className="flex flex-col gap-8">
          {images.map((image, index) => (
            <li
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el
              }}
            >
              <Image
                src={image}
                alt="Product Image"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

