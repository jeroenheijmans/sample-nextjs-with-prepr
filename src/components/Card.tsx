import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  kind?: "primary" | "secondary" | "neutral";
}

export default function Card({ children, kind = "primary" }: CardProps) {
  const styles = {
    primary: "bg-pink-200",
    secondary: "bg-orange-100",
    neutral: "bg-stone-200",
  };

  return (
    <div className={`rounded-xl ${styles[kind]}`}>
      <div className="p-8">{children}</div>
    </div>
  );
}
