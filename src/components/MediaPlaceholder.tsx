import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  type: "image" | "video";
  className?: string;
  children?: ReactNode;
  url?: string;
  alt?: string;
}

const MediaPlaceholder = ({ type, className, children, url, alt }: MediaPlaceholderProps) => {
  // If URL is provided for an image, render the actual image
  if (type === "image" && url) {
    return (
      <div className={cn("w-full rounded-xl overflow-hidden backdrop-blur-sm border border-accent/20", className)}>
        <img 
          src={url} 
          alt={alt || "Imagen del laboratorio"} 
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  // If URL is provided for a video, render embedded YouTube player
  if (type === "video" && url) {
    // Convert YouTube URL to embed format
    const videoId = url.includes('youtu.be') 
      ? url.split('youtu.be/')[1]?.split('?')[0]
      : url.split('v=')[1]?.split('&')[0];
    
    if (videoId) {
      return (
        <div className={cn("w-full aspect-video rounded-xl overflow-hidden backdrop-blur-sm border border-accent/20", className)}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={alt || "Video de YouTube"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }
  }

  // Default placeholder when no URL is provided
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
