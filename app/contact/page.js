import { ContactCloneContent } from "@/components/cloned-pages/contact-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "Contact | DeenSoft"
};

export default function ContactPage() {
  return (
    <>
      <ContactCloneContent />
      <CloneScripts />
    </>
  );
}
