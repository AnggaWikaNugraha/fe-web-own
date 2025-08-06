// src/components/Navbar.tsx
'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-gray-800 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="space-x-6 text-sm">
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/projects" className="hover:text-gray-400">Projects</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
