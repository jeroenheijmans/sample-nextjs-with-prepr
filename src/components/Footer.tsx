import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-900 mt-auto w-full">
      <div className="mx-auto max-w-screen-lg py-8 md:py-16 px-4 text-sm">
        <FooterMenu />
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
