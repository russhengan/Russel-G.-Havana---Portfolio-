import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgerlyp", {
        method: "POST",
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let’s build something thoughtful, useful, and well-tested.</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
          >
            <h3 className="text-xl font-semibold text-white">Get in touch</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">Open to entry-level development and QA opportunities where I can contribute, learn, and grow with a strong team.</p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
                <span className="text-lg">✉️</span>
                <span>{CONTACT.email}</span>
              </a>
              <a href={`tel:${CONTACT.phoneNo}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/40 hover:text-cyan-200">
                <span className="text-lg">📞</span>
                <span>{CONTACT.phoneNo}</span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-lg">📍</span>
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-200">
                <span className="mb-2 block">Name</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60" placeholder="Your name" />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                <span className="mb-2 block">Email</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-slate-200">
              <span className="mb-2 block">Message</span>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60" placeholder="Tell me about the opportunity or project." />
            </label>
            {submitStatus === "success" && <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-300">Thanks for reaching out. I will get back to you soon.</div>}
            {submitStatus === "error" && <div className="mt-4 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-3 text-sm text-rose-300">Something went wrong. Please try again later.</div>}
            <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
