import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pb-12">
      {/* <Breadcrumbs /> */}

      <div className="container mx-auto px-4 py-4 lg:w-9/12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Contact us
          </h1>
          <div className="mt-2 flex items-center gap-1">
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-12 bg-[#61a447]" />
            <span className="h-[3px] w-4 bg-red-500" />
          </div>
        </div>

        <article className="prose prose-slate max-w-none text-slate-700 mb-12">
          <p className="font-bold text-slate-900">
            Get in Touch with Green Sky Travels
          </p>
          <p>
            We're here to help you plan your next unforgettable adventure!
            Whether you have questions about our tours, need help customizing
            your trip, or require visa assistance, our team is ready to assist
            you.
          </p>
          <p>&nbsp;</p>

          <p className="font-bold text-slate-900">Stay Connected</p>
          <p>
            Follow us on social media for the latest travel updates, deals, and
            inspiration:
            <br />
            <strong>
              <a
                href="https://www.facebook.com/people/Green-Sky-Travel-Tourism-LLC/61569895568599/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </strong>
            <br />
            <strong>Instagram</strong>
            <br />
            <strong>Twitter</strong>
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
            Our Contact Information
          </h3>

          <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Dubai Office
          </h4>
          <p>
            Green Sky Travel and Tourism LLC
            <br />
            <strong>Address:</strong> Salim Building, Al Souq Al Kabeer, near
            Mena Bazar, BurDubai, Dubai United Arab Emirates
            <br />
            <strong>Phone:</strong> +971 4 570 2868, +971 50 214 2541 (Hotline)
            <br />
            <strong>Email:</strong> info@greenskytravels.com
          </p>

          <h4 className="text-lg font-bold text-slate-900 mt-6 mb-2">
            Abu Dhabi Office
          </h4>
          <p>
            Green Sky Travel and Tourism LLC
            <br />
            <strong>Address:</strong>&nbsp;
            <br />
            <strong>Phone:</strong>&nbsp;
            <br />
            <strong>Email:</strong>&nbsp;
          </p>

          <p className="font-bold text-slate-900 mt-8">We're Here for You</p>
          <p>
            At Green Sky Travels, your satisfaction is our priority. Don't
            hesitate to contact us for any inquiries, feedback, or assistance.
            We look forward to helping you plan your perfect journey!
          </p>
        </article>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information List */}
          <div className="lg:col-span-2 space-y-6">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-greensky-green flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-bold text-lg text-slate-900">
                    Salem Latif Building, Al Suq Al Kabeer, Dubai, United Arab
                    Emirates
                  </span>
                  <span className="text-sm text-slate-500 font-bold">
                    P.O. Box: .
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-greensky-green flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="mailto:info@greenskytravels.com"
                    className="block font-bold text-lg text-slate-900 hover:text-greensky-green transition-colors"
                  >
                    info@greenskytravels.com
                  </a>
                  <span className="text-sm text-slate-500 font-medium">
                    Mail Us
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                {/* Whatsapp Icon Approximation using MessageCircle */}
                <MessageCircle className="w-6 h-6 text-greensky-green flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=+971585032337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-bold text-lg text-slate-900 hover:text-greensky-green transition-colors"
                  >
                    +971 58 503 2337
                  </a>
                  <span className="text-sm text-slate-500 font-medium">
                    Whatsapp/Viber
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-greensky-green flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+97145702868"
                    className="block font-bold text-lg text-slate-900 hover:text-greensky-green transition-colors"
                  >
                    +971 4 570 2868
                  </a>
                  <span className="text-sm text-slate-500 font-medium">
                    Call Us On
                  </span>
                </div>
              </li>
              <li className="pt-4 border-t border-gray-100">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Follow us on
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.facebook.com/share/1BLCvezQjh/?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#1877f2] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#1da1f2] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/greenskytravels?igsh=MXdhdWlrMXI4MTJ2cQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#e4405f] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/green-sky-travels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#0a66c2] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#cd201f] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaYoutube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://pin.it/3PBXYc0el"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#bd081c] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaPinterest className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-[#000000] hover:bg-greensky-green transition-colors text-white flex items-center justify-center"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name*"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-greensky-green focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail*"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-greensky-green focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    placeholder="No of Travellers*"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-greensky-green focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Message*"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-greensky-green focus:border-transparent transition-shadow bg-gray-50 focus:bg-white resize-y"
                  ></textarea>
                </div>
                <div>
                  {/* <button
                    type="submit"
                    className="bg-greensky-green hover:bg-[#519638] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 focus:ring-4 focus:ring-green-100"
                  >
                    SUBMIT
                  </button> */}
                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placed Last) */}
      <div className="w-full h-[450px] mt-12 relative">
        {/* Curved shape overlay from the original design */}
        <div
          className="absolute top-0 inset-x-0 h-4 md:h-8 bg-white"
          style={{ clipPath: "ellipse(50% 100% at 50% 0%)" }}
        ></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.248679781636!2d55.288695676529045!3d25.26221867766913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43d74724c093%3A0x88a17c8213c7a3d9!2sGreen%20Sky%20Travels!5e0!3m2!1sen!2snp!4v1742124155703!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
