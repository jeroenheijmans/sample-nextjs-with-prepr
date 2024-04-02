import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  kind?: "primary" | "secondary" | "neutral" | "error";
}

export default function Card({ children, kind = "primary" }: CardProps) {
  const styles = {
    primary: "bg-pink-100",
    secondary: "bg-orange-50",
    neutral: "bg-stone-100",
    error: "bg-red-200 text-red-700",
  };

  return (
    <div className={`rounded-xl ${styles[kind]}`}>
      <div className="p-8">{children}</div>
    </div>
  );
}
