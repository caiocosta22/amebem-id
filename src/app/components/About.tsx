import { Heart, Users, HandHeart, Target } from "lucide-react";

export default function About() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">
            Sobre a ONG
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
          <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] p-6 sm:p-8 rounded-2xl text-white brand-print-avoid-break">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center mb-5 sm:mb-6">
              <Target className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Missão</h3>
            <p className="text-base sm:text-lg leading-relaxed opacity-95">
              Acolher e amparar pessoas em situação de
              vulnerabilidade social nas ruas de Fortaleza,
              oferecendo dignidade, alimentação, cuidado e
              esperança através dos valores cristãos de amor ao
              próximo e solidariedade.
            </p>
          </div>

          <div className="bg-[#95CC17] p-6 sm:p-8 rounded-2xl text-[#076C36] brand-print-avoid-break">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/40 flex items-center justify-center mb-5 sm:mb-6">
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 rotate-45 transform" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Visão</h3>
            <p className="text-base sm:text-lg leading-relaxed">
              Ser referência em acolhimento social em Fortaleza, expandindo nossa
              rede de doadores e voluntários para alcançar cada vez mais pessoas
              que necessitam de amor, cuidado e uma nova oportunidade de vida.
              Acreditamos que o alimento espiritual é o fundamento de toda
              transformação.
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-5 sm:p-8 rounded-2xl">
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#076C36] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#076C36]">
              Valores
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6">
            <div className="text-center brand-print-avoid-break">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#076C36] mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h4 className="font-bold text-[#076C36] mb-2 text-sm sm:text-base">
                Amor Fraterno
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Seguindo os ensinamentos cristãos de amar ao próximo como a si
                mesmo
              </p>
            </div>

            <div className="text-center brand-print-avoid-break">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#95CC17] mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-[#076C36] rotate-45 transform" />
              </div>
              <h4 className="font-bold text-[#076C36] mb-2 text-sm sm:text-base">
                Compaixão
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Enxergar Cristo em cada pessoa que atendemos
              </p>
            </div>

            <div className="text-center brand-print-avoid-break">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#076C36] mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h4 className="font-bold text-[#076C36] mb-2 text-sm sm:text-base">
                Comunidade
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Unir fiéis e sociedade em prol do bem comum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}