export default function MissingCmsComponent() {
  return (
    <div className="page-content">
      <p className="text-red-700 font-bold p-4 bg-red-100 rounded-lg">
        ⚠ Encountered a Prepr page block here that has not been implemented yet.
        Please ensure each possible Model for the Page Stack has an equivalent
        component in the Next.js code.
      </p>
    </div>
  );
}
