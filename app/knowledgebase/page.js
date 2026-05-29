import { KnowledgebaseCloneContent } from "@/components/cloned-pages/knowledgebase-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Knowledgebase | DeenSoft"
};

export default function KnowledgebasePage() {
  return (
    <>
      <KnowledgebaseCloneContent />
      <CloneScripts />
    </>
  );
}
