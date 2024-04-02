import Link from "next/link";

export default function AuthorLink(author: any) {
  return (
    <Link
      href={`/authors/view/${author._slug}`}
      className="p-2 bg-neutral-200 rounded hover:drop-shadow-lg hover:bg-neutral-100 hover:text-pink-700 text-pink-900"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={author.profile_pic[0]?.url}
        alt="Author profile picture"
        className="w-40 aspect-square hover:brightness-110"
      />
      <p className="mt-2 text-center">{author.full_name}</p>
    </Link>
  );
}
