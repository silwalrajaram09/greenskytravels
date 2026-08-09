import { MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-greensky-black text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-bold mb-4">
          Get in Touch with Green Sky Travels
        </p>
        <p className="text-md md:text-lg text-gray-400 max-w-4xl mx-auto">
          We’re here to help you plan your next unforgettable adventure! Whether you have questions about our tours, need help customizing your trip, or require visa assistance, our team is ready to assist you.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-greensky-black px-2">Our Contact Information</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="bg-green-100 p-3 rounded-xl text-greensky-green">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-greensky-black mb-2">Dubai Office</h3>
                <p className="text-gray-600 font-medium">Green Sky Travel and Tourism LLC</p>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Salim Building, Al Souq Al Kabeer,<br />
                  near Mena Bazar, BurDubai,<br />
                  Dubai, United Arab Emirates
                </p>
                <div className="space-y-1 mt-3">
                  <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-900">Phone:</strong> +971 4 570 2868, +971 50 214 2541 (Hotline)</p>
                  <p className="text-sm text-gray-600"><strong className="font-semibold text-gray-900">Email:</strong> info@greenskytravels.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
              <div className="bg-green-100 p-3 rounded-xl text-greensky-green opacity-50">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-greensky-black mb-2">Abu Dhabi Office</h3>
                <p className="text-gray-600 font-medium">Green Sky Travel and Tourism LLC</p>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                  Address: <br />
                  Phone: <br />
                  Email: 
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-greensky-black mb-2">Stay Connected</h3>
              <p className="text-sm text-gray-500 mb-4">Follow us on social media for the latest travel updates, deals, and inspiration:</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/people/Green-Sky-Travel-Tourism-LLC/61569895568599/" className="bg-gray-100 hover:bg-blue-600 hover:text-white p-2.5 rounded-lg text-gray-500 transition-colors flex items-center gap-2">
                  <FaFacebook className="w-5 h-5" /> <span className="text-xs font-semibold">Facebook</span>
                </a>
                <a href="https://www.instagram.com/greenskytravels" className="bg-gray-100 hover:bg-pink-600 hover:text-white p-2.5 rounded-lg text-gray-500 transition-colors flex items-center gap-2">
                  <FaInstagram className="w-5 h-5" /> <span className="text-xs font-semibold">Instagram</span>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-blue-400 hover:text-white p-2.5 rounded-lg text-gray-500 transition-colors flex items-center gap-2">
                  <FaTwitter className="w-5 h-5" /> <span className="text-xs font-semibold">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col justify-between">
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-green-50 text-greensky-green font-semibold px-4 py-2 rounded-full mb-4">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send us a message</span>
                  </div>
                  <h2 className="text-3xl font-bold text-greensky-black">Ready to customize your trip?</h2>
                  <p className="text-gray-500 mt-2">Fill out the form below and our travel experts will get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-greensky-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-greensky-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="travellers" className="text-sm font-semibold text-gray-700">Number of Travellers *</label>
                    <input 
                      type="number" 
                      id="travellers" 
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-greensky-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="e.g. 2"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message *</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-greensky-green focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your dream destination, dates, and preferences..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-greensky-green hover:bg-emerald-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors shadow-lg shadow-green-200"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-greensky-black mb-3">We’re Here for You</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  At Green Sky Travels, your satisfaction is our priority. Don’t hesitate to contact us for any inquiries, feedback, or assistance. We look forward to helping you plan your perfect journey!
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.248679781636!2d55.288695676529045!3d25.26221867766913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43d74724c093%3A0x88a17c8213c7a3d9!2sGreen%20Sky%20Travels!5e0!3m2!1sen!2snp!4v1742124155703!5m2!1sen!2snp" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
