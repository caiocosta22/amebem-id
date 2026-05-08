import { Check, X, Heart } from "lucide-react";

export default function UsageManual() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">
            Manual de Uso
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Diretrizes para aplicação correta da identidade
            visual
          </p>
        </div>

        {/* O que fazer */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#076C36] flex items-center justify-center shrink-0">
              <Check
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                strokeWidth={3}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36]">
              Fazer
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <Heart
                  className="w-24 h-24 text-[#076C36] transform rotate-45"
                  fill="#076C36"
                />
              </div>
              <div className="flex items-center gap-2 text-[#076C36]">
                <Check className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Manter proporções</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Sempre redimensione proporcionalmente
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 brand-print-avoid-break">
              <div className="bg-[#076C36] rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <Heart
                  className="w-24 h-24 text-white transform rotate-45"
                  fill="white"
                />
              </div>
              <div className="flex items-center gap-2 text-[#076C36]">
                <Check className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">
                  Usar versões aprovadas
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Utilize apenas as variações oficiais
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[200px] sm:min-h-[200px] relative">
                <div className="absolute inset-0 border-4 border-[#95CC17] rounded-xl m-12" />
                <Heart
                  className="w-20 h-20 text-[#076C36] transform rotate-45 mt-4"
                  fill="#076C36"
                />
              </div>
              <div className="flex items-center gap-2 text-[#076C36]">
                <Check className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">
                  Respeitar área de proteção
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Mantenha o espaço mínimo ao redor
              </p>
            </div>
          </div>
        </div>

        {/* O que não fazer */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-500 flex items-center justify-center shrink-0">
              <X
                className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                strokeWidth={3}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36]">
              Não Fazer
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <Heart
                  className="w-32 h-16 text-[#076C36] transform rotate-45"
                  fill="#076C36"
                />
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Distorcer a logo</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Nunca altere as proporções
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <div className="rotate-12">
                  <Heart
                    className="w-24 h-24 text-purple-500 transform rotate-45"
                    fill="purple"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Mudar cores</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Use apenas a paleta oficial
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <div className="opacity-30">
                  <Heart
                    className="w-24 h-24 text-[#076C36] transform rotate-45"
                    fill="#076C36"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Reduzir opacidade</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Mantenha 100% de opacidade sempre
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <Heart
                  className="w-24 h-24 text-white transform rotate-45"
                  fill="white"
                />
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Fundos inadequados</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Evite fundos que comprometam a legibilidade
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <div className="border-8 border-blue-500 p-4">
                  <Heart
                    className="w-16 h-16 text-[#076C36] transform rotate-45"
                    fill="#076C36"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Adicionar efeitos</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Não use sombras, contornos ou efeitos
              </p>
            </div>

            <div className="bg-[#F7F7F7] rounded-2xl p-4 sm:p-6 opacity-60 brand-print-avoid-break">
              <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 flex items-center justify-center min-h-[160px] sm:min-h-[200px]">
                <div className="transform rotate-45">
                  <Heart
                    className="w-24 h-24 text-[#076C36] transform rotate-45"
                    fill="#076C36"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <X className="w-5 h-5" strokeWidth={3} />
                <p className="font-bold">Rotacionar</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Mantenha sempre na horizontal
              </p>
            </div>
          </div>
        </div>

        {/* Tamanhos mínimos */}
        <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-2xl p-5 sm:p-8 text-white brand-print-avoid-break">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Tamanhos Mínimos
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-sm uppercase tracking-wider opacity-80 mb-4">
                Digital
              </p>
              <div className="bg-white/10 rounded-xl p-8 flex items-center justify-center mb-4">
                <Heart
                  className="w-12 h-12 text-white transform rotate-45"
                  fill="white"
                />
              </div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-[#95CC17]">
                  48px
                </span>
                <span className="text-lg opacity-80">
                  de altura
                </span>
              </div>
              <p className="text-sm opacity-80 mt-2">
                Para interfaces web, apps e redes sociais
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider opacity-80 mb-4">
                Impresso
              </p>
              <div className="bg-white/10 rounded-xl p-8 flex items-center justify-center mb-4">
                <Heart
                  className="w-16 h-16 text-white transform rotate-45"
                  fill="white"
                />
              </div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-[#95CC17]">
                  15mm
                </span>
                <span className="text-lg opacity-80">
                  de altura
                </span>
              </div>
              <p className="text-sm opacity-80 mt-2">
                Para materiais gráficos e impressos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}