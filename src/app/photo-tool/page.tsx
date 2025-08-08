import React from "react";
import Link from "next/link";
import { ExternalLink, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PhotoTool: React.FC = () => {
  return (
    <div className="mt-8 max-w-7xl mx-auto w-full">
      <Card className="space-y-8 p-14 shadow-lg">
        <CardHeader className="text-center p-0">
          <CardTitle className="text-3xl font-serif font-extrabold text-foreground mb-4">
            Passport Photo Tool & Requirements
          </CardTitle>
          <CardDescription>
            Ensure your passport-size photo meets all official U.S. government
            requirements for your immigration applications.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8 p-0">
          {/* Section: Photo Requirements */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" /> Key Photo Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Original form, color.</li>
              <li>Must be recent (taken within the last 6 months).</li>
              <li>
                Size: <strong className="text-primary">2x2 inches</strong>.
              </li>
              <li>
                Background:{" "}
                <strong className="text-primary">Plain white</strong>.
              </li>
              <li>Formats allowed: JPG, JPEG, PNG.</li>
            </ul>
          </div>

          {/* Section: Official Photo Resources */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-accent" /> Official Photo
              Resources
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Refer to these official resources from the U.S. Department of
              State to ensure your photo meets all specifications.
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Photo Requirements
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-composition-template.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Photo Composition Template
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/photos/photo-examples.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Photo Examples
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Section: Official Photo Tool */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📸 Official Photo Tool (Check Compliance)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Use the official U.S. Department of State photo tool to verify and
              crop your photo for compliance.
            </p>
            <div className="bg-muted/50 border border-border p-4 rounded-lg flex flex-col items-center text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                This tool can automatically crop your picture to 600x600 pixels.
                If you receive an error stating the photo already has 600x600
                dimensions, it means your photo is correctly sized.
              </p>
              <Button asChild size="lg" className={cn("rounded-full py-5")}>
                <Link
                  href="https://tsg.phototool.state.gov/photo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 "
                >
                  Go to Official Photo Tool
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Section: Tips for Mobile Users */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-2 flex items-center gap-2">
              📱 Tips for Mobile Users
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you&apos;re using a mobile device, consider these tips for
              preparing your photo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Take a picture of yourself at home, ideally with a plain white
                background.
              </li>
              <li>
                Several third-party apps (e.g., &quot;Passport Photo Maker&quot;
                on Android) can help you set a white background and adjust photo
                quality.
              </li>
              <li>
                <strong className="text-destructive">
                  Do not overdo it with photo adjustments, as excessive
                  manipulation can lead to rejection.
                </strong>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoTool;
