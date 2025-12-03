import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xvgerlyp", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Formspree response status:", response.status);

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        console.error("Formspree error:", response.status);
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
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neutral-200">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="text-3xl mt-1">📍</div>
                  <div>
                    <p className="text-sm text-neutral-400 font-semibold uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-neutral-300 mt-1">{CONTACT.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="text-3xl mt-1">📞</div>
                  <div>
                    <p className="text-sm text-neutral-400 font-semibold uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href={`tel:${CONTACT.phoneNo}`}
                      className="text-neutral-300 mt-1 hover:text-purple-400 transition-colors"
                    >
                      {CONTACT.phoneNo}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="text-3xl mt-1">✉️</div>
                  <div>
                    <p className="text-sm text-neutral-400 font-semibold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-neutral-300 mt-1 hover:text-purple-400 transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

          
            
          </motion.div>

          {/* Contact Form */}
          <motion.form
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:bg-neutral-900/80 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:bg-neutral-900/80 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-semibold text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-700 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-purple-500 focus:bg-neutral-900/80 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-sm"
              >
                ✓ Message sent successfully! I will get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-sm"
              >
                ✗ Failed to send message. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
