import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Printer, MessageCircle, Twitter, Facebook, ChevronLeft, Home } from 'lucide-react';
import { ReactNode } from 'react';

interface RitualTemplateProps {
  title: string;
  subtitle?: string;
  day: string;
  heroImage?: string;
  children: ReactNode;
}

export default function RitualTemplate({
  title,
  subtitle,
  day,
  heroImage = "https://ext.same-assets.com/972454301/3753246231.jpeg",
  children
}: RitualTemplateProps) {
  const socialIcons = [
    { icon: Mail, label: 'Email' },
    { icon: Printer, label: 'Print' },
    { icon: MessageCircle, label: 'WeChat' },
    { icon: MessageCircle, label: 'Weibo' },
    { icon: Twitter, label: 'Twitter' },
    { icon: MessageCircle, label: 'Line' },
    { icon: MessageCircle, label: 'Google+' },
    { icon: Facebook, label: 'Facebook' },
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Breadcrumb & Social */}
      <section className="bg-[#efeeee]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="text-sm text-[#263c47]">
              <Link href="/" className="hover:text-[#9e2125] transition-colors">首頁</Link>
              <span className="mx-2">•</span>
              <Link href="/knowledge" className="hover:text-[#9e2125] transition-colors">水陸知識</Link>
              <span className="mx-2">•</span>
              <Link href="/knowledge/ritual" className="hover:text-[#9e2125] transition-colors">內壇儀軌</Link>
              <span className="mx-2">•</span>
              <span className="font-semibold">{title}</span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {socialIcons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className="w-8 h-8 border border-[#263c47] hover:bg-[#263c47] hover:text-white transition-colors rounded flex items-center justify-center"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center py-12">
          <div className="inline-block bg-[#d89b3e] text-white px-6 py-2 rounded-full mb-4 text-sm">
            {day}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#263c47] mb-4">
            {title}
          </h1>
          {subtitle && <p className="text-lg text-[#263c47]/80">{subtitle}</p>}
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[600px] bg-[#263c47]">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Content */}
      <div className="bg-[#efeeee]">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-8">
          <div className="flex gap-4 max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>返回首頁</span>
            </Link>
            <Link
              href="/knowledge/ritual"
              className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>返回儀軌介紹</span>
            </Link>
          </div>
        </div>
        {children}
      </div>

      <Footer />
    </main>
  );
}
