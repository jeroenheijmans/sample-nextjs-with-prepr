import { Metadata } from "next";

import ArticleCard from "@/components/ArticleCard";
import AuthorLink from "@/components/AuthorLink";
import { GetPerson } from "@/queries/get-person";
import getClient from "@/services/apollo-client";

type PageProps = {
  params: { slug: string };
};

async function getData(slug: string) {
  const { data } = await getClient().query({
    query: GetPerson,
    variables: { slug },
  });

  return { person: data.Person, articles: data.Articles };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { person } = await getData(params.slug);
  return {
    title: `NextJS + Prepr Sample: ${person.full_name || ""}`,
  };
}

export default async function ArticlesPage({ params }: PageProps) {
  const { person, articles } = await getData(params.slug);

  return (
    <main className="w-full pb-8">
      <div className="page-content">
        <div className="inline-flex mb-4 sm:ml-4 sm:float-right">
          <AuthorLink key={person._slug} {...person} />
        </div>
        <div className="prose max-w-none">
          <h1>{person.full_name}</h1>
          <p>{person.bio}</p>
          <h2>Articles by {person.full_name}</h2>
          {!articles?.items?.length && <p>None on this site ... yet!?</p>}
        </div>
        {!!articles?.items?.length && (
          <div className="flex flex-col gap-4 mt-8">
            {articles.items.map((article: any) => (
              <ArticleCard key={article._slug} {...article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
