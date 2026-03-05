export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/20">
      <main className="flex-1 flex items-center justify-center">
        <section className="container mx-auto px-4 py-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Badge - Using Accent color */}
            <span className="mb-6 px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-semibold tracking-wide">
              New: AI-Powered Resume Tailoring
            </span>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground">
              Master your <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                career search.
              </span>
            </h1>

            <p className="mt-8 text-xl text-foreground-muted max-w-2xl leading-relaxed">
              The organized way to track job applications, follow-ups, and networking. 
              Build your pipeline and land your dream role.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
              <button className="px-10 py-4 bg-white text-primary-fg font-bold rounded-xl shadow-xl shadow-primary/25 hover:bg-primary-hover hover:-translate-y-1 transition-all">
                Get Started Free
              </button>
              
        
            </div>

            <p className="mt-8 text-sm text-foreground-subtle font-medium">
              No credit card required.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}