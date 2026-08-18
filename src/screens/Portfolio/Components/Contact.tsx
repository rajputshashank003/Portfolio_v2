import React, { useState } from "react";
import BorderWrapper from "../../../components/BorderWrapper";

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
    botcheck: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
        botcheck: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Honeypot spam check
        if (formData.botcheck) {
            return;
        }

        if (!validate()) {
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            setStatus("error");
            setErrorMessage("Contact service is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in .env");
            return;
        }

        const currentDomain = typeof window !== "undefined" ? window.location.hostname : "Portfolio";
        const emailSubject = formData.subject.trim()
            ? `[${currentDomain}] ${formData.subject.trim()}`
            : `New Contact Message from ${formData.name} [${currentDomain}]`;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    subject: emailSubject,
                    message: formData.message.trim(),
                    from_name: formData.name.trim(),
                    domain: currentDomain,
                    source_url: typeof window !== "undefined" ? window.location.href : "",
                    botcheck: formData.botcheck,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    botcheck: false,
                });
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Failed to send message. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    const handleReset = () => {
        setStatus("idle");
        setErrorMessage("");
        setErrors({});
    };

    return (
        <section id="contact" className="scroll-mt-[70px]">
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Contact
            </BorderWrapper>

            <BorderWrapper boxClass="px-[12px] py-[3%]">
                <div className="text-zinc-400 text-[18px] leading-5">
                    Have a project in mind, a question, or just want to say hi? Drop me a message below.
                </div>
            </BorderWrapper>

            <BorderWrapper boxClass="p-[12px] sm:p-[20px] bg-white">
                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-[22px] font-semibold text-zinc-900 mb-2">Message Sent!</h3>
                        <p className="text-zinc-500 text-[15px] max-w-md mb-6 leading-relaxed">
                            Thank you for reaching out. Your message has been sent directly to my inbox, and I will get back to you as soon as possible.
                        </p>
                        <button
                            type="button"
                            onClick={handleReset}
                            className="inline-flex items-center justify-center px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-[14px] font-medium rounded-[10px] transition-colors cursor-pointer active:scale-[0.98]"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-3xl">
                        {/* Spam prevention honeypot */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            checked={formData.botcheck}
                            onChange={handleChange}
                            style={{ display: "none" }}
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {status === "error" && (
                            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-[14px] rounded-[10px] flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0 text-rose-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{errorMessage}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="text-rose-500 hover:text-rose-700 font-bold px-2 py-1 cursor-pointer text-sm"
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name Input */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="contact-name"
                                    className="text-[14px] font-medium text-zinc-700"
                                >
                                    Name <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    maxLength={400}
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    autoComplete="name"
                                    autoCapitalize="words"
                                    disabled={status === "loading"}
                                    className={`w-full px-3.5 py-2.5 text-[16px] bg-white border rounded-[10px] transition-all outline-none text-zinc-900 placeholder:text-zinc-400 min-h-[44px] ${
                                        errors.name
                                            ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                                            : "border-neutral-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                    }`}
                                />
                                {errors.name && (
                                    <span className="text-rose-500 text-[12px] font-normal">
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-1.5">
                                <label
                                    htmlFor="contact-email"
                                    className="text-[14px] font-medium text-zinc-700"
                                >
                                    Email <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    maxLength={200}
                                    inputMode="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    autoComplete="email"
                                    disabled={status === "loading"}
                                    className={`w-full px-3.5 py-2.5 text-[16px] bg-white border rounded-[10px] transition-all outline-none text-zinc-900 placeholder:text-zinc-400 min-h-[44px] ${
                                        errors.email
                                            ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                                            : "border-neutral-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                    }`}
                                />
                                {errors.email && (
                                    <span className="text-rose-500 text-[12px] font-normal">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Subject Input */}
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="contact-subject"
                                className="text-[14px] font-medium text-zinc-700"
                            >
                                Subject <span className="text-zinc-400 font-normal text-[12px]">(Optional)</span>
                            </label>
                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                maxLength={200}
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What is this regarding?"
                                disabled={status === "loading"}
                                className="w-full px-3.5 py-2.5 text-[16px] bg-white border border-neutral-200 rounded-[10px] transition-all outline-none text-zinc-900 placeholder:text-zinc-400 min-h-[44px] focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                            />
                        </div>

                        {/* Message Textarea  */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center">
                                <label
                                    htmlFor="contact-message"
                                    className="text-[14px] font-medium text-zinc-700"
                                >
                                    Message <span className="text-rose-500">*</span>
                                </label>
                                <span className="text-zinc-400 text-[12px]">
                                    {formData.message.length} / 3000
                                </span>
                            </div>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                maxLength={3000}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message here..."
                                disabled={status === "loading"}
                                className={`w-full px-3.5 py-2.5 text-[16px] bg-white border rounded-[10px] transition-all outline-none text-zinc-900 placeholder:text-zinc-400 resize-none min-h-[120px] ${
                                    errors.message
                                        ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                                        : "border-neutral-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                }`}
                            />
                            {errors.message && (
                                <span className="text-rose-500 text-[12px] font-normal">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white text-[15px] font-medium rounded-[10px] transition-all cursor-pointer disabled:cursor-not-allowed active:scale-[0.98] min-h-[46px]"
                            >
                                {status === "loading" ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending message...
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </BorderWrapper>
        </section>
    );
};

export default Contact;
