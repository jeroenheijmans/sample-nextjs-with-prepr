import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-900 mt-auto w-full">
      <div className="mx-auto max-w-screen-lg py-8 md:py-16 px-4 text-sm">
        <div className="flex flex-col gap-4 md:flex-row lg:gap-16">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">About this site</h2>
            <p>Copyright 2024, Jeroen Heijmans</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">Resources</h2>
            <Link className="hover:underline" href="/">
              Source code for this sample
            </Link>
            <Link className="hover:underline" href="/">
              NextJS Documentation
            </Link>
            <Link className="hover:underline" href="/">
              TailwindCSS documentation
            </Link>
            <Link className="hover:underline" href="/">
              Prepr Headless CMS documentation
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">More samples like this</h2>
            <Link className="hover:underline" href="/">
              NextJS with Typeform
            </Link>
            <Link className="hover:underline" href="/">
              NextJS with Jotform
            </Link>
            <Link className="hover:underline" href="/">
              NextJS with Formspark
            </Link>
            <Link className="hover:underline" href="/">
              Angular with Angular-OAuth2-OIDC
            </Link>
          </div>
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
