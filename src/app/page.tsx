"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { GuideContent } from "@/components/guide-content";
import { PracticeContent } from "@/components/practice-content";
import { AboutContent } from "@/components/about-content";

export default function Home() {
  const [view, setView] = useState<"tabs" | "about">("tabs");

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Tabs defaultValue="guide" className="w-full">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
            <button
              onClick={() => setView("tabs")}
              className="text-sm font-bold tracking-tight hover:opacity-70 transition-opacity cursor-pointer"
            >
              cc for designers
            </button>
            {view === "tabs" ? (
              <TabsList className="h-9 bg-muted/50">
                <TabsTrigger value="guide" className="text-sm px-4">
                  Guide
                </TabsTrigger>
                <TabsTrigger value="practice" className="text-sm px-4">
                  Practice
                </TabsTrigger>
              </TabsList>
            ) : (
              <span className="text-sm text-muted-foreground">About</span>
            )}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView(view === "about" ? "tabs" : "about")}
                className={`text-sm transition-colors cursor-pointer ${
                  view === "about"
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                About
              </button>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-[720px] px-6 py-12">
          {view === "about" ? (
            <AboutContent />
          ) : (
            <>
              <TabsContent value="guide" className="mt-0">
                <GuideContent />
              </TabsContent>
              <TabsContent value="practice" className="mt-0">
                <PracticeContent />
              </TabsContent>
            </>
          )}
        </main>
      </Tabs>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        made by{" "}
        <a
          href="https://pablostanley.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          pablo stanley
        </a>
        {" "}&mdash; shippit
      </footer>
    </div>
  );
}
