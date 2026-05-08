import {
  Heart,
  Users,
  HandHeart,
  Home,
  Utensils,
  BookHeart,
} from "lucide-react";

export default function GraphicElements() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">
            Elementos Gráficos
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Componentes visuais que reforçam a identidade da
            marca
          </p>
        </div>

        {/* Iconografia */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36] mb-5 sm:mb-6">
            Iconografia
          </h3>
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8">
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Utilize ícones simples, arredondados e
              acolhedores. Preferência por linhas suaves que
              transmitam calor humano e acessibilidade.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white transform rotate-45" />
                </div>
                <p className="text-sm text-gray-600">Amor</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">
                  Comunidade
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <HandHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">Cuidado</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <Home className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">Abrigo</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <Utensils className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">
                  Alimentação
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#076C36] mx-auto mb-3 flex items-center justify-center">
                  <BookHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <p className="text-sm text-gray-600">Fé</p>
              </div>
            </div>
          </div>
        </div>

        {/* Padrões */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36] mb-5 sm:mb-6">
            Padrões Gráficos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 relative overflow-hidden min-h-[160px]">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(16)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-12 h-12 text-[#076C36] transform rotate-45"
                      fill="#076C36"
                    />
                  ))}
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-wider text-[#076C36] mb-2">
                  Padrão 1
                </p>
                <h4 className="text-xl font-bold text-[#076C36] mb-3">
                  Corações em Grade
                </h4>
                <p className="text-sm text-gray-600">
                  Para fundos institucionais e materiais
                  impressos
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-2xl p-5 sm:p-8 relative overflow-hidden min-h-[160px]">
              <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#95CC17] opacity-20 blur-3xl" />
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#95CC17] opacity-10 blur-3xl" />
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-wider text-white/80 mb-2">
                  Padrão 2
                </p>
                <h4 className="text-xl font-bold text-white mb-3">
                  Gradiente Orgânico
                </h4>
                <p className="text-sm text-white/80">
                  Para banners digitais e conteúdo de redes
                  sociais
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formas e Elementos */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36] mb-5 sm:mb-6">
            Formas e Elementos
          </h3>
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
              <div className="text-center">
                <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-[#076C36] to-[#095a2d] mb-4" />
                <p className="text-sm text-gray-600">
                  Bordas arredondadas
                </p>
                <p className="text-xs text-gray-500">
                  Border radius: 24px
                </p>
              </div>

              <div className="text-center">
                <div className="w-full aspect-square rounded-full bg-[#95CC17] mb-4" />
                <p className="text-sm text-gray-600">
                  Círculos
                </p>
                <p className="text-xs text-gray-500">
                  Para ícones e avatares
                </p>
              </div>

              <div className="text-center">
                <div className="w-full aspect-square bg-gradient-to-br from-[#076C36] via-[#095a2d] to-[#95CC17] rounded-2xl mb-4" />
                <p className="text-sm text-gray-600">
                  Gradientes suaves
                </p>
                <p className="text-xs text-gray-500">
                  Verde escuro → claro
                </p>
              </div>

              <div className="text-center">
                <div className="w-full aspect-square rounded-2xl border-4 border-[#076C36] mb-4 flex items-center justify-center">
                  <Heart
                    className="w-16 h-16 text-[#076C36] transform rotate-45"
                    fill="#076C36"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Molduras
                </p>
                <p className="text-xs text-gray-500">
                  4px sólido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fotografia */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#076C36] mb-5 sm:mb-6">
            Estilo Fotográfico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8">
              <h4 className="text-lg sm:text-xl font-bold text-[#076C36] mb-4">
                Características
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p className="text-gray-700">
                    Imagens humanas e autênticas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p className="text-gray-700">
                    Foco em rostos e emoções genuínas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p className="text-gray-700">
                    Iluminação natural e calorosa
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p className="text-gray-700">
                    Tons levemente aquecidos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p className="text-gray-700">
                    Mostrar a ação e o impacto real
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-2xl p-5 sm:p-8 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-4">
                Tratamento
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p>Overlays sutis com verde da marca</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p>Bordas arredondadas em todas as imagens</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p>Evitar filtros pesados ou artificiais</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p>Respeitar a dignidade das pessoas</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#95CC17] mt-2" />
                  <p>Sempre solicitar autorização de uso</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}