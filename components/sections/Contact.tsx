"use client";

import emailjs from "@emailjs/browser";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionReveal from "../SectionReveal";
import {
  ArrowUpRight,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const profileImage = "/profile/profile-photo.JPG";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSending, setIsSending] = useState(false);

  function validate(values: FormState) {
    const nextErrors: Partial<FormState> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (values.message.trim().length < 10) {
      nextErrors.message = "Please make your message a little more detailed.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus({ type: "idle", message: "" });

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email sending is not configured yet. Add your EmailJS keys to enable this form.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          sender_name: form.name,
          sender_email: form.email,
          message: form.message,
        },
        publicKey
      );

      setForm(initialForm);
      setErrors({});
      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending the message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Interested in working together or following the journey?
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                I am open to internship opportunities, collaborative student
                projects, and conversations with teams that value thoughtful
                product work and clean execution.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Phone
                  </p>
                  <a
                    href="tel:0766154534"
                    className="mt-3 inline-flex items-center gap-3 text-lg text-white transition hover:text-cyan-200"
                  >
                    <Phone size={18} />
                    0766154534
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:ynimneth@gmail.com"
                    className="mt-3 inline-flex items-center gap-3 text-lg text-white transition hover:text-cyan-200"
                  >
                    <Mail size={18} />
                    ynimneth@gmail.com
                  </a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Location
                  </p>
                  <p className="mt-3 inline-flex items-center gap-3 text-lg text-white">
                    <MapPin size={18} />
                    Malambe, Sri Lanka
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    Availability
                  </p>
                  <p className="mt-3 text-lg text-white">Open to internships</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://github.com/ynimneth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                >
                  <GitBranch size={16} />
                  View GitHub
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="/cv/Yenula-Nimneth-CV.html"
                  download="Yenula-Nimneth-CV.html"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white hover:text-slate-950"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[32px] border border-cyan-300/15 bg-[linear-gradient(160deg,rgba(34,211,238,0.12),rgba(255,255,255,0.03))] p-8"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={profileImage}
                      alt="Yenula Nimneth portrait"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  Personal Profile
                </h3>
                <p className="mt-4 leading-8 text-slate-200">
                  A clean snapshot for recruiters and visitors, with your photo
                  and direct contact details in one place.
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.18 }}
                viewport={{ once: true, amount: 0.2 }}
                onSubmit={handleSubmit}
                className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/80">
                    Quick Message
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Send a direct note
                  </h3>
                </div>

                <div className="grid gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-300">Name</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan-300/30 focus:bg-slate-950/60"
                    />
                    {errors.name ? (
                      <span className="mt-2 block text-sm text-rose-300">
                        {errors.name}
                      </span>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-300">Email</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          email: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan-300/30 focus:bg-slate-950/60"
                    />
                    {errors.email ? (
                      <span className="mt-2 block text-sm text-rose-300">
                        {errors.email}
                      </span>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-300">
                      Message
                    </span>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          message: event.target.value,
                        }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan-300/30 focus:bg-slate-950/60"
                    />
                    {errors.message ? (
                      <span className="mt-2 block text-sm text-rose-300">
                        {errors.message}
                      </span>
                    ) : null}
                  </label>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={16} />
                    {isSending ? "Sending..." : "Send Message"}
                  </button>

                  {status.message ? (
                    <p
                      className={`text-sm ${
                        status.type === "success"
                          ? "text-emerald-300"
                          : "text-rose-300"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </div>
              </motion.form>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
