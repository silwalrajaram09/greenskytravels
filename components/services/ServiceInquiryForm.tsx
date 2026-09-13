"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

export type InquiryField = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "date" | "number" | "email" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  fullWidth?: boolean;
};

interface ServiceInquiryFormProps {
  serviceTitle: string;
  fields: InquiryField[];
  submitLabel?: string;
  closingMessage?: string;
}

export default function ServiceInquiryForm({
  serviceTitle,
  fields,
  submitLabel = "Continue on WhatsApp",
  closingMessage = "Please share the available options and pricing.",
}: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const messageUrl = getServiceWhatsAppUrl(
      serviceTitle,
      fields.map(({ name, label }) => ({ label, value: formData[name] })),
      closingMessage,
    );

    setSubmitted(true);
    window.open(messageUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
      <div className="mb-7 flex items-start gap-3 border-b border-slate-100 pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#61a447]/10 text-[#61a447]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-[#092f42]">Tell us what you need</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Complete the details below. We will prepare your request in WhatsApp so our team can reply directly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const commonProps = {
            id: field.name,
            name: field.name,
            value: formData[field.name] ?? "",
            onChange: handleChange,
            required: field.required,
            className:
              "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10",
          };

          return (
            <div key={field.name} className={field.fullWidth ? "sm:col-span-2" : ""}>
              <label htmlFor={field.name} className="text-sm font-semibold text-slate-700">
                {field.label}
                {field.required ? <span className="ml-1 text-[#61a447]">*</span> : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  {...commonProps}
                  rows={4}
                  placeholder={field.placeholder}
                />
              ) : field.type === "select" ? (
                <select {...commonProps}>
                  <option value="">{field.placeholder ?? `Select ${field.label.toLowerCase()}`}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...commonProps}
                  type={field.type ?? "text"}
                  min={field.type === "date" ? minDate : undefined}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          No online payment is required. Your request will open in WhatsApp for you to send.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#61a447] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#61a447]/20 transition hover:bg-[#4a8035] active:scale-[0.98]"
        >
          {submitted ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {submitted ? "Request Prepared" : submitLabel}
        </button>
      </div>
    </form>
  );
}
