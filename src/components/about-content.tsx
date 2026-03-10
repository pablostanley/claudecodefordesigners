export function AboutContent() {
  return (
    <article className="prose-custom pb-16">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Why I&apos;m here
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From a designer who went from Figma to the terminal — and somehow
          ended up contributing to a real codebase.
        </p>
      </header>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          I&apos;m Pablo. I&apos;m a designer. For most of my career, my world
          was Figma, Sketch, Adobe. Nice GUIs with buttons and panels and
          things I could click. The terminal? That was a black rectangle where
          the dev team did hacker things. No buttons. No UI. Just a blinking
          cursor judging me for not knowing what{" "}
          <code className="inline-code">ls -la</code> meant.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          And now? My design tool of choice is the terminal.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I know. Believe me, I know.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          How it started
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          For years I was the &ldquo;typical&rdquo; product designer. I made
          mocks, flows, decks. Beautiful Figma files that I handed to engineers
          like care packages.{" "}
          <em>
            &ldquo;Here you go. I believe in you. Please don&apos;t mess this
            up.&rdquo;
          </em>
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Sometimes what shipped was close to what I designed. Sometimes it
          was... not. Like a bizarro version of it. We&apos;ve all been there,
          right?{" "}
          <em>
            &ldquo;Oh, u should&apos;ve seen the Figma file, man!&rdquo;
          </em>
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I lived in that feeling for years. My Figma was always better than
          production. And I told myself that was just how it worked.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Then AI tools got real
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          One day I thought, okay, let me try this for more than rewriting
          emails. I described an interaction. The AI wired the whole thing. I
          connected a simple database, styled the UI, deployed it. For about
          ten minutes, I felt like a genius.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Then something broke. And I realized I had absolutely no idea what
          was happening under the hood. None.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          That was humbling. But also kind of exciting. Because I realized —
          this gap between &ldquo;I described it&rdquo; and &ldquo;I understand
          it&rdquo;? That gap can shrink.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Where I am now
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          I work at Vercel on v0. I&apos;m contributor #30 on GitHub by
          commits. Not #30 designer. #30 overall. I&apos;m in the codebase
          every day, opening PRs, getting them reviewed, shipping real features
          alongside engineers.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          I also built{" "}
          <a
            href="https://efecto.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Efecto
          </a>{" "}
          — an AI-native design tool where humans and AI agents design
          together. Under the hood it&apos;s React and Tailwind. I built it
          with Claude Code.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          And I gotta be honest? It&apos;s still scary. Every time I push
          something, a small part of me is convinced I&apos;m about to break
          the entire codebase. Even if I just change a font size... I&apos;m
          like, &ldquo;That&apos;s it... I just deleted the database.
          Everything is on fire.&rdquo;
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          But that fear is part of it. You&apos;re not supposed to feel
          comfortable yet. You&apos;re learning.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Why this matters for designers
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Here&apos;s what changed for me: I stopped designing in theory and
          started designing in reality. When you&apos;re in the code, you&apos;re not
          imagining how the product feels anymore. You&apos;re inside it.
          You&apos;re changing it. You&apos;re breaking it on purpose to see
          what happens.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You don&apos;t have to become an engineer. You have to become a
          designer who can ship things. Those are different.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Shipping means u can take an idea, build a working version, put it
          in front of real people, and learn from it. Without waiting three
          months. Without a full sprint cycle. Without begging for engineering
          resources.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Internal tools. Prototypes with real data. Proof-of-concepts that
          actually work. The stuff that usually dies in Jira? You can make it
          real.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          The trust thing
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Something nobody talks about: when you start contributing to the
          codebase, u build trust with engineers in a way that mockups never
          will. You&apos;re not the person who throws specs over the wall
          anymore. You&apos;re in their world. You understand their
          constraints. You see why that &ldquo;simple&rdquo; change
          isn&apos;t simple.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          At Vercel, the engineers actually want me in the code. They help me.
          They get me unstuck. They review my PRs and say, &ldquo;Okay,
          here&apos;s what you did wrong, and here&apos;s how to fix
          it.&rdquo; And I learn from it every single time.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Find those engineers on your team. The ones who light up when you
          say, &ldquo;I tried building this myself. Can you help me not
          destroy everything?&rdquo; Those are your people.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          The honest parts
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          It&apos;s not all magic. AI gives you stuff that looks correct on
          the happy path, but there&apos;s always a bug hiding somewhere. It
          doesn&apos;t care about your compliance team. It will happily put
          secrets in the wrong place or skip validations unless someone catches
          it.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You&apos;ll ship your first thing and think, &ldquo;I&apos;m
          basically a senior engineer now.&rdquo; You&apos;re not. You&apos;re
          a designer with a new capability. Use it with humility.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          And avoid going solo. It&apos;s tempting to hide in a corner, build
          something alone for two weeks, then surprise everyone with your
          &ldquo;genius.&rdquo; Usually nobody asked for it. This is a team
          sport. Even with AI.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          For the SAP designers in the room
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You work with serious systems. Regulations. Global customers. U
          can&apos;t just vibe your way through the codebase.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          But there&apos;s a huge amount of surface area that&apos;s perfect
          for this. Internal dashboards stuck in spreadsheets. Hacky tools that
          teams maintain on the side. Prototypes for new features you want to
          test. Onboarding flows that are currently PowerPoints.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          These are perfect. Short-lived. Lower risk. High learning value.
          Build them, test them with real users, then either throw them away or
          partner with engineering to make them production-ready.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Think of yourself less as &ldquo;the person who makes the spec&rdquo;
          and more as &ldquo;the person who makes the first working
          version.&rdquo; That first version can be messy. It just has to be
          real.
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          What I want you to do
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Ship one thing. Not a deck. Not a Figma prototype. A real, clickable,
          usable thing. Connected to a repo. Something real.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          It can be tiny. A form that doesn&apos;t suck. A micro-dashboard. A
          tool that saves your team five minutes a day. That little detail
          that&apos;s been bugging you for months and there hasn&apos;t been
          anyone who can fix it? You fix it.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          You&apos;re going to feel like a fraud. That&apos;s fine.
          You&apos;re going to worry you&apos;ll break everything.
          That&apos;s normal.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          But once you ship something real? You&apos;re not the same designer
          anymore. You&apos;re a designer who ships. And in this world,
          that&apos;s the designer who changes things. Not the one with the
          prettiest mockups. The one who can take an idea all the way to
          &ldquo;it&apos;s live.&rdquo;
        </p>
      </section>

      <hr className="border-border/50 my-12" />

      <p className="text-lg text-muted-foreground leading-relaxed italic">
        The tools are here. It&apos;s scary. It&apos;s messy. It&apos;s
        frustrating sometimes. But it&apos;s also really, really fun.
        So... get in there.{" "}
        <a
          href="https://pablostanley.substack.com/p/how-i-stopped-worrying-and-learned"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors not-italic"
        >
          Read the full story here.
        </a>
      </p>
    </article>
  );
}
