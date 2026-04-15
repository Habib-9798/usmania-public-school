import { useState } from 'react';
import { Clock3, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const contactDetails = [
  { icon: Phone, title: 'Phone', value: '0311 3991005', href: 'tel:03113991005' },
  { icon: MapPin, title: 'Address', value: 'Nishtarabad Near TCS Office, Peshawar', href: '#' },
  { icon: Clock3, title: 'School Hours', value: 'Monday to Saturday, 7:30 AM to 1:00 PM', href: '#' },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const parentName = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const studentClass = String(formData.get('studentClass') || '').trim();
    const city = String(formData.get('city') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const whatsappNumber = '923113991005';

    const whatsappMessage = `Assalam o Alaikum,

A new admission inquiry has been submitted from the website.

Parent Name: ${parentName}
Phone Number: ${phone}
Class / Level: ${studentClass}
City: ${city}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Contact us
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Reach out for admission details, school information, and parent guidance.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Parents should be able to contact the school quickly and clearly. This section keeps
              the main details visible and makes it easy to send an admission inquiry without confusion.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="glass-card flex items-start gap-4 rounded-[24px] p-5 transition duration-300 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                      {item.title}
                    </p>

                    {item.href !== '#' ? (
                      <a
                        href={item.href}
                        className="mt-2 inline-block text-lg font-bold text-slate-900 transition hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-base font-semibold leading-6 text-slate-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[30px] p-6 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                  Admission form
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950 md:text-3xl">
                  Send your inquiry
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent-foreground md:flex">
                <Send className="h-6 w-6" />
              </div>
            </div>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Parent Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="h-12 rounded-2xl border-slate-200 bg-white"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    required
                    className="h-12 rounded-2xl border-slate-200 bg-white"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="studentClass">Class / Level</Label>
                  <Input
                    id="studentClass"
                    name="studentClass"
                    className="h-12 rounded-2xl border-slate-200 bg-white"
                    placeholder="Play Group / Primary / Middle / Matric"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    className="h-12 rounded-2xl border-slate-200 bg-white"
                    placeholder="Your city"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[140px] rounded-[22px] border-slate-200 bg-white"
                  placeholder="Tell us what information you need about admission."
                />
              </div>

              <Button
                type="submit"
                size="xl"
                variant="accent"
                className="h-12 w-full rounded-full text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Redirecting to WhatsApp...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}