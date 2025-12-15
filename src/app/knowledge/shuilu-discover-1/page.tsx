import AltarTemplate from '@/components/AltarTemplate';
import { Play, FileText, Calendar, User } from 'lucide-react';

export default function ShuiluDiscover1Page() {
  const videos = [
    {
      title: '心道法師：水陸法會的慈悲精神',
      description: '心道法師開示水陸法會如何體現佛教的慈悲平等精神，普度六道眾生',
      duration: '45:32',
      date: '2024年10月15日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    },
    {
      title: '內壇儀軌詳解：結界的重要性',
      description: '主法和尚詳細解說結界儀軌的每個步驟和深層意義',
      duration: '32:18',
      date: '2024年9月20日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    },
    {
      title: '如何參與水陸法會獲得最大利益',
      description: '法師指導信眾如何在水陸法會中正確發心、修持',
      duration: '28:45',
      date: '2024年8月10日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    },
    {
      title: '幽冥戒的意義與修持',
      description: '深入講解為亡者授戒的意義，以及在世者如何守戒',
      duration: '38:20',
      date: '2024年7月25日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    },
    {
      title: '放燄口施食的功德',
      description: '瑜伽焰口的起源、儀軌和功德利益完整解說',
      duration: '42:15',
      date: '2024年6月18日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    },
    {
      title: '齋天供養諸天護法',
      description: '齋天儀式的意義，如何祈求諸天護持',
      duration: '35:40',
      date: '2024年5月30日',
      thumbnail: 'https://ext.same-assets.com/972454301/3753246231.jpeg'
    }
  ];

  const articles = [
    {
      title: '水陸法會的歷史淵源',
      excerpt: '水陸法會起源於南北朝時期，梁武帝因夢而創辦。經過歷代祖師的完善，成為漢傳佛教最隆重的法會...',
      author: '釋心道',
      date: '2024年10月20日',
      category: '歷史文化'
    },
    {
      title: '二十四席的深層意義',
      excerpt: '水陸法會設立二十四席，上堂十席供養諸天，下堂十四席超度六道。每一席都有其獨特的意義和功能...',
      author: '法師開示',
      date: '2024年9月25日',
      category: '儀軌解說'
    },
    {
      title: '如何為先人立牌位',
      excerpt: '為先人立牌位是孝道的實踐。牌位要寫清楚亡者的姓名、生辰、忌日等資料，並要註明陽上眷屬...',
      author: '知客法師',
      date: '2024年8月15日',
      category: '實用指南'
    },
    {
      title: '水陸法會與淨土宗的關係',
      excerpt: '水陸法會雖然是綜合性的法會，但與淨土宗有深厚的淵源。法會中多次念佛、持咒，迴向往生淨土...',
      author: '淨土法師',
      date: '2024年7月30日',
      category: '教理探討'
    },
    {
      title: '參加水陸法會的功德利益',
      excerpt: '參加水陸法會能夠消災延壽、增福增慧、超度祖先、利益眾生。這些功德不是虛妄的，而是有經典依據的...',
      author: '弘法法師',
      date: '2024年6月22日',
      category: '功德利益'
    },
    {
      title: '靈鷲山水陸法會的特色',
      excerpt: '靈鷲山水陸法會融合了漢傳、南傳、藏傳佛教的精華，體現了心道法師「尊重每一個生命，愛與和平」的理念...',
      author: '釋心道',
      date: '2024年5月28日',
      category: '特色介紹'
    }
  ];

  return (
    <AltarTemplate
      title="法師說法"
      subtitle="深入了解水陸法會的精神與修持"
      breadcrumb={['首頁', '水陸知識', '法師說法']}
    >
      <div className="bg-[#efeeee]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">關於法師說法</h2>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                法師說法是深入了解水陸法會的重要途徑。透過法師的開示，我們可以更深刻地理解每個儀軌的意義，掌握正確的修持方法，獲得更大的法益。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed">
                這裡收錄了靈鷲山心道法師及諸位法師的開示影片和文章，內容涵蓋水陸法會的歷史、儀軌、精神、功德等各個方面。建議您在參加法會前後觀看學習，能夠更好地理解和實踐。
              </p>
            </div>

            {/* Video Section */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Play className="w-8 h-8 text-[#d89b3e]" />
                <h2 className="text-3xl font-bold text-[#263c47]">影音開示</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
                  >
                    <div className="relative h-48 bg-[#263c47] overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-[#d89b3e] group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-[#263c47] group-hover:text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[#263c47] text-lg mb-2 group-hover:text-[#d89b3e] transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-[#263c47]/70 text-sm mb-4 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#263c47]/60 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Article Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-[#d89b3e]" />
                <h2 className="text-3xl font-bold text-[#263c47]">文章開示</h2>
              </div>

              <div className="space-y-6">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="hidden md:block w-24 h-24 bg-gradient-to-br from-[#d89b3e] to-[#b8821f] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <FileText className="w-12 h-12" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#d89b3e] text-white px-3 py-1 rounded-full text-sm">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#263c47] mb-3 group-hover:text-[#d89b3e] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-[#263c47]/80 leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-[#263c47]/60 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics Section */}
            <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6">熱門主題</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">初學者必看</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>水陸法會簡介</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>如何參加水陸法會</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>立牌位的方法</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>法會期間的注意事項</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">深入研究</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>水陸法會的歷史發展</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>儀軌的深層意義</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>佛教超度的原理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>功德迴向的奧秘</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">實修指導</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>如何發菩提心</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>供養的正確方法</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>持咒的要領</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>迴向的正確方式</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">常見問題</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>水陸法會的功德有多大？</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>一定要七天都參加嗎？</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>可以為在世者立牌位嗎？</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#d89b3e]">●</span>
                      <span>功德可以迴向給多人嗎？</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#263c47] mb-4">訂閱最新開示</h2>
              <p className="text-[#263c47]/80 mb-6">
                訂閱我們的頻道，第一時間獲得最新的法師開示影片和文章
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <input
                  type="email"
                  placeholder="請輸入您的電子郵件"
                  className="px-6 py-3 border-2 border-[#263c47]/20 rounded-full w-full md:w-96 focus:outline-none focus:border-[#d89b3e]"
                />
                <button className="bg-[#d89b3e] hover:bg-[#b8821f] text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
                  訂閱
                </button>
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
