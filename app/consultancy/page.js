import { ConsultancyCloneContent } from "@/components/cloned-pages/consultancy-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "EduConnect CRM for Study Abroad Agencies | DeenSoft",
  description:
    "Manage leads, students, applications, documents, agents and follow-ups with EduConnect CRM, built for study abroad agencies."
};

export default function ConsultancyPage() {
  return (
    <>
      <ConsultancyCloneContent />
      <CloneScripts />
    </>
  );
}
