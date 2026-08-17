import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { offerings } from "./site-data";

const tabs = Object.keys(offerings);

export function Offerings() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="offerings" className="py-20">
      <div className="section-x">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          We&rsquo;ve got everything in employee benefits.
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-foreground sm:text-[40px]">
          Create a holistic benefits program by curating from our offerings.
        </h2>

        <div className="mt-10 inline-flex flex-wrap gap-2 rounded-full bg-muted p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={
                "cursor-pointer rounded-full px-6 py-2.5 text-sm font-semibold transition-colors " +
                (active === tab
                  ? "bg-brand text-brand-foreground"
                  : "text-ink-soft hover:text-brand")
              }
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offerings[active].map((item) => (
            <a
              key={item.title}
              href="#quote"
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div>
                <img src={item.icon} alt="" className="h-12 w-12" loading="lazy" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Know more
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}