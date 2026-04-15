import { Baby, BookOpen, GraduationCap, School2 } from 'lucide-react';

const programs = [
  {
    title: 'Play Group',
    level: 'Early years',
    description:
      'A gentle beginning that helps children build confidence, social interaction, and early classroom habits through guided activities.',
    icon: Baby,
  },
  {
    title: 'Primary',
    level: 'Class 1 to 5',
    description:
      'Strong academic foundations with reading confidence, classroom discipline, and daily learning routines for steady growth.',
    icon: BookOpen,
  },
  {
    title: 'Middle',
    level: 'Class 6 to 8',
    description:
      'A stronger academic structure that develops reasoning, subject understanding, and readiness for higher class expectations.',
    icon: School2,
  },
  {
    title: 'Matric',
    level: 'Class 9 to 10',
    description:
      'Board-focused preparation with extra attention to concept clarity, exam readiness, and structured subject support.',
    icon: GraduationCap,
  },
];

export function Programs() {
  return (
    <section id="programs" className="section-shell bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            Academic pathway
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            Clear academic programs from early learning to matric preparation.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Each stage is presented clearly so parents can quickly understand where their child fits
            and what type of academic support to expect at every level.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex h-full flex-col rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-[0_24px_60px_-32px_rgba(15,23,42,0.28)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm ring-1 ring-slate-100">
                <program.icon className="h-7 w-7" />
              </div>

              <div className="mt-6 flex-1">
                <p className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                  {program.level}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {program.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}