export function PracticeContent() {
  return (
    <div className="space-y-8 pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Practice</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Three exercises to put the guide into practice. Each one builds on
          concepts from the guide. Follow the setup steps below, then pick an
          exercise.
        </p>
      </header>

      {/* Setup Steps */}
      <div className="rounded-xl border border-border/50 bg-card p-8 mb-4">
        <h2 className="text-xl font-bold tracking-tight mb-6">
          Before you start
        </h2>
        <ol className="space-y-6">
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              1
            </span>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Open your terminal.</strong> On Mac, search for Terminal
                in Spotlight, or use{" "}
                <a
                  href="https://ghostty.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Ghostty
                </a>{" "}
                if u want something nicer.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              2
            </span>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Create a folder and cd into it.</strong> This is where
                your project will live.
              </p>
              <div className="rounded-lg bg-[#1a1a1a] border border-white/5 overflow-x-auto mt-3">
                <pre className="p-4 text-sm leading-relaxed">
                  <code className="text-neutral-300 font-mono">
                    {`mkdir my-project && cd my-project`}
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              3
            </span>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Start Claude with skip permissions.</strong> So u
                don&apos;t have to say &ldquo;yes&rdquo; to every action.
              </p>
              <div className="rounded-lg bg-[#1a1a1a] border border-white/5 overflow-x-auto mt-3">
                <pre className="p-4 text-sm leading-relaxed">
                  <code className="text-neutral-300 font-mono">
                    claude --dangerously-skip-permissions
                  </code>
                </pre>
              </div>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              4
            </span>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Write your prompt.</strong> Be specific. Paste one of
                the exercise prompts below, or write your own. Hit enter and
                watch Claude build it.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground">
              5
            </span>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Connect GitHub &amp; deploy.</strong> Once you&apos;re
                happy with it, ask Claude to set up git and push to GitHub. Then
                deploy.
              </p>
              <div className="rounded-lg bg-[#1a1a1a] border border-white/5 overflow-x-auto mt-3">
                <pre className="p-4 text-sm leading-relaxed">
                  <code className="text-neutral-300 font-mono">
                    {`# just tell Claude:
"initialize a git repo, create a GitHub repository called my-project, and push everything"

# then:
"deploy this to Vercel"`}
                  </code>
                </pre>
              </div>
              <p className="text-sm text-muted-foreground/70 mt-3">
                Make sure u have the{" "}
                <a
                  href="https://cli.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  GitHub CLI
                </a>{" "}
                installed (<code className="inline-code">brew install gh</code>
                ) and logged in (<code className="inline-code">gh auth login</code>
                ). Claude uses it to create repos and push for u. For deploying,
                install the{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-foreground transition-colors"
                >
                  Vercel CLI
                </a>{" "}
                (<code className="inline-code">npm i -g vercel</code>) or add
                the Vercel MCP.
              </p>
            </div>
          </li>
        </ol>
      </div>

      <hr className="border-border/50 my-12" />

      <h2 className="text-2xl font-bold tracking-tight mb-2">Exercises</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Pick one. Copy the prompt. Paste it into Claude. Then iterate from
        there.
      </p>

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
