import { HomeCloneContent } from "@/components/cloned-pages/home-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "DeenSoft | CRM, Islamic Store & E-commerce Solution",
  description:
    "DeenSoft builds EduConnect CRM, HolyDeen Store and custom e-commerce solutions for education consultants and online businesses in Bangladesh."
};

export default function HomePage() {
  return (
    <>
      <HomeCloneContent />
      <CloneScripts />
    </>
  );
}
