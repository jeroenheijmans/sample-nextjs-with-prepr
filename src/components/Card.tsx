import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  kind?: "primary" | "secondary" | "neutral";
}

export default function Card({ children, kind = "primary" }: CardProps) {
  const styles = {
    primary: "bg-pink-100",
    secondary: "bg-orange-50",
    neutral: "bg-stone-100",
  };

  return (
    <div className={`rounded-xl ${styles[kind]}`}>
      <div className="p-8">{children}</div>
    </div>
  );
}
