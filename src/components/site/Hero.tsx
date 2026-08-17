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
      <div className="section-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Comprehensive Benefits, Uncomplicated Experience
          </h1>
          <div className="mt-6 space-y-1 text-lg text-foreground/80 sm:text-xl">
            <p>Looking for Employee Insurance &amp; Benefits?</p>
            <p>
              We&rsquo;ve got the whole kit -{" "}
              <span key={index} className="font-semibold text-brand">
                {heroRotatingWords[index]}
              </span>
            </p>
          </div>
          <Button variant="brand" size="pill" className="mt-9" asChild>
            <a href="#quote">Talk To A Benefits Expert</a>
          </Button>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand pl-4">
                <dt className="text-2xl font-bold text-ink sm:text-[28px]">{stat.value}</dt>
                <dd className="text-sm text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
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