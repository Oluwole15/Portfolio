"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const fieldClass =
  "w-full rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-black/40 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500";

const labelClass =
  "text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400";

const errorTextClass = "mt-1 text-xs text-red-500 dark:text-red-400";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = "Please enter your name.";
    if (!email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!message.trim()) errors.message = "Please tell me about your project.";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setFieldErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-10 text-center shadow-sm dark:shadow-none">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 dark:text-emerald-400">
          <Icon icon="lucide:check" className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-zinc-950 dark:text-white">
          Message sent!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Thanks for reaching out, {name.trim() || "there"}. I&apos;ll get back
          to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="mt-6 rounded-full border border-zinc-300 dark:border-white/15 px-6 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 transition-colors hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 md:p-10 shadow-sm dark:shadow-none"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className={`${fieldClass} h-12 px-4 ${
              fieldErrors.name ? "border-red-500" : ""
            }`}
          />
          {fieldErrors.name && <p className={errorTextClass}>{fieldErrors.name}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className={`${fieldClass} h-12 px-4 ${
              fieldErrors.email ? "border-red-500" : ""
            }`}
          />
          {fieldErrors.email && <p className={errorTextClass}>{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Tell me about your project
        </label>
        <textarea
          id="message"
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project and your expected timeline."
          required
          className={`${fieldClass} resize-none p-4 ${
            fieldErrors.message ? "border-red-500" : ""
          }`}
        />
        {fieldErrors.message && (
          <p className={errorTextClass}>{fieldErrors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500 dark:text-red-400">
          Something went wrong while sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-indigo-600 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-80"
      >
        {status === "submitting" ? (
          <>
            <Icon icon="lucide:loader-2" className="h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Icon icon="lucide:send" className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
