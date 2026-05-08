import {
  Heart,
  Smartphone,
  FileText,
  Mail,
  Share2,
  ShoppingBag,
} from "lucide-react";

export default function Applications() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">
            Aplicações
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Exemplos práticos de uso da identidade visual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 sm:mb-12">
          {/* Cartão de Visita */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                Cartão de Visita
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-xl p-8 aspect-[1.75/1] flex flex-col justify-between text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart
                    className="w-6 h-6 transform rotate-45"
                    fill="white"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">AMEBEM</p>
                  <p className="text-xs text-[#95CC17]">ONG</p>
                </div>
              </div>

              <div className="text-sm space-y-1">
                <p className="font-bold">Pe. João Silva</p>
                <p className="text-xs opacity-90">
                  Coordenador
                </p>
                <p className="text-xs opacity-80 mt-2">
                  (85) 99999-9999
                </p>
                <p className="text-xs opacity-80">
                  contato@amebem.org.br
                </p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-6">
              <Share2 className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                Redes Sociais
              </h3>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-[#076C36] to-[#095a2d] relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-[#95CC17] opacity-20 blur-2xl" />
                <div>
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center">
                    <Heart
                      className="w-10 h-10 text-white transform rotate-45"
                      fill="white"
                    />
                  </div>
                  <p className="text-white text-center font-bold text-2xl">
                    AMEBEM
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-600">
                  Transformando vidas através da solidariedade
                  ✨
                </p>
              </div>
            </div>
          </div>

          {/* E-mail */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                Assinatura de E-mail
              </h3>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 rounded-full bg-[#076C36] flex items-center justify-center flex-shrink-0">
                  <Heart
                    className="w-8 h-8 text-white transform rotate-45"
                    fill="white"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#076C36] text-lg">
                    João Silva
                  </p>
                  <p className="text-sm text-gray-600">
                    Coordenador
                  </p>
                  <p className="text-sm font-bold text-[#076C36] mt-1">
                    ONG AMEBEM
                  </p>
                </div>
              </div>
              <div className="pt-4 text-xs text-gray-600 space-y-1">
                <p>📞 (85) 99999-9999</p>
                <p>✉️ joao@amebem.org.br</p>
                <p className="text-[#95CC17]">
                  🌐 www.amebem.org.br
                </p>
              </div>
            </div>
          </div>

          {/* App Mobile */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                App Mobile
              </h3>
            </div>

            <div className="bg-white rounded-3xl p-4 shadow-2xl border-8 border-gray-900 max-w-[200px] mx-auto">
              <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-2xl p-6 text-white text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                  <Heart
                    className="w-8 h-8 transform rotate-45"
                    fill="white"
                  />
                </div>
                <p className="font-bold mb-1">Doar Agora</p>
                <p className="text-xs opacity-80">
                  Faça a diferença
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <div className="bg-[#F7F7F7] rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#95CC17]" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
                <div className="bg-[#F7F7F7] rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#076C36]" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-300 rounded w-full mb-1" />
                    <div className="h-2 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Camiseta */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                Camiseta
              </h3>
            </div>

            <div className="relative">
              <div className="w-full aspect-square bg-[#076C36] rounded-2xl flex items-center justify-center">
                <div className="text-center px-2">
                  <Heart
                    className="w-24 h-24 sm:w-32 sm:h-32 text-white mx-auto mb-4 transform rotate-45"
                    fill="white"
                  />
                  <p className="text-white font-bold text-xl sm:text-2xl">
                    AMEBEM
                  </p>
                  <p className="text-[#95CC17] text-sm mt-2">
                    Transformando vidas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#076C36]" />
              <h3 className="text-xl font-bold text-[#076C36]">
                Banner Digital
              </h3>
            </div>

            <div className="bg-gradient-to-r from-[#076C36] via-[#095a2d] to-[#076C36] rounded-xl p-5 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#95CC17] opacity-20 blur-3xl" />
              <div className="relative z-10 text-white">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Heart
                      className="w-7 h-7 sm:w-8 sm:h-8 transform rotate-45"
                      fill="white"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xl sm:text-2xl font-bold">
                      Seja um Doador
                    </p>
                    <p className="text-[#95CC17]">
                      Transforme vidas em Fortaleza
                    </p>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  Juntos podemos fazer mais por quem precisa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-3xl p-6 sm:p-10 md:p-12 text-center text-white relative overflow-hidden brand-print-avoid-break">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#95CC17] opacity-10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#95CC17] opacity-10 blur-3xl" />

          <div className="relative z-10">
            <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center">
              <Heart
                className="w-12 h-12 transform rotate-45"
                fill="white"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Use com Amor
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Esta identidade visual representa nossa missão de
              transformar vidas. Use-a com responsabilidade e
              carinho para expandir nossa rede de doadores e
              alcançar ainda mais pessoas que precisam de apoio.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 text-sm sm:flex-row sm:items-center sm:gap-4 max-w-md mx-auto sm:max-w-none">
              <div className="bg-white/10 px-5 py-3 rounded-full backdrop-blur text-center">
                Manual de Identidade Visual 2026
              </div>
              <div className="bg-[#95CC17] text-[#076C36] px-5 py-3 rounded-full font-bold text-center">
                ONG AMEBEM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}