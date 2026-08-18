"use client";

import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Viber Floating Button */}
      <a
        href="viber://chat?number=971502142541"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7360f2] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on Viber"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 fill-current"
        >
          <path d="M22 10.4c0-4.9-5-8.9-10-8.9S2 5.5 2 10.4c0 2.2 1 4.1 2.5 5.5v4.6l3.6-1.8c1.2.3 2.5.5 3.9.5 5 0 10-4 10-8.8zm-14.8 2c-.3 0-.6-.3-.6-.6 0-.2.1-.4.2-.5.1-.1.2-.2.4-.2h1c.1 0 .2 0 .2.1.1 0 .1.1.2.2.1.2.2.5.3.8.1.3.1.5.1.7 0 .1 0 .2-.1.3l-.4.6c-.1.1-.1.2-.1.3 0 .1.1.2.2.4.3.4.6.8 1 1.2.3.3.7.6 1 .7.2.1.3.2.4.2h.2c.1-.1.2-.2.3-.4l.5-.6c.1-.1.2-.1.3-.2h.2c.2.1.4.2.6.2l.7.3c.3.1.5.3.8.5.1.1.2.2.2.3.1.2.1.5 0 .8-.1.3-.4.6-.6.6z" />
        </svg>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971502142541?text=Hello!%20I%20would%20like%20more%20information%20about%20your%20tours."
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 fill-current"
        >
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.274-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.265-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.098-.211.049-.39-.025-.54-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36z"></path>
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.46 0 .104 5.339.104 11.94c0 2.114.54 4.184 1.574 6.014L0 24l6.148-1.604c1.769.96 3.78 1.47 5.864 1.47h.005c6.585 0 11.94-5.34 11.94-11.94 0-3.195-1.245-6.18-3.437-8.477zM12.045 21.84h-.005c-1.785 0-3.54-.48-5.085-1.395l-.36-.21-3.78.99.99-3.69-.24-.374a9.927 9.927 0 0 1-1.515-5.34c0-5.505 4.485-9.975 10.02-9.975 2.67 0 5.175 1.05 7.05 2.925a9.932 9.932 0 0 1 2.925 7.05c-.015 5.505-4.5 9.975-10.005 9.975z"></path>
        </svg>
      </a>
    </div>
  );
}
