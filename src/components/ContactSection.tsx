import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message before sending.");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate realistic async dispatch
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B4635] tracking-widest uppercase mb-2">
            <Mail className="w-3.5 h-3.5 text-[#C69214]" />
            <span>Connect With Our Editorial Team</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight text-balance">
            Get in Touch
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg max-w-xl mx-auto text-balance">
            Have questions about planning your Kerala itinerary, travel photography inquiries, or editorial feedback? Send us a message.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
          {/* Left Column: Office & Editorial Contacts */}
          <div className="lg:col-span-5 bg-[#0B4635] text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-editorial text-2xl font-bold mb-3 text-amber-200">
                Kerala Explorer
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed mb-8">
                We are a collective of Kerala-based travel writers, photographers, and local guides providing independent travel advice.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Editorial Bureau</strong>
                    <span className="text-emerald-100/80 text-xs leading-relaxed">
                      Fort Kochi Heritage Quarter, Ernakulam, Kerala 682001, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Inquiries & Submissions</strong>
                    <span className="text-emerald-100/80 text-xs">
                      editorial@keralaexplorer.org
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-medium">Response Cadence</strong>
                    <span className="text-emerald-100/80 text-xs">
                      Typically within 24–48 business hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-emerald-800/80 text-xs text-emerald-200/70">
              Responsible travel in God's Own Country since 2024.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B4635] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-stone-900 mb-2">
                  Thank You, {formData.name || "Friend"}!
                </h3>
                <p className="text-stone-600 text-sm max-w-sm mb-6 leading-relaxed">
                  Your message regarding <em>"{formData.subject || "Kerala Travel Inquiry"}"</em> has been received. Our editorial team will review your note and respond to <strong>{formData.email}</strong> promptly.
                </p>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] text-stone-900 placeholder-stone-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] text-stone-900 placeholder-stone-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Question about Munnar tea trails or Alleppey stay"
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] text-stone-900 placeholder-stone-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help your Kerala travel journey? Share your itinerary ideas or questions..."
                    className="w-full px-3.5 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] text-stone-900 placeholder-stone-400 transition-colors resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg transition-colors shadow-xs hover:shadow-sm focus-visible:outline-2 focus-visible:outline-[#0B4635] disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>{status === "submitting" ? "Sending Message..." : "Send Message"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
