import { MapPin, Phone, Sparkles } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6">
        <div className="flex min-w-0 items-center gap-2 text-slate-100">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent" />
          <p className="truncate font-medium">
            Admissions are open from Play Group to Matric. Contact us for fresh enrollment details.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-slate-200">
          <a href="tel:03113991005" className="inline-flex items-center gap-1.5 transition hover:text-white">
            <Phone className="h-3.5 w-3.5" />
            <span>0311 3991005</span>
          </a>
          <span className="hidden h-3 w-px bg-white/20 sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>Nishtarabad Near TCS Office, Peshawar</span>
          </span>
        </div>
      </div>
    </div>
  );
}
