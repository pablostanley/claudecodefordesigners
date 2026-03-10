export function PracticeContent() {
  return (
    <div className="space-y-8 pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Practice</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Three exercises to put the guide into practice. Each one builds on
          concepts from the guide. Open your terminal, type{" "}
          <code className="inline-code">claude</code>, and paste the prompt.
        </p>
      </header>

      {/* Exercise 1 */}
      <ExerciseCard
        number={1}
        title="Personal Landing Page"
        description="Build a personal portfolio landing page with a hero section, about section, and project grid. Start from scratch in Claude Code."
        prompt={`create a personal landing page with a full-height hero with my name centered, an about section with two columns (photo left, text right), and a 3-column project grid with hover effects. Use Inter font, clean minimal design, dark background.`}
        concepts={["Be Specific", "Plan Mode", "CLAUDE.md"]}
      />

      {/* Exercise 2 */}
      <ExerciseCard
        number={2}
        title="Analytics Dashboard"
        description="Build a simple analytics dashboard with charts, stat cards, and a sidebar nav."
        prompt={`build an analytics dashboard with a left sidebar nav, top stat cards showing revenue/users/growth with sparklines, a main area chart for monthly data, and a recent activity table. Use shadcn components, clean layout, responsive.`}
        concepts={["Subagents", "Skills", "Browser Agent"]}
      />

      {/* Exercise 3 */}
      <ExerciseCard
        number={3}
        title="Design System Starter"
        description="Create a design system page that documents your own tokens, components, and patterns."
        prompt={`create a design system documentation page with sections for: color palette (show swatches with hex values), typography scale (show each heading and body size), spacing scale (visual blocks), and a component showcase with buttons, inputs, cards in all their variants. Make it responsive and add a sidebar nav to jump between sections.`}
        concepts={["CLAUDE.md Rules", "Custom Skills", "Fix"]}
      />
    </div>
  );
}

function ExerciseCard({
  number,
  title,
  description,
  prompt,
  concepts,
}: {
  number: number;
  title: string;
  description: string;
  prompt: string;
  concepts: string[];
}) {
  return (
    <div className="rounded-xl border border-border/50 bg-card p-8 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
          {number}
        </span>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      <div className="rounded-lg bg-[#1a1a1a] border border-white/5 overflow-x-auto mb-6">
        <div className="px-4 pt-3 text-xs text-neutral-500 font-mono">
          prompt
        </div>
        <pre className="p-4 pt-2 text-sm leading-relaxed">
          <code className="text-neutral-300 font-mono whitespace-pre-wrap">
            {prompt}
          </code>
        </pre>
      </div>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept) => (
          <span
            key={concept}
            className="inline-flex items-center rounded-md border border-border/50 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {concept}
          </span>
        ))}
      </div>
    </div>
  );
}
