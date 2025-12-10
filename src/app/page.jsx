import Navbar from "../components/Navbar";
import FeaturedList from "../components/FeaturedList";
import ArticleList from "../components/ArticleList";
import cms from "@/lib/cms";

export default async function HomePage() {
  const featured = await cms.getFeaturedArticles();
  const allArticles = await cms.getAllArticles();

  return (
    <div>
      <Navbar />
      <FeaturedList items={featured} />
      <ArticleList items={allArticles} />
    </div>
  );
}
