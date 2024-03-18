import { GetArticle } from "@/queries/get-article";
import client from "@/services/apollo-client";
import { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

async function getData(slug: string) {
  console.log(slug);
  const { data } = await client.query({
    query: GetArticle,
    variables: { slug },
  });

  return data.Article;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getData(params.slug);
  return {
    title: `NextJS + Prepr Sample: ${page.seo?.title || page.title || ""}`,
    description: page.seo?.description,
  };
}

export default async function ArticlesPage({ params }: PageProps) {
  const article = await getData(params.slug);

  return (
    <main className="w-full pb-8">
      <div className="my-8 mx-auto max-w-screen-lg px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.cover[0]?.url}
          alt="Article visual"
          className="max-h-[320px] float-right ml-4 mb-4 border-4 border-black/25"
        />
        <div className="prose mb-8">
          <h1>{article.title}</h1>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: article.content.map((c: any) => c.html || "").join(""),
          }}
        ></div>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2 my-4">
          {article.authors.map((author: any) => (
            <Link
              key={author._slug}
              href={`/authors/view/${author._slug}`}
              className="p-2 bg-neutral-200 rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={author.profile_pic[0]?.url}
                alt="Author profile picture"
                className="w-40 aspect-square"
              />
              <p className="mt-2 text-center">{author.full_name}</p>
            </Link>
          ))}
        </div>
        <div className="my-2 flex flex-wrap gap-2">
          {article.categories.map((category: any) => (
            <span className="px-2 bg-stone-200 rounded" key={category._slug}>
              {category.title}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
