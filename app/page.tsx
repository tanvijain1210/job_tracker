import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/20 overflow-hidden">
      
      
      {/* 1. Background Ambient Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <main className="flex-1 flex items-center justify-center">
        <section className="container mx-auto px-4 py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* 2. Floating Badge */}
            <div className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
              <Sparkles className="w-4 h-4" />
              <span>New: AI-Powered Resume Tailoring</span>
            </div>

            {/* 3. Hero Typography */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-[1.1]">
              Master your <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                career search.
              </span>
            </h1>

            <p className="mt-8 text-xl text-foreground-muted max-w-2xl leading-relaxed">
              The organized way to track job applications, follow-ups, and networking. 
              Build your pipeline and land your dream role.
            </p>

            {/* 4. Action Buttons (Fixed Link Syntax) */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
              <Link href="/sign-up"> 
                <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/25 transition-all hover:scale-105 active:scale-95">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
            </div>

            {/* 5. Micro-copy */}
            <p className="mt-10 text-sm text-foreground-subtle font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse" />
              Free forever. No credit card required.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}