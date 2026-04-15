import { Facebook, Instagram, MapPin, Phone, Youtube, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const quickLinks = [
  ['Home', '#home'],
  ['Why Us', '#about'],
  ['Programs', '#programs'],
  ['Facilities', '#facilities'],
  ['Contact', '#contact'],
];

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 pb-24 pt-16 text-slate-300 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-white/10 shadow-sm">
                <img
                  src={logo}
                  alt="Usmania Public School logo"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <p className="text-base font-extrabold uppercase tracking-[0.22em] text-white">
                  Usmania
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Public School
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              A trusted learning environment for students from Play Group to Matric, combining
              modern education, structured discipline, and values-focused academic growth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Quick links
            </p>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">
              Contact
            </p>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Nishtarabad Near TCS Office, Peshawar</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:03113991005" className="transition hover:text-white">
                  0311 3991005
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                Admissions Open
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Contact now to get admission details and guidance for fresh enrollment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Usmania Public School. All rights reserved.</p>
          <p>Designed with a cleaner, mobile-friendly, admissions-focused layout.</p>
        </div>
      </div>
    </footer>
  );
}