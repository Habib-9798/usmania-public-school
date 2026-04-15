import { MessageCircle, PhoneCall } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/923113991005"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-20px_rgba(37,211,102,0.9)] transition-transform duration-300 hover:scale-105 md:bottom-6 md:right-6"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-3 bottom-3 z-30 flex gap-3 rounded-full border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur md:hidden">
        <a href="tel:03113991005" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-semibold text-primary">
          <PhoneCall className="h-4 w-4" />
          Call Now
        </a>
        <a href="#contact" className="flex h-11 flex-1 items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground">
          Apply Now
        </a>
      </div>
    </>
  );
}
