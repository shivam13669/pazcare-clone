import { clientLogos } from "./site-data";

export function TrustedBy() {
  return (
    <section className="bg-ink-gradient py-20">
      <div className="section-x">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-semibold leading-snug text-ink-foreground sm:text-[34px]">
          2500+ top companies in India trust Pazcare for their Employee Insurance &amp; Benefits
        </h2>
      </div>

      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-x-16">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={`${logo.name} logo`}
              className="h-8 w-auto max-w-[150px] shrink-0 object-contain opacity-95"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}