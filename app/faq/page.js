import { FaqCloneContent } from "@/components/cloned-pages/faq-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "FAQ | DeenSoft"
};

export default function FaqPage() {
  return (
    <>
      <FaqCloneContent />
      <CloneScripts />
    </>
  );
}
