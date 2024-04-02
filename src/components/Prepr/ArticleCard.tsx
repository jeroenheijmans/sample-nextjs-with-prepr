import Link from "next/link";

import Card from "../Card";
import CmsHtml from "./CmsHtml";

export default function ArticleCard(article: any) {
  return (
    <Card kind="secondary">
      <h2 className="font-bold text-xl">
        <Link
          className="hover:text-pink-600"
          href={`/articles/read/${article._slug}`}
        >
          {article.title}
        </Link>
      </h2>
      <h3 className="font-bold text-lg mt-2">
        {article.authors.map((author: any) => (
          <span key={author._slug}>{author.full_name}</span>
        ))}
      </h3>
      <div className="my-2 flex flex-wrap gap-2">
        {article.categories.map((category: any) => (
          <span className="px-2 bg-stone-200 rounded" key={category._slug}>
            {category.title}
          </span>
        ))}
      </div>
      <CmsHtml html={article.excerpt} />
      <div className="prose max-w-none mt-2">
        <Link href={`/articles/read/${article._slug}`}>Read on...</Link>
      </div>
    </Card>
  );
}
