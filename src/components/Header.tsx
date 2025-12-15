'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '心道法師', href: '/hsintao' },
    { label: '水陸法會', href: '/' },
    { label: '靈鷲山水陸精神', href: '/spirit' },
    { label: '靈鷲山水陸特色', href: '/characteristic' },
    { label: '壇場介紹', href: '/altar' },
    { label: '最新消息', href: '/note' },
    { label: '見證分享', href: '/witness' },
    { label: '水陸知識', href: '/knowledge' },
    { label: '影音專區', href: '/video' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#263c47] text-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1a2a34] py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-end items-center gap-4">
          <a
            href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d89b3e] transition-colors"
          >
            線上報名
          </a>
          <span>|</span>
          <span className="text-[#d89b3e]">召請文</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-16 h-16">
              <Image
                src="https://ext.same-assets.com/972454301/245953241.png"
                alt="靈鷲山水陸法會"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold">靈鷲山水陸空大法會</div>
              <div className="text-xs text-white/70">Ling Jiou Mountain Water-Land Dharma Assembly</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.slice(0, 9).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[#d89b3e] transition-colors whitespace-nowrap text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-3 px-4 hover:bg-white/10 transition-colors rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-[#9e2125] px-4 py-3 rounded hover:bg-[#c02629] transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              水陸護持
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
