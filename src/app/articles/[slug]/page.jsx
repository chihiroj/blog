import ArticleView from "@/components/ArticleView";
import cms from "@/lib/cms";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await cms.getArticle(slug);

  return (
    <ArticleView article={article} />
  );
}
