import client from "@/services/apollo-client";
import { GetPage } from "@/queries/get-page";
import CmsTextBlock from "@/components/CmsTextBlock";
import CmsImageList from "@/components/CmsImageList";
import CmsInfoBoxes from "@/components/CmsInfoBoxes";
import { Metadata } from "next";

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
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function Home() {
  const page = await getData();

  return (
    <main className="w-full pb-8">
      {page.stack.map((model: any) => {
        switch (model.__typename) {
          case "TextBlock":
            return <CmsTextBlock key={model._id} data={model} />;
          case "ImageList":
            return <CmsImageList key={model._id} data={model} />;
          case "InfoBoxes":
            return <CmsInfoBoxes key={model._id} data={model} />;
          default:
            return <p>Unknown Content.</p>;
        }
      })}
    </main>
  );
}
