import { certifications, newsLogos } from "./site-data";

export function Compliance() {
  return (
    <section className="bg-ink-gradient py-20">
      <div className="section-x">
        <h2 className="max-w-3xl text-3xl font-semibold text-ink-foreground sm:text-[40px]">
          Trust in our <span className="text-brand">Compliance &amp; Certification</span> when it
          comes to managing your employee benefits.
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-12">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center gap-3">
              <img src={cert.src} alt={`${cert.name} certified`} className="h-16 w-auto" loading="lazy" />
              <p className="text-sm text-ink-foreground/80">{cert.name} certified</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink-foreground/15 pt-12">
          <h3 className="text-2xl font-semibold text-ink-foreground">Pazcare in the news</h3>
          <div className="mt-8 flex flex-wrap items-center gap-12">
            {newsLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} coverage of Pazcare`}
                className="h-9 w-auto object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}