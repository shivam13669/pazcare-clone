import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials, userStories } from "./site-data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index]!;

  return (
    <>
      <section className="bg-ink-gradient py-20 lg:py-24">
        <div className="section-x">
          <figure className="grid items-center gap-10 lg:grid-cols-[1.4fr_auto_1fr]">
            <div>
              <Quote className="size-8 fill-ink-foreground/30 text-ink-foreground/30" />
              <blockquote className="mt-5 text-2xl font-light italic leading-relaxed text-ink-foreground sm:text-[30px]">
                {item.quote}
              </blockquote>
            </div>
            <div className="hidden h-40 w-px bg-ink-foreground/20 lg:block" />
            <figcaption className="flex items-center gap-5">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-24 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-xl font-semibold text-ink-foreground">{item.name}</p>
                <p className="mt-1 text-ink-foreground/70">{item.role}</p>
              </div>
            </figcaption>
          </figure>

          <div className="mt-12 flex justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="cursor-pointer rounded-full bg-ink-foreground/10 p-4 text-ink-foreground transition-colors hover:bg-ink-foreground/20"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="cursor-pointer rounded-full bg-ink-foreground/10 p-4 text-ink-foreground transition-colors hover:bg-ink-foreground/20"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="section-x">
          <h2 className="text-center text-3xl font-semibold text-foreground sm:text-[40px]">
            Read personal stories from Pazcare users!
          </h2>
          <div className="mx-auto mt-12 max-w-4xl space-y-6">
            {userStories.map((story) => (
              <article
                key={story.name}
                className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:grid-cols-[200px_1fr]"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="size-24 rounded-full object-cover"
                    loading="lazy"
                  />
                  <p className="mt-4 font-semibold text-ink">{story.name}</p>
                  <p className="mt-1 text-sm leading-snug text-muted-foreground">{story.role}</p>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-ink-soft">{story.text}</p>
                  <button className="mt-4 cursor-pointer text-[15px] font-medium text-brand hover:underline">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}