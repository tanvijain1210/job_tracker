import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1"></main>
      <section className="container mx-auto px-4 py-32">
        <div ><h1 className="text-black">A better way to track your jobs</h1>
        <p className="text-black">Capture, organize, and manage your job applications with ease.</p>
        <div className="flex flex-col items-center gap-4">
        <button>Start for free</button>
        <p> Free forever. No credit card requored</p></div></div>
      </section>
    </div>
  );
}
