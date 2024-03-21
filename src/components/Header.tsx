import { GetNavigation } from "@/queries/get-navigation";
import MenuMainItem from "./MenuMainItem";
import client from "@/services/apollo-client";

async function getData(slug: string) {
  const { data } = await client.query({
    query: GetNavigation,
    variables: { slug },
  });

  return data.Navigation;
}

export default async function Header() {
  const navigation = await getData("navigation-bar-top");

  return (
    <header className="bg-pink-900 text-pink-100 w-full sticky top-0 drop-shadow-lg">
      <div className="mx-auto max-w-screen-lg py-1 px-4 flex flex-wrap gap-2 md:gap-8 flex-col md:flex-row">
        {navigation.menu_items.map((menuItem: any) => (
          <MenuMainItem key={menuItem.title} item={menuItem} />
        ))}
      </div>
    </header>
  );
}
