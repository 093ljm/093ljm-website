'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const concepts = [
    { title: '法界', description: '指諸佛與眾生本性平等，理常一致，通稱法界。' },
    { title: '聖凡', description: '十法界四聖六凡，四聖即佛、菩薩、聲聞、緣覺；六凡指天、人、阿修羅、地獄、餓鬼、畜生等六道群靈。' },
    { title: '水陸', description: '眾生受報之處(水陸空三界中)水陸眾生受苦最重；空中眾生（欲界色界等）受樂較多，故普濟著重水陸二界。' },
    { title: '普度', description: '則是「普無不度，故六道雖殊，俱解脫故」，表示六道眾生無所不度，皆能從中獲得解脫。' },
    { title: '大齋', description: '「以施食故，若聖若凡無不供故」，也就是齋會施食對象含括四聖六凡所有法界眾生，供養施食對象一律平等無分別。' },
    { title: '勝會', description: '「以法施故，六凡界中蒙勝益故」水陸法會的殊勝能令六道群生蒙受大利。除了施食以外，又有誦經持咒的法施，可令受苦眾生心開意解，得法水滋潤，故名勝會。又「會」者，聚集之意，救渡者與被救渡者集會於一堂，飲食與佛法都在一起，故名為會。' }
  ];

  const altars = [
    { name: '內壇', path: '/altar/shuilu-inner-altar', image: 'https://ext.same-assets.com/972454301/3753246231.jpeg' },
    { name: '梁皇大壇', path: '/altar/shuilu-outer-altar1', image: 'https://ext.same-assets.com/972454301/3753246231.jpeg' },
    { name: '密壇', path: '/altar/shuilu-outer-altar2', image: 'https://ext.same-assets.com/972454301/3753246231.jpeg' },
    { name: '南傳羅漢壇', path: '/altar/shuilu-outer-altar3', image: 'https://ext.same-assets.com/972454301/3753246231.jpeg' }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="靈鷲山水陸空大法會"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
              靈鷲山水陸空大法會
            </h1>
            {/* 優雅的垂直線條分隔設計 */}
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-lg px-8 py-4 border border-white/30">
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-white">
                  <span className="tracking-widest">法界</span>
                  <span className="text-[#d89b3e]">◆</span>
                  <span className="tracking-widest">聖凡</span>
                  <span className="text-[#d89b3e]">◆</span>
                  <span className="tracking-widest">水陸</span>
                  <span className="text-[#d89b3e]">◆</span>
                  <span className="tracking-widest">普度</span>
                  <span className="text-[#d89b3e]">◆</span>
                  <span className="tracking-widest">大齋</span>
                  <span className="text-[#d89b3e]">◆</span>
                  <span className="tracking-widest">勝會</span>
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              冥陽兩利 普度六道 慈悲平等 功德無量
            </p>
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              立即護持水陸法會
            </a>
          </div>
        </div>
      </section>

      {/* Six Concepts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#263c47] mb-12">
            水陸法會六大要義
          </h2>

          {/* Description Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-[#efeeee] to-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-[#d89b3e]">
              <div className="absolute top-6 right-6 w-20 h-20 bg-[#d89b3e]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-[#9e2125]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-[#263c47]">關於水陸法會</h3>
                </div>

                <p className="text-[#263c47]/80 leading-relaxed text-base mb-4">
                  流傳迄今一千五百多年的水陸法會，全名稱為<span className="font-semibold text-[#9e2125]">「法界聖凡水陸普度大齋勝會」</span>，略稱為水陸法會、水陸道場或悲濟會，以供齋施食為主，為超度水、陸、空一切孤魂而設，具有供養諸佛、懺悔罪障、祈福消災、超薦祖先、普度鬼神、長養慈悲、增長福慧等功德，是漢傳佛教法事中，儀式最隆重、功德最殊勝的經懺法事，素有<span className="font-semibold text-[#d89b3e]">「法會之王」</span>的美譽。
                </p>

                <p className="text-[#263c47]/70 leading-relaxed text-sm italic">
                  水陸法會名稱的由來，根據《水陸儀軌會本》所載，分別說明如下：
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="w-16 h-16 bg-[#d89b3e] rounded-full flex items-center justify-center mb-4 mx-auto flex-shrink-0">
                  <span className="text-2xl font-bold">{concept.title}</span>
                </div>
                <p className="text-center leading-relaxed text-sm">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#efeeee]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#263c47] mb-6">
                關於靈鷲山水陸法會
              </h2>
              <p className="text-lg text-[#263c47]/80 mb-6 leading-relaxed">
                靈鷲山水陸法會秉持心道法師「慈悲與禪」的理念，以「平安禪」為核心，結合傳統佛教儀軌與現代精神，為法界眾生祈福消災。
              </p>
              <p className="text-lg text-[#263c47]/80 mb-8 leading-relaxed">
                法會期間，設有內壇、外壇等多個壇場，誦經持咒，供養諸佛菩薩，普度六道眾生，冥陽兩利，功德殊勝。
              </p>
              <Link
                href="/spirit"
                className="inline-flex items-center gap-2 bg-[#263c47] hover:bg-[#1a2a34] text-white px-8 py-3 rounded-full transition-colors"
              >
                了解水陸精神
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://ext.same-assets.com/972454301/3753246231.jpeg"
                alt="水陸法會"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Circular Diagram Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#263c47] mb-16">
            水陸法會壇場架構
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Link href="/altar" className="text-center block group">
                <div className="w-40 h-40 bg-gradient-to-br from-[#d89b3e] to-[#b87d2e] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">加行</span>
                </div>
                <p className="text-[#263c47] font-semibold group-hover:text-[#d89b3e] transition-colors">五場先修</p>
              </Link>
              <Link href="/altar" className="text-center block group">
                <div className="w-40 h-40 bg-gradient-to-br from-[#263c47] to-[#4a7c8a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">主場</span>
                </div>
                <p className="text-[#263c47] font-semibold group-hover:text-[#263c47] transition-colors">內外壇場</p>
              </Link>
              <Link href="/buddhist-services" className="text-center block group">
                <div className="w-40 h-40 bg-gradient-to-br from-[#9e2125] to-[#c02629] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">佛事</span>
                </div>
                <p className="text-[#263c47] font-semibold group-hover:text-[#9e2125] transition-colors">佛事項目</p>
              </Link>
            </div>
            <div className="text-center">
              <Link
                href="/altar"
                className="inline-flex items-center gap-2 bg-[#9e2125] hover:bg-[#c02629] text-white px-8 py-3 rounded-full transition-colors"
              >
                探索所有壇場
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Altar Quick Links */}
      <section className="py-20 bg-[#efeeee]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#263c47] mb-16">
            壇場介紹
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {altars.map((altar, index) => (
              <Link
                key={index}
                href={altar.path}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={altar.image}
                  alt={altar.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{altar.name}</h3>
                  <span className="text-white/80 text-sm">了解更多 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#263c47] mb-16">
            水陸知識
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/knowledge/twenty-four-seats"
              className="bg-[#efeeee] p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-[#263c47] mb-4">水陸二十四席</h3>
              <p className="text-[#263c47]/70 mb-4">認識水陸法會的二十四個席位及其意義</p>
              <span className="text-[#d89b3e] font-semibold">閱讀更多 →</span>
            </Link>
            <Link
              href="/knowledge/ritual"
              className="bg-[#efeeee] p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-[#263c47] mb-4">內壇儀軌</h3>
              <p className="text-[#263c47]/70 mb-4">深入了解內壇的儀軌流程與意義</p>
              <span className="text-[#d89b3e] font-semibold">閱讀更多 →</span>
            </Link>
            <Link
              href="/knowledge"
              className="bg-[#efeeee] p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-bold text-[#263c47] mb-4">更多知識</h3>
              <p className="text-[#263c47]/70 mb-4">探索水陸法會的深厚文化與佛學內涵</p>
              <span className="text-[#d89b3e] font-semibold">探索更多 →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            護持水陸法會 功德無量
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            您的每一份護持，都能幫助更多眾生離苦得樂，共同成就這場殊勝法會
          </p>
          <a
            href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d89b3e] hover:bg-[#b87d2e] text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
          >
            立即護持
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
