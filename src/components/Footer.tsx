import { GetNavigation } from "@/queries/get-navigation";
import getClient from "@/services/apollo-client";

import MenuFooterItem from "./MenuFooterItem";

async function getData(slug: string) {
  const { data } = await getClient().query({
    query: GetNavigation,
    variables: { slug },
  });

  return data.Navigation;
}

export default async function Footer() {
  const navigation = await getData("navigation-bar-footer");

  return (
    <footer className="bg-pink-100 text-pink-900 mt-auto w-full">
      <div className="mx-auto max-w-screen-lg py-8 md:py-16 px-4 text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-16">
          {navigation.menu_items.map((group: any, index: number) => (
            <div key={index} className="flex flex-col gap-1">
              <h2 className="font-bold">{group.title}</h2>
              {group.children.map((child: any, index: number) => (
                <div key={index}>
                  <MenuFooterItem item={child} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <hr className="my-8 border-pink-200" />
        <p>
          The sample is open source, at the time of writing we still need to
          pick a proper Open Source license for it. Stay tuned. Logos from
          respective technologies (Prepr, NextJS, TailwindCSS, and others) are
          trademarked and owned by their respective companies.
        </p>
      </div>
    </footer>
  );
}
