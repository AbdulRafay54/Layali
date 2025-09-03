"use client";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  // Dummy reviews (Pakistani names)
  const reviews = [
    {
      id: 1,
      name: "Ayesha Khan",
      verified: true,
      rating: 5,
      text: "Best chocolate I’ve ever had in Pakistan! Rich taste and perfect gift.",
    },
    {
      id: 2,
      name: "Ali Raza",
      verified: true,
      rating: 4,
      text: "Delivery was super fast and the chocolates were fresh & delicious.",
    },
    {
      id: 3,
      name: "Fatima Noor",
      verified: true,
      rating: 5,
      text: "I ordered for my sister’s wedding giveaways, everyone loved them!",
    },
  ];

  return (
    <section className="bg-[#fdfcfb] py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#4e342e] mb-10">
          Customer Reviews
        </h2>

        {/* Top summary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b pb-8">
          {/* Left avg rating */}
          <div className="flex items-center gap-3">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold text-[#4e342e]">
                4.84 out of 5
              </p>
              <p className="text-sm text-gray-600">Based on 93 reviews</p>
            </div>
          </div>

          {/* Middle breakdown */}
          <div className="flex-1 max-w-md">
            {[5, 4, 3, 2, 1].map((stars, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <div className="flex text-yellow-500">
                  {[...Array(stars)].map((_, j) => (
                    <FaStar key={j} size={14} />
                  ))}
                </div>
                <div className="flex-1 bg-gray-200 h-2 rounded overflow-hidden">
                  <div
                    className="bg-[#795548] h-2"
                    style={{ width: `${stars === 5 ? 90 : stars === 4 ? 6 : 1}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {stars === 5 ? 84 : stars === 4 ? 6 : 1}
                </span>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() =>
              window.open("https://forms.gle/your-google-form-link", "_blank")
            }
            className="bg-[#4e342e] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3e2723] transition"
          >
            Write a review
          </button>
        </div>

        {/* Reviews list */}
        <div className="mt-8 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="font-semibold text-[#4e342e]">
                  {review.name}
                </span>
                {review.verified && (
                  <span className="bg-[#4e342e] text-white text-xs px-2 py-1 rounded">
                    Verified
                  </span>
                )}
              </div>
              <p className="mt-2 text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
