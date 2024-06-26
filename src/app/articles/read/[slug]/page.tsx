import { Metadata } from "next";

import Breadcrumb from "@/components/Breadcrumb";
import AuthorLink from "@/components/Prepr/AuthorLink";
import CategoryLabel from "@/components/Prepr/CategoryLabel";
import DynamicContentPart from "@/components/Prepr/CmsDynamicContentPart";
import { GetArticle } from "@/queries/get-article";
import getClient from "@/services/apollo-client";

type PageProps = {
  params: { slug: string };
};

async function getData(slug: string) {
  const { data } = await getClient().query({
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
      <div className="page-content">
        <Breadcrumb
          crumbs={[
            { title: "Home", href: "/" },
            { title: "Articles", href: "/articles" },
            { title: article.title, href: `/articles/read/${article._slug}` },
          ]}
        />

        <div className="max-w-[320px] max-h-[320px] md:float-right md:ml-4 mb-4 border-4 border-black/25">
          {article.cover.length > 0 && article.cover[0]?.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={article.cover[0]?.url} alt="Article visual" />
          )}
        </div>
        <div className="flex flex-col gap-2 prose">
          <h1>{article.title}</h1>
          {article.content.map((part: any, key: number) => (
            <DynamicContentPart key={key} {...part} />
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex flex-wrap gap-2 my-4">
          {article.authors.map((author: any) => (
            <AuthorLink key={author._slug} {...author} />
          ))}
        </div>
        <div className="my-2 flex flex-wrap gap-2">
          {article.categories.map((category: any) => (
            <CategoryLabel key={category._slug} {...category} />
          ))}
        </div>
      </div>
    </main>
  );
}
