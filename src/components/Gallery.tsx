import { Check, BookOpen, ShieldCheck, Sparkles, Users } from 'lucide-react';

const trustCards = [
  {
    title: 'Structured academic environment',
    icon: ShieldCheck,
    points: [
      'Clear classroom routines',
      'Organized learning support',
      'Focused student supervision',
    ],
  },
  {
    title: 'Qualified teaching support',
    icon: Users,
    points: [
      'Experienced faculty members',
      'Better student understanding',
      'Steady academic guidance',
    ],
  },
  {
    title: 'Balanced learning approach',
    icon: Sparkles,
    points: [
      'Activity-based classroom learning',
      'Concept-building practice',
      'Confidence through participation',
    ],
  },
  {
    title: 'Student-focused development',
    icon: BookOpen,
    points: [
      'Confidence through guided learning',
      'Better engagement inside the classroom',
      'Support for steady academic growth',
    ],
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            Why parents trust us
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            A school environment built around discipline, learning, and student growth.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Usmania Public School provides a balanced learning environment where students receive
            academic guidance, structured support, and values-focused development at every stage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[32px] bg-[linear-gradient(145deg,#0f172a,#1d4ed8)] p-8 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.65)] lg:mt-16 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
              <BookOpen className="h-4 w-4 text-accent" />
              School highlights
            </div>

            <h3 className="mt-5 text-3xl font-bold leading-tight">
              We focus on academic strength, values, and a more confident student journey.
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              Families look for a school that feels safe, organized, and serious about learning.
              Our environment supports students through structured academics, qualified teaching,
              and a classroom culture that encourages discipline and progress.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {trustCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full min-h-[240px] flex-col rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <card.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                  {card.title}
                </h3>

                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}