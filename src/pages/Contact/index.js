"use client";

export default function Contact() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-yellow-600 mb-6 drop-shadow-lg">
          Connect with Layali Chocolates 🍫
        </h2>
        <p className="text-base sm:text-lg text-black mb-12">
          Have a question or special request? Fill out the form below and we’ll
          get back to you with sweetness!
        </p>

        {/* Google Form Embed */}
        <div className="w-full flex justify-center">
          <div className="w-full sm:w-[900px] h-[80vh] sm:h-[90vh] bg-gradient-to-r from-[#2b1b14] via-[#3e2723] to-[#2b1b14] rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSctwUre8d2TNTUsc2OjJA1P5zGETLI1HCE5nqZ8FaKMszUraQ/viewform?embedded=true"
              className="w-full h-full rounded-xl"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
