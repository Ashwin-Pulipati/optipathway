import { ContentItem } from "@/types/content.types";
import React from "react";
import { TextRenderer } from "./text-renderer";
import { ListRenderer } from "./list-renderer";
import { InfoBlock } from "./info-block";


export const ContentItemRenderer: React.FC<{ item: ContentItem }> = ({
  item,
}) => {
  switch (item.type) {
    case "paragraph":
      return (
        <p>
          <TextRenderer content={item.text} />
        </p>
      );
    case "list":
      return <ListRenderer items={item.items} />;
    case "ordered-list":
      return <ListRenderer items={item.items} ordered />;
    case "infoBlock":
      return (
        <InfoBlock
          iconName={item.icon}
          title={item.title}
          content={item.content}
          variant={item.variant}
        />
      );
    default:
      return null;
  }
};
