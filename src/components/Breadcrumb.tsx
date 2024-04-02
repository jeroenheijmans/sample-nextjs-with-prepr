import Link from "next/link";

type CrumbData = {
  title: string;
  href: string;
};

export default function Breadcrumb({ crumbs }: { crumbs: CrumbData[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8 text-sm">
      {crumbs.map((crumb, index) => (
        <div key={index}>
          <Link className="text-pink-900 hover:text-pink-700" href={crumb.href}>
            {crumb.title}
          </Link>
          {index < crumbs.length - 1 && <span className="ml-2">&gt;</span>}
        </div>
      ))}
    </div>
  );
}
