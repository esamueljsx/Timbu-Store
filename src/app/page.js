import Image from "next/image";
import Header from "./components/Hero"
import ProductGrid from "./product/page";
import { PageWrapper } from "./components/ui/PageWrapper";

export default function Home() {
  return (
    <main className="block overflow-hidden h-full">
      <PageWrapper>
        <Header />
        <ProductGrid />
      </PageWrapper>
    </main>
  );
}
