import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Calendar, User, ChevronLeft, Heart, Home } from 'lucide-react';

export default function WitnessDetailPage({ params }: { params: { id: string } }) {
  // Sample witness data - in real app, this would fetch from a database
  const witness = {
    id: params.id,
    title: '母親病情奇蹟好轉',
    category: '感應事蹟',
    author: '陳小姐',
    location: '台北',
    date: '2024年9月15日',
    image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
    content: `
## 背景

我是一個平凡的上班族，有一個幸福的小家庭。但去年開始，家裡遭遇了前所未有的困境——我的母親被診斷出罹患重病。

醫生告訴我們，母親的病情已經很嚴重了，治癒的希望非常渺茫。聽到這個消息，我的世界彷彿崩塌了。母親含辛茹苦把我養大，現在我還沒來得及好好孝順她，她卻要離開我了。

## 接觸水陸法會

就在我最絕望的時候，一位學佛的朋友建議我去靈鷲山參加水陸法會。她說，水陸法會是佛教中最殊勝的法會，能夠消災解厄，或許對母親的病情有幫助。

雖然我對佛教了解不多，但在那種情況下，我願意嘗試任何可能有幫助的事情。於是我聯絡了靈鷲山，為母親報名參加水陸法會，並立了牌位。

## 法會期間的虔誠修持

水陸法會為期七天，我每天都前往道場參加。雖然很多儀軌我都不太懂，但我就是跟著法師們一起念佛、持咒、拜懺。

每天早上，我都會在佛前為母親祈禱。我告訴諸佛菩薩，如果真的有靈驗，請讓母親的病好起來。我願意用我所有的功德來換取母親的健康。

法會期間，我也開始反省自己過去對母親的態度。我常常因為工作忙碌而忽略她，甚至有時會對她不耐煩。現在想起來，真是慚愧萬分。我在佛前懺悔，發願以後一定要好好孝順母親。

## 奇蹟出現

法會進行到第五天，醫院突然打電話給我，說母親的病情有了變化，要我趕快過去。我的心一下子提到了嗓子眼，以為是病情惡化了。

沒想到，醫生告訴我一個令人難以置信的消息——母親的各項指標都在好轉！原本已經擴散的病灶，竟然開始縮小了。醫生說這簡直是奇蹟，他從醫這麼多年，從沒見過這種情況。

我當場淚如雨下。我知道，這一定是諸佛菩薩的慈悲加持，是水陸法會的功德在起作用。

## 法會圓滿後

法會圓滿結束後，我繼續每天為母親念佛迴向。母親的病情持續好轉，一個月後，醫生宣布她可以出院了。現在，母親已經完全康復，每天都精神奕奕的。

這次經歷徹底改變了我對佛法的看法。我開始認真學佛，也常常去道場當志工。我深深體會到，佛法不是迷信，而是真實不虛的。

## 感恩的心

我要感謝靈鷲山心道法師，感謝所有主法的法師們，感謝每一位參與法會的志工和信眾。沒有你們，就沒有這場殊勝的法會；沒有這場法會，我的母親可能就救不回來了。

我也要感謝諸佛菩薩的慈悲加持。雖然我只是一個平凡的人，但您們沒有放棄我，還是救了我的母親。這份恩德，我一輩子都不會忘記。

## 給大家的建議

如果您也遇到了困難，不要放棄希望。誠心參加水陸法會，虔誠念佛迴向，一定會有感應的。

但最重要的是，要有真誠的心。不是為了求什麼才去學佛，而是真心想要修行，想要利益眾生。當你發出這樣的心時，諸佛菩薩一定會加持你的。

## 我的發願

現在，我已經成為靈鷲山的志工，每年都會參加水陸法會。我發願要盡自己所能，幫助更多需要幫助的人。也希望透過我的親身經歷，讓更多人了解佛法的殊勝，了解水陸法會的功德。

願一切眾生都能離苦得樂，願諸佛菩薩的慈悲光明遍照世界每一個角落。

南無阿彌陀佛！🙏
    `
  };

  const relatedWitnesses = [
    {
      id: 'ancestor-liberation',
      title: '夢見祖先獲得超度',
      category: '超度見證',
      author: '林先生'
    },
    {
      id: 'business-turnaround',
      title: '事業轉機，感恩三寶',
      category: '功德迴向',
      author: '王先生'
    },
    {
      id: 'child-recovery',
      title: '孩子從自閉中走出',
      category: '感應事蹟',
      author: '劉女士'
    }
  ];

  return (
    <main className="min-h-screen bg-[#efeeee]">
      <Header />

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <div className="flex gap-4 mb-8">
              <Link
                href="/witness"
                className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>返回列表</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                <span>返回首頁</span>
              </Link>
            </div>

            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <Quote className="w-16 h-16 text-[#d89b3e] mb-6" />

              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm">
                  {witness.category}
                </span>
                <div className="flex items-center gap-2 text-[#263c47]/60">
                  <User className="w-4 h-4" />
                  <span>{witness.author}</span>
                </div>
                <div className="flex items-center gap-2 text-[#263c47]/60">
                  <Calendar className="w-4 h-4" />
                  <span>{witness.date}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#263c47] mb-4">
                {witness.title}
              </h1>

              <p className="text-[#263c47]/60 italic">
                ——來自{witness.location}的真實見證
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={witness.image}
                  alt={witness.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <Quote className="w-12 h-12 mb-4 opacity-80" />
                  <p className="text-2xl font-bold">
                    感恩諸佛菩薩慈悲加持
                  </p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                {witness.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-[#263c47] mt-8 mb-4 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-[#d89b3e]" />
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-[#263c47]/80 leading-relaxed text-lg my-6">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-gradient-to-br from-[#d89b3e] to-[#b8821f] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <User className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold">分享者：{witness.author}</h3>
                  <p className="opacity-90">{witness.location}</p>
                </div>
              </div>
              <p className="leading-relaxed">
                「我希望透過分享我的親身經歷，讓更多人了解佛法的殊勝，了解水陸法會的功德。如果您也遇到困難，請不要放棄希望，誠心念佛，一定會有感應的。」
              </p>
            </div>

            {/* Encouragement */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#263c47] mb-4">
                您也想分享見證嗎？
              </h3>
              <p className="text-[#263c47]/80 mb-6 max-w-2xl mx-auto">
                如果您也有參加水陸法會的感應或體驗，歡迎與我們分享。您的故事可能會幫助到正在困境中的人，給予他們希望和力量。
              </p>
              <button className="bg-[#d89b3e] hover:bg-[#b8821f] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors">
                提交您的見證
              </button>
            </div>

            {/* Related Witnesses */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-bold text-[#263c47] mb-6">其他見證</h3>
              <div className="space-y-4">
                {relatedWitnesses.map((related) => (
                  <Link
                    key={related.id}
                    href={`/witness/${related.id}`}
                    className="block p-6 bg-[#efeeee] rounded-lg hover:bg-[#d89b3e] hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Quote className="w-5 h-5 opacity-60" />
                          <span className="text-sm opacity-80">{related.category}</span>
                        </div>
                        <h4 className="font-bold text-lg mb-1">
                          {related.title}
                        </h4>
                        <p className="text-sm opacity-80">分享者：{related.author}</p>
                      </div>
                      <ChevronLeft className="w-6 h-6 rotate-180 opacity-60 group-hover:opacity-100" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#9e2125] to-[#7e1115] text-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">體驗水陸法會的殊勝</h3>
              <p className="text-lg mb-6">
                親自參加，感受諸佛菩薩的慈悲加持
              </p>
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#9e2125] hover:bg-[#efeeee] px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                立即報名參加
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
