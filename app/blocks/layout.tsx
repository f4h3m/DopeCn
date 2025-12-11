import { BlocksSidebar } from "@/components/blocks-sidebar"

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <BlocksSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

