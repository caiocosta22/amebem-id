import { Heart } from "lucide-react";

export default function Cover() {
  return (
    <div className="h-full min-h-0 w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#076C36] to-[#095a2d] text-white relative overflow-hidden print:overflow-visible print:min-h-[240mm] print:py-10">
      {/* Decorative circles */}
      <div className="absolute top-12 right-4 w-40 h-40 sm:top-20 sm:right-20 sm:w-64 sm:h-64 rounded-full bg-[#95CC17] opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-4 w-56 h-56 sm:bottom-20 sm:left-20 sm:w-96 sm:h-96 rounded-full bg-[#95CC17] opacity-10 blur-3xl pointer-events-none" />

      <div className="z-10 text-center max-w-4xl px-6 sm:px-8 pt-2 pb-8 sm:pb-0">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
            <Heart
              className="w-12 h-12 sm:w-16 sm:h-16 text-white transform rotate-45"
              fill="white"
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
          Identidade Visual
        </h1>

        <div className="w-16 sm:w-24 h-1 bg-[#95CC17] mx-auto mb-6 sm:mb-8" />

        <p className="text-2xl sm:text-3xl mb-3 sm:mb-4 font-light">AMEBEM</p>

        <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
          Transformando vidas através da solidariedade cristã em Fortaleza
        </p>

        <div className="mt-10 sm:mt-16 text-xs sm:text-sm opacity-70">
          Manual de Identidade Visual · 2026
        </div>
      </div>
    </div>
  );
}