"use client";

import { useState } from "react";
import CmsHtml from "./CmsHtml";

export default function CmsNotificationBar({ model }: any) {
  const [shown, setShown] = useState(true);

  function toggle() {
    setShown(!shown);
  }

  return (
    <div
      className={`p-2 w-full items-center justify-center flex flex-col md:flex-row text-center gap-1 ${
        model.is_dismissible ? "cursor-pointer" : ""
      }`}
      style={{ background: model.bg_color }}
      onClick={toggle}
    >
      {shown && <CmsHtml html={model.text || "No data"} />}
      {shown && model.is_dismissible && (
        <span className="opacity-75 hover:opacity-100">(click to dismiss)</span>
      )}
    </div>
  );
}
