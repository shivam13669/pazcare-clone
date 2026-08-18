import { whySlides } from "./site-data";

const tints = [
  "bg-[oklch(0.93_0.05_150)]",
  "bg-[oklch(0.91_0.04_300)]",
  "bg-[oklch(0.91_0.03_255)]",
  "bg-[oklch(0.94_0.06_85)]",
];

export function WhyChoose() {
  return (
    <section className="bg-surface-soft py-20 lg:py-24">
      <div className="section-x">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-4xl font-semibold text-foreground sm:text-[44px]">
              Why choose Pazcare ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
              You&rsquo;re choosing flexibility, transparency, and personalization in your employee
              benefits when choosing Pazcare
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whySlides.map((slide, i) => (
            <article
              key={slide.title}
              className={
                "flex flex-col rounded-3xl p-7 pb-0 text-center " + (tints[i % tints.length] ?? "")
              }
            >
              <h3 className="text-xl font-semibold leading-snug text-ink">{slide.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{slide.description}</p>
              <img
                src={slide.image}
                alt={slide.title}
                className="mt-6 w-full rounded-t-2xl object-cover"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}