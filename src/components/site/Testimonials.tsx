import { testimonials, userStories } from "./site-data";

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="section-x">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">Impact we made</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <blockquote className="text-lg font-medium leading-relaxed text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-semibold text-foreground sm:text-[40px]">
          Read personal stories from Pazcare users!
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {userStories.map((story) => (
            <article key={story.name} className="rounded-3xl bg-surface-soft p-8">
              <div className="flex items-center gap-4">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="size-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-ink">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.role}</p>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">{story.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}