import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Cover from "./components/Cover";
import About from "./components/About";
import Logo from "./components/Logo";
import ColorPalette from "./components/ColorPalette";
import Typography from "./components/Typography";
import GraphicElements from "./components/GraphicElements";
import UsageManual from "./components/UsageManual";
import Applications from "./components/Applications";
import BrandIdentityPrint from "./components/BrandIdentityPrint";
import { useIsMobile } from "./components/ui/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";

const slides = [
  { id: 0, component: Cover, title: "Capa" },
  { id: 1, component: About, title: "Sobre" },
  { id: 2, component: Logo, title: "Logo" },
  { id: 3, component: ColorPalette, title: "Cores" },
  { id: 4, component: Typography, title: "Tipografia" },
  { id: 5, component: GraphicElements, title: "Elementos" },
  { id: 6, component: UsageManual, title: "Manual de Uso" },
  { id: 7, component: Applications, title: "Aplicações" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const motionDistance = isMobile ? 280 : 900;

  const slideVariants = useMemo(
    () => ({
      enter: (dir: number) => ({
        x: dir > 0 ? motionDistance : -motionDistance,
        opacity: 0,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (dir: number) => ({
        zIndex: 0,
        x: dir < 0 ? motionDistance : -motionDistance,
        opacity: 0,
      }),
    }),
    [motionDistance],
  );

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentComponent = slides[currentSlide].component;

  const navButtonClass =
    "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#076C36] text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#095a2d] transition-colors shrink-0";
  const navDotClass =
    "h-2 rounded-full transition-all bg-[#076C36]";
  const sectionNavClass =
    "block w-full text-left px-4 py-2.5 rounded transition-colors text-sm sm:text-base";

  return (
    <>
      <div className="size-full bg-[#F7F7F7] relative overflow-hidden print:hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 320, damping: 32 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navegação inferior */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center justify-center gap-2 sm:gap-4 max-w-[calc(100vw-1rem)] rounded-full bg-white/85 px-2 py-2 sm:px-3 backdrop-blur shadow-md">
            <button
              type="button"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={navButtonClass}
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 flex-1 min-w-0">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`${navDotClass} ${
                    index === currentSlide
                      ? "w-7 sm:w-8 opacity-100"
                      : "w-2 opacity-30 hover:opacity-60"
                  }`}
                  aria-label={`Ir para ${slide.title}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={navButtonClass}
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Contador */}
        <div className="absolute top-3 right-3 sm:top-8 sm:right-8 z-10 flex flex-col items-end gap-2 text-[#076C36]">
          <div className="rounded-lg bg-white/90 px-3 py-1 shadow backdrop-blur sm:px-0 sm:py-0 sm:bg-transparent sm:shadow-none">
            <span className="text-lg sm:text-2xl font-bold">
              {currentSlide + 1}
            </span>
            <span className="text-sm sm:text-lg opacity-60">
              {" "}
              / {slides.length}
            </span>
          </div>
        </div>

        {/* Menu telas grandes */}
        <div className="absolute top-3 left-3 z-10 hidden md:block sm:top-8 sm:left-8">
          <div className="bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg max-h-[calc(100dvh-6rem)] overflow-y-auto">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`${sectionNavClass} ${
                  index === currentSlide
                    ? "bg-[#076C36] text-white"
                    : "text-[#076C36] hover:bg-[#076C36]/10"
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu mobile */}
        <div className="absolute top-3 left-3 z-10 md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#076C36] text-white shadow-lg"
                aria-label="Abrir menu de seções"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex w-[min(100vw,20rem)] flex-col border-[#076C36]/10 bg-[#F7F7F7]"
            >
              <SheetHeader className="border-b border-[#076C36]/10 pb-2 text-left">
                <SheetTitle className="font-bold text-[#076C36]">
                  Manual de Identidade AMEBEM
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 overflow-y-auto p-2 pt-4">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => {
                      goToSlide(index);
                      setMenuOpen(false);
                    }}
                    className={`${sectionNavClass} ${
                      index === currentSlide
                        ? "bg-[#076C36] text-white"
                        : "bg-white text-[#076C36] hover:bg-[#076C36]/10"
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <BrandIdentityPrint />
    </>
  );
}
