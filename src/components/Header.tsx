import MenuMainItem from "./MenuMainItem";

export default function Header() {
  return (
    <header className="bg-pink-900 text-pink-100 w-full sticky top-0 drop-shadow-lg">
      <div className="mx-auto max-w-screen-lg py-1 px-4 flex flex-wrap gap-2 sm:gap-8">
        <div className="flex flex-wrap gap-2">
          <MenuMainItem href="/">Home</MenuMainItem>
          <MenuMainItem href="/articles">Articles</MenuMainItem>
          <MenuMainItem href="/authors">Authors</MenuMainItem>
        </div>
        <div className="sm:ml-auto flex flex-wrap gap-2">
          <MenuMainItem href="/sign-in">Sign In</MenuMainItem>
          <MenuMainItem href="/search">Search</MenuMainItem>
        </div>
      </div>
    </header>
  );
}
