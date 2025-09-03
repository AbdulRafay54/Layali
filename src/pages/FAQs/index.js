"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    category: "Delivery FAQs",
    questions: [
      {
        q: "When will I get my delivery?",
        a: "All our chocolates are freshly prepared. Delivery usually takes 2-3 working days."
      },
      {
        q: "How are chocolates packaged?",
        a: "We use premium luxury packaging to ensure your chocolates stay fresh and intact."
      },
      {
        q: "Do you deliver overnight?",
        a: "Yes, express overnight delivery is available in select cities."
      }
    ]
  },
  {
    category: "Our Product FAQs",
    questions: [
      {
        q: "What happens if my delivery is damaged?",
        a: "We guarantee safe delivery. If damaged, we replace your order free of cost."
      },
      {
        q: "Where can I find nutritional info?",
        a: "All product details including ingredients are printed on the back of each box."
      }
    ]
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 sm:px-16 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#6D4C41]">
        FAQs Layali Chocolates 🍫
      </h1>

      {faqs.map((section, i) => (
        <div key={i} className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B4513] mb-6">
            {section.category}
          </h2>
          <div className="space-y-4">
            {section.questions.map((faq, idx) => {
              const index = `${i}-${idx}`;
              return (
                <div
                  key={index}
                  className="border-2 border-yellow-500 rounded-xl p-5 
                             bg-gradient-to-r from-[#2b1b14] via-amber-700 to-[#2b1b14]
                             hover:shadow-lg transition-all"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span className="font-semibold text-lg text-white">
                      {faq.q}
                    </span>
                    <span className="text-yellow-600 text-xl">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>

                  {openIndex === index && (
                    <p className="mt-3 text-white text-base leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
