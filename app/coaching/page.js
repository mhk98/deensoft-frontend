import { CoachingCloneContent } from "@/components/cloned-pages/coaching-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Coaching CRM | DeenSoft"
};

export default function CoachingPage() {
  return (
    <>
      <CoachingCloneContent />
      <CloneScripts />
    </>
  );
}
