import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl p-6 shadow-xl",
        hover && "transition-all duration-300 hover:shadow-2xl hover:border-accent/30 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
