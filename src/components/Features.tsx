import { BookOpenCheck, MonitorSmartphone, School, Shield, Sparkles, Users2 } from 'lucide-react';

const features = [
  {
    title: 'Modern education with strong values',
    description:
      'Students learn in a calm academic setting that supports discipline, ethics, confidence, and strong classroom learning.',
    icon: Shield,
  },
  {
    title: 'Technology-aware learning',
    description:
      'Computer and IT exposure is introduced in a practical and relevant way so students feel prepared for the future.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Experienced faculty support',
    description:
      'A qualified teaching team focuses on student understanding, classroom engagement, and steady academic progress.',
    icon: Users2,
  },
  {
    title: 'Project and activity based practice',
    description:
      'Lessons are reinforced through participation, concept-building activities, and guided classroom practice.',
    icon: Sparkles,
  },
  {
    title: 'Smart classroom environment',
    description:
      'Structured spaces, useful learning tools, and supportive supervision help students stay focused and comfortable.',
    icon: School,
  },
  {
    title: 'Family-friendly admissions guidance',
    description:
      'Parents can understand programs, facilities, and admission steps quickly without confusion or unnecessary clutter.',
    icon: BookOpenCheck,
  },
];

export function Features() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-center rounded-[32px] bg-[linear-gradient(145deg,#0f172a,#1d4ed8)] p-8 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.65)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
              Why families choose us
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              A cleaner, stronger school experience built around trust, clarity, and real parent concerns.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              Usmania Public School presents its strengths in a clearer and more organized way, so families can
              understand the school’s value, environment, and learning focus without getting lost in crowded layouts.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="glass-card flex h-full min-h-[230px] flex-col rounded-[26px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}