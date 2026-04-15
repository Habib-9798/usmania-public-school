import { ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="section-shell pt-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_55%,#2563eb_100%)] px-6 py-8 text-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.7)] md:px-10 md:py-10">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
              backgroundSize: '18px 18px',
            }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-accent">
                Admissions Open
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                Give your child a strong start with trusted learning, qualified teaching, and a structured school environment.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Contact our team today for admission details, class guidance, and support with the enrollment process.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-5 text-slate-900 shadow-xl md:min-w-[320px]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
                Call for admissions
              </p>

              <p className="mt-3 text-3xl font-extrabold text-primary">
                0311 3991005
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg" variant="accent" className="rounded-full px-6 font-semibold">
                  <a href="#contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/15 bg-white text-primary hover:bg-primary hover:text-white"
                >
                  <a href="tel:03113991005">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Talk to us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}