import { useEffect, useState } from 'react';
import { Menu, Phone, X, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.jpeg';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Why Us', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-[11px] font-medium md:px-6 md:text-xs">
            <p className="truncate text-slate-100">
              Admissions are open from Play Group to Matric. Contact us for fresh enrollment details.
            </p>

            <div className="hidden items-center gap-4 text-slate-200 md:flex">
              <a
                href="tel:03113991005"
                className="inline-flex items-center gap-1.5 transition hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                0311 3991005
              </a>

              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Nishtarabad Near TCS Office, Peshawar
              </span>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            isScrolled ? 'bg-white/80 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl' : 'bg-transparent'
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
            <div
              className={`flex items-center justify-between rounded-full border border-white/60 bg-white/95 px-4 py-3 shadow-[0_20px_60px_-28px_rgba(15,23,42,0.28)] transition-all duration-300 md:px-6 ${
                isScrolled ? 'py-3' : 'py-4'
              }`}
            >
              <a href="#home" className="flex min-w-0 items-center gap-3 md:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm md:h-14 md:w-14">
                  <img
                    src={logo}
                    alt="Usmania Public School logo"
                    className="h-8 w-8 object-contain md:h-10 md:w-10"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold uppercase tracking-[0.22em] text-primary md:text-base">
                    Usmania
                  </p>
                  <p className="truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500 md:text-[11px]">
                    Public School
                  </p>
                </div>
              </a>

              <nav className="hidden items-center gap-8 lg:flex">
                <ul className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm font-semibold text-slate-700 transition hover:text-primary"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:03113991005"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  0311 3991005
                </a>

                <Button asChild variant="accent" className="rounded-full px-6 font-semibold shadow-sm">
                  <a href="#contact">Apply Now</a>
                </Button>
              </nav>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 lg:hidden"
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                aria-label="Toggle navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm lg:hidden">
          <div className="mx-4 mt-[108px] rounded-[28px] border border-white/20 bg-white p-5 shadow-2xl">
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                <img
                  src={logo}
                  alt="Usmania Public School logo"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
                  Usmania
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Public School
                </p>
              </div>
            </div>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4">
              <a
                href="tel:03113991005"
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" />
                0311 3991005
              </a>

              <div className="flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Nishtarabad Near TCS Office, Peshawar</span>
              </div>

              <Button asChild variant="accent" className="h-12 w-full rounded-full text-base font-semibold">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}