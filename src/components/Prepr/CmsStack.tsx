import CmsImageList from "./CmsImageList";
import CmsInfoBoxes from "./CmsInfoBoxes";
import CmsTextBlock from "./CmsTextBlock";
import MissingCmsComponent from "./MissingCmsComponent";

export default function CmsStack({ stack }: { stack: any }) {
  return (
    <>
      {stack.map((model: any) => {
        switch (model.__typename) {
          case "TextBlock":
            return <CmsTextBlock key={model._id} data={model} />;
          case "ImageList":
            return <CmsImageList key={model._id} data={model} />;
          case "InfoBoxes":
            return <CmsInfoBoxes key={model._id} data={model} />;
          default:
            return <MissingCmsComponent />;
        }
      })}
    </>
  );
}
