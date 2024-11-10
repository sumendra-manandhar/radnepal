import { AnimatedModal } from "@/components/AnimatedModal";
import { DragCards } from "@/components/DragCards";
import { HoverImageLinks } from "@/components/HoverImageLinks";

// import { NavbarTop } from "@/components/Navbar";
import Profilers from "@/components/Profilers";
import Shuffle from "@/components/Shuffle";
import { SmoothScrollHero } from "@/components/SmoothScrollHero";
import Testimonials from "@/components/Testimonials";
import { AppleCardsCarouselDemo } from "@/components/ui/applecard";
// import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Cover } from "@/components/ui/cover";
import { LinkPreview } from "@/components/ui/link-preview";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
          </p>
        </div>
      </BackgroundGradientAnimation> */}

      <div>
        {/* <NavbarTop /> */}

        <div className="h-[90vh] w-full  rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Spotlight <br /> is the new trend.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Spotlight effect is a great way to draw attention to a specific
              part of the page. Here, we are drawing the attention towards the
              text section of the page. I don&apos;t know why but I&apos;m
              running out of copy.
            </p>
          </div>
        </div>
        <Shuffle />
        <DragCards />
        <HoverImageLinks />

        <SmoothScrollHero />
        <AnimatedModal />
        <AppleCardsCarouselDemo />

        <Profilers />
        <Testimonials />

        <div className=" h-[50vh]">
          <h1
            className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700
        
           "
          >
            Build amazing websites <br /> at <Cover>warp speed</Cover>
          </h1>
        </div>
      </div>

      <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
          <span>Shooting Star</span>
          <span className="text-white text-lg font-thin">x</span>
          <span>Star Background</span>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="flex justify-center items-center h-[40rem] flex-col px-4  bg-neutral-900 ">
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          <LinkPreview url="https://tailwindcss.com" className="font-bold">
            Tailwind CSS
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview url="https://framer.com/motion" className="font-bold">
            Framer Motion
          </LinkPreview>{" "}
          are a great way to build modern websites.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
          Visit{" "}
          <LinkPreview
            url="https://ui.aceternity.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Aceternity UI
          </LinkPreview>{" "}
          for amazing Tailwind and Framer Motion components.
        </p>
      </div>
    </>
  );
}
