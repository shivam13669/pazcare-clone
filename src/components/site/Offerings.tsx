import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { offerings } from "./site-data";

const tabs: string[] = Object.keys(offerings);

const cardTints = [
  "bg-[linear-gradient(305deg,rgb(207,235,221),rgb(230,245,238))]",
  "bg-[linear-gradient(305deg,rgb(217,231,253),rgb(235,243,254))]",
  "bg-[linear-gradient(305deg,rgb(253,240,204),rgb(254,247,229))]",
  "bg-[linear-gradient(305deg,rgb(248,217,215),rgb(252,236,234))]",
];

export function Offerings() {
  const [active, setActive] = useState<string>(tabs[0] ?? "");
  const items = offerings[active] ?? [];

  return (
    <section id="offerings" className="py-20 lg:py-24">
      <div className="section-x flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-[36%]">
          <h2 className="text-4xl font-semibold leading-[1.15] text-foreground sm:text-[44px]">
            We&rsquo;ve got everything in employee benefits.
          </h2>
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink-soft">
            Create a holistic benefits program by curating from our offerings.
          </p>

          <div className="mt-10 flex max-w-[420px] flex-col gap-4">
            {tabs.map((tab) => {
              const isActive = active === tab;
              const [first, ...rest] = tab.replace("Paz ", "Paz|").split("|");
              return (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={
                    "cursor-pointer rounded-full border px-8 py-5 text-left text-2xl transition-colors " +
                    (isActive
                      ? "border-ink bg-ink text-ink-foreground"
                      : "border-border bg-card text-ink hover:border-brand")
                  }
                >
                  <span className="font-bold">{first?.toLowerCase()}</span>{" "}
                  <span className="font-light">{rest.join(" ").toLowerCase()}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid w-full gap-[18px] sm:grid-cols-2 lg:w-[64%]">
          {items.map((item, i) => (
            <a
              key={item.title}
              href="#quote"
              className={
                "group relative flex h-[255px] flex-row justify-between overflow-hidden rounded-[32px] pl-9 pt-10 transition-transform duration-300 hover:-translate-y-1 " +
                (cardTints[i % cardTints.length] ?? "")
              }
            >
              <div className="flex w-[221px] shrink-0 flex-col">
                <h3 className="max-w-[221px] text-2xl font-medium leading-[34px] text-[rgb(39,33,39)]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[160px] text-base font-light leading-5 text-[rgb(39,33,39)]">
                  {item.description}
                </p>
              </div>

              <div className="relative flex flex-1 items-end justify-center pr-1">
                <span className="absolute bottom-[29px] left-1/2 h-[6px] w-[41px] -translate-x-1/2 rounded-[100%] bg-[rgb(233,232,233)]" />
                <img
                  src={item.icon}
                  alt=""
                  className="relative h-[137px] w-32 transition-transform duration-300 group-hover:-translate-y-1"
                  loading="lazy"
                />
              </div>

              <ArrowUpRight
                strokeWidth={1.5}
                className="absolute right-[13px] top-[17px] size-[18px] text-[rgb(39,33,39)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}