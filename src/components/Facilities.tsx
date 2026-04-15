import { BookMarked, FlaskConical, MonitorPlay, ShieldCheck, Sparkles, Users } from 'lucide-react';

const facilities = [
  {
    title: 'Smart digital classrooms',
    description:
      'Technology-supported classrooms help students learn in a more engaging, structured, and modern way.',
    icon: MonitorPlay,
  },
  {
    title: 'Science lab support',
    description:
      'Practical science exposure helps students build understanding through guided observation and activity.',
    icon: FlaskConical,
  },
  {
    title: 'Reading and study resources',
    description:
      'Students benefit from useful study materials and reading support that strengthen daily classroom learning.',
    icon: BookMarked,
  },
  {
    title: 'Safe and supervised setting',
    description:
      'A disciplined and well-managed school environment helps students feel secure, focused, and supported.',
    icon: ShieldCheck,
  },
  {
    title: 'Experienced teaching support',
    description:
      'Qualified teachers guide students with care, consistency, and attention to academic progress.',
    icon: Users,
  },
  {
    title: 'Activity-led engagement',
    description:
      'Students stay involved through structured participation, class activities, and concept-based learning support.',
    icon: Sparkles,
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-center rounded-[32px] bg-[linear-gradient(135deg,#0f172a,#1d4ed8)] p-8 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.65)] md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-accent">
              Facilities
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Facilities that support confident learning inside and outside the classroom.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
              Usmania Public School provides a well-structured learning environment with practical facilities that
              support focus, engagement, and daily academic growth in a clean and balanced setting.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {facilities.map((facility) => (
              <article
                key={facility.title}
                className="glass-card flex h-full min-h-[210px] flex-col rounded-[26px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                  <facility.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}