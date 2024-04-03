export default function MissingCmsComponent({
  typename,
}: {
  typename: string;
}) {
  return (
    <div className="page-content">
      <p className="text-red-600 font-bold p-4 bg-red-100 rounded-lg">
        ⚠ Encountered a Prepr Page Stack model here (
        <code className="text-red-700">{typename}</code>) that has not been
        implemented yet. Please ensure each possible Model for the Page Stack
        has an equivalent component in the Next.js code.
      </p>
    </div>
  );
}
