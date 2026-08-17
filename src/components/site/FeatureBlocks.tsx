import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Feature = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

export function FeatureBlocks({
  eyebrow,
  heading,
  subheading,
  features,
  ctaLabel,
  tone = "light",
}: {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  features: Feature[];
  ctaLabel: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-ink-gradient py-20" : "py-20"}>
      <div className="section-x">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
        )}
        <h2
          className={
            "mt-3 max-w-3xl text-3xl font-semibold sm:text-[40px] " +
            (dark ? "text-ink-foreground" : "text-foreground")
          }
        >
          {heading}
        </h2>
        {subheading && (
          <p className={"mt-4 max-w-2xl " + (dark ? "text-ink-foreground/75" : "text-muted-foreground")}>
            {subheading}
          </p>
        )}

        <div className="mt-12 space-y-10">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={
                "grid items-center gap-8 rounded-[2rem] p-8 lg:grid-cols-2 lg:p-12 " +
                (dark ? "bg-ink-foreground/5 backdrop-blur" : "bg-surface-soft") +
                (i % 2 === 1 ? " lg:[&>*:first-child]:order-2" : "")
              }
            >
              <div>
                <h3
                  className={
                    "text-2xl font-semibold sm:text-3xl " + (dark ? "text-ink-foreground" : "text-ink")
                  }
                >
                  {feature.title}
                </h3>
                <p className={"mt-3 " + (dark ? "text-ink-foreground/75" : "text-muted-foreground")}>
                  {feature.description}
                </p>
                {feature.bullets.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={
                          "flex items-center gap-3 text-[15px] " +
                          (dark ? "text-ink-foreground/90" : "text-ink-soft")
                        }
                      >
                        <span className="flex size-5 items-center justify-center rounded-full bg-brand text-brand-foreground">
                          <Check className="size-3" />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full rounded-2xl object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button variant={dark ? "onDark" : "brand"} size="pill" asChild>
            <a href="#quote">{ctaLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}