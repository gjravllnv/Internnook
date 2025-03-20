'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#F8F8F8]  z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-900">
        <img src="/images/LOGO_blue_png.png" alt="" className="w-55 h-8" />
        </Link>

        <nav className="flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/features" className="hover:text-blue-600">Features</Link>
          <Link href="/pre-register" className="hover:text-blue-600">Pre-Register</Link>
        </nav>
      </div>
    </header>
  );
}