import Card from "../Card";
import CmsHtml from "./CmsHtml";

export default function CmsSearch({ data }: { data: any }) {
  return (
    <div className="w-full bg-neutral-50 py-2 mb-8 shadow-inner border-b">
      <div className="page-content">
        <div className="flex flex-col gap-y-4">
          <Card>
            <CmsHtml html={data.intro || ""} />
            <form
              className="
              px-2 flex mt-4
              border border-neutral-300 rounded-xl bg-white
              focus-within:ring-2 focus-within:ring-pink-950/50
            "
            >
              <input
                className="grow focus:outline-none p-4"
                type="text"
                placeholder={data.search_input_placeholder_text}
              />
              <button className="ml-auto p-4 saturate-0">🔎</button>
            </form>
          </Card>
          <Card kind="neutral">
            <CmsHtml html={data.no_search_yet_text || ""} />
          </Card>
          <Card kind="neutral">
            <CmsHtml html={data.no_data_text || ""} />
          </Card>
        </div>
      </div>
    </div>
  );
}
