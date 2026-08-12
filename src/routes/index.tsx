import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Layers } from "lucide-react";
import heroImage from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio — Design for the Modern Web" },
      { name: "description", content: "A modern creative studio crafting digital experiences with clarity and purpose." },
      { property: "og:title", content: "Studio — Design for the Modern Web" },
      { property: "og:description", content: "A modern creative studio crafting digital experiences with clarity and purpose." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--d50beb36-b0d0-49b5-ae04-683fd9127f67.lovable.app/hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--d50beb36-b0d0-49b5-ae04-683fd9127f67.lovable.app/hero.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold tracking-tight">
            Studio
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">Work</a>
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Now booking for Q3 2026
              </div>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                Design that feels inevitable.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                We build digital products, brands, and websites for teams who want clarity, craft, and a little bit of magic.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-accent"
                >
                  View our work
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p>Trusted by 40+ fast-moving teams</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-primary/5">
                <img
                  src={heroImage}
                  alt="Abstract modern shapes representing digital craft"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">2x faster delivery</p>
                    <p className="text-xs text-muted-foreground">Compared to traditional agencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-border bg-muted/50">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to ship something great.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From first concept to final pixel, we handle the hard parts so your team can focus on what matters.
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Layers, title: "Product Design", description: "End-to-end UX and UI for web and mobile apps." },
                { icon: Globe, title: "Brand & Web", description: "Identities, websites, and design systems that scale." },
                { icon: Zap, title: "Prototyping", description: "High-fidelity prototypes and proof-of-concepts." },
                { icon: Shield, title: "Design Systems", description: "Reusable components and tokens your team can own." },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-card-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected work.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A few projects that show the range of what we can build together.
              </p>
            </div>
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              See all projects
            </a>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { name: "Payflow", category: "Fintech App", color: "bg-secondary/60" },
              { name: "Northwind", category: "E-commerce", color: "bg-primary/10" },
              { name: "Lumina", category: "AI Platform", color: "bg-accent" },
              { name: "Terra", category: "Sustainability Brand", color: "bg-muted" },
            ].map((project) => (
              <div
                key={project.name}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className={`aspect-[16/10] w-full ${project.color} transition-transform duration-500 group-hover:scale-105`} />
                <div className="p-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-card-foreground">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  We believe design is a team sport.
                </h2>
              </div>
              <div className="space-y-6 text-lg opacity-90">
                <p>
                  Studio is a small collective of designers and developers who have shipped products at companies you have heard of.
                </p>
                <p>
                  We do not do handoffs and disappear. We embed with your team, move fast, and leave you with something you can actually maintain.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-base font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  Meet the team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="rounded-3xl border border-border bg-muted/50 p-8 md:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready to build something great?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us what you are working on and we will get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@studio.design"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                hello@studio.design
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground">© 2026 Studio. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">Twitter</a>
              <a href="#" className="transition-colors hover:text-foreground">LinkedIn</a>
              <a href="#" className="transition-colors hover:text-foreground">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
