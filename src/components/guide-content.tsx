export function GuideContent() {
  return (
    <article className="prose-custom">
      {/* Title */}
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Claude Code for Designers
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I&apos;ve been using <strong>Claude Code</strong> every day since it
          launched and some have asked me how. I wrote about my whole terminal
          journey last week. But here&apos;s a more concise version... just the
          stuff that matters when you&apos;re starting out.
        </p>
        <p className="text-sm text-muted-foreground mt-4 italic">
          Pablo Stanley — March 2026
        </p>
      </header>

      <hr className="border-border/50 my-12" />

      {/* Section 1 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">1. Install</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Open your terminal and run:
        </p>
        <CodeBlock code="curl -fsSL https://claude.ai/install.sh | bash" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Or if you use Homebrew:{" "}
          <code className="inline-code">brew install --cask claude-code</code>
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Then type <code className="inline-code">claude</code> and follow the
          login flow. You need a <strong>Claude subscription</strong> (Pro, Max,
          Teams, or Enterprise) or a Console account.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          There&apos;s also a <strong>desktop app</strong>, and it works in{" "}
          <strong>VS Code</strong>, <strong>JetBrains</strong>, even on the{" "}
          <strong>web</strong> at claude.ai/code. But if you&apos;re an
          adventurous noob like me, I recommend the terminal with{" "}
          <strong>Ghostty</strong>.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 2 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          2. Plan First, Build Second
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Hit <code className="inline-code">Shift+Tab</code> twice for{" "}
          <strong>plan mode</strong>. Every time. You can also do{" "}
          <code className="inline-code">/plan fix the layout bug</code> to jump
          straight in.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Go back and forth until the plan makes sense, then let Claude build
          it. A good plan means Claude gets it right on the first try instead of
          going in circles.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          When something breaks mid-build, don&apos;t keep pushing. Go back to
          plan mode and re-plan. I learned this the hard (and expensive) way.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 3 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          3. Set Up Your CLAUDE.md
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This is the file that matters most.{" "}
          <code className="inline-code">CLAUDE.md</code> sits in your project
          and tells Claude your rules, preferences, and patterns. Claude reads
          it every session.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          If this is the first time Claude sees a project, run{" "}
          <code className="inline-code">/init</code>. It inspects the codebase
          and creates a <code className="inline-code">CLAUDE.md</code> for you.
          You don&apos;t have to write this yourself — let Claude write and
          update its own file.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          <strong>The trick:</strong> every time Claude does something wrong, end
          with{" "}
          <em>
            &ldquo;Update your CLAUDE.md so you don&apos;t make that mistake
            again.&rdquo;
          </em>{" "}
          I do this constantly... every time it adds a custom Tailwind class that
          deviates from the system, or recreates a component that could&apos;ve
          been reused, I make it add a rule. Over time, the mistakes stop.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Keep it under ~200 lines though. If it gets too bloated, Claude starts
          ignoring stuff. For bigger projects, break rules into separate files:
        </p>
        <CodeBlock
          code={`.claude/
├── CLAUDE.md
└── rules/
    ├── design-system.md
    ├── components.md
    └── accessibility.md`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Each rule file can target specific paths:
        </p>
        <CodeBlock
          lang="yaml"
          code={`---
paths:
  - "src/components/**/*.tsx"
---
# Component Rules
- Always use design tokens, never hardcode colors
- Reuse existing components before creating new ones`}
        />
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 4 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          4. Be Specific
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Claude does better with specific prompts.{" "}
          <em>
            &ldquo;Full-height hero, center text vertically, 32px gap between
            cards, Inter from Google Fonts&rdquo;
          </em>{" "}
          beats <em>&ldquo;make it look better&rdquo;</em> every time.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Designers already know how to give feedback. Use that. Describe what
          you want the way you&apos;d describe it to another designer...
          bluntly.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          <strong>Voice input:</strong> hit{" "}
          <code className="inline-code">fn</code> twice on Mac for dictation.
          Super helpful for me as a new dad — I&apos;m often carrying baby while
          telling Claude what to do. We speak faster than we type, and we
          naturally give more context when talking out loud... but I&apos;ll be
          honest, speaking sometimes gives me a mini mind short-circuit lol.
          It&apos;s weirdly a different mental model.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Claude Code is also rolling out a built-in{" "}
          <code className="inline-code">/voice</code> command — speak commands
          directly in the terminal without system dictation.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>Pasting images:</strong> screenshots go straight into Claude.
          In the terminal it&apos;s{" "}
          <code className="inline-code">Ctrl+V</code> (not Cmd+V). Take a
          screenshot, make notes with something like CleanShot, paste it in, say{" "}
          <em>&ldquo;this doesn&apos;t look right.&rdquo;</em> Claude can see
          it.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 5 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          5. Make Claude Review Itself
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Don&apos;t just accept what Claude gives you. Push back.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          What I do: open another tab with another Claude session and ask it to
          review the work in the specific worktree the other agent just finished.
          It gives you insights on what could be improved, mostly in order of
          priority. Then I pass those back to the original session and tell it
          someone reviewed their code lol. So yeah, I have two tabs per feature
          — one building, one reviewing.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          There&apos;s also{" "}
          <strong>
            <code className="inline-code">/simplify</code>
          </strong>{" "}
          — runs three parallel review agents on your recent changes checking
          for reuse, quality, and efficiency. Quick way to catch stuff before you
          commit.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Some prompts I&apos;ve stolen from Boris Cherny (the guy who built
          Claude Code):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
          <li>
            <em>&ldquo;Grill me on these changes&rdquo;</em>
          </li>
          <li>
            <em>&ldquo;Prove to me this works&rdquo;</em>
          </li>
          <li>
            <em>
              &ldquo;Knowing everything you know now, scrap this and implement
              the elegant solution&rdquo;
            </em>
          </li>
        </ul>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 6 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          6. Use the Browser Agent
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This one is huge. <strong>Vercel&apos;s agent-browser</strong> gives
          Claude the ability to open a browser, test flows, check different
          screen sizes, take screenshots, click buttons... EVERYTHING.
        </p>
        <CodeBlock code="npm install -g @anthropic-ai/agent-browser" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Now Claude can build a component, open it in the browser, screenshot
          it at mobile/tablet/desktop, and fix responsive issues on its own.
          Making Claude test its own implementation is a game changer.
        </p>
        <p className="text-sm text-muted-foreground/70 italic">
          (disclaimer, I work at Vercel... but I really recommend this since
          it&apos;s just so damn useful. Although it can eat a ton of memory from
          your computer)
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 7 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          7. Use Subagents
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Add <em>&ldquo;use subagents&rdquo;</em> to your prompt when you want
          Claude to work harder. It spins up smaller agents that handle pieces
          in parallel. Keeps your main conversation focused instead of one long
          messy thread... it just does a better job.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 8 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          8. Run Multiple Sessions with Worktrees
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Run 3-5 Claude sessions at once using{" "}
          <strong>git worktrees</strong>. Each session gets its own copy of the
          code so they don&apos;t step on each other. One builds, another tests,
          a third researches. You can ask Claude to set this up for you.
        </p>
        <CodeBlock code="claude --dangerously-skip-permissions --worktree feature-name" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Add <code className="inline-code">--tmux</code> to launch each in its
          own tmux pane if you&apos;re juggling a bunch.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Once you try parallel sessions, one at a time feels slow. But be
          careful... idk why, but Claude does get tripped out and suddenly goes
          back to main, or gets trapped in another worktree. I honestly
          don&apos;t know why and I wish Anthropic did something about this.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 9 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          9. Install Skills
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Skills are custom commands that extend what Claude can do. Grab
          community ones from <strong>skills.sh</strong>:
        </p>
        <CodeBlock
          code={`npx skills add frontend-design        # bold design aesthetics, not generic AI slop
npx skills add web-design-guidelines   # 100+ UI/UX/a11y rules from Vercel
npx skills add screenshot-to-code      # turn UI screenshots into working code
npx skills add agent-browser           # browser automation skill`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          The <code className="inline-code">frontend-design</code> one is great
          — pushes Claude toward distinctive typography and color instead of that
          generic &ldquo;AI look.&rdquo; And{" "}
          <code className="inline-code">web-design-guidelines</code> audits your
          UI against accessibility and UX rules automatically.
        </p>

        <h3 className="text-xl font-bold tracking-tight mt-10 mb-4">
          Make Your Own
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          If you do something more than once, turn it into a skill. They live in{" "}
          <code className="inline-code">.claude/commands/</code> (project) or{" "}
          <code className="inline-code">~/.claude/commands/</code> (global):
        </p>
        <CodeBlock code=".claude/commands/design-review.md" />
        <CodeBlock
          code={`Review components for design system consistency:
1. Check that all colors use design tokens (no hardcoded values)
2. Verify spacing uses the token scale
3. Confirm responsive breakpoints are mobile-first
4. Check accessibility (contrast ratios, ARIA labels)
5. Flag any components that could reuse existing ones`}
          className="mt-4"
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          I have skills for optimizing images, generating social cards,
          compressing videos, helping me with blog post images using Sharp...
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At v0, Claude kept inventing new colors or styles that looked just
          right enough that you don&apos;t notice it actually deviated from the
          system. So I made a skill instructing it on our tokens, text styles,
          components... and now it rarely makes those mistakes anymore.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 10 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          10. Connect MCPs (Plugins)
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          MCPs let Claude talk to external tools. For designers, these are the
          ones that matter:
        </p>

        <h3 className="text-xl font-bold tracking-tight mt-10 mb-4">
          Figma MCP
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Pull design tokens, reference component specs, read your Figma files.
          Figma also has <strong>Code to Canvas</strong> now — push
          code-generated UI back into Figma as editable frames.
        </p>
        <CodeBlock code="claude mcp add --transport http figma https://mcp.figma.com/mcp" />

        <h3 className="text-xl font-bold tracking-tight mt-10 mb-4">
          Efecto MCP
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          This is my own tool — an AI-native design canvas where you and Claude
          design together. Under the hood it&apos;s all React and Tailwind.
          Claude drives the canvas live while you watch and fine-tune.
        </p>
        <CodeBlock code="npx @efectoapp/mcp-studio install" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Then tell Claude{" "}
          <em>&ldquo;design [anything] in Studio&rdquo;</em> — saying
          &ldquo;Studio&rdquo; is important. It opens in your browser and
          designs in real time. Still in beta at{" "}
          <strong>efecto.app/studio</strong>.
        </p>

        <h3 className="text-xl font-bold tracking-tight mt-10 mb-4">
          SAP Fiori MCP
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          For y&apos;all — there&apos;s an official{" "}
          <strong>SAP Fiori MCP server</strong> for generating and adapting
          Fiori elements apps:
        </p>
        <CodeBlock code="npm install @sap-ux/fiori-mcp-server" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          There&apos;s also <strong>secondsky/sap-skills</strong> on GitHub — a
          whole set of Claude Code skills covering BTP, CAP, Fiori, ABAP, HANA.
        </p>

        <h3 className="text-xl font-bold tracking-tight mt-10 mb-4">
          Others worth knowing
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-6">
          <li>
            <strong>GitHub MCP</strong> — review PRs, manage issues
          </li>
          <li>
            <strong>Vercel MCP</strong> — deploy from Claude Code
          </li>
          <li>
            <strong>Mockuuups MCP</strong> — generate device mockups
          </li>
          <li>
            <strong>Pencil MCP</strong> — another AI design canvas
          </li>
        </ul>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          To share MCPs with your team, add them with project scope:
        </p>
        <CodeBlock code='claude mcp add --scope project --transport http figma https://mcp.figma.com/mcp' />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          This creates a <code className="inline-code">.mcp.json</code> that
          gets committed to git. Everyone on the team gets the same tools.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 11 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          11. Set Up Hooks
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Hooks run commands automatically at key moments. Add them in{" "}
          <code className="inline-code">.claude/settings.json</code>:
        </p>
        <CodeBlock
          lang="json"
          code={`{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $EDITED_FILE"
          }
        ]
      }
    ]
  }
}`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          Some ideas: auto-format CSS after every edit, run design token
          validation after file changes, take a screenshot after UI changes,
          lint accessibility on every component save.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 12 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          12. Use Loops
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          <code className="inline-code">/loop</code> is like a cron job for
          Claude. Schedule recurring tasks while your session stays open:
        </p>
        <CodeBlock
          code={`/loop 10m check if the dev server is still running
/loop 1h run the design token validation tests
/loop 5m check for new PRs and summarize design changes`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          It can run for up to 3 days. Good for monitoring builds, running
          periodic checks, or watching for changes.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 13 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          13. Just Say &ldquo;Fix&rdquo;
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          When something breaks, paste the error and say{" "}
          <em>&ldquo;fix.&rdquo;</em> That&apos;s it. Don&apos;t overthink
          it... that&apos;s your PROMPT ENGINEERING:
        </p>
        <CodeBlock code="fix" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          For design bugs: screenshot what looks wrong, paste it in, say{" "}
          <em>&ldquo;this doesn&apos;t look right.&rdquo;</em> Claude can see
          screenshots.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 14 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          14. Start Fresh When It Gets Weird
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          If Claude is going in circles or the conversation gets long and messy,
          don&apos;t keep adding to it:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
          <li>
            <strong>
              <code className="inline-code">/compact</code>
            </strong>{" "}
            — summarizes the conversation and frees up context
          </li>
          <li>
            Or just <strong>quit and start a new session</strong>
          </li>
        </ul>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          A fresh Claude with a good{" "}
          <code className="inline-code">CLAUDE.md</code> picks up where the old
          one left off. Don&apos;t waste tokens on a confused agent.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 15 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          15. Useful Shortcuts
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-6 text-sm font-semibold text-foreground">
                  Shortcut
                </th>
                <th className="py-3 text-sm font-semibold text-foreground">
                  What it does
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">Shift+Tab</code>
                </td>
                <td className="py-3">
                  Cycle modes: Normal → Auto-Accept → Plan
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">Ctrl+V</code>
                </td>
                <td className="py-3">Paste image from clipboard</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">Fn Fn</code>
                </td>
                <td className="py-3">Voice dictation (Mac)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">?</code>
                </td>
                <td className="py-3">Show all keyboard shortcuts</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">/voice</code>
                </td>
                <td className="py-3">Built-in voice mode</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">/compact</code>
                </td>
                <td className="py-3">Summarize conversation, free context</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">/simplify</code>
                </td>
                <td className="py-3">Run parallel code review agents</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">/teleport</code>
                </td>
                <td className="py-3">
                  Move session to claude.ai or mobile app
                </td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">claude -c</code>
                </td>
                <td className="py-3">Continue your last conversation</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 pr-6">
                  <code className="inline-code">claude commit</code>
                </td>
                <td className="py-3">Quick git commit</td>
              </tr>
              <tr>
                <td className="py-3 pr-6">
                  <code className="inline-code">Escape</code>
                </td>
                <td className="py-3">Cancel current operation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 16 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          16. Be Dangerous
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          One last thing... if you know what you want, and you&apos;re sure
          Claude can handle it without hand-holding:
        </p>
        <CodeBlock code="claude --dangerously-skip-permissions" />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Like it says, it will stop dangerously asking for permissions. No more
          saying yes, yes, yes to everything.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Just don&apos;t run this on projects you don&apos;t trust. Hidden
          content in files can manipulate Claude into doing things you
          didn&apos;t ask for.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 17 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          17. Set Up GitHub
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Claude can handle all your git stuff. Create repos, commit, push,
          make PRs... u just have to tell it what u want.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          First, install the{" "}
          <strong>GitHub CLI</strong> and log in:
        </p>
        <CodeBlock
          code={`brew install gh
gh auth login`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6 mb-6">
          Once that&apos;s done, Claude can use it directly. Just say things like:
        </p>
        <CodeBlock
          code={`"initialize git, create a repo on GitHub called my-project, and push"
"commit everything with a good message"
"create a PR with a summary of what changed"`}
        />
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          That&apos;s it. Claude runs{" "}
          <code className="inline-code">gh</code> commands under the hood. No
          need to memorize git — just tell Claude what u want and it handles
          the rest.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 18 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">18. Deploy</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          <strong>Vercel:</strong> sign up with GitHub, import repo, click
          Deploy. Every push auto-deploys after that. Or install the{" "}
          <strong>Vercel MCP</strong> and say{" "}
          <em>&ldquo;deploy this&rdquo;</em> inside Claude Code.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Section 19 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          19. Resources
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-lg text-muted-foreground">
          <li>
            <strong>Claude Code docs</strong> — code.claude.com — worth reading
          </li>
          <li>
            <strong>skills.sh</strong> — community skills you can grab and use
          </li>
          <li>
            <strong>Boris Cherny&apos;s tips</strong> —
            howborisusesclaudecode.com — how the Claude Code team uses their own
            tool
          </li>
          <li>
            <strong>Figma MCP docs</strong> — help.figma.com
          </li>
          <li>
            <strong>Efecto</strong> — efecto.app — AI-native design canvas with
            MCP
          </li>
          <li>
            <strong>SAP Fiori MCP</strong> — github.com/SAP-samples
          </li>
          <li>
            <strong>awesome-claude-code</strong> — GitHub — curated list of
            skills, hooks, plugins
          </li>
          <li>
            <strong>agent-browser</strong> —
            github.com/vercel-labs/agent-browser
          </li>
        </ul>
      </section>

      <hr className="border-border/50 my-12" />

      {/* Closing */}
      <p className="text-lg text-muted-foreground leading-relaxed italic pb-16">
        The best way to learn is to just start building. Pick a side project,
        open your terminal, and go.
      </p>
    </article>
  );
}

function CodeBlock({
  code,
  lang,
  className,
}: {
  code: string;
  lang?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg bg-[#1a1a1a] border border-white/5 overflow-x-auto ${className || ""}`}
    >
      {lang && (
        <div className="px-4 pt-3 text-xs text-neutral-500 font-mono">
          {lang}
        </div>
      )}
      <pre className={`p-4 ${lang ? "pt-2" : ""} text-sm leading-relaxed`}>
        <code className="text-neutral-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}
