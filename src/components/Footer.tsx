import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const helpLinks = [
    { name: "Payment Options", href: "/payment-options" },
    { name: "Returns", href: "/returns" },
    { name: "Privacy Policies", href: "/privacy-policies" },
  ];

  return (
    <footer className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="container mx-auto px-6 lg:px-16 py-14 border-b border-gray-300">
        <div className="flex flex-wrap justify-between">
          {/* Address Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <p className="text-sm text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/6 mb-6 sm:mb-0">
            <h3 className="font-semibold text-sm text-[#9F9F9F] mb-4">Links</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full sm:w-1/2 lg:w-1/6 mb-6 sm:mb-0">
            <h3 className="font-semibold text-sm text-[#9F9F9F] mb-4">Help</h3>
            <ul className="space-y-4">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/4">
            <h3 className="font-semibold text-sm text-[#9F9F9F] mb-4">
              Newsletter
            </h3>
            <form className="flex items-center border-b border-[#9F9F9F]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full bg-transparent px-2 py-1 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="text-sm text-[#9F9F9F] font-semibold ml-3"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FFFFFF]">
        <div className="container px-8 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p>2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
