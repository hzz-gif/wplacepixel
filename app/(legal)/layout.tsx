import "@/app/globals.css";

import { MdOutlineHome } from "react-icons/md";
import React from "react";
import Script from "next/script";

// Metadata is handled by individual page layouts

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5148478102061529"
          crossOrigin="anonymous"
        />

        {/* Plausible Analytics */}
        <script
          defer
          data-domain="wplacepixel.art"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="min-h-screen bg-background">
          <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <a
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                href="/"
              >
                <MdOutlineHome className="text-2xl" />
                <span className="font-semibold text-lg">Back to WPlace Pixel</span>
              </a>
            </div>
          </header>
          <main className="container py-12">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert
              prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-center prose-h1:border-b prose-h1:border-border prose-h1:pb-6
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-3
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary prose-h3:font-semibold
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-muted-foreground
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:text-primary/80 hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:space-y-2 prose-li:my-2 prose-li:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-medium
              prose-hr:border-border prose-hr:my-12 prose-hr:border-t-2
              prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono"
            >
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
