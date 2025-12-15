import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Quote, Calendar, User, Home } from 'lucide-react';

export default function WitnessPage() {
  const categories = ['全部', '親身體驗', '感應事蹟', '超度見證', '功德迴向', '志工分享'];

  const testimonials = [
    {
      id: 'miracle-healing',
      title: '母親病情奇蹟好轉',
      category: '感應事蹟',
      author: '陳小姐',
      date: '2024年9月15日',
      excerpt: '我的母親生病多年，醫生都說沒有希望了。在師父的建議下，我為母親報名參加水陸法會，立了牌位。法會期間，我每天虔誠念佛迴向。沒想到法會結束後，母親的病情竟然奇蹟般地好轉...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: true
    },
    {
      id: 'ancestor-liberation',
      title: '夢見祖先獲得超度',
      category: '超度見證',
      author: '林先生',
      date: '2024年8月20日',
      excerpt: '參加水陸法會前，我常常夢見過世的祖父。夢中他總是神情憂鬱，像是有什麼心事。法會期間，我為祖父立了牌位，誠心為他念佛。法會第五天晚上，我夢見祖父面帶笑容，向我揮手告別...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'business-turnaround',
      title: '事業轉機，感恩三寶',
      category: '功德迴向',
      author: '王先生',
      date: '2024年7月10日',
      excerpt: '我的生意一直很不順利，虧損累累，幾乎要倒閉。去年參加了水陸法會，為自己和公司立了牌位，並隨喜護持。法會後不久，生意竟然出現轉機，接到一個大訂單，公司起死回生...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'volunteer-growth',
      title: '在服務中找到自己',
      category: '志工分享',
      author: '黃小姐',
      date: '2024年6月25日',
      excerpt: '剛開始當志工時，只是想做點好事。但在水陸法會的服務過程中，我漸漸體會到什麼是「無我」，什麼是「慈悲」。看到那麼多人虔誠地為眾生祈福，我深受感動...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'family-harmony',
      title: '家庭關係改善',
      category: '親身體驗',
      author: '張太太',
      date: '2024年5月18日',
      excerpt: '我和先生的關係一直很緊張，幾乎到了要離婚的地步。朋友建議我參加水陸法會，為我們的婚姻祈福。法會期間，我認真反省自己的問題，並為先生迴向功德。法會後，我們的關係奇蹟般地改善了...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'child-recovery',
      title: '孩子從自閉中走出',
      category: '感應事蹟',
      author: '劉女士',
      date: '2024年4月30日',
      excerpt: '我的兒子從小就有自閉傾向，不愛說話，也不喜歡與人接觸。連續三年參加水陸法會後，兒子逐漸開始說話，也願意和其他小朋友玩耍。醫生都說這是奇蹟...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'debt-resolution',
      title: '冤親債主化解',
      category: '超度見證',
      author: '吳先生',
      date: '2024年3月15日',
      excerpt: '我一直覺得身上有冤親債主跟著，經常做惡夢，身體也不好。師父建議我參加水陸法會，為冤親債主立牌位。法會後，惡夢沒有了，身體也漸漸好轉...',
      image: 'https://ext.same-assets.com/972454301/3753246231.jpeg',
      featured: false
    },
    {
      id: 'spiritual-growth',
      title: '心靈的成長',
      category: '親身體驗',
      author: '許小姐',
      date: '2024年2月28日',
      excerpt: '參加水陸法會讓我對佛法有了更深的體悟。七天的法會，就像一次心靈的洗禮。我學會了慈悲、學會了感恩、學會了放下。這比任何物質的收穫都更珍貴...',
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
          alt="見證分享"
          fill
          className="object-cover opacity-40"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <Quote className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">見證分享</h1>
            <p className="text-xl md:text-2xl">
              真實的體驗，感人的故事
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

      {/* Featured Testimonial */}
      {testimonials.filter(t => t.featured).map((item) => (
        <section key={item.id} className="bg-[#efeeee] py-12">
          <div className="container mx-auto px-4">
            <Link
              href={`/witness/${item.id}`}
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
                    精選見證
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-[#d89b3e] mb-4" />
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#d89b3e] text-white px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-4 group-hover:text-[#d89b3e] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-[#263c47]/80 text-lg leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-[#263c47]/60">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {/* Testimonials Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.filter(t => !t.featured).map((item) => (
                <Link
                  key={item.id}
                  href={`/witness/${item.id}`}
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
                    <div className="absolute top-4 right-4">
                      <Quote className="w-10 h-10 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#efeeee] text-[#263c47] px-3 py-1 rounded-full text-xs">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#263c47] mb-3 group-hover:text-[#d89b3e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#263c47]/70 text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-[#263c47]/60 text-xs">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white text-[#263c47] px-8 py-3 rounded-full font-semibold transition-colors">
                載入更多見證
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="bg-gradient-to-br from-[#d89b3e] to-[#b8821f] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">分享您的見證</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            如果您也有參加水陸法會的感應或體驗，歡迎與我們分享，讓更多人了解佛法的殊勝
          </p>
          <button className="bg-white text-[#d89b3e] hover:bg-[#efeeee] px-10 py-4 rounded-full text-lg font-semibold transition-colors">
            提交見證
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#efeeee] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263c47] mb-6">
            親自體驗水陸法會的殊勝
          </h2>
          <p className="text-lg text-[#263c47]/80 mb-8 max-w-2xl mx-auto">
            看了這麼多見證，是否也想親身體驗？歡迎報名參加水陸法會
          </p>
          <a
            href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-12 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            立即報名
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
