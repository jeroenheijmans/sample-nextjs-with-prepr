import { GetNavigation } from "@/queries/get-navigation";
import getClient from "@/services/apollo-client";

import MenuMainItem from "./MenuMainItem";

async function getData(slug: string) {
  const { data } = await getClient().query({
    query: GetNavigation,
    variables: { slug },
  });

  return data.Navigation;
}

export default async function Header() {
  const navigation = await getData("navigation-bar-top");

  return (
    <header className="bg-pink-900 text-pink-100 w-full md:sticky top-0 drop-shadow-lg z-10">
      <div className="mx-auto max-w-screen-lg md:px-4 flex flex-wrap gap-2 md:gap-4 flex-col md:flex-row">
        {navigation.menu_items.map((menuItem: any) => (
          <MenuMainItem key={menuItem.title} item={menuItem} />
        ))}
      </div>
    </header>
  );
}
