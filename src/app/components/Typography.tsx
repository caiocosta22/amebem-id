export default function Typography() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">Tipografia</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Fontes que comunicam clareza, acessibilidade e profissionalismo
          </p>
        </div>

        {/* Fonte Principal */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 brand-print-avoid-break">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#076C36] mb-2">
                  Fonte Principal
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#076C36]">Inter</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md">Títulos, subtítulos e destaques</p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div>
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#076C36] break-words">
                  Amor ao Próximo
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Bold · 60px · Títulos principais</p>
              </div>

              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#076C36] break-words">
                  Transformando vidas
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Semibold · 36px · Subtítulos</p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-medium text-[#076C36] break-words">
                  Solidariedade em ação
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Medium · 24px · Seções</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            <div className="bg-[#076C36] text-white p-4 sm:p-6 rounded-xl text-center">
              <p className="text-2xl sm:text-4xl font-bold mb-2">Aa</p>
              <p className="text-[10px] sm:text-xs">Bold</p>
              <p className="text-[10px] sm:text-xs opacity-70">700</p>
            </div>
            <div className="bg-[#076C36] text-white p-4 sm:p-6 rounded-xl text-center">
              <p className="text-2xl sm:text-4xl font-semibold mb-2">Aa</p>
              <p className="text-[10px] sm:text-xs">Semibold</p>
              <p className="text-[10px] sm:text-xs opacity-70">600</p>
            </div>
            <div className="bg-[#076C36] text-white p-4 sm:p-6 rounded-xl text-center">
              <p className="text-2xl sm:text-4xl font-medium mb-2">Aa</p>
              <p className="text-[10px] sm:text-xs">Medium</p>
              <p className="text-[10px] sm:text-xs opacity-70">500</p>
            </div>
            <div className="bg-[#076C36] text-white p-4 sm:p-6 rounded-xl text-center">
              <p className="text-2xl sm:text-4xl font-normal mb-2">Aa</p>
              <p className="text-[10px] sm:text-xs">Regular</p>
              <p className="text-[10px] sm:text-xs opacity-70">400</p>
            </div>
            <div className="bg-[#076C36] text-white p-4 sm:p-6 rounded-xl text-center">
              <p className="text-2xl sm:text-4xl font-light mb-2">Aa</p>
              <p className="text-[10px] sm:text-xs">Light</p>
              <p className="text-[10px] sm:text-xs opacity-70">300</p>
            </div>
          </div>
        </div>

        {/* Fonte Secundária */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8 brand-print-avoid-break">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-6 sm:mb-8">
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-wider text-[#076C36] mb-2">
                  Fonte Secundária
                </p>
                <h3 className="text-3xl sm:text-4xl text-[#076C36]" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                  Cambria
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md">Textos longos e citações</p>
            </div>

            <div className="space-y-5 sm:space-y-6">
              <div style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                  "Tudo o que fizestes a um destes meus irmãos mais pequeninos, a mim o fizestes"
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Regular · 24px · Citações especiais</p>
              </div>

              <div style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Nossa missão é acolher e amparar pessoas em situação de vulnerabilidade social
                  nas ruas de Fortaleza, oferecendo dignidade através dos valores cristãos.
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Regular · 18px · Textos descritivos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hierarquia */}
        <div className="bg-gradient-to-br from-[#076C36] to-[#095a2d] rounded-2xl p-5 sm:p-8 text-white brand-print-avoid-break">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Hierarquia Tipográfica</h3>

          <div className="space-y-5 sm:space-y-6">
            <div className="flex flex-col gap-1 pb-4 border-b border-white/20 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">H1 · Display</div>
              <div className="flex-1 min-w-0">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold">48-72px</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">Títulos de página · Bold</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/20 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">H2 · Heading</div>
              <div className="flex-1 min-w-0">
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">36-48px</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">Seções principais · Semibold</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/20 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">H3 · Subhead</div>
              <div className="flex-1 min-w-0">
                <p className="text-xl sm:text-2xl font-semibold">24-32px</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">Subseções · Semibold</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/20 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">Body · Large</div>
              <div className="flex-1 min-w-0">
                <p className="text-base sm:text-lg">18-20px</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">Introduções · Regular</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 pb-4 border-b border-white/20 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">Body · Regular</div>
              <div className="flex-1 min-w-0">
                <p className="text-base">16px</p>
                <p className="text-xs sm:text-sm opacity-70 mt-1">Texto corrido · Regular</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
              <div className="w-full sm:w-32 text-xs sm:text-sm opacity-70 shrink-0">Caption</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">14px</p>
                <p className="text-xs opacity-70 mt-1">Legendas e notas · Regular</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
