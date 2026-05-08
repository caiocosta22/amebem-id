import logoImg from "../../imports/LOGO_AMEBEM_OLD.png";

export default function Logo() {
  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">
            Logotipo
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Versões e aplicações da marca
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Logo Principal */}
          <div className="bg-[#F7F7F7] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center min-h-[240px] sm:min-h-[320px] md:min-h-[350px] brand-print-avoid-break">
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-wider text-[#076C36] mb-4">
                Logo Principal
              </p>
            </div>
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl flex items-center justify-center bg-white p-3 sm:p-4">
              <img
                src={logoImg}
                alt="Logo Amebem"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-6 text-sm text-gray-600 text-center">
              Fundo claro · Cores completas
            </p>
          </div>

          {/* Versão Reduzida */}
          <div className="bg-[#F7F7F7] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center brand-print-avoid-break">
            <div className="text-center mb-6">
              <p className="text-sm uppercase tracking-wider text-[#076C36] mb-4">
                Versão Reduzida
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center bg-white p-2">
                <img
                  src={logoImg}
                  alt="Logo Amebem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center bg-white p-1">
                <img
                  src={logoImg}
                  alt="Logo Amebem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-white p-1">
                <img
                  src={logoImg}
                  alt="Logo Amebem"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 text-center">
              Diferentes tamanhos · Redes sociais e apps
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-[#076C36] mb-5 sm:mb-6">
            Área de Proteção
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                A área de proteção garante que a logo mantenha
                sua legibilidade e impacto visual. Mantenha
                sempre um espaço mínimo equivalente à altura da
                letra "O" da marca ao redor da logo.
              </p>
              <div className="bg-white p-4 rounded-lg border-2 border-[#95CC17]">
                <p className="text-sm font-bold text-[#076C36] mb-2">
                  Regra de ouro:
                </p>
                <p className="text-sm text-gray-600">
                  Espaço mínimo = Altura do símbolo principal
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 sm:p-8 flex items-center justify-center order-1 md:order-2 brand-print-avoid-break">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={logoImg}
                    alt="Logo Amebem"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}