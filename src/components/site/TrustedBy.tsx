import { clientLogos } from "./site-data";

export function TrustedBy() {
  const first = clientLogos.slice(0, 7);
  const second = clientLogos.slice(7);

  return (
    <section className="bg-ink-gradient py-20">
      <div className="section-x">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-snug text-ink-foreground sm:text-[34px]">
          2500+ top companies in India trust Pazcare for their Employee Insurance &amp; Benefits
        </h2>

        {[first, second].map((row, r) => (
          <div
            key={r}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10"
          >
            {row.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-8 w-auto max-w-[150px] object-contain opacity-95"
                loading="lazy"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}