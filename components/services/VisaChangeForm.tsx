"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Search, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config/site";

export default function VisaChangeForm() {
  const [formData, setFormData] = useState({
    visaType: "",
    lastDate: "",
    nationality: "",
    preferredCity: "",
    service: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const text = `I am looking for a visa change package with the following details:

Visa Type: ${formData.visaType}
Last Date: ${formData.lastDate}
Nationality: ${formData.nationality}
${formData.preferredCity ? `Preferred City: ${formData.preferredCity}\n` : ""}Service: ${formData.service}

Kindly check and provide the best available fare and flight options.

Thank you.`;

    const url = getWhatsAppUrl(text, "services");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#61a447] focus:bg-white focus:ring-4 focus:ring-[#61a447]/10";
  const labelClasses = "text-sm font-semibold text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="mb-2 flex items-start gap-3 border-b border-slate-100 pb-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#61a447]/10 text-[#61a447]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-[#092f42]">Visa Change Request</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Fill out the details to get the best available package for your visa change.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="visaType" className={labelClasses}>
           Current Visa Type <span className="text-[#61a447]">*</span>
          </label>
          <select
            id="visaType"
            name="visaType"
            required
            value={formData.visaType}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select visa type</option>
            <option value="Cancellation/Visa">Cancellation/Visa</option>
            <option value="Visit Visa">Visit Visa</option>
          </select>
        </div>

        <div>
          <label htmlFor="lastDate" className={labelClasses}>
            Last Date <span className="text-[#61a447]">*</span>
          </label>
          <input
            type="date"
            id="lastDate"
            name="lastDate"
            required
            min={new Date().toISOString().split("T")[0]}
            value={formData.lastDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="nationality" className={labelClasses}>
            Nationality <span className="text-[#61a447]">*</span>
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            placeholder="e.g. Nepali"
            required
            value={formData.nationality}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClasses}>
            Service <span className="text-[#61a447]">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select service type</option>
            <option value="Bus to Bus">Bus to Bus</option>
            <option value="Flight to Flight (A2A)">Flight to Flight (A2A)</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferredCity" className={labelClasses}>
            Preferred City <span className="font-normal text-slate-400">(Optional)</span>
          </label>
          <select
            id="preferredCity"
            name="preferredCity"
            value={formData.preferredCity}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select preferred city</option>
            <option value="📍 Sharjah">📍 Sharjah</option>
            <option value="📍 Dubai">📍 Dubai</option>
            <option value="📍 AL AIN">📍 AL AIN</option>
            <option value="📍 Abu Dhabi">📍 Abu Dhabi</option>
          </select>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-100">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          Clicking Explore will open WhatsApp with your details prefilled.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#61a447] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#4a8035] active:scale-[0.98]"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Explore
        </button>
      </div>
    </form>
  );
}
