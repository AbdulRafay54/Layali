"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const products = [
  {
    id: 1,
    image: "/images/darkkunafa.jpg",
    name: "Dark Chocolate Kunafa Delight",
    price: 889,
    discount: 10, // 10% discount
    reviews: 38,
    rating: 4,
    description:
      "Indulge in rich dark chocolate infused with crispy golden kunafa — a luxury treat for true chocolate lovers.",
  },
  {
    id: 2,
    image: "/images/kunafabar.jpeg",
    name: "Milk Chocolate Kunafa Bliss",
    price: 889,
    discount: 10, // 10% discount
    reviews: 76,
    rating: 5,
    description:
      "Smooth and creamy milk chocolate layered with crunchy kunafa — a heavenly fusion of taste and texture.",
  },
  {
    id: 3,
    image: "/images/whitekunafa.jpeg",
    name: "White Chocolate Kunafa Luxury",
    price: 889,
    discount: 10, // 10% discount
    oldPrice: "Rs 900",
    reviews: 58,
    rating: 5,
    description:
      "Velvety white chocolate meets kunafa crisp — crafted for those who love refined sweetness.",
  },
  {
    id: 4,
    image: "/images/dubaikunafa.jpeg",
    name: "Pistachio Kunafa Royale (Dubai Special)",
    price: 889,
    discount: 10, // 10% discount
    reviews: 93,
    rating: 5,
    description:
      "Signature Dubai-inspired pistachio kunafa with premium chocolate — pure indulgence in every bite.",
  },
];

export default function YouMayAlsoLike() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-gradient-to-b from-[#fffaf5] to-[#fefefe]">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-[#3E2723] tracking-wide">
        Featured Products 🍫
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelected(product)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
                 hover:shadow-2xl hover:scale-[1.04] transition 
                 cursor-pointer border border-[#E0C097]/50 group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-t-2xl group-hover:brightness-110 transition"
            />
            <div className="p-4 text-center">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 line-clamp-2 text-[#3E2723]">
                {product.name}
              </h3>
              {/* Price with discount */}
              <p className="text-base sm:text-lg font-bold text-[#6D4C41]">
                <span className="line-through text-gray-400 mr-2">
                  Rs {product.price}
                </span>
                Rs{" "}
                {Math.round(
                  product.price - (product.price * product.discount) / 100
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Width Banner with Stylish Buy Now */}
      <div className="relative mt-12 w-full">
        <Image
          src="/images/kunafabar.jpeg"
          alt="Special Chocolate Offer"
          width={1200}
          height={500}
          className="w-full h-60 sm:h-72 md:h-96 object-cover rounded-2xl shadow-xl"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 rounded-2xl">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Indulge in Luxury 🍫
          </h2>

          <a
            href="https://wa.me/923092024577?text=Hello! I’m interested in your chocolates. Please share the details."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-10 py-3 bg-gradient-to-r from-[#8B4513] via-[#6D4C41] to-[#3E2723] 
                 text-white font-semibold text-lg rounded-full shadow-lg 
                 hover:scale-105 hover:shadow-2xl hover:from-[#3E2723] hover:to-[#8B4513]
                 transition-all duration-300"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50 px-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl mx-auto p-6 md:p-10 relative animate-fadeIn border border-[#E0C097]/80">
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-[#6D4C41] text-3xl"
            >
              <AiOutlineClose size={28} color="#6D4C41" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Product Image */}
              <div>
                <Image
                  src={selected.image}
                  alt={selected.name}
                  width={600}
                  height={500}
                  className="w-full h-80 object-cover rounded-2xl shadow-md border border-[#E0C097]/60"
                />
              </div>

              {/* Right: Product Details */}
              <div>
                {/* Product Name */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3E2723]">
                  {selected.name}
                </h2>

                {/* Price with discount */}
                <p className="text-2xl sm:text-3xl font-bold text-[#6D4C41] mt-2">
                  <span className="line-through text-gray-400 mr-3 text-lg sm:text-xl">
                    Rs {selected.price}
                  </span>
                  Rs{" "}
                  {Math.round(
                    selected.price - (selected.price * selected.discount) / 100
                  )}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-3 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < selected.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {selected.reviews} reviews
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                  {selected.description}
                </p>

                {/* Product Details */}
                <div className="mt-6 space-y-3 text-sm sm:text-base text-gray-700">
                  <p>
                    <span className="font-semibold text-[#3E2723]">
                      Delivery:
                    </span>{" "}
                    Available all over Pakistan
                  </p>
                  <p>
                    <span className="font-semibold text-[#3E2723]">
                      Payment:
                    </span>{" "}
                    Cash on Delivery
                  </p>
                </div>

                {/* Buy Now Button → WhatsApp Order */}
                <div className="mt-8">
                  <a
                    href={`https://wa.me/923092024577?text=Hello! I want to order *${selected.name}* for Rs. 800 .`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gradient-to-r from-[#6D4C41] to-[#3E2723] hover:from-[#3E2723] hover:to-[#6D4C41] text-white py-3 rounded-xl font-semibold transition shadow-md"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
