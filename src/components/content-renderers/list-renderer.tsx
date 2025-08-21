import { cn } from "@/lib/utils";
import {
  ComplexListItem,
  ListItem,
  TextContentItem,
} from "@/types/content.types";
import React from "react";
import { InfoBlock } from "./info-block";
import { TextRenderer } from "./text-renderer";
import { ContentItemRenderer } from "./content-item-renderer";


export const ListRenderer: React.FC<{
  items: ListItem[];
  ordered?: boolean;
}> = ({ items, ordered = false }) => {
  const ListTag = ordered ? "ol" : "ul";
  const listStyle = ordered
    ? "list-decimal list-outside ml-5 space-y-4"
    : "list-disc list-outside ml-5 space-y-2";

  return (
    <ListTag className={cn(listStyle, "text-muted-foreground")}>
      {items.map((item, index) => {
        if (
          typeof item === "object" &&
          "type" in item &&
          item.type === "infoBlock"
        ) {
          return (
            <li key={index} className="list-none -ml-5 my-4">
              <InfoBlock
                iconName={item.icon}
                title={item.title}
                content={item.content}
                variant={item.variant}
              />
            </li>
          );
        }

        return (
          <li key={index}>
            {typeof item === "string" && item}
            {Array.isArray(item) && (
              <TextRenderer content={item as TextContentItem[]} />
            )}
            {typeof item === "object" &&
              !Array.isArray(item) &&
              ("text" in item ||
                "subList" in item ||
                "nestedContent" in item) && (
                <>
                  {(item as ComplexListItem).text && (
                    <TextRenderer content={(item as ComplexListItem).text!} />
                  )}
                  {(item as ComplexListItem).subList && (
                    <div className="mt-2">
                      <ListRenderer
                        items={(item as ComplexListItem).subList!.items}
                        ordered={
                          (item as ComplexListItem).subList!.type ===
                          "ordered-list"
                        }
                      />
                    </div>
                  )}
                  {(item as ComplexListItem).nestedContent && (
                    <div className="mt-3 space-y-3">
                      {(item as ComplexListItem).nestedContent!.map(
                        (nested, idx) => (
                          <ContentItemRenderer key={idx} item={nested} />
                        )
                      )}
                    </div>
                  )}
                </>
              )}
          </li>
        );
      })}
    </ListTag>
  );
};
