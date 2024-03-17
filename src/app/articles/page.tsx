import Card from "@/components/Card";
import CmsHtml from "@/components/CmsHtml";
import { GetArticles } from "@/queries/get-articles";
import client from "@/services/apollo-client";
import Link from "next/link";

async function getData() {
  const { data } = await client.query({
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
            <Card key={article._slug} kind="neutral">
              <h2 className="font-bold text-xl">{article.title}</h2>
              <h3 className="font-bold text-lg mt-2">
                {article.authors.map((author: any) => (
                  <span key={author._slug}>{author.full_name}</span>
                ))}
              </h3>
              <div className="my-2 flex flex-wrap gap-2">
                {article.categories.map((category: any) => (
                  <span className="px-2 bg-pink-50" key={category._slug}>
                    {category.title}
                  </span>
                ))}
              </div>
              <CmsHtml html={article.excerpt} />
              <div className="prose max-w-none mt-2">
                <Link href={`/articles/read/${article._slug}`}>Read on...</Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
