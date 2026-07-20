import { EcommerceCloneContent } from "@/components/cloned-pages/ecommerce-content";
import { CloneScripts } from "@/components/clone-scripts";

export const metadata = {
  title: "E-commerce Website Development Bangladesh | DeenSoft",
  description:
    "Launch a fast, mobile-friendly online store with DeenSoft e-commerce solution, built for products, payments, orders and growth."
};

export default function EcommerceSolutionPage() {
  return (
    <>
      <EcommerceCloneContent />
      <CloneScripts />
    </>
  );
}
