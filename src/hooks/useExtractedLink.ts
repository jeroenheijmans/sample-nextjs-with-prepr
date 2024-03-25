import { usePathname } from "next/navigation";

type ContentReferenceFields = { _slug: string; title: string };
type LinkExternal = { url: string; title: string };

type InternalOrExternalLink = {
  link_internal?: ContentReferenceFields[];
  link_external?: LinkExternal;
};

function extractLink(model: InternalOrExternalLink) {
  const isExternal = !!model.link_external?.url;
  const isInternal = model.link_internal?.length === 1;

  let href = isInternal
    ? `/${model.link_internal![0]._slug}`
    : model.link_external?.url || "";

  // Prepr currently seems to refuse to let me edit the Home Page
  // slug from "home" into "" - so we work around that here until
  // we find out how to fix this.
  if (href === "/home") {
    href = "/";
  }

  const title = isInternal
    ? model.link_internal![0].title
    : model.link_external?.title;

  return {
    isExternal,
    isInternal,
    href,
    title,
  };
}

export default function useExtractedLink(model: InternalOrExternalLink) {
  const link = extractLink(model);
  const path = usePathname();
  return {
    ...link,
    isActive:
      link.href === "/"
        ? path === link.href || path === "/"
        : path.startsWith(link.href),
  };
}
