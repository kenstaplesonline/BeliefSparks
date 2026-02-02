import { Mail, Phone, MapPin, Message } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-3xl mx-auto">
            Have questions, suggestions, or want to share a story? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Reach out through any of the channels below. We respond within 24-48 hours.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">theneighbourhoodscanada@gmail.com</p>
              <a
                href="mailto:theneighbourhoodscanada@gmail.com"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+1 (403) 555-0123</p>
              <p className="text-sm text-gray-500">
                General inquiries and partnership opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Calgary, Alberta, Canada</h2>
            <p className="text-gray-600">
              Proudly serving Calgary communities since 2026
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">The Neighbourhoods</h3>
          <p className="text-gray-400 mb-4">Discover the heart of every Calgary neighborhood</p>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/neighborhoods" className="text-gray-300 hover:text-white transition-colors">
              Neighbourhoods
            </a>
            <a href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © 2026 The Neighbourhoods. All rights reserved. Made with ❤️ in Calgary.
          </p>
        </div>
      </footer>
    </div>
  );
}
