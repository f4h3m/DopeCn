import { Button } from "@/registry/new-york/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/5 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 animate-in fade-in slide-in-from-top-8 duration-1000">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Welcome to DopeCn</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-top-8 duration-1000 delay-100">
          Build Amazing Components
          <span className="block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            with DopeCn
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-top-8 duration-1000 delay-200">
          A modern component registry built with Next.js, React, and Tailwind CSS. Create, customize, and share beautiful UI components.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-top-8 duration-1000 delay-300">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border animate-in fade-in slide-in-from-top-8 duration-1000 delay-500">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
            <p className="text-sm text-muted-foreground mt-1">Components</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground mt-1">Open Source</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary">Fast</div>
            <p className="text-sm text-muted-foreground mt-1">Performance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

