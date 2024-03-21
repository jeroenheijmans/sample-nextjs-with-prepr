import client from "@/services/apollo-client";
import { GetPage } from "@/queries/get-page";
import { Metadata } from "next";
import CmsStack from "@/components/CmsStack";

async function getData() {
  const { data } = await client.query({
    query: GetPage,
    variables: { slug: "home" },
  });

  return data.Page;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getData();
  return {
    title: "NextJS + Prepr Sample: " + page.seo.title,
    description: page.seo.description,
  };
}

export default async function Home() {
  const page = await getData();

  return (
    <main className="w-full pb-8">
      <CmsStack stack={page.stack} />
    </main>
  );
}
