import { satisfactionStats } from "./site-data";

export function StatsBand() {
  return (
    <section className="bg-surface-soft py-20">
      <div className="section-x">
        <h2 className="max-w-2xl text-3xl font-semibold text-foreground sm:text-[40px]">
          We take <span className="text-brand">customer satisfaction</span> very seriously
        </h2>
        <dl className="mt-12 grid gap-8 sm:grid-cols-3">
          {satisfactionStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-border bg-card p-8">
              <dt className="text-4xl font-bold text-brand">{stat.value}</dt>
              <dd className="mt-3 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}