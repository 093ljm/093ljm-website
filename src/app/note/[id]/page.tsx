import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, User, ChevronLeft, Share2, Home } from 'lucide-react';

export default function NoteDetailPage({ params }: { params: { id: string } }) {
  // Sample article data - in real app, this would fetch from a database
  const article = {
    id: params.id,
    title: '2025年靈鷲山水陸空大法會日期公布',
    category: '法會資訊',
    date: '2024年10月15日',
    author: '編輯部',
    image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
    content: `
2025年靈鷲山水陸空大法會將於農曆十月初一至初七（國曆11月1日至11月7日）盛大舉行。這是靈鷲山一年一度最盛大的法會，誠摯邀請十方善信共襄盛舉，為自己、為家人、為一切眾生祈福。

## 法會時間與地點

**時間：** 2025年11月1日至11月7日（農曆十月初一至初七）
**地點：** 靈鷲山無生道場
**主法：** 心道法師

## 法會特色

本次水陸法會延續靈鷲山「尊重每一個生命，愛與和平」的精神，融合漢傳、南傳、藏傳佛教的精華，設立多個壇場：

### 內壇
由主法和尚率領內壇法師，進行七天十二個儀軌，從結界到送聖，每個環節都如法如儀，莊嚴殊勝。

### 外壇
- **梁皇大壇：** 禮拜梁皇寶懺，消災解厄
- **金剛密壇：** 修持金剛密法，降伏魔障
- **南傳羅漢壇：** 南傳法師主持，修習禪定
- **華嚴壇：** 誦持華嚴經，功德無量
- **藥師壇：** 修持藥師法門，祈求健康
- **地藏壇：** 超度先亡，報答親恩

## 報名方式

### 線上報名
即日起開放線上報名系統，可透過官網直接報名，並可選擇：
- 參加法會
- 立牌位（往生牌位、陽上牌位）
- 隨喜護持
- 擔任志工

### 現場報名
也可親自前往靈鷲山無生道場或各地分院報名。

## 護持方式

### 立牌位
為自己或家人立牌位，接受法會功德加持。往生牌位超度先亡，陽上牌位祈福消災。

### 隨喜供養
可隨喜護持法會各項開支，包括供品、齋飯、法器等。所有供養都將用於法會莊嚴，功德無量。

### 擔任志工
歡迎發心菩薩報名擔任志工，在服務中修行，在付出中成長。

## 功德利益

參加水陸法會，功德利益殊勝：

**對在世者：**
- 消災延壽，增福增慧
- 家庭和睦，事業順利
- 善根增長，道心堅固

**對往生者：**
- 罪業消除，離苦得樂
- 超生善道，往生淨土
- 蓮品增上，早證菩提

**對一切眾生：**
- 普度六道，平等救度
- 化解冤結，廣結善緣
- 同證菩提，共成佛道

## 注意事項

1. 請提前報名，以便安排座位和牌位
2. 法會期間請著樸素服裝，保持肅靜
3. 攜帶環保餐具，響應環保
4. 遵守道場規定，尊重三寶

## 聯絡方式

**電話：** 02-1234-5678
**Email：** shuilu@ljm.org.tw
**地址：** 新北市貢寮區福隆里香蘭街7-1號

誠摯邀請十方善信蒞臨參加，共同成就這場殊勝法會！
    `
  };

  const relatedArticles = [
    {
      id: 'online-registration-open',
      title: '線上報名系統正式啟用',
      category: '法會資訊',
      date: '2024年10月10日'
    },
    {
      id: 'preliminary-practice-notice',
      title: '五場先修法會時間表',
      category: '五場先修',
      date: '2024年9月28日'
    },
    {
      id: 'volunteer-recruitment',
      title: '誠徵法會志工',
      category: '即時新聞',
      date: '2024年9月5日'
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
                href="/note"
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
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm">
                  {article.category}
                </span>
                <div className="flex items-center gap-2 text-[#263c47]/60">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#263c47]/60">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#263c47] mb-6">
                {article.title}
              </h1>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 pb-6 border-b border-[#263c47]/10">
                <span className="text-[#263c47]/60">分享：</span>
                <button className="w-10 h-10 bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative h-[400px] md:h-[600px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-[#263c47] mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-bold text-[#263c47] mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={index} className="font-bold text-[#263c47] my-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-[#263c47]/80 leading-relaxed my-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-[#263c47]/80 leading-relaxed my-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#9e2125] to-[#7e1115] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">立即報名參加</h3>
              <p className="text-lg mb-6">
                不要錯過這場殊勝法會，為自己和家人累積功德
              </p>
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#9e2125] hover:bg-[#efeeee] px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                線上報名
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#263c47] mb-6">相關文章</h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/note/${related.id}`}
                    className="block p-6 bg-[#efeeee] rounded-lg hover:bg-[#d89b3e] hover:text-white transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm opacity-80">{related.category}</span>
                      <span className="text-sm opacity-60">{related.date}</span>
                    </div>
                    <h4 className="font-bold text-lg group-hover:text-white">
                      {related.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
