import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Calendar, Clock } from "lucide-react";

const ReservationForm = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    passengers: "",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setLoading(true);

    const reservationId = `KVR-${Date.now()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const payload = {
      ...formData,
      reservationId,
      status: "Confirmed",
    };

    const response = await axios.post(
      "https://n8n.n8n-automation.shop/webhook/kvr-flight-reservation",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    if (
      response.status === 200 ||
      response.status === 201
    ) {
      toast.success(
        `✈️ Reservation Confirmed\nReservation ID: ${reservationId}`,
        {
           autoClose: 5000,
        }
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        passengers: "",
        specialRequests: "",
      });
    } else {
      toast.error(
        response.data?.message ||
          "Reservation failed"
      );
    }
  } catch (error: any) {
    console.error(error);

    const errorMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Reservation Failed";

    toast.error(errorMessage, {
      autoClose: 5000,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-8 backdrop-blur-xl">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4">
        Reserve Your Flight Dining Experience
      </h2>

      <p className="text-gray-400 mb-8">
        Book your premium aviation-themed dining experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
            className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
          />

          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            required
            className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
          >
            <option value="">Passengers</option>
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4 Passengers</option>
            <option value="5">5 Passengers</option>
            <option value="6">6 Passengers</option>
            <option value="7">7 Passengers</option>
            <option value="8">8 Passengers</option>
          </select>
        </div>


        <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2"><Calendar className="w-4 h-4" /> Date</label>
        <input type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]} className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors min-h-[50px] [color-scheme:dark]" />

        {/* <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
        /> */}

        {/* <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          required
          className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400"
        /> */}


        <label className="text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2"><Clock className="w-4 h-4" /> Time</label>
        <input type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          required className="w-full bg-dark-950/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors min-h-[50px] [color-scheme:dark]" />

        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={5}
          placeholder="Special Requests"
          className="w-full bg-black/40 border border-gray-700 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-yellow-400 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-black font-bold py-4 rounded-2xl text-lg"
        >
          {loading
            ? "Processing Reservation..."
            : "Book Reservation"}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;