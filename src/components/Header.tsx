"use client";

import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-subtle border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            AI Text Detection VN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/giai-phap" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Giải pháp</Link>
            <Link href="/phuong-phap" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Phương pháp</Link>
            <Link href="/danh-gia" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Đánh giá</Link>
            <Link href="/kha-thi" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Khả thi</Link>
            <Link href="/khuyen-nghi" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Khuyến nghị</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4 border-t border-gray-200 pt-4">
            <Link href="/giai-phap" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100" onClick={toggleMobileMenu}>Giải pháp</Link>
            <Link href="/phuong-phap" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100" onClick={toggleMobileMenu}>Phương pháp</Link>
            <Link href="/danh-gia" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100" onClick={toggleMobileMenu}>Đánh giá</Link>
            <Link href="/kha-thi" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100" onClick={toggleMobileMenu}>Khả thi</Link>
            <Link href="/khuyen-nghi" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100" onClick={toggleMobileMenu}>Khuyến nghị</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

