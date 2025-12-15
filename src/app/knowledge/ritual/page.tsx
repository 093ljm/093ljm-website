import AltarTemplate from '@/components/AltarTemplate';
import Link from 'next/link';

export default function RitualOverviewPage() {
  const rituals = [
    {
      day: '第一天',
      title: '結界',
      description: '建立清淨法界空間，隔絕外界干擾和邪魔侵擾，確保法會順利進行',
      href: '/page/ritual1',
      color: 'from-[#d89b3e] to-[#b8821f]'
    },
    {
      day: '第二天',
      title: '發符懸幡',
      description: '發送法符召請聖眾，懸掛法幡昭告十方，正式啟動水陸法會',
      href: '/page/ritual2',
      color: 'from-[#4a7c8a] to-[#2a5c6a]'
    },
    {
      day: '第三天',
      title: '請上堂',
      description: '恭請十方諸佛菩薩、護法龍天蒞臨壇場，接受供養、放光加持',
      href: '/page/ritual3',
      color: 'from-[#9e2125] to-[#7e1115]'
    },
    {
      day: '第四天',
      title: '供上堂',
      description: '以香花燈燭、飲食珍寶等供養上堂聖眾，表達最虔誠的恭敬',
      href: '/page/ritual4',
      color: 'from-[#263c47] to-[#1a2a34]'
    },
    {
      day: '第五天',
      title: '告赦',
      description: '向冥府請赦，赦免亡者罪業，准許他們出離苦海接受超度',
      href: '/page/ritual5',
      color: 'from-[#d89b3e] to-[#b8821f]'
    },
    {
      day: '第六天',
      title: '請下堂',
      description: '召請六道眾生特別是幽冥界眾生進入壇場，給予超度機會',
      href: '/page/ritual6',
      color: 'from-[#4a7c8a] to-[#2a5c6a]'
    },
    {
      day: '第六天',
      title: '幽冥戒',
      description: '為六道眾生授予三皈五戒，讓他們成為佛弟子，種下解脫善根',
      href: '/page/ritual7',
      color: 'from-[#9e2125] to-[#7e1115]'
    },
    {
      day: '第六天',
      title: '供下堂',
      description: '為六道眾生施食供養，特別為餓鬼道眾生解除飢渴之苦',
      href: '/page/ritual8',
      color: 'from-[#263c47] to-[#1a2a34]'
    },
    {
      day: '第七天',
      title: '圓滿供',
      description: '獻上最後的供養，將七天功德迴向法界眾生，圓滿法會',
      href: '/page/ritual9',
      color: 'from-[#d89b3e] to-[#b8821f]'
    },
    {
      day: '第七天',
      title: '圓滿香',
      description: '焚香供養表達感恩，香煙象徵法會功德上達諸天普薰法界',
      href: '/page/ritual10',
      color: 'from-[#4a7c8a] to-[#2a5c6a]'
    },
    {
      day: '第七天',
      title: '送判宣疏',
      description: '向冥府呈送疏文，請求依法會功德赦免亡者罪業准其超生',
      href: '/page/ritual11',
      color: 'from-[#9e2125] to-[#7e1115]'
    },
    {
      day: '第七天',
      title: '送聖',
      description: '恭送諸佛菩薩護法龍天六道眾生回歸本位，法會圓滿結束',
      href: '/page/ritual12',
      color: 'from-[#263c47] to-[#1a2a34]'
    }
  ];

  return (
    <AltarTemplate
      title="內壇儀軌"
      subtitle="水陸法會七天十二個儀式完整介紹"
      breadcrumb={['首頁', '水陸知識', '內壇儀軌']}
    >
      <div className="bg-[#efeeee]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">水陸內壇簡介</h2>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                水陸法會的內壇是整個法會的核心，由主法和尚率領內壇法師，在七天內進行十二個重要儀式。這些儀式環環相扣，從結界開始，到送聖結束，每一個環節都有其深刻的意義和嚴謹的規範。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                內壇的儀軌源自唐代，經過歷代祖師的完善和發展，形成了一套完整的超度體系。這套儀軌不僅包含了佛教的教理教義，還融合了中國傳統文化，成為漢傳佛教最具特色的法會之一。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed">
                參與內壇法會，需要具備一定的佛教知識和修行基礎。信眾雖然不能進入內壇，但可以透過外壇參與，或在內壇外恭敬觀禮。即使只是遠觀，只要心存虔誠，也能獲得法會的加持和功德。
              </p>
            </div>

            {/* Seven Days Overview */}
            <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">七天法會時間軸</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第一天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">結界 · 建立法界</div>
                    <div className="text-white/80">清淨壇場，建立防護結界，開啟法界之門</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第二天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">發符懸幡 · 昭告十方</div>
                    <div className="text-white/80">發送法符召請聖眾，懸掛法幡昭告法會開始</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第三天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">請上堂 · 迎請聖眾</div>
                    <div className="text-white/80">恭請諸佛菩薩護法龍天蒞臨壇場</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第四天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">供上堂 · 供養聖眾</div>
                    <div className="text-white/80">以十種供養供養上堂諸佛菩薩</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第五天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">告赦 · 請赦亡靈</div>
                    <div className="text-white/80">向冥府請赦，赦免亡者罪業</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第六天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">請下堂·授戒·供下堂 · 超度眾生</div>
                    <div className="text-white/80">召請六道眾生，授予戒律，施食供養</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="w-24 text-center flex-shrink-0">
                    <div className="text-2xl font-bold">第七天</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl mb-2">圓滿供·圓滿香·送判·送聖 · 功德圓滿</div>
                    <div className="text-white/80">最後供養，焚香感恩，送判送聖，法會圓滿</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ritual Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {rituals.map((ritual, index) => (
                <Link
                  key={index}
                  href={ritual.href}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${ritual.color} p-6 text-white`}>
                    <div className="text-sm mb-2 opacity-90">{ritual.day}</div>
                    <h3 className="text-2xl font-bold mb-2">{ritual.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-[#263c47]/80 leading-relaxed mb-4">
                      {ritual.description}
                    </p>
                    <div className="text-[#d89b3e] group-hover:text-[#9e2125] transition-colors font-semibold">
                      了解詳情 →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Key Elements */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">儀軌的核心要素</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">請聖與送聖</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    水陸法會的核心是「請聖」和「送聖」。請上堂時恭請諸佛菩薩降臨，請下堂時召請六道眾生。法會結束時，再一一恭送回歸本位。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    這個過程體現了對聖眾的恭敬和對眾生的慈悲，同時也象徵著法會的莊嚴性和完整性。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">供養與施食</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    供養上堂聖眾，施食下堂眾生，這是水陸法會的兩大重點。供養表達恭敬和感恩，施食體現慈悲和平等。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    透過供養和施食，累積福德資糧，同時也幫助眾生獲得法益，離苦得樂。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">授戒與說法</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    幽冥戒是為六道眾生授予三皈五戒，讓他們成為佛弟子。同時在整個法會過程中，不斷為眾生說法開示。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    授戒和說法是真正的超度，讓眾生聽聞佛法，發菩提心，這才是究竟的解脫之道。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">懺悔與迴向</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    法會中多次帶領眾生懺悔業障，清淨身心。每個儀式結束後都要迴向，將功德迴向給法界眾生。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    懺悔能夠消除業障，迴向能夠擴大功德。這兩者是修行的重要法門。
                  </p>
                </div>
              </div>
            </div>

            {/* How to Participate */}
            <div className="bg-gradient-to-br from-[#d89b3e] to-[#b8821f] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">如何參與內壇儀軌？</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">外壇參與</h3>
                  <p className="leading-relaxed text-white/90">
                    信眾可以參加外壇的法會，如梁皇大懺、金剛密壇、華嚴壇等。這些壇場的功德與內壇相同，同樣殊勝。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">恭敬觀禮</h3>
                  <p className="leading-relaxed text-white/90">
                    雖然不能進入內壇，但可以在內壇外恭敬觀禮。看到法師莊嚴的儀軌，聽到梵唄的聲音，也能獲得加持。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">隨喜功德</h3>
                  <p className="leading-relaxed text-white/90">
                    可以隨喜護持水陸法會，出錢出力，功德無量。即使不能親自參與，隨喜的功德也同樣殊勝。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">發心迴向</h3>
                  <p className="leading-relaxed text-white/90">
                    在家中也可以為法會發心迴向，為參與法會的法師和信眾祈福，為接受超度的眾生迴向。心誠則靈，功德無邊。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                立即報名參加水陸法會
              </a>
            </div>
          </div>
        </div>
      </div>
    </AltarTemplate>
  );
}
