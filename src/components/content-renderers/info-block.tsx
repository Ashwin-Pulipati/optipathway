import { cn } from "@/lib/utils";
import { ContentItem, IconName } from "@/types/content.types";
import { cva } from "class-variance-authority";
import React from "react";
import { icons } from "./icons"; // We'll create this shared icon map
import { ContentItemRenderer } from "./content-item-renderer";


const infoBlockVariants = cva("p-4 rounded-lg border flex items-start gap-4", {
  variants: {
    variant: {
      default:
        "bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800",
      warning:
        "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800",
      destructive:
        "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800",
    },
  },
  defaultVariants: { variant: "default" },
});

const iconVariants = cva("h-5 w-5 flex-shrink-0 mt-0.5", {
  variants: {
    variant: {
      default: "text-blue-500",
      warning: "text-yellow-500",
      destructive: "text-red-500",
    },
  },
  defaultVariants: { variant: "default" },
});

interface InfoBlockProps {
  variant?: "default" | "warning" | "destructive" | null;
  iconName: IconName;
  title?: string;
  content: ContentItem[];
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  variant,
  iconName,
  title,
  content,
}) => {
  const IconComponent = icons[iconName];
  return (
    <div className={cn(infoBlockVariants({ variant: variant || "default" }))}>
      {IconComponent && (
        <IconComponent
          className={cn(iconVariants({ variant: variant || "default" }))}
        />
      )}
      <div className="text-sm w-full">
        {title && <h4 className="font-bold text-foreground mb-1">{title}</h4>}
        <div className="text-muted-foreground space-y-2">
          {content.map((item, index) => (
            <ContentItemRenderer key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
