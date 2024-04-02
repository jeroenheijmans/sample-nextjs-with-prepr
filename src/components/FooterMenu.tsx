import { GetNavigation } from "@/queries/get-navigation";
import getClient from "@/services/apollo-client";

import MenuFooterItem from "./FooterMenuItem";

async function getData(slug: string) {
  const { data } = await getClient().query({
    query: GetNavigation,
    variables: { slug },
  });

  return data.Navigation;
}
export default async function FooterMenu() {
  const navigation = await getData("navigation-bar-footer");
  return (
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
  );
}
