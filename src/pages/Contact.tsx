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
            Contact KVR Flight Restaurant
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







// import { useState, useEffect } from "react";
// import { Reveal } from "../components/Reveal";
// import ReservationForm from "../components/ReservationForm";

// import { Plane, Calendar, Users, MapPin, Phone, Mail, CheckCircle2, Clock } from "lucide-react";
// import { submitReservation } from "../api/client";

// export function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [availableTables, setAvailableTables] = useState<number>(20);

//   useEffect(() => {
//     // Load available tables from local storage or set initial state to 20
//     const storedTables = localStorage.getItem("availableTables");
//     if (storedTables) {
//       setAvailableTables(parseInt(storedTables, 10));
//     } else {
//       localStorage.setItem("availableTables", "20");
//     }
//   }, []);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (availableTables <= 0) {
//       alert("Sorry, we are fully booked for this time.");
//       return;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const formData = new FormData(e.currentTarget);
//       const data = Object.fromEntries(formData.entries());
//       await submitReservation(data);
      
//       // Decrease table count
//       const newTableCount = availableTables - 1;
//       setAvailableTables(newTableCount);
//       localStorage.setItem("availableTables", newTableCount.toString());
      
//       // Trigger email to customer via mailto
//       const subject = encodeURIComponent("KVR Flight Restaurant - Reservation Confirmation");
//       const body = encodeURIComponent(`Dear ${data.name},\n\nYour reservation for ${data.guests} passenger(s) on ${data.date} at ${data.time} is confirmed.\n\nThank you for choosing KVR Flight Restaurant.\n\nSpecial Requests: ${data.notes || 'None'}\n\nBest regards,\nKVR Flight Team\nHCJC+39Q, Gandi Maisamma, Hyderabad\n0120 524 4540`);
      
//       const mailtoLink = `mailto:${data.email}?subject=${subject}&body=${body}`;
//       // Use hidden anchor to trigger mailto to avoid iframe restrictions
//       const link = document.createElement('a');
//       link.href = mailtoLink;
//       link.target = '_blank';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       setIsSuccess(true);
//       (e.target as HTMLFormElement).reset();
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="pt-32 pb-32 min-h-screen bg-transparent">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <Reveal className="text-center mb-16">
//           <h2 className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4">Book Your Flight</h2>
//           <h1 className="heading-serif text-5xl md:text-6xl text-white">Reservations</h1>
//         </Reveal>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Contact Info */}
//           <Reveal direction="right" className="space-y-12">
//              <div>
//                <h3 className="heading-serif text-3xl text-white mb-6">Terminal Information</h3>
//                <p className="text-gray-400 font-light leading-relaxed mb-8">
//                  Conveniently located in the heart of the city, KVR Flight Restaurant offers complimentary valet parking for all first-class passengers. Please arrive 15 minutes before your scheduled boarding time.
//                </p>
               
//                <div className="space-y-6">
//                  <div className="flex items-start gap-4">
//                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                      <MapPin className="w-5 h-5 text-gold-500" />
//                    </div>
//                    <div>
//                      <h4 className="text-white font-medium mb-1">Location</h4>
//                      <p className="text-gray-400 text-sm">HCJC+39Q, Gandi Maisamma,<br/>Hyderabad, Telangana 500043</p>
//                    </div>
//                  </div>

//                  <div className="flex items-start gap-4">
//                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                      <Phone className="w-5 h-5 text-gold-500" />
//                    </div>
//                    <div>
//                      <h4 className="text-white font-medium mb-1">Contact</h4>
//                      <a href="tel:01205244540" className="text-gray-400 text-sm hover:text-gold-500 transition-colors cursor-pointer">0120 524 4540</a>
//                    </div>
//                  </div>

//                  <div className="flex items-start gap-4">
//                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                      <Mail className="w-5 h-5 text-gold-500" />
//                    </div>
//                    <div>
//                      <h4 className="text-white font-medium mb-1">Email inquiries</h4>
//                      <a href="mailto:reservations@kvrflight.com" className="text-gray-400 text-sm hover:text-gold-500 transition-colors cursor-pointer">reservations@kvrflight.com</a>
//                    </div>
//                  </div>
//                </div>
//              </div>

//                <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-gold-500">
//                  <h4 className="heading-serif text-xl text-white mb-4">Boarding Hours</h4>
//                  <ul className="space-y-2 text-gray-400 text-sm">
//                    <li className="flex justify-between"><span>Monday - Sunday</span> <span>11:00 AM - 12:00 AM</span></li>
//                  </ul>
//                </div>
//           </Reveal>

