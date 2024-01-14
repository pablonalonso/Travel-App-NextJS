import Camp from "@/components/Camp";
import Features from "@/components/Features";
import App from "@/components/App";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <App />
    </div>
  )
}