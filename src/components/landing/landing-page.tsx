'use client'

import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Industries } from "@/components/landing/industries";
import { Marquee } from "@/components/landing/marquee";
import { Navbar } from "@/components/landing/navbar";
import { Packages } from "@/components/landing/packages";
import { Portfolio } from "@/components/landing/portfolio";
import { Services } from "@/components/landing/services";
import { Stats } from "@/components/landing/stats";
import { Team } from "@/components/landing/team";
import { Testimonials } from "@/components/landing/testimonials";
import { WhyChooseUs } from "@/components/landing/why-choose-us";

export function LandingPage() {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-clip bg-background text-white"
    >
      <div className="hidden lg:block">
        {/* <CursorGlow /> */}
      </div>

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Industries />
        {/* <Packages /> */}
        {/* <AdditionalServices /> */}
        <WhyChooseUs />
        <Portfolio />
        <Team />
        {/* <Testimonials /> */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
