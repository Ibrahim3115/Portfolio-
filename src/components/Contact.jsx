import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, GitBranch, Link, MapPin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── Framer Motion helper ───────────────────────────────────────────────────
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// ─── Contact info cards data ─────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohammedibrahim3112005@gmail.com',
    href: 'mailto:mohammedibrahim3112005@gmail.com',
    note: null,
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/Ibrahim3115',
    href: 'https://github.com/Ibrahim3115',
    note: null,
  },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohammedibrahimr',
    href: 'https://www.linkedin.com/in/mohammedibrahimr?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    note: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tiruppur, Tamil Nadu, India',
    href: null,
    note: null,
  },
];

// ─── Form state machine ───────────────────────────────────────────────────────
// status: 'idle' | 'loading' | 'success' | 'error'
const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.';
  if (!form.message.trim()) errors.message = 'Message cannot be empty.';
  return errors;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const isLoading = status === 'loading';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm(EMPTY_FORM); // Clear only on confirmed success
      setErrors({});
    } catch (err) {
      console.error('[EmailJS] Send failed:', err);
      setStatus('error');
      setErrorMsg(
        err?.text ||
        'Something went wrong while sending your message. Please try again or reach out via email directly.'
      );
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMsg('');
  };

  // ─── Input class helper ────────────────────────────────────────────────────
  const inputClass = (field) =>
    `w-full bg-[#0d1117] border ${
      errors[field] ? 'border-red-500/60' : 'border-[#21262d]'
    } rounded-xl px-4 py-3 text-[#f0f6fc] text-sm placeholder:text-[#484f58] focus:outline-none focus:border-[#6366f1]/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Section header ── */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] mt-2">Get In Touch</h2>
            <p className="text-[#8b949e] mt-3 max-w-xl mx-auto text-sm">
              I&apos;m open to discussing internship opportunities, project collaborations, or just connecting with people in the field.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Contact info cards ── */}
          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href, note }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-4 bg-[#161b22] border border-[#21262d] rounded-xl hover:border-[#6366f1]/30 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#6366f1]" />
                  </div>
                  <div>
                    <p className="text-[#484f58] text-xs font-medium uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-[#8b949e] hover:text-[#f0f6fc] text-sm transition-colors mt-0.5 block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#8b949e] text-sm mt-0.5">{value}</p>
                    )}
                    {note && <p className="text-[#484f58] text-xs mt-1 italic">{note}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ── Right: Form card ── */}
          <FadeIn delay={0.2}>
            <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-8">

              {/* ── Success state ── */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-[#f0f6fc] font-semibold mb-2">Message Sent!</h3>
                  <p className="text-[#8b949e] text-sm leading-relaxed">
                    Your message has been delivered successfully. I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-5 text-[#6366f1] text-sm hover:text-[#818cf8] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

              {/* ── Idle / Error state: show form ── */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Global error banner */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 p-3 bg-red-500/5 border border-red-500/20 rounded-xl"
                    >
                      <XCircle size={15} className="text-red-400 mt-0.5 shrink-0" />
                      <p className="text-[#8b949e] text-xs leading-relaxed">{errorMsg}</p>
                    </motion.div>
                  )}

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#8b949e] text-xs font-medium mb-1.5">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isLoading}
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-[#8b949e] text-xs font-medium mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        disabled={isLoading}
                        className={inputClass('email')}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-[#8b949e] text-xs font-medium mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      disabled={isLoading}
                      className={inputClass('subject')}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#8b949e] text-xs font-medium mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      disabled={isLoading}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={!isLoading ? { scale: 1.01 } : {}}
                    whileTap={!isLoading ? { scale: 0.99 } : {}}
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-[#6366f1] hover:bg-[#818cf8] disabled:bg-[#6366f1]/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
