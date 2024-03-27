import ArticleCard from "@/components/ArticleCard";
import { GetArticles } from "@/queries/get-articles";
import getClient from "@/services/apollo-client";

async function getData() {
  const { data } = await getClient().query({
    query: GetArticles,
  });

  return data.Articles;
}

export default async function ArticlesPage() {
  const articles = await getData();

  return (
    <main className="w-full pb-8">
      <div className="my-8 mx-auto max-w-screen-lg px-4">
        <article className="prose">
          <h1>Articles overview</h1>
          <p className="lead">
            A list of poems and short stories available. All of them are
            AI-generated demo content.
          </p>
          <p>
            This is a list of all the (AI generated) demo content we have in
            this sample application. We created a few of these AI-generated bits
            of content to better showcase the features from NextJS, Prepr, and
            Tailwind.
          </p>
        </article>
        <div className="flex flex-col gap-4 mt-8">
          {articles.items.map((article: any) => (
            <ArticleCard key={article._slug} {...article} />
          ))}
        </div>
      </div>
    </main>
  );
}
