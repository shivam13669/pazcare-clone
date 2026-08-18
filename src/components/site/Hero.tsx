import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { heroImageUrl, heroRotatingWords, heroStats } from "./site-data";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroRotatingWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-hero-gradient">
      <div className="section-x flex flex-col items-center gap-10 py-14 lg:flex-row lg:py-20">
        <div className="w-full lg:w-[58%]">
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-[44px] lg:text-[46px]">
            Comprehensive Benefits,
            <br className="hidden lg:block" /> Uncomplicated Experience
          </h1>
          <div className="mt-6 space-y-1 text-lg text-foreground/85 sm:text-[21px]">
            <p>Looking for Employee Insurance &amp; Benefits?</p>
            <p>
              We&rsquo;ve got the whole kit -{" "}
              <span key={index} className="font-semibold text-brand">
                {heroRotatingWords[index]}
              </span>
            </p>
          </div>
          <Button variant="brand" size="pill" className="mt-8" asChild>
            <a href="#quote">Talk To A Benefits Expert</a>
          </Button>

          <dl className="mt-11 flex flex-wrap gap-x-8 gap-y-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l-[3px] border-brand pl-4">
                <dt className="text-2xl font-bold text-ink sm:text-[30px]">{stat.value}</dt>
                <dd className="text-[15px] text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative w-full lg:w-[42%] lg:pl-6">
          <img
            src={heroImageUrl}
            alt="Pazcare employee benefits dashboard on a tablet and mobile app"
            className="w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}