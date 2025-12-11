"use client"

import { ComponentShowcase } from "@/components/component-showcase"
import { Send, Code, ShoppingCart, Grid3x3 } from "lucide-react"
import image1 from "@/public/slide1.jpg"
import image2 from "@/public/slide2.jpg"
import image3 from "@/public/slider3.jpg"

export default function ComponentShowcasePage() {
  const showcaseItems = [
    {
      id: "webflow",
      title: "Feeds for Webflow",
      description: "Add attributes to your Webflow structure and bring any layout to life in seconds.",
      icon: <span className="text-lg font-bold">W</span>,
      logo: "W",
      preview: {
        name: "feed-field",
        value: "avatar",
        image: image1,
      },
    },
    {
      id: "framer",
      title: "Feeds For Framer",
      description: "Seamlessly integrate dynamic content feeds into your Framer designs with ease.",
      icon: <Send className="h-5 w-5" />,
      preview: {
        name: "feed-field",
        value: "content",
        image: image2,
      },
    },
    {
      id: "developers",
      title: "Feeds for Developers",
      description: "Powerful API and SDK for developers to build custom feed integrations.",
      icon: <Code className="h-5 w-5" />,
      preview: {
        name: "api-endpoint",
        value: "reviews",
        image: image3,
      },
    },
    {
      id: "unlimited",
      title: "Connect Unlimited Feeds",
      description: "Connect as many feeds as you need without any restrictions or limits.",
      icon: <ShoppingCart className="h-5 w-5" />,
      preview: {
        name: "feed-count",
        value: "unlimited",
        image: image1,
      },
    },
    {
      id: "integrations",
      title: "Instagram, Google Reviews & More",
      description: "Connect to Instagram, Google Reviews, and dozens of other platforms.",
      icon: <Grid3x3 className="h-5 w-5" />,
      preview: {
        name: "platform",
        value: "instagram",
        image: image2,
      },
    },
  ]

  return (
    <div className="flex flex-col px-8 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Component Showcase</h1>
        <p className="text-muted-foreground text-sm">
          Interactive component preview with selectable items and live preview
        </p>
      </header>
      <div className="rounded-lg border border-border bg-card p-8">
        <ComponentShowcase items={showcaseItems} />
      </div>
    </div>
  )
}

