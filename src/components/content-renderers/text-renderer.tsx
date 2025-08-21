import { TextContentItem } from "@/types/content.types";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

export const TextRenderer: React.FC<{ content: TextContentItem[] }> = ({
  content,
}) => (
  <>
    {content.map((item, index) => {
      switch (item.type) {
        case "text":
          return <span key={index}>{item.text}</span>;
        case "strong":
          return (
            <strong key={index} className="text-foreground">
              {item.text}
            </strong>
          );
        case "strong-primary":
          return (
            <strong key={index} className="text-primary">
              {item.text}
            </strong>
          );
        case "strong-destructive":
          return (
            <strong key={index} className="text-destructive">
              {item.text}
            </strong>
          );
        case "link":
          return (
            <Link
              key={index}
              href={item.href}
              className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.text}
              {item.external && <ExternalLink className="h-4 w-4" />}
            </Link>
          );
        default:
          return null;
      }
    })}
  </>
);
