import { GetArticle } from "@/queries/get-article";
import client from "@/services/apollo-client";

async function getData(slug: string) {
  console.log(slug);
  const { data } = await client.query({
    query: GetArticle,
    variables: { slug },
  });

  return data.Article;
}

export default async function ArticlesPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getData(params.slug);

  return (
    <main className="w-full pb-8">
      <div className="my-8 mx-auto max-w-screen-lg px-4">
        <div className="prose">
          <h1>{article.title}</h1>
          <p>
            By{" "}
            {article.authors.map((author: any) => (
              <span key={author._slug}>{author.full_name}</span>
            ))}
          </p>
          <hr />
        </div>
        <p>Debug info:</p>
        <pre>{JSON.stringify(article, null, 2)}</pre>
      </div>
    </main>
  );
}
