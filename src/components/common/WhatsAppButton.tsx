import Link from "next/link";

import { WHATSAPP_URL } from "@/data/contact";

export function WhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="size-8 sm:size-9"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.73 12.73 0 0 0 5.04 22.37L3.6 28.8l6.57-1.37A12.73 12.73 0 1 0 16.02 3.2Zm0 2.42a10.3 10.3 0 0 1 8.77 15.72 10.25 10.25 0 0 1-12.6 3.8l-.46-.2-3.97.83.86-3.84-.24-.49A10.3 10.3 0 0 1 16.02 5.62Zm-3.35 4.8c-.24 0-.62.08-.95.43-.33.36-1.25 1.23-1.25 2.98 0 1.76 1.28 3.46 1.46 3.7.18.24 2.47 3.95 6.1 5.38 3.02 1.2 3.63.96 4.28.9.65-.05 2.1-.86 2.4-1.7.3-.83.3-1.55.2-1.7-.09-.16-.33-.25-.7-.43-.35-.18-2.1-1.04-2.43-1.16-.33-.12-.57-.18-.8.18-.25.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.51-.56-2.88-1.78-1.06-.95-1.78-2.12-1.99-2.48-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.94-1.1-2.65-.29-.7-.58-.58-.8-.59h-.65Z" />
      </svg>
    </Link>
  );
}
