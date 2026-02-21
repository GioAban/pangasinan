import { getDbData } from "@/lib/data-fetcher";
import { Badge } from "../../components/atoms/badge";
import NewsCarousel from "../../components/organisms/news-carousel";
export default async function Page() {
  const data = await getDbData();
  const articles = data.articles;
  return (
    <main className="container mx-auto px-6 py-12">
      <header className="mb-10">
        <section id="about" className="bg-white py-12 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-left">
              <Badge>News Updates</Badge>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-blue-500 lg:text-7xl">
                Whats happening now
              </h2>
            </div>
            <NewsCarousel articles={articles} />
          </div>
        </section>
      </header>
    </main>
  );
}
