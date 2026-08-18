import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Offerings } from "@/components/site/Offerings";
import { WhyChoose } from "@/components/site/WhyChoose";
import { WhoFor } from "@/components/site/WhoFor";
import { FeatureBlocks } from "@/components/site/FeatureBlocks";
import { StatsBand } from "@/components/site/StatsBand";
import { Compliance } from "@/components/site/Compliance";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { employeeFeatures, heroImageUrl, hrFeatures } from "@/components/site/site-data";

const title = "Pazcare — Employee Insurance & Benefits Platform for India";
const description =
  "Group health, term life and accident insurance, corporate wellness and tax-saving benefit wallets — managed digitally on one platform trusted by 2500+ companies.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: heroImageUrl },
      { name: "twitter:image", content: heroImageUrl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Offerings />
        <WhyChoose />
        <WhoFor />
        <FeatureBlocks
          eyebrow="For employees"
          heading="Accessing employee benefits is now easy and straightforward with the Pazcare app."
          features={employeeFeatures}
          ctaLabel="Know more about our platform"
          tone="dark"
        />
        <StatsBand />
        <FeatureBlocks
          eyebrow="For HR teams"
          heading="You take care of people strategies."
          subheading="We'll take care of your end-to-end benefits management."
          features={hrFeatures}
          ctaLabel="Know more about our platform"
        />
        <Compliance />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
