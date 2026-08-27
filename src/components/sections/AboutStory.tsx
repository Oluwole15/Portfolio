import Image from "next/image";

const headingClass =
  "text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.1]";

const paragraphClass =
  "text-base sm:text-[17px] leading-relaxed text-zinc-600 dark:text-zinc-400";

export default function AboutStory() {
  return (
    <>
      {/* Section 1 — How I Got Here (Heading + Image left, Body right) */}
      <section className="w-full px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div className="space-y-8">
            <h2
              className={`${headingClass} max-w-xl`}
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              How I Got Here
            </h2>
            <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/about/portrait.png"
                alt="How I Got Here"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
          <div className="max-w-[540px] space-y-5">
            <p className={paragraphClass}>
              My journey into product design started with a simple curiosity:
              why do some digital products feel effortless while others feel
              like a chore? That curiosity led me to study human behaviour—how
              people think, what they need, and where they get stuck.
            </p>
            <p className={paragraphClass}>
              Over the years, I&apos;ve worked with founders and startups to
              turn ideas into products people actually enjoy using. Along the
              way, I learned to balance clean design with strategy and approach
              every project as an opportunity to solve a meaningful problem.
            </p>
            <p className={paragraphClass}>
              Like many beginners, I started out wide-eyed and slightly
              overwhelmed. As a self-taught designer, I understand how
              challenging it can be to learn without clear guidance or support.
            </p>
            <p className={paragraphClass}>
              That experience inspired me to create a small community for
              beginner designers, a safe space to learn, share work, grow, and
              receive constructive feedback.
            </p>
            <p className={paragraphClass}>
              Over time, that community became <strong>NEXA Academy</strong>,
              where I now help aspiring designers develop practical skills,
              build confidence, and take meaningful steps toward a career in
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Beyond Work (Body left, Heading + Image right on desktop;
          Heading + Image first on mobile) */}
      <section className="w-full px-6 pb-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Heading + Image — first on mobile, second on desktop */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2
              className={`${headingClass} max-w-xl`}
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Beyond Work
            </h2>
            <div className="relative w-full max-w-sm aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/about/image-5.jpg"
                alt="Beyond Work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
          {/* Text — second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 max-w-[540px] space-y-5">
            <p className={paragraphClass}>
              Design doesn&apos;t switch off when I step away from the screen.
              I&apos;m always paying attention to how people interact with the
              world around them. Small frustrations, everyday habits, and
              unexpected moments often become the starting point for some of my
              best design ideas.
            </p>
            <p className={paragraphClass}>
              I also make time to give back through volunteering and mentorship,
              contributing my skills to causes that matter while staying
              connected to the wider tech community through industry events.
            </p>
            <p className={paragraphClass}>
              I&apos;m constantly learning, experimenting, and creating whether
              that means sketching new ideas, exploring emerging tools, or
              simply observing how people experience the products and systems
              around them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
