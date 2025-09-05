"use client";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3e2723]">
      {" "}
      {/* Lighter brown background */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Layali Chocolates 🍫
          </h2>
          <p className="text-sm text-white leading-relaxed">
            Experience the luxury of handcrafted chocolates with rich flavors
            and a touch of elegance.
          </p>
        </div>

        {/* Middle Section - Products */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-yellow-600 mb-4">
            Our Products
          </h3>
          <ul className="space-y-2 text-white">
            <li>
              <a href="#" className="hover:text-yellow-600 transition">
                Dark Chocolate Kunafa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600 transition">
                Milk Chocolate Kunafa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600 transition">
                White Chocolate Kunafa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-600 transition">
                Pistachio Kunafa Royale
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-yellow-600 mb-4">
            Connect with us
          </h3>
          <div className="flex justify-center md:justify-end gap-4 mb-4">
            <a
              href="https://www.facebook.com/profile.php?id=61580183044690"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 transition"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/layalichocolate?igsh=ZGUzMzM3NWJiOQ=="
              target="_blank"
              className="bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/923092024577"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 text-white p-3 rounded-full hover:bg-yellow-500 transition"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Layali Chocolates. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
