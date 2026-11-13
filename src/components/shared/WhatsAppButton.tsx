"use client";

import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "919036041206";
  const defaultMessage = encodeURIComponent(
    "Hello SRD Edu Corporation, I would like to enquire about your educational services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group print:hidden select-none"
    >
      {/* Tooltip Label on Hover */}
      <span className="pointer-events-none absolute right-16 mr-2 px-3 py-1.5 rounded-lg bg-[#29252A] text-white text-xs font-semibold whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl border border-white/10 font-['Poppins']">
        Chat with us on WhatsApp
      </span>

      {/* WhatsApp Floating Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SRD Edu Corporation on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/25 focus:outline-none focus:ring-4 focus:ring-[#25D366]"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.33C16.32 14.2 15.11 13.61 14.88 13.53C14.66 13.44 14.5 13.4 14.33 13.65C14.17 13.9 13.71 14.45 13.56 14.61C13.42 14.78 13.27 14.8 13.02 14.68C12.78 14.55 11.98 14.29 11.04 13.45C10.3 12.79 9.8 11.98 9.66 11.73C9.51 11.48 9.64 11.35 9.77 11.23C9.88 11.11 10.02 10.93 10.15 10.78C10.28 10.63 10.32 10.52 10.4 10.36C10.49 10.19 10.44 10.05 10.38 9.92C10.32 9.8 9.82 8.58 9.61 8.08C9.41 7.6 9.21 7.66 9.06 7.65H8.59C8.42 7.65 8.16 7.71 7.93 7.96C7.71 8.2 7.08 8.79 7.08 10C7.08 11.21 7.96 12.38 8.08 12.54C8.21 12.71 9.8 15.15 12.24 16.2C12.82 16.45 13.27 16.6 13.62 16.71C14.2 16.9 14.73 16.87 15.15 16.81C15.62 16.74 16.59 16.22 16.79 15.65C17 15.08 17 14.59 16.93 14.49C16.87 14.39 16.82 14.45 16.57 14.33Z" />
        </svg>
      </a>
    </aside>
  );
}
