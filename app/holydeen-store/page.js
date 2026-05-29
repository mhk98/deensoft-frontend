import { HolyDeenStoreCloneContent } from "@/components/cloned-pages/holydeen-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "HolyDeen Store | Islamic Lifestyle E-Commerce | DeenSoft",
  description:
    "HolyDeen — Bangladesh's premier Islamic lifestyle e-commerce platform. Shop men's fashion, women's fashion, cosmetics, gadgets, grocery and more."
};

export default function HolyDeenStorePage() {
  return (
    <>
      <HolyDeenStoreCloneContent />
      <CloneScripts />
    </>
  );
}