//           {/* Form */}
//           <Reveal delay={0.2} direction="left">
//             <div className="glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden">
//                {isSuccess ? (
//                  <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 z-10">
//                    <CheckCircle2 className="w-16 h-16 text-gold-500 mb-4" />
//                    <h3 className="heading-serif text-3xl text-white mb-2">Boarding Pass Confirmed</h3>
//                    <p className="text-gray-400 mb-6">Your reservation request has been received. A confirmation email has been sent to your registered email address.</p>
//                    <button 
//                      onClick={() => setIsSuccess(false)}
//                      className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-950 transition-colors uppercase tracking-widest text-sm font-medium cursor-pointer"
//                    >
//                      Book Another
//                    </button>
//                  </div>
//                ) : null}

//                <h3 className="heading-serif text-2xl text-white mb-8 flex items-center gap-3">
//                  <Plane className="w-6 h-6 text-gold-500" />
//                  Request Boarding Pass
//                </h3>

//                <form onSubmit={handleSubmit} className="space-y-6">
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                    <div className="space-y-2">
//                      <label className="text-sm text-gray-400 uppercase tracking-wider">Full Name</label>
//                      <input required name="name" type="text" className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
//                    </div>
//                    <div className="space-y-2">
//                      <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
//                      <input required name="email" type="email" className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="john@example.com" />
//                    </div>
//                  </div>

//                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                    <div className="space-y-2">
//                      <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2"><Calendar className="w-4 h-4"/> Date</label>
//                      <input required name="date" type="date" className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors min-h-[50px] [color-scheme:dark]" />
//                    </div>
//                    <div className="space-y-2">
//                      <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2"><Clock className="w-4 h-4"/> Time</label>
//                      <input required name="time" type="time" min="11:00" max="24:00" className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors min-h-[50px] [color-scheme:dark]" />
//                    </div>
//                    <div className="space-y-2">
//                      <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2"><Users className="w-4 h-4"/> Passengers</label>
//                      <select required name="guests" className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none min-h-[50px]">
//                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>)}
//                      </select>
//                    </div>
//                  </div>

//                  <div className="flex items-center gap-2 text-sm">
//                    <div className={`w-2 h-2 rounded-full ${availableTables > 5 ? 'bg-green-500' : availableTables > 0 ? 'bg-orange-500' : 'bg-red-500 animate-pulse'}`}></div>
//                    <span className={availableTables > 0 ? "text-gray-300" : "text-red-400"}>
//                      {availableTables > 0 ? `${availableTables} tables currently available` : "Fully booked for today"}
//                    </span>
//                  </div>

//                  <div className="space-y-2">
//                    <label className="text-sm text-gray-400 uppercase tracking-wider">Special Requests / Allergies</label>
//                    <textarea name="notes" rows={4} className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Any dietary requirements or special occasions?"></textarea>
//                  </div>

//                  <button 
//                    disabled={isSubmitting}
//                    className="w-full py-4 bg-gold-500 text-dark-950 font-semibold uppercase tracking-widest text-sm hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center h-14 cursor-pointer"
//                  >
//                    {isSubmitting ? <div className="w-6 h-6 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" /> : "Confirm Reservation"}
//                  </button>
//                </form>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { Reveal } from "../components/Reveal";

// import {
//   Plane,
//   MapPin,
//   Phone,
//   Mail,
//   CheckCircle2,
//   Clock,
// } from "lucide-react";

// import axios from "axios";
// import toast from "react-hot-toast";

// const TOTAL_TABLES = 20;

// export function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const [availableTables, setAvailableTables] =
//     useState<number>(TOTAL_TABLES);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     date: "",
//     passengers: "",
//     specialRequests: "",
//   });

//   useEffect(() => {
//     const storedTables = localStorage.getItem("availableTables");

