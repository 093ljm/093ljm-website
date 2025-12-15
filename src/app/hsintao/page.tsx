import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function HsintaoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="心道法師"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">心道法師</h1>
            <p className="text-xl md:text-2xl">靈鷲山佛教教團開山住持</p>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="flex gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>返回首頁</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="bg-[#efeeee] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8">生平簡介</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#263c47]/80 leading-relaxed mb-6">
                心道法師，1948年出生於緬甸，為靈鷲山佛教教團開山住持。法師自幼歷經戰亂，深刻體會生命的無常與苦難，進而發起大悲心，誓願弘揚佛法，利益眾生。
              </p>

              <h3 className="text-2xl font-bold text-[#263c47] mt-10 mb-4">修行之路</h3>
              <p className="text-[#263c47]/80 leading-relaxed mb-6">
                1984年，心道法師於宜蘭縣頭城鎮福隆山上創建靈鷲山無生道場，以「慈悲與禪」為宗風，提倡「生活即福田，工作即修行」的理念，將佛法融入日常生活。
              </p>

              <h3 className="text-2xl font-bold text-[#263c47] mt-10 mb-4">弘法願景</h3>
              <p className="text-[#263c47]/80 leading-relaxed mb-6">
                法師以「慈悲與禪」為核心，推動「愛地球、愛和平」的理念，創辦世界宗教博物館，促進宗教對話與交流，致力於世界和平與人類福祉。
              </p>

              <h3 className="text-2xl font-bold text-[#263c47] mt-10 mb-4">水陸法會因緣</h3>
              <p className="text-[#263c47]/80 leading-relaxed mb-6">
                心道法師深感水陸法會的殊勝功德，能夠冥陽兩利、普度六道眾生。自1997年起，靈鷲山每年舉辦水陸空大法會，以「平安禪」為基礎，結合傳統儀軌與現代精神，為法界眾生祈福消災，成就無量功德。
              </p>

              <div className="bg-[#efeeee] p-6 rounded-lg mt-10">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">法師語錄</h3>
                <blockquote className="text-[#263c47]/80 italic border-l-4 border-[#d89b3e] pl-6">
                  「慈悲沒有敵人，智慧不起煩惱。」<br />
                  「愛地球、愛和平，從心出發。」<br />
                  「生命和平大學，是人類覺醒的開始。」
                </blockquote>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://www.hsintao.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#263c47] hover:bg-[#1a2a34] text-white px-8 py-3 rounded-full transition-colors"
              >
                心道法師官方網站
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
