import { GetNavigation } from "@/queries/get-navigation";
import getClient from "@/services/apollo-client";

import Menu from "./HeaderMenu";

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
      <Menu {...navigation} />
    </header>
  );
}
