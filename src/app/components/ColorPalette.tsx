import { Check, X } from 'lucide-react';

export default function ColorPalette() {
  const colors = [
    {
      name: 'Verde Esperança',
      hex: '#076C36',
      rgb: 'RGB(7, 108, 54)',
      cmyk: 'CMYK(94, 0, 82, 58)',
      pantone: 'PANTONE 356 C',
      usage: 'Cor principal da marca. Representa esperança, renovação e fé. Use em títulos, botões primários e elementos principais.',
    },
    {
      name: 'Verde Vida',
      hex: '#95CC17',
      rgb: 'RGB(149, 204, 23)',
      cmyk: 'CMYK(48, 0, 100, 0)',
      pantone: 'PANTONE 375 C',
      usage: 'Cor secundária. Simboliza vida, crescimento e transformação. Use em destaques, ícones e elementos de apoio.',
    },
    {
      name: 'Branco Pureza',
      hex: '#F7F7F7',
      rgb: 'RGB(247, 247, 247)',
      cmyk: 'CMYK(0, 0, 0, 3)',
      pantone: 'Cool Gray 1 C',
      usage: 'Cor neutra. Representa pureza e clareza. Use em fundos, textos sobre cores escuras e áreas de respiro.',
    },
  ];

  return (
    <div className="h-full min-h-0 w-full bg-white px-5 py-8 pb-28 sm:p-10 sm:pb-32 md:p-14 lg:p-16 overflow-auto print:h-auto print:min-h-0 print:overflow-visible print:pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#076C36] mb-3 sm:mb-4">Paleta de Cores</h2>
          <div className="w-16 sm:w-20 h-1 bg-[#95CC17]" />
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Cores que transmitem esperança, vida e transformação
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {colors.map((color, index) => (
            <div key={index} className="bg-[#F7F7F7] rounded-2xl overflow-hidden brand-print-avoid-break">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div
                  className="h-40 sm:h-52 md:h-64 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="text-center px-4">
                    <div
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${
                        color.hex === '#F7F7F7' ? 'text-[#076C36]' : 'text-white'
                      }`}
                    >
                      {color.hex}
                    </div>
                    <div
                      className={`text-sm ${
                        color.hex === '#F7F7F7' ? 'text-[#076C36]' : 'text-white/80'
                      }`}
                    >
                      {color.name}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-5 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#076C36] mb-3 sm:mb-4">{color.name}</h3>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">RGB</p>
                      <p className="font-mono text-[#076C36]">{color.rgb}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">CMYK</p>
                      <p className="font-mono text-[#076C36]">{color.cmyk}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">HEX</p>
                      <p className="font-mono text-[#076C36]">{color.hex}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Pantone</p>
                      <p className="font-mono text-[#076C36]">{color.pantone}</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 leading-relaxed">{color.usage}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#076C36] flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#076C36]">Combinações Corretas</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-[#076C36] p-6 rounded-lg">
                <p className="text-white font-bold">Título em branco</p>
                <p className="text-[#95CC17]">Destaque em verde vida</p>
              </div>

              <div className="bg-white border-2 border-[#076C36] p-6 rounded-lg">
                <p className="text-[#076C36] font-bold">Título em verde esperança</p>
                <p className="text-gray-700">Texto em cinza escuro</p>
              </div>

              <div className="bg-[#95CC17] p-6 rounded-lg">
                <p className="text-[#076C36] font-bold">Título em verde escuro</p>
                <p className="text-[#076C36]/80">Subtítulo complementar</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-2xl p-5 sm:p-8 brand-print-avoid-break">
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#076C36]">Evitar</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-[#95CC17] p-6 rounded-lg opacity-50">
                <p className="text-white font-bold">Texto branco sobre verde claro</p>
                <p className="text-sm text-white/70">Baixo contraste</p>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg opacity-50">
                <p className="text-white font-bold">Cores não autorizadas</p>
                <p className="text-sm text-white/70">Use apenas a paleta oficial</p>
              </div>

              <div className="bg-[#076C36] p-6 rounded-lg opacity-50">
                <p className="text-[#043625] font-bold">Verde sobre verde</p>
                <p className="text-sm text-[#043625]/70">Falta de contraste</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
