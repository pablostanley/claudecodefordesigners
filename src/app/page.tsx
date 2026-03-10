"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { GuideContent } from "@/components/guide-content";
import { PracticeContent } from "@/components/practice-content";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Tabs defaultValue="guide" className="w-full">
        {/* Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
            <span className="text-sm font-bold tracking-tight">
              cc for designers
            </span>
            <TabsList className="h-9 bg-muted/50">
              <TabsTrigger value="guide" className="text-sm px-4">
                Guide
              </TabsTrigger>
              <TabsTrigger value="practice" className="text-sm px-4">
                Practice
              </TabsTrigger>
            </TabsList>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="mx-auto max-w-[720px] px-6 py-12">
          <TabsContent value="guide" className="mt-0">
            <GuideContent />
          </TabsContent>
          <TabsContent value="practice" className="mt-0">
            <PracticeContent />
          </TabsContent>
        </main>
      </Tabs>
    </div>
  );
}
