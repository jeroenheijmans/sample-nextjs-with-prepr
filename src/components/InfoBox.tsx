import { ReactNode } from "react";

interface InfoBoxProps {
  children?: ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="rounded-xl bg-orange-100">
      <div className="p-8">
        <div className="prose">{children}</div>
      </div>
    </div>
  );
}
