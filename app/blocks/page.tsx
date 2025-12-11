"use client"

import image1 from "@/public/slide1.jpg"
import image2 from "@/public/slide2.jpg"
import image3 from "@/public/slider3.jpg"
import { ScrollSyncAccordion } from "@/components/scroll-sync-accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function BlocksPage() {
  const accordionItems = [
    {
      id: "item-1",
      title: "Product Information",
      content: (
        <>
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </>
      ),
    },
    {
      id: "item-2",
      title: "Shipping Details",
      content: (
        <>
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </>
      ),
    },
    {
      id: "item-3",
      title: "Return Policy",
      content: (
        <>
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </>
      ),
    },
  ]

  const images = [image1, image2, image3]

  return (
    <div className="flex flex-col px-8 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Sync Accordion</h1>
        <p className="text-muted-foreground text-sm">
          An interactive gallery with synchronized accordion navigation
        </p>
      </header>
      <div className="rounded-lg border border-border bg-card p-8">
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <ScrollSyncAccordion images={images} accordionItems={accordionItems} />
        </ScrollArea>
      </div>
    </div>
  )
}
