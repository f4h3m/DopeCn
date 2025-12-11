"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"

interface ShowcaseItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  logo?: string
  preview: {
    name: string
    value: string
    image?: StaticImageData
  }
}

interface ComponentShowcaseProps {
  items: ShowcaseItem[]
}

export function ComponentShowcase({ items }: ComponentShowcaseProps) {
  const [selectedItem, setSelectedItem] = useState(items[0]?.id || "")
  const [imageLoaded, setImageLoaded] = useState(false)

  const currentItem = items.find(item => item.id === selectedItem) || items[0]

  // Reset image loaded state when item changes
  React.useEffect(() => {
    setImageLoaded(false)
  }, [selectedItem])

  return (
    <div className="flex gap-6 h-full">
      {/* Left Sidebar */}
      <div className="w-80 flex-shrink-0">
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className={cn(
                "w-full text-left p-4 rounded-lg transition-all duration-200",
                "hover:bg-accent/50",
                selectedItem === item.id
                  ? "bg-accent border border-border shadow-sm"
                  : "bg-transparent"
              )}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200",
                  selectedItem === item.id 
                    ? "bg-primary/10 text-primary" 
                    : "bg-muted text-muted-foreground"
                )}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm transition-colors duration-200">{item.title}</h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      selectedItem === item.id
                        ? "max-h-32 opacity-100 mt-1"
                        : "max-h-0 opacity-0 mt-0"
                    )}
                  >
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Preview Area - Image Only */}
      {currentItem.preview.image && (
        <div className="flex-1 relative transition-all duration-300 min-h-[400px]">
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-border">
            <Image
              src={currentItem.preview.image}
              alt={currentItem.title}
              fill
              className={cn(
                "object-cover transition-opacity duration-500 ease-in-out",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

