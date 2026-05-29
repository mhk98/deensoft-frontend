import { EcommerceCloneContent } from "@/components/cloned-pages/ecommerce-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "E-Commerce Solution | Build Your Online Store | DeenSoft",
  description:
    "DeenSoft builds professional, scalable e-commerce platforms. Product management, order tracking, payment integration and more — all in one solution."
};

export default function EcommerceSolutionPage() {
  return (
    <>
      <EcommerceCloneContent />
      <CloneScripts />
    </>
  );
}
