export default function AboutHero() {
  return (
    <section className="w-full px-6 pt-16 pb-16 md:pt-20 md:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm">🌍</span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Based in Lagos, working globally
          </span>
        </div>

        <h1
          className="mt-6 text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Product Designer &amp; Strategist, Design Educator, Founder,
          Creative thinker &amp; mentor
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
          I&apos;m Nelson, a founder and senior product designer focused on
          creating thoughtful digital experiences that solve real problems. I
          work across design, strategy, and human behaviour, while also helping
          aspiring designers build practical skills through my design academy.
        </p>
      </div>
    </section>
  );
}
