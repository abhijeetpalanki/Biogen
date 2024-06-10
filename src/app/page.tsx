import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { BioProvider } from "@/context/BioContext";

import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className="col-span-full group w-full flex flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
        <Link
          href="https://github.com/abhijeetpalanki/Biogen"
          target="_blank"
          className=""
        >
          <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star className="w-6 h-6 fill-yellow-300 text-yellow-400" />
            <hr className="mx-2 h-4 w-px bg-gray-300" />
            Star on GitHub
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </Link>
        <h1 className="font-extrabold uppercase text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] mx-auto pt-4">
          Craft the perfect bio in seconds!
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-accent">
          Just answer a few questions, and we'll generate a bio that captures
          who you are.
        </p>
      </div>

      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
  );
}
