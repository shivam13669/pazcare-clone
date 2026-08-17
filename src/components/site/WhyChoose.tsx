import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { whySlides } from "./site-data";

export function WhyChoose() {
  const [index, setIndex] = useState(0);
  const slide = whySlides[index]!;

  return (
    <section className="bg-surface-soft py-20">
      <div className="section-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-foreground sm:text-[40px]">
              Why choose Pazcare ?
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              You&rsquo;re choosing flexibility, transparency, and personalization in your employee
              benefits when choosing Pazcare
            </p>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Previous slide"
              onClick={() => setIndex((i) => (i - 1 + whySlides.length) % whySlides.length)}
              className="cursor-pointer rounded-full border border-border bg-card p-3 text-ink transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => setIndex((i) => (i + 1) % whySlides.length)}
              className="cursor-pointer rounded-full border border-border bg-card p-3 text-ink transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-card lg:grid-cols-2 lg:p-12">
          <div>
            <h3 className="text-2xl font-semibold text-ink sm:text-3xl">{slide.title}</h3>
            <p className="mt-4 text-muted-foreground">{slide.description}</p>
            <div className="mt-8 flex gap-2">
              {whySlides.map((s, i) => (
                <button
                  key={s.title}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={
                    "h-1.5 cursor-pointer rounded-full transition-all " +
                    (i === index ? "w-10 bg-brand" : "w-5 bg-border")
                  }
                />
              ))}
            </div>
          </div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}