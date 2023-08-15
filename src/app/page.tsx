import HeroSection from 'codeplay/components/Hero.component'
import Navigation from 'codeplay/components/Navigation.component'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-36">
      <Navigation />
      <HeroSection />
    </main>
  )
}
