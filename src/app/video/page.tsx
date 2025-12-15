import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Play } from 'lucide-react';

export default function VideoPage() {
  const videos = [
    {
      id: 1,
      title: '2025靈鷲山水陸法會精華回顧',
      description: '完整記錄2025年水陸法會的精彩瞬間，感受殊勝莊嚴的法會氛圍。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '45:30',
      category: '法會紀錄'
    },
    {
      id: 2,
      title: '心道法師開示：水陸法會的意義',
      description: '法師詳細開示水陸法會的殊勝功德，以及如何透過參與法會來利益自己與眾生。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '22:18',
      category: '法師開示'
    },
    {
      id: 3,
      title: '內壇儀軌完整版',
      description: '完整記錄內壇七天儀軌，讓您深入了解水陸法會的核心修持。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '2:15:40',
      category: '儀軌教學'
    },
    {
      id: 4,
      title: '外壇各壇場介紹',
      description: '詳細介紹梁皇大壇、密壇、南傳羅漢壇等各個外壇壇場的特色與修持方法。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '35:20',
      category: '壇場介紹'
    },
    {
      id: 5,
      title: '齋天法會儀軌',
      description: '清晨齋天法會的完整記錄，感受供養諸天護法的殊勝時刻。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '1:10:15',
      category: '儀軌教學'
    },
    {
      id: 6,
      title: '放燄口施食法會',
      description: '夜間放燄口法會實況，見證超度餓鬼道眾生的慈悲儀式。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '1:45:30',
      category: '儀軌教學'
    },
    {
      id: 7,
      title: '志工分享：我在水陸的日子',
      description: '資深志工分享參與水陸法會的心得與感動，傳遞服務的喜悅。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '18:45',
      category: '見證分享'
    },
    {
      id: 8,
      title: '水陸法會Q&A',
      description: '法師針對信眾常見的水陸法會問題，一一詳細解答。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '28:12',
      category: '法師開示'
    },
    {
      id: 9,
      title: '三傳融合的修持特色',
      description: '深入解析靈鷲山水陸法會如何融合漢南藏三大傳承的精華。',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      duration: '32:50',
      category: '法會介紹'
    }
  ];

  const categories = ['全部', '法會紀錄', '法師開示', '儀軌教學', '壇場介紹', '見證分享', '法會介紹'];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="影音專區"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">影音專區</h1>
            <p className="text-xl md:text-2xl">深入了解水陸法會 感受殊勝氛圍</p>
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
      <section className="bg-[#efeeee] pt-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#263c47] mb-2">影片分類</h2>
            <p className="text-sm text-[#263c47]/60">選擇您感興趣的類別，探索相關影片</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white hover:bg-[#9e2125] hover:text-white border border-[#263c47]/20 rounded-full transition-colors shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-[#efeeee] py-12">
        <div className="container mx-auto px-4">
          {/* Introduction Block */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-white to-[#efeeee] rounded-2xl p-8 md:p-10 shadow-lg border border-[#263c47]/10">
              <div className="absolute top-4 right-4 w-24 h-24 bg-[#d89b3e]/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
                  <h2 className="text-2xl font-bold text-[#263c47]">影音知識庫</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#d89b3e]/10 to-transparent p-4 rounded-lg border-l-4 border-[#d89b3e]">
                    <div className="text-3xl font-bold text-[#d89b3e] mb-2">9+</div>
                    <p className="text-sm text-[#263c47]/70">精選影片</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#9e2125]/10 to-transparent p-4 rounded-lg border-l-4 border-[#9e2125]">
                    <div className="text-3xl font-bold text-[#9e2125] mb-2">7</div>
                    <p className="text-sm text-[#263c47]/70">影片類別</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#263c47]/10 to-transparent p-4 rounded-lg border-l-4 border-[#263c47]">
                    <div className="text-3xl font-bold text-[#263c47] mb-2">HD</div>
                    <p className="text-sm text-[#263c47]/70">高畫質影片</p>
                  </div>
                </div>

                <p className="text-sm text-[#263c47]/70 leading-relaxed">
                  透過影片深入了解靈鷲山水陸法會的殊勝意義、儀軌流程與參與方式，讓您在參加法會前做好充分準備。
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-[#263c47] to-[#1a2a34]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover opacity-60"
                    unoptimized
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 text-[#9e2125] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#9e2125] text-white px-3 py-1 rounded-full text-sm">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#263c47] mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-[#263c47]/70 text-sm line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  <button className="text-[#9e2125] font-semibold hover:text-[#c02629] transition-colors flex items-center gap-2">
                    <span>觀看影片</span>
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-[#263c47] hover:bg-[#1a2a34] text-white px-10 py-3 rounded-full transition-colors">
              載入更多影片
            </button>
          </div>
        </div>
      </section>

      {/* Live Stream Banner */}
      <section className="bg-gradient-to-r from-[#9e2125] to-[#7e1115] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">法會期間線上直播</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            法會期間將提供全程線上直播，讓無法親臨現場的信眾也能同步參與共修
          </p>

          {/* 直播特色 */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="text-lg font-bold mb-2">高清畫質</h3>
              <p className="text-sm opacity-90">HD 1080p 高畫質直播，清晰呈現法會每個細節</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
              <div className="text-4xl mb-3">🌏</div>
              <h3 className="text-lg font-bold mb-2">全球同步</h3>
              <p className="text-sm opacity-90">無論身在何處，都能與全球信眾同步共修</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
              <div className="text-4xl mb-3">🔔</div>
              <h3 className="text-lg font-bold mb-2">即時通知</h3>
              <p className="text-sm opacity-90">訂閱通知，不錯過任何重要法會時刻</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#9e2125] hover:bg-[#efeeee] px-8 py-3 rounded-full font-semibold transition-colors"
            >
              立即報名參加
            </a>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#9e2125] px-8 py-3 rounded-full font-semibold transition-colors">
              訂閱直播通知
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
