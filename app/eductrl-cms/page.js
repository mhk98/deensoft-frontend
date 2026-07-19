import { CmsCloneContent } from "@/components/cloned-pages/cms-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "DeenSoft CMS | DeenSoft"
};

export default function DeenSoftCmsPage() {
  return (
    <>
      <CmsCloneContent />
      <CloneScripts />
    </>
  );
}
