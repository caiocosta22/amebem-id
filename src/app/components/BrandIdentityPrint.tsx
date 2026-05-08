import Cover from "./Cover";
import About from "./About";
import Logo from "./Logo";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import GraphicElements from "./GraphicElements";
import UsageManual from "./UsageManual";
import Applications from "./Applications";

const printSections = [
  { key: "cover", Component: Cover },
  { key: "about", Component: About },
  { key: "logo", Component: Logo },
  { key: "colors", Component: ColorPalette },
  { key: "type", Component: Typography },
  { key: "graphics", Component: GraphicElements },
  { key: "usage", Component: UsageManual },
  { key: "applications", Component: Applications },
];

type BrandIdentityPrintProps = {
  mode?: "print" | "capture";
};

/**
 * - mode="print": usado em window.print (somente mídia print)
 * - mode="capture": usado para renderização interna em canvas/PDF
 */
export default function BrandIdentityPrint({
  mode = "print",
}: BrandIdentityPrintProps) {
  const rootClassName =
    mode === "print"
      ? "hidden print:block w-full bg-white text-[#076C36] antialiased"
      : "w-full bg-white text-[#076C36] antialiased";

  const sectionClassName =
    mode === "print"
      ? "brand-print-page w-full overflow-visible"
      : "w-[794px] min-h-[1123px] overflow-hidden bg-white";

  return (
    <div className={rootClassName}>
      {printSections.map(({ key, Component }) => (
        <section key={key} className={sectionClassName} data-pdf-page="true">
          <div className="w-full overflow-visible [&>*]:relative [&>*]:overflow-visible">
            <Component />
          </div>
        </section>
      ))}
    </div>
  );
}
