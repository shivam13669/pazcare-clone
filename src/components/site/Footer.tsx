import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { certifications, footerColumns } from "./site-data";

export function Footer() {
  return (
    <footer className="bg-ink-gradient pt-20 text-ink-foreground">
      <div className="section-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#offerings"
                      className="text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink-foreground/15 pt-10 lg:grid-cols-3">
          <div>
            <img src={footerLogoUrl} alt="360 Biz Health" className="h-8 w-auto" loading="lazy" />
            <div className="mt-5 flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#social"
                  aria-label="360 Biz Health social profile"
                  className="rounded-full border border-ink-foreground/25 p-2 transition-colors hover:bg-ink-foreground/10"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink-foreground/60">
              © 2022 Insurance products are offered by Get Paz Insurance Brokers Pvt Ltd IRDAI
              Broking License Registration Code: Certificate No. 780, License category - Direct
              Broker (Life &amp; General), valid till 17-Nov-2027.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Paz Helpdesk</p>
            <div className="mt-4 space-y-2 text-sm text-ink-foreground/80">
              <p>+91 80378 34753</p>
              <p>support@360bizhealth.com</p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col items-center gap-2">
                  <img src={cert.src} alt={cert.name} className="h-10 w-auto" loading="lazy" />
                  <span className="text-[11px] text-ink-foreground/60">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Best pricing for you.</p>
            <p className="text-lg font-semibold">Best claim support for your team.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="brand" size="pillSm" asChild>
                <a href="#quote">Get a Quote</a>
              </Button>
              <Button variant="onDarkOutline" size="pillSm" asChild>
                <a href="#quote">Talk to an expert</a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-ink-foreground/70">App for employees</p>
            <div className="mt-3 flex gap-3 text-sm">
              <a href="#app" className="text-ink-foreground/80 hover:text-ink-foreground">
                Google Play
              </a>
              <span className="text-ink-foreground/40">|</span>
              <a href="#app" className="text-ink-foreground/80 hover:text-ink-foreground">
                App Store
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-ink-foreground/15 py-8 text-center text-xs text-ink-foreground/50">
          360 Biz Health — Comprehensive Benefits, Uncomplicated Experience.
        </p>
      </div>
    </footer>
  );
}