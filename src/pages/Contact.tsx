import ReservationForm from "../components/ReservationForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-6">
            Contact KVR'S Flight Restaurant
          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Experience premium aviation-themed luxury dining in Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 backdrop-blur-xl flex gap-4">
              <Phone className="text-yellow-400" />

              <div>
                <h3 className="text-2xl font-semibold mb-2">Phone</h3>
                <a href="tel:01205244540" className="text-gray-300 hover:text-yellow-400">
                  0120 524 4540
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 backdrop-blur-xl flex gap-4">
              <Mail className="text-yellow-400" />

              <div>
                <h3 className="text-2xl font-semibold mb-2">Email</h3>
                <a href="mailto:reservations@kvrflight.com" className="text-gray-300 hover:text-yellow-400">
                  reservations@kvrflight.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 backdrop-blur-xl flex gap-4">
              <MapPin className="text-yellow-400" />

              <div>
                <h3 className="text-2xl font-semibold mb-2">Location</h3>
                <p className="text-gray-300">
                  HCJC+39Q, Gandi Maisamma,
                  Hyderabad, Telangana 500043
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-6 backdrop-blur-xl flex gap-4">
              <Clock className="text-yellow-400" />

              <div>
                <h3 className="text-2xl font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-300">
                  Monday - Sunday
                  <br />
                  11:00 AM - 12:00 AM
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/9182693953"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-2xl font-bold text-lg"
            >
              WhatsApp Reservation
            </a>
          </div>

          <ReservationForm />
        </div>
      </section>
    </div>
  );
};







