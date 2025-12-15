import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Tag, ChevronRight, Home } from 'lucide-react';

export default function NotePage() {
  const categories = ['全部', '法會資訊', '即時新聞', '五場先修', '活動報導'];

  const news = [
    {
      id: '2024-water-land-announcement',
      title: '2025年靈鷲山水陸空大法會日期公布',
      category: '法會資訊',
      date: '2024年10月15日',
      excerpt: '2025年靈鷲山水陸空大法會將於農曆十月初一至初七舉行，誠摯邀請十方善信共襄盛舉，為自己、為家人、為眾生祈福...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: true
    },
    {
      id: 'online-registration-open',
      title: '線上報名系統正式啟用',
      category: '法會資訊',
      date: '2024年10月10日',
      excerpt: '為方便信眾報名參加水陸法會，特別開發線上報名系統。現在只需透過網路，即可完成報名、立牌位、隨喜護持等所有程序...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'preliminary-practice-notice',
      title: '五場先修法會時間表',
      category: '五場先修',
      date: '2024年9月28日',
      excerpt: '為讓信眾提前準備，累積功德，今年特別舉辦五場先修法會。包括梁皇寶懺、藥師法會、地藏法會等，歡迎參加...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: '2024-recap',
      title: '2024年水陸法會圓滿回顧',
      category: '活動報導',
      date: '2024年9月15日',
      excerpt: '2024年水陸法會已於上月圓滿結束，七天法會期間，共有超過萬名信眾參與，立牌位數萬個，功德殊勝圓滿...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'volunteer-recruitment',
      title: '誠徵法會志工',
      category: '即時新聞',
      date: '2024年9月5日',
      excerpt: '水陸法會需要大量志工協助各項事務，包括接待、香積、環保、交通等。歡迎發心菩薩報名參加，以服務眾生的方式累積功德...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'hsintao-dharma-talk',
      title: '心道法師開示：水陸法會的真義',
      category: '即時新聞',
      date: '2024年8月20日',
      excerpt: '心道法師在最近的開示中，深入講解水陸法會的真正意義。法師強調，參加法會不只是為自己或家人祈福，更重要的是發菩提心...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'new-altar-introduction',
      title: '新設南傳羅漢壇介紹',
      category: '法會資訊',
      date: '2024年8月10日',
      excerpt: '為體現靈鷲山「尊重每一個生命，愛與和平」的精神，今年特別新設南傳羅漢壇，邀請南傳法師主法，融合南傳佛教的修持...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'donation-guide',
      title: '護持水陸法會方式說明',
      category: '法會資訊',
      date: '2024年7月25日',
      excerpt: '護持水陸法會有多種方式，包括立牌位、隨喜供養、擔任志工等。本文詳細說明各種護持方式及其功德利益...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#263c47]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="最新消息"
          fill
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">最新消息</h1>
            <p className="text-xl md:text-2xl">
              掌握水陸法會最新資訊
            </p>
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

      {/* Categories Filter */}
      <section className="bg-white border-b border-[#263c47]/10 sticky top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  category === '全部'
                    ? 'bg-[#d89b3e] text-white'
                    : 'bg-[#efeeee] text-[#263c47] hover:bg-[#d89b3e] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {news.filter(n => n.featured).map((item) => (
        <section key={item.id} className="bg-[#efeeee] py-12">
          <div className="container mx-auto px-4">
            <Link
              href={`/note/${item.id}`}
              className="block max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    精選
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#d89b3e] text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-[#263c47]/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-4 group-hover:text-[#d89b3e] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-[#263c47]/80 text-lg leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#d89b3e] font-semibold">
                    閱讀更多 <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* News List */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.filter(n => !n.featured).map((item) => (
                <Link
                  key={item.id}
                  href={`/note/${item.id}`}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#efeeee] text-[#263c47] px-3 py-1 rounded-full text-xs">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-[#263c47]/60 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#263c47] mb-3 group-hover:text-[#d89b3e] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[#263c47]/70 text-sm line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white text-[#263c47] px-8 py-3 rounded-full font-semibold transition-colors">
                載入更多消息
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">訂閱電子報</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            第一時間接收水陸法會最新消息、法師開示、活動資訊
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="請輸入您的電子郵件"
              className="px-6 py-3 rounded-full w-full text-[#263c47] focus:outline-none focus:ring-2 focus:ring-[#d89b3e]"
            />
            <button className="bg-[#d89b3e] hover:bg-[#b8821f] text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
              訂閱
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
