"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import Card from "../Card";
import CmsHtml from "./CmsHtml";

export default function CmsSearch({ data }: { data: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (query.length < 3) {
      setError("Minimum of 3 characters needed for a search...");
      setResults({});
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/v1/search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const results = await response.json();
      setResults(results);
    } catch (error: any) {
      setError(
        (typeof error === "string" ? error : error?.message) ||
          "An unknown error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full bg-neutral-50 py-2 mb-8 shadow-inner border-b">
      <div className="page-content">
        <div className="flex flex-col gap-y-4">
          <Card>
            <CmsHtml html={data.intro || ""} />
            <form
              role="search"
              onSubmit={onSubmit}
              className={`
                py-2 px-4 flex mt-4
                border border-neutral-300 rounded-xl bg-white
                focus-within:ring-2 focus-within:ring-pink-950/50
                ${isLoading ? "opacity-50 pointer-events-none" : ""}
              `}
            >
              <input
                name="query"
                className="grow focus:outline-none py-2"
                type="text"
                placeholder={data.search_input_placeholder_text}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  disabled={isLoading}
                  className="p-2 px-4 hover:bg-neutral-200 rounded-lg font-bold"
                >
                  &times;
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 hover:bg-neutral-200 rounded-lg saturate-0"
                >
                  🔎
                </button>
              </div>
            </form>
          </Card>
          {error && <Card kind="error">{error}</Card>}
          {results === null && (
            <Card kind="neutral">
              <CmsHtml html={data.no_search_yet_text || ""} />
            </Card>
          )}
          {results?.total === 0 && (
            <Card kind="neutral">
              <CmsHtml html={data.no_data_text || ""} />
            </Card>
          )}
          {!!results?.total && (
            <div className="pb-4">
              <h3 className="text-xl font-bold mb-4">
                Showing {results.items.length} out of {results.total} results
              </h3>
              <div className="flex flex-col gap-4">
                {results.items.map((result: any, index: number) => {
                  switch (result.__typename) {
                    case "Page":
                      return <PageResult key={result._id} {...result} />;
                    case "Article":
                      return <ArticleResult key={result._id} {...result} />;
                    case "Person":
                      return <PersonResult key={result._id} {...result} />;
                    default:
                      // Don't do this in production, but for a sample repository
                      // this makes things extra clear so it seems worth it:
                      return (
                        <div key={result._slug || index}>
                          <pre>{JSON.stringify(result, null, 2)}</pre>
                        </div>
                      );
                  }
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PageResult(result: any) {
  return (
    <Link
      href={result._slug}
      className="
        p-4 flex flex-col gap-4
        rounded-lg bg-orange-50 drop-shadow
        hover:bg-orange-100 hover:drop-shadow-lg"
    >
      <p className="font-bold">📄 {result.title}</p>
      {result.seo?.description && <p>{result.seo.description}</p>}
      <p className="text-pink-800">View page...</p>
    </Link>
  );
}

function ArticleResult(result: any) {
  return (
    <Link
      href={`/articles/read/${result._slug}`}
      className="
        p-4 flex flex-col gap-4
        rounded-lg bg-orange-50 drop-shadow
        hover:bg-orange-100 hover:drop-shadow-lg"
    >
      <p className="font-bold">📜 {result.title}</p>
      {/* TODO: text-ellipsis replacement (won't work here because of inner html)- */}
      <div
        className="whitespace-nowrap overflow-hidden"
        dangerouslySetInnerHTML={{ __html: result.excerpt }}
      />
      <p className="text-pink-800">Read this piece...</p>
    </Link>
  );
}

function PersonResult(result: any) {
  return (
    <Link
      href={`/authors/view/${result._slug}`}
      className="
        p-4 flex flex-col gap-4
        rounded-lg bg-orange-50 drop-shadow
        hover:bg-orange-100 hover:drop-shadow-lg"
    >
      <p className="font-bold">✍ {result.full_name}</p>
      {result.bio && (
        <p className="whitespace-nowrap overflow-hidden text-ellipsis">
          {result.bio}
        </p>
      )}
      <p className="text-pink-800">View author...</p>
    </Link>
  );
}
