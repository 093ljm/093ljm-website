import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function CharacteristicPage() {
  const characteristics = [
    {
      title: '漢南藏三傳融合',
      description: '融合漢傳、南傳、藏傳三大傳承，呈現佛教完整面貌，展現多元包容精神。'
    },
    {
      title: '內外壇並重',
      description: '內壇莊嚴精緻，外壇廣大包容，內外相應，功德圓滿。'
    },
    {
      title: '禪修為核心',
      description: '以平安禪為修持核心，讓參與者在法會中體驗禪定喜悅。'
    },
    {
      title: '慈悲平等超度',
      description: '平等超度六道眾生，不分貧富貴賤，體現佛陀慈悲精神。'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="靈鷲山水陸特色"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">靈鷲山水陸特色</h1>
            <p className="text-xl md:text-2xl">三傳融合 禪修為本 慈悲平等</p>
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
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-[#efeeee] to-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-[#d89b3e]">
              <div className="absolute top-6 right-6 w-20 h-20 bg-[#d89b3e]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-[#9e2125]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
                  <h2 className="text-3xl font-bold text-[#263c47]">獨特殊勝之處</h2>
                </div>

                <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                  靈鷲山水陸法會有別於傳統水陸法會，融合了心道法師多年修行體悟與靈鷲山宗風特色，
                  創造出獨一無二的水陸法會模式。
                </p>
                <p className="text-lg text-[#263c47]/80 leading-relaxed">
                  從儀軌設計到修持方法，從壇場布置到志工培訓，處處展現靈鷲山的特色與用心。
                </p>
              </div>
            </div>
          </div>

          {/* Four Characteristics */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            {characteristics.map((characteristic, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-[#efeeee] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-[#263c47]/5">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[#d89b3e] to-[#c08b2e]'
                    : 'bg-gradient-to-br from-[#9e2125] to-[#7e1115]'
                }`}>
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">{characteristic.title}</h3>
                <p className="text-[#263c47]/80 leading-relaxed">{characteristic.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8 text-center">靈鷲山水陸五大特色</h2>

            <div className="space-y-6">
              {/* 一、漢南藏三傳融合 */}
              <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm font-bold">特色一</span>
                  <h3 className="text-2xl font-bold text-[#263c47]">漢南藏三傳融合</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-[#263c47]/80 leading-relaxed">
                    靈鷲山水陸法會最大的特色，就是融合漢傳、南傳、藏傳三大佛教傳承。
                    在法會期間，可以看到漢傳的梁皇寶懺、南傳的禪修儀式、藏傳的金剛密法，
                    三種傳承互相輝映，呈現佛教完整的面貌。
                  </p>
                  <div className="bg-white/50 p-4 rounded border-l-4 border-[#d89b3e]/50">
                    <p className="text-sm text-[#263c47]/80 leading-relaxed">
                      這種融合並非簡單的混搭，而是在心道法師的指導下，找到三傳共通的核心精神，
                      讓參與者能夠體驗佛教多元豐富的修持方法。
                    </p>
                  </div>
                </div>
              </div>

              {/* 二、禪修融入儀軌 */}
              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-bold">特色二</span>
                  <h3 className="text-2xl font-bold text-[#263c47]">禪修融入儀軌</h3>
                </div>
                <p className="text-[#263c47]/80 leading-relaxed">
                  有別於傳統水陸法會，靈鷲山特別將「平安禪」融入法會儀軌中。
                  參與者不僅是唱誦經文，更要透過禪修安定身心，以清淨的心念供養諸佛、利益眾生。
                  法會期間會安排禪修時段，由法師帶領大家進入禪定，體驗內心的平安喜悅。
                </p>
              </div>

              {/* 三、內外壇並重 */}
              <div className="bg-gradient-to-r from-[#263c47]/5 to-transparent border-l-4 border-[#263c47] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#263c47] text-white px-4 py-1 rounded-full text-sm font-bold">特色三</span>
                  <h3 className="text-2xl font-bold text-[#263c47]">內外壇並重</h3>
                </div>
                <p className="text-[#263c47]/80 leading-relaxed">
                  靈鷲山水陸法會特別重視內外壇的平衡。內壇精緻莊嚴，由資深法師主持，進行最核心的儀軌；
                  外壇則廣大包容，設有多個壇場，讓更多信眾能夠參與。內外相應，共同成就這場殊勝法會。
                </p>
              </div>

              {/* 四、環保永續實踐 */}
              <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm font-bold">特色四</span>
                  <h3 className="text-2xl font-bold text-[#263c47]">環保永續實踐</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-[#263c47]/80 leading-relaxed">
                    秉持「愛地球」理念，靈鷲山水陸法會積極實踐環保永續。
                    法會期間提供蔬食齋飯、使用環保餐具、減少一次性用品，
                    並透過綠色能源、垃圾分類等方式，將環保理念落實在每個細節中。
                  </p>
                </div>
              </div>

              {/* 五、全球連線共修 */}
              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-bold">特色五</span>
                  <h3 className="text-2xl font-bold text-[#263c47]">全球連線共修</h3>
                </div>
                <p className="text-[#263c47]/80 leading-relaxed">
                  運用現代科技，靈鷲山水陸法會實現全球連線共修。
                  無論身在何處，都能透過網路直播參與法會，與全球信眾一起誦經持咒，
                  凝聚善念能量，為世界和平、眾生安樂祈福。
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#263c47] to-[#4a7c8a] text-white p-6 rounded-lg mt-10">
              <h3 className="text-xl font-bold mb-4">心道法師開示</h3>
              <blockquote className="italic">
                「靈鷲山水陸法會是一場生命的饗宴，融合三傳精華，以禪修為核心，
                讓每一位參與者都能在法會中得到法喜，體悟生命的真諦。」
              </blockquote>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                護持水陸法會
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
