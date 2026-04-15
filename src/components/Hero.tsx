import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Phone,
  BookOpen,
  MonitorSmartphone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import studentImage from '../assets/student.png';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-48 md:px-6 md:pb-20 md:pt-56"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),transparent_38%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.16),transparent_30%),linear-gradient(to_bottom,#eef4ff,#ffffff)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/90 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Trusted learning environment from Play Group to Matric
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.02] text-slate-950 sm:text-5xl lg:text-[4rem]">
            A modern school
            <br />
            experience built on
            <br />
            <span className="text-primary">learning, values</span> and
            <br />
            confidence.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Usmania Public School offers families a structured academic environment,
            qualified faculty, smart classroom exposure, and values-focused education
            in the heart of Peshawar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              variant="accent"
              className="rounded-full px-8 shadow-[0_18px_40px_-24px_rgba(251,191,36,0.9)]"
            >
              <a href="#contact">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              size="xl"
              variant="outline"
              className="rounded-full border-primary/15 bg-white px-8 text-primary hover:bg-primary hover:text-white"
            >
              <a href="tel:03113991005">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              'Computer & IT education',
              'Islamic environment',
              'Qualified and experienced faculty',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white/90 p-4 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.28)] md:p-5">
            <div className="rounded-[28px] bg-[linear-gradient(160deg,#eff6ff_0%,#ffffff_55%,#eef2ff_100%)] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Admissions Open
                </div>

                <div className="hidden rounded-full bg-primary/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary sm:block">
                  Play Group to Matric
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-[26px] border border-white/80 bg-white p-3 shadow-[0_24px_60px_-38px_rgba(30,58,138,0.4)]">
                <div className="relative overflow-hidden rounded-[20px] bg-[linear-gradient(145deg,#dbeafe,#f8fafc)]">
                  <img
                    src={studentImage}
                    alt="Confident student in classroom"
                    className="h-[380px] w-full object-cover object-[center_28%] scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/18 via-transparent to-transparent" />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    Strong focus
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    Activity-based learning
                  </p>
                </div>

                <div className="rounded-2xl bg-primary p-4 text-white shadow-lg shadow-primary/20">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                    Contact
                  </p>
                  <p className="mt-2 text-lg font-bold">0311 3991005</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:shadow-sm">
                  <MonitorSmartphone className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    Smart classrooms
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:shadow-sm">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    Structured learning
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 transition hover:shadow-sm">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-sm font-semibold text-slate-800">
                    Easy parent contact
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-full bg-accent/20 blur-2xl lg:block" />
          <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-primary/10 blur-2xl lg:block" />
        </motion.div>
      </div>
    </section>
  );
}