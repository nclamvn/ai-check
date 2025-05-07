"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-6 md:py-8 mt-auto shadow-[-2px_0_10px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          {/* About */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Về dự án</h4>
            <p className="text-sm text-gray-600 mb-2">
              Nghiên cứu và phát triển giải pháp phát hiện văn bản AI tiếng Việt trong giáo dục.
            </p>
            <Link href="/giai-phap" className="text-sm text-blue-600 hover:underline">Tìm hiểu thêm</Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><Link href="/phuong-phap" className="text-sm text-gray-600 hover:text-blue-600">Phương pháp</Link></li>
              <li><Link href="/danh-gia" className="text-sm text-gray-600 hover:text-blue-600">Đánh giá</Link></li>
              <li><Link href="/khuyen-nghi" className="text-sm text-gray-600 hover:text-blue-600">Khuyến nghị</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Liên hệ</h4>
            <p className="text-sm text-gray-600 mb-1">Email: <a href="mailto:nclamvn@gmail.com" className="hover:underline">nclamvn@gmail.com</a></p>
            <p className="text-sm text-gray-600">Điện thoại: <a href="tel:0986222285" className="hover:underline">0986 222 285</a></p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
          &copy; {currentYear} AI Text Detection VN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

