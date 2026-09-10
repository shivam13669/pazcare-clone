import { ShieldCheck, Smartphone, Rocket, Headphones } from "lucide-react";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Insurance + wellness, one platform",
    description:
      "Group health, term life, accident cover and corporate wellness — managed from a single dashboard.",
  },
  {
    icon: Smartphone,
    title: "100% digital experience",
    description:
      "Paperless onboarding, instant endorsements and a self-serve app for every employee.",
  },
  {
    icon: Rocket,
    title: "Built for startups & SMBs",
    description:
      "Flexible plans that scale with your team size, from 10 employees to 10,000.",
  },
  {
    icon: Headphones,
    title: "Human support, always",
    description:
      "A dedicated benefits partner for HR and 24x7 assistance for your employees.",
  },
];

export function TrustedBy() {
  return (
    <section className="bg-ink-gradient py-20">
      <div className="section-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold leading-snug text-ink-foreground sm:text-[34px]">
            Built for the way modern teams work
          </h2>
          <p className="mt-4 text-base text-ink-foreground/80 sm:text-lg">
            Employee benefits that are simple to set up, easy to use, and designed to grow with you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-foreground">
                <prop.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
