import { certifications, newsLogos } from "./site-data";

export function Compliance() {
  return (
    <section className="py-20 lg:py-24">
      <div className="section-x">
        <div className="grid items-center gap-12 rounded-[2rem] bg-ink-gradient p-10 lg:grid-cols-[0.9fr_1.4fr] lg:p-14">
          <h2 className="text-3xl text-ink-foreground sm:text-[34px]">
            <span className="text-xl font-medium sm:text-2xl">Trust in our</span>
            <br />
            <span className="text-4xl font-semibold sm:text-[42px]">Compliance</span>
            <br />
            <span className="text-4xl font-semibold sm:text-[42px]">&amp; Certification</span>
            <br />
            <span className="text-xl font-normal text-ink-foreground/85 sm:text-2xl">
              when it comes to managing your employee benefits.
            </span>
          </h2>
          <div className="grid grid-cols-2 items-start gap-10 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center gap-4 text-center">
                <img
                  src={cert.src}
                  alt={`${cert.name} certified`}
                  className="h-24 w-auto"
                  loading="lazy"
                />
                <p className="text-[17px] leading-snug text-ink-foreground/90">
                  {cert.name} certified
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-3xl font-semibold text-foreground sm:text-[38px]">
            360 Biz Health in the news
          </h3>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {newsLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[86px] w-[170px] items-center justify-center rounded-2xl border border-border bg-card px-6"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} coverage of 360 Biz Health`}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}