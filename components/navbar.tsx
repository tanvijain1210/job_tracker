import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <BriefcaseBusiness className="h-5 w-5 text-primary-fg" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Job <span className="text-primary">Application Tracker</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm  font-medium text-foreground-muted hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors">
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="text-foreground-muted hover:text-foreground">
              SignIn
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-grey text-primary-fg hover:bg-primary-hover shadow-md shadow-primary/20">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}