interface CmsHtmlProps {
  html: string;
  listStyleImage?: string;
}

export default function CmsHtml({ html, listStyleImage }: CmsHtmlProps) {
  const extraClassName =
    listStyleImage === "check_marks"
      ? "force-li-check-marks"
      : listStyleImage === "hearts"
      ? "force-li-hearts"
      : "";

  return (
    <div
      className={`prose prose-neutral max-w-none ${extraClassName}`}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
