"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <Image
          src="/images/kunafabar.jpeg"
          alt="Premium Chocolate"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/70 via-[#2c1810]/80 to-[#1a0e08]/90"></div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md">
            About <span className="text-white">Layali</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            Crafting moments of indulgence with every bite of luxury.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C2A]">
          Redefining Chocolate Indulgence
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
          From the heart of Melbourne, where creativity meets craftsmanship, a
          new standard of indulgence is born.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
          Welcome to <span className="font-semibold text-[#4A2C2A]">Layali Chocolate</span>, 
          a brand where the art of chocolate is redefined with sophistication 
          and joy. Layali isn’t just about chocolate; it’s about moments of pure
          delight. Handcrafted with passion, our filled chocolate bars are
          designed to surprise and indulge every chocolate lover.
        </p>
      </section>

      {/* Quote Section */}
      <section className="bg-[#2c1810] text-center py-16">
        <p className="text-xl italic text-gray-200 max-w-3xl mx-auto px-6">
          “Luxury is in the details, and every bite tells our story.”
        </p>
        <p className="mt-4 font-semibold text-yellow-400">— Layali Chocolates</p>
      </section>
    </main>
  );
}
