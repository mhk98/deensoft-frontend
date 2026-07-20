import { HolyDeenStoreCloneContent } from "@/components/cloned-pages/holydeen-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "HolyDeen Store | Islamic Online Shop Bangladesh",
  description:
    "Shop Islamic lifestyle products, modest fashion, attar, gifts and daily essentials from HolyDeen Store, a trusted Islamic online shop."
};

export default function HolyDeenStorePage() {
  return (
    <>
      <HolyDeenStoreCloneContent />
      <CloneScripts />
    </>
  );
}
