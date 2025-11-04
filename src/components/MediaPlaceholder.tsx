import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  type: "image" | "video";
  className?: string;
  children?: ReactNode;
}

const MediaPlaceholder = ({ type, className, children }: MediaPlaceholderProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-muted/30 border-2 border-dashed border-border rounded-xl flex items-center justify-center min-h-[300px] transition-all duration-300 hover:border-accent/50",
        className
      )}
    >
      {children || (
        <div className="text-center p-8">
          <div className="text-6xl mb-4">
            {type === "image" ? "📷" : "🎥"}
          </div>
          <p className="text-muted-foreground font-medium">
            {type === "image" 
              ? "Espacio para imagen del experimento" 
              : "Espacio para video de YouTube"}
          </p>
        </div>
      )}
    </div>
  );
};

export default MediaPlaceholder;
