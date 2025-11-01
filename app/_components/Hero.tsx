import React from "react";

import { ArrowRight, Pencil, Users, Zap } from "lucide-react";

// Hero Component
const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#00172d] pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center pb-8 sm:pb-12 lg:pb-14">
          <div className="text-white text-center border border-white/30 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all">
            See What's New |{" "}
            <span className="text-cyan-400 font-semibold"> AI Diagram</span>
          </div>
        </div>

        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            The Whiteboard for
            <span className="block sm:inline bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Engineering Teams
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Create diagrams, wireframes, and architecture designs in a
            collaborative space built for engineering teams.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 sm:pt-6">
            <button className="group bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              Try Eraser for Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;