"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_URL } from "@/data/contact";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-12 rounded-none border-foreground/25 bg-transparent px-4 text-sm font-semibold text-foreground placeholder:text-foreground/40 focus-visible:border-foreground focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0";

function buildWhatsAppUrl(values: ContactFormValues) {
  const text = [
    "*THANKS FOR MESSAGE TAREEQ ONLINE STORE*",
    "",
    `*Name:* ${values.name}`,
    `*Email:* ${values.email}`,
    `*Phone:* ${values.phone}`,
    "",
    `*Message:*`,
    values.message,
  ].join("\n");
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    const url = buildWhatsAppUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-xs font-black uppercase tracking-wide"
        >
          Your Name
        </label>
        <Input
          id="contact-name"
          autoComplete="name"
          placeholder="Enter your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldClass}
          {...register("name")}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-1.5 text-xs font-bold text-destructive">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-xs font-black uppercase tracking-wide"
        >
          Email
        </label>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={fieldClass}
          {...register("email")}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-1.5 text-xs font-bold text-destructive">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2 block text-xs font-black uppercase tracking-wide"
        >
          Phone
        </label>
        <Input
          id="contact-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="+92 300 1234567"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className={fieldClass}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="contact-phone-error" className="mt-1.5 text-xs font-bold text-destructive">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-black uppercase tracking-wide"
        >
          Message
        </label>
        <Textarea
          id="contact-message"
          rows={6}
          placeholder="Tell us what you need help with..."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(
            fieldClass,
            "h-auto min-h-36 resize-y py-3 leading-6"
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-xs font-bold text-destructive">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-none bg-[#070707] text-sm font-black uppercase tracking-wide text-white hover:bg-[#070707]/85 sm:w-auto sm:self-start sm:px-10"
      >
        Send on WhatsApp
      </Button>
    </form>
  );
}
