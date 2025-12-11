import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 gap-8">
        <div className="flex flex-col gap-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to DopeCN
          </h1>
          <p className="text-lg text-muted-foreground">
            A modern UI component library built with shadcn/ui
          </p>
          <p className="text-muted-foreground">
            Beautiful, accessible, and customizable components for your React applications.
            Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
          <a
            href="/blocks"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View Components
          </a>
          <a
            href="https://github.com/f4h3m/DopeCN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
