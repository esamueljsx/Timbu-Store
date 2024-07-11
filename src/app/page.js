import Header from "./components/Hero"
import { PageWrapper } from "./components/ui/PageWrapper";
import BookGrid from "./library/page";

export default function Home() {
  return (
    <main className="block overflow-hidden h-full">
      <PageWrapper>
        <Header />
        <BookGrid />
      </PageWrapper>
    </main>
  );
}