//     if (storedTables) {
//       setAvailableTables(parseInt(storedTables, 10));
//     } else {
//       localStorage.setItem(
//         "availableTables",
//         TOTAL_TABLES.toString()
//       );
//     }
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (
//     e: React.FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();

//     if (availableTables <= 0) {
//       toast.error("All tables are fully booked");
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const reservationId = `KVR-${Date.now()}-${Math.floor(
//         Math.random() * 1000
//       )}`;

//       const payload = {
//         ...formData,
//         reservationId,
//         availableTables,
//         status: "Confirmed",
//       };

//       const response = await axios.post(
//         "https://n8n.n8n-automation.shop/webhook/kvr-flight-reservation",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response.data);

//       const updatedTables = availableTables - 1;

//       setAvailableTables(updatedTables);

//       localStorage.setItem(
//         "availableTables",
//         updatedTables.toString()
//       );

//       setIsSuccess(true);

//       toast.success(
//         `✈️ Reservation Confirmed - ${reservationId}`
//       );

//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         date: "",
//         passengers: "",
//         specialRequests: "",
//       });
//     } catch (error) {
//       console.error(error);
//       toast.error("Reservation Failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="pt-32 pb-32 min-h-screen bg-transparent">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <Reveal className="text-center mb-16">
//           <h2 className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4">
//             Book Your Flight
//           </h2>

//           <h1 className="heading-serif text-5xl md:text-6xl text-white">
//             Reservations
//           </h1>
//         </Reveal>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <Reveal direction="right" className="space-y-12">
//             <div>
//               <h3 className="heading-serif text-3xl text-white mb-6">
//                 Terminal Information
//               </h3>

//               <p className="text-gray-400 font-light leading-relaxed mb-8">
//                 Reserve your luxury aviation dining experience at
//                 KVR Flight Restaurant.
//               </p>

//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                     <MapPin className="w-5 h-5 text-gold-500" />
//                   </div>

//                   <div>
//                     <h4 className="text-white font-medium mb-1">
//                       Location
//                     </h4>

//                     <p className="text-gray-400 text-sm">
//                       HCJC+39Q, Gandi Maisamma,
//                       <br />
//                       Hyderabad, Telangana 500043
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                     <Phone className="w-5 h-5 text-gold-500" />
//                   </div>

//                   <div>
//                     <h4 className="text-white font-medium mb-1">
//                       Contact
//                     </h4>

//                     <p className="text-gray-400 text-sm">
//                       0120 524 4540
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                     <Mail className="w-5 h-5 text-gold-500" />
//                   </div>

//                   <div>
//                     <h4 className="text-white font-medium mb-1">
//                       Email
//                     </h4>

//                     <p className="text-gray-400 text-sm">
//                       reservations@kvrflight.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0">
//                     <Clock className="w-5 h-5 text-gold-500" />
//                   </div>

//                   <div>
//                     <h4 className="text-white font-medium mb-1">
//                       Boarding Hours
//                     </h4>

//                     <p className="text-gray-400 text-sm">
//                       Monday - Sunday
//                       <br />
//                       11:00 AM - 12:00 AM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal direction="left">
//             <div className="bg-[#0f172a]/80 border border-gold-500/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
//               <div className="flex items-center gap-3 mb-8">
//                 <Plane className="text-gold-500" />

//                 <h3 className="heading-serif text-3xl text-white">
//                   Request Boarding Pass
//                 </h3>
//               </div>

//               <div className="bg-gold-500/10 border border-gold-500/20 rounded-2xl p-4 flex items-center justify-between mb-8">
//                 <span className="text-gray-300">
//                   Available Tables
//                 </span>

//                 <span className="text-gold-500 font-bold text-3xl">
//                   {availableTables}
//                 </span>
//               </div>

//               {isSuccess && (
//                 <div className="mb-6 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center gap-3">
//                   <CheckCircle2 className="text-green-500" />

//                   <p className="text-green-400 text-sm">
//                     Reservation submitted successfully.
//                   </p>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     placeholder="Full Name"
//                     className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500"
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="Email"
//                     className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="Phone Number"
//                     className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500"
//                   />

//                   <select
//                     name="passengers"
//                     value={formData.passengers}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500"
//                   >
//                     <option value="">Passengers</option>
//                     <option value="1">1 Passenger</option>
//                     <option value="2">2 Passengers</option>
//                     <option value="3">3 Passengers</option>
//                     <option value="4">4 Passengers</option>
//                     <option value="5">5 Passengers</option>
//                   </select>
//                 </div>

//                 <input
//                   type="date"
//                   name="date"
//                   value={formData.date}
//                   onChange={handleChange}
//                   required
//                   min={new Date().toISOString().split("T")[0]}
//                   className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500"
//                 />

//                 <textarea
//                   name="specialRequests"
//                   value={formData.specialRequests}
//                   onChange={handleChange}
//                   rows={5}
//                   placeholder="Special Requests"
//                   className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-gold-500 resize-none"
//                 />

//                 <button
//                   type="submit"
//                   disabled={isSubmitting || availableTables <= 0}
//                   className="w-full bg-gold-500 hover:bg-gold-400 transition-all duration-300 text-black font-bold py-4 rounded-2xl uppercase tracking-wider disabled:opacity-50"
//                 >
//                   {isSubmitting
//                     ? "Processing Reservation..."
//                     : availableTables <= 0
//                     ? "Tables Fully Booked"
//                     : "Confirm Reservation"}
//                 </button>
//               </form>
//             </div>
//           </Reveal>
//         </div>
//       </div>
//     </div>
//   );
// }