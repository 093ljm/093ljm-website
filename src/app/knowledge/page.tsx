import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Users, Flower2, Flame, Heart, Video, Home } from 'lucide-react';

export default function KnowledgePage() {
  const knowledgeCategories = [
    {
      title: '二十四席介紹',
      description: '水陸法會設有二十四席位，上堂十席供養諸佛菩薩聖眾，下堂十四席超度六道眾生',
      icon: Users,
      href: '/knowledge/twenty-four-seats',
      color: 'from-[#d89b3e] to-[#b8821f]'
    },
    {
      title: '內壇儀軌',
      description: '水陸法會內壇七天的完整儀軌流程，從結界到送聖，每個儀式的意義與修持方法',
      icon: BookOpen,
      href: '/knowledge/ritual',
      color: 'from-[#4a7c8a] to-[#2a5c6a]'
    },
    {
      title: '齋天',
      description: '齋天是水陸法會的重要儀式，清晨供養諸天護法，祈求護持道場，風調雨順',
      icon: Flower2,
      href: '/knowledge/shuilu-offering',
      color: 'from-[#9e2125] to-[#7e1115]'
    },
    {
      title: '放燄口',
      description: '放燄口是瑜伽焰口施食法會，為餓鬼道眾生施食，解除飢渴之苦，令其超生',
      icon: Flame,
      href: '/knowledge/shuilu-giving',
      color: 'from-[#263c47] to-[#1a2a34]'
    },
    {
      title: '十供養的意義',
      description: '香、花、燈、塗、果、茶、食、寶、珠、衣十種供養的深層意義與修持方法',
      icon: Heart,
      href: '/knowledge/shuilu-repentance',
      color: 'from-[#d89b3e] to-[#b8821f]'
    },
    {
      title: '法師說法',
      description: '歷年法師開示、說法影片與文章，深入了解水陸法會的精神與修持要領',
      icon: Video,
      href: '/knowledge/shuilu-discover-1',
      color: 'from-[#4a7c8a] to-[#2a5c6a]'
    }
  ];

  const ritualLinks = [
    { day: '第一天', title: '結界', href: '/page/ritual1' },
    { day: '第二天', title: '發符懸幡', href: '/page/ritual2' },
    { day: '第三天', title: '請上堂', href: '/page/ritual3' },
    { day: '第四天', title: '供上堂', href: '/page/ritual4' },
    { day: '第五天', title: '告赦', href: '/page/ritual5' },
    { day: '第六天', title: '請下堂', href: '/page/ritual6' },
    { day: '第六天', title: '幽冥戒', href: '/page/ritual7' },
    { day: '第六天', title: '供下堂', href: '/page/ritual8' },
    { day: '第七天', title: '圓滿供', href: '/page/ritual9' },
    { day: '第七天', title: '圓滿香', href: '/page/ritual10' },
    { day: '第七天', title: '送判宣疏', href: '/page/ritual11' },
    { day: '第七天', title: '送聖', href: '/page/ritual12' }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#263c47]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="水陸知識"
          fill
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">水陸知識</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              深入了解水陸法會的儀軌、精神與修持方法
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

      {/* Main Categories */}
      <section className="bg-[#efeeee] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-4">
              知識分類
            </h2>
            <p className="text-lg text-[#263c47]/80 max-w-2xl mx-auto">
              從儀軌到精神，從理論到實踐，全方位了解水陸法會
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {knowledgeCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  href={category.href}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#263c47]/80 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 text-[#d89b3e] group-hover:text-[#9e2125] transition-colors">
                      了解更多 →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ritual Quick Links */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-4">
              內壇儀軌快速導覽
            </h2>
            <p className="text-lg text-[#263c47]/80">
              水陸法會七天十二個儀式完整介紹
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ritualLinks.map((ritual, index) => (
                <Link
                  key={index}
                  href={ritual.href}
                  className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white p-4 rounded-lg transition-all duration-300 text-center group"
                >
                  <div className="text-sm text-[#263c47]/60 group-hover:text-white/80 mb-1">
                    {ritual.day}
                  </div>
                  <div className="font-bold text-[#263c47] group-hover:text-white">
                    {ritual.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn */}
      <section className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              為什麼要了解水陸法會？
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">增長信心</h3>
                <p className="leading-relaxed">
                  了解每個儀軌的意義，能夠增強參與法會時的信心和虔誠心，讓功德更加圓滿。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">深入修行</h3>
                <p className="leading-relaxed">
                  掌握修持方法，可以在日常生活中實踐，將法會精神融入每一天。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">利益眾生</h3>
                <p className="leading-relaxed">
                  了解水陸法會的慈悲精神，能夠更好地將這份慈悲傳遞給周圍的人。
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">傳承法脈</h3>
                <p className="leading-relaxed">
                  學習水陸法會的知識，有助於將這個殊勝的法會傳承給下一代。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#efeeee] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-6">
            參加水陸法會，功德無量
          </h2>
          <p className="text-lg text-[#263c47]/80 mb-8 max-w-2xl mx-auto">
            了解了水陸法會的殊勝，歡迎您親自參與，體驗這份莊嚴與慈悲
          </p>
          <a
            href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            線上報名參加
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
