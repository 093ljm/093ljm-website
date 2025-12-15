import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function AltarPage() {
  const altars = [
    {
      name: '內壇',
      path: '/altar/shuilu-inner-altar',
      description: '水陸法會的核心，進行最重要的召請與供養儀式',
      category: '正壇'
    },
    {
      name: '梁皇大壇',
      path: '/altar/shuilu-outer-altar1',
      description: '禮拜梁皇寶懺，懺悔業障，祈求平安',
      category: '外壇'
    },
    {
      name: '密壇',
      path: '/altar/shuilu-outer-altar2',
      description: '修持密法，加持護佑，消災祈福',
      category: '外壇'
    },
    {
      name: '南傳羅漢壇',
      path: '/altar/shuilu-outer-altar3',
      description: '南傳佛教儀軌，清淨僧團，功德圓滿',
      category: '外壇'
    },
    {
      name: '華嚴壇',
      path: '/altar/shuilu-six-small-altar1',
      description: '誦念華嚴經，圓滿法界，功德無量',
      category: '六小壇'
    },
    {
      name: '法華壇',
      path: '/altar/shuilu-six-small-altar2',
      description: '持誦法華經，開顯佛性，智慧圓滿',
      category: '六小壇'
    },
    {
      name: '淨土壇',
      path: '/altar/shuilu-six-small-altar3',
      description: '念佛修持，求生淨土，往生西方',
      category: '六小壇'
    },
    {
      name: '楞嚴壇',
      path: '/altar/shuilu-six-small-altar4',
      description: '誦持楞嚴咒，破除邪魔，護持正法',
      category: '六小壇'
    },
    {
      name: '諸經壇',
      path: '/altar/shuilu-six-small-altar5',
      description: '恭誦諸經，廣結善緣，法喜充滿',
      category: '六小壇'
    },
    {
      name: '藥師壇',
      path: '/altar/shuilu-six-small-altar6',
      description: '禮拜藥師佛，消災延壽，身心安康',
      category: '六小壇'
    }
  ];

  const categories = ['正壇', '外壇', '六小壇'];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="壇場介紹"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">壇場介紹</h1>
            <p className="text-xl md:text-2xl">內壇、外壇、六小壇 莊嚴道場</p>
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
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">水陸法會壇場架構</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              靈鷲山水陸法會依循傳統儀軌，設有內壇、外壇及六小壇等多個壇場，各司其職，相輔相成，共同成就這場殊勝的法會。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              每個壇場都有其獨特的功能與意義，透過誦經、持咒、禮拜等方式，供養諸佛菩薩，普度六道眾生。
            </p>
          </div>

          {/* Altars by Category */}
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-[#263c47] mb-8 text-center">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {altars
                  .filter(altar => altar.category === category)
                  .map((altar, index) => (
                    <Link
                      key={index}
                      href={altar.path}
                      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image
                          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
                          alt={altar.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white text-2xl font-bold">{altar.name}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-[#263c47]/80">{altar.description}</p>
                        <span className="inline-block mt-4 text-[#d89b3e] font-semibold">
                          了解更多 →
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="max-w-4xl mx-auto text-center mt-12">
            <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-12">
              <h2 className="text-3xl font-bold mb-6">親臨現場 感受莊嚴</h2>
              <p className="text-lg mb-8">
                歡迎親自參與水陸法會，體驗各壇場的殊勝莊嚴
              </p>
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d89b3e] hover:bg-[#b87d2e] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                立即報名
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
