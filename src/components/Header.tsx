import MenuMainItem from "./MenuMainItem";

export default function Header() {
  return (
    <header className="bg-pink-900 text-pink-100 w-full sticky top-0 drop-shadow-lg">
      <div className="mx-auto max-w-screen-lg py-1 px-4 flex gap-2">
        <div className="flex gap-2">
          <MenuMainItem href="/">Home</MenuMainItem>
          <MenuMainItem href="/">Blog</MenuMainItem>
          <MenuMainItem href="/">Technologies</MenuMainItem>
          <MenuMainItem href="/">Contact</MenuMainItem>
        </div>
        <div className="ml-auto flex gap-2">
          <MenuMainItem href="/">Sign In</MenuMainItem>
          <MenuMainItem href="/">Search</MenuMainItem>
        </div>
      </div>
    </header>
  );
}
