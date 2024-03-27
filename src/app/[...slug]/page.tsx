import CmsStack from "@/components/CmsStack";
import { GetPage } from "@/queries/get-page";
import getClient from "@/services/apollo-client";
import { notFound } from "next/navigation";

async function getData(slug: string) {
  const { data } = await getClient().query({
    query: GetPage,
    variables: { slug },
  });

  return data.Page;
}

export default async function DynamicPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const page = await getData(params.slug.join("/"));

  if (!page) return notFound();

  return (
    <main className="w-full pb-8">
      <CmsStack stack={page.stack} />
    </main>
  );
}
