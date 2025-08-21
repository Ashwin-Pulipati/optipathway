// One IconName type to rule them all. Includes icons for ALL pages.
export type IconName =
  | "Info"
  | "CalendarDays"
  | "FileText"
  | "Computer"
  | "Clock"
  | "CheckCircle"
  | "Users"
  | "AlertCircle"
  | "Lightbulb"
  | "AlertTriangle"
  // -- Icons added for STEM OPT page --
  | "CalendarCheck"
  | "FileSignature"
  | "Megaphone"
  | "Briefcase";

// All the structural types remain the same. They are generic and reusable.
export type TextContentItem =
  | { type: "text"; text: string }
  | { type: "strong"; text: string }
  | { type: "strong-primary"; text: string }
  | { type: "strong-destructive"; text: string }
  | { type: "link"; text: string; href: string; external?: boolean };

export interface InfoBlockContent {
  type: "infoBlock";
  variant?: "default" | "warning" | "destructive";
  icon: IconName;
  title?: string;
  content: ContentItem[];
}

export interface ComplexListItem {
  text?: TextContentItem[];
  subList?: ListContent;
  nestedContent?: ContentItem[];
}

export type ListItem =
  | string
  | TextContentItem[]
  | ComplexListItem
  | InfoBlockContent;

export interface ListContent {
  type: "list" | "ordered-list";
  items: ListItem[];
}

export interface ParagraphContent {
  type: "paragraph";
  text: TextContentItem[];
}

export type ContentItem = ParagraphContent | ListContent | InfoBlockContent;

export interface Section {
  id: string;
  icon: IconName;
  title: string;
  description: string | null;
  content: ContentItem[];
}

// A generic interface for any page that follows this structure.
export interface PageContent {
  header: {
    title: string;
    subtitle: string;
  };
  sections: Section[];
}
