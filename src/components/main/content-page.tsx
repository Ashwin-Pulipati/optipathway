"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageContent } from "@/types/content.types";
import React from "react";
import { icons } from "../content-renderers/icons"; // A dedicated icon file
import { ContentItemRenderer } from "../content-renderers/content-item-renderer";

interface ContentPageProps {
  pageContent: PageContent;
}

const ContentPage: React.FC<ContentPageProps> = ({ pageContent }) => {
  const { header, sections } = pageContent;
  return (
    <div className="mt-8 max-w-4xl mx-auto w-full px-4 space-y-8 pb-16">
      <header className="text-center">
        <h1 className="text-4xl font-serif font-extrabold text-foreground mb-4">
          {header.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {header.subtitle}
        </p>
      </header>
      {sections.map((section) => {
        const IconComponent = icons[section.icon];
        return (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {IconComponent && (
                  <IconComponent className="h-6 w-6 text-primary" />
                )}
                {section.title}
              </CardTitle>
              {section.description && (
                <CardDescription>{section.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {section.content.map((item, index) => (
                <ContentItemRenderer key={index} item={item} />
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContentPage;
