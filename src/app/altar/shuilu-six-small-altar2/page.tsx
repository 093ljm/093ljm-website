import AltarTemplate from '@/components/AltarTemplate';

export default function SmallAltar2Page() {
  return (
    <AltarTemplate
      title="法華壇"
      subtitle="持誦法華經 開顯佛性"
      breadcrumb={['首頁', '壇場介紹', '法華壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">法華壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              法華壇主要誦持《妙法蓮華經》，此經為佛陀晚年所說，開顯「一乘佛法」的究竟義，宣示一切眾生皆有佛性，皆能成佛。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              法華經被譽為「經中之妙」，以種種譬喻說明佛法的微妙，啟發眾生的佛性，是大乘佛教最重要的經典之一。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">法華經的要義</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">開權顯實</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  開啟方便權教，顯示一乘實相，一切法門皆為引導眾生成佛。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">一切眾生皆可成佛</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  不論聲聞、緣覺、菩薩，皆能成佛，龍女八歲成佛即是明證。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">觀音菩薩普門示現</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  觀世音菩薩以三十二應身救度眾生，千處祈求千處應。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">著名譬喻</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">火宅喻</h3>
                <p className="text-[#263c47]/80">
                  三界如火宅，佛以方便法門引導眾生離苦得樂。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">窮子喻</h3>
                <p className="text-[#263c47]/80">
                  眾生本具佛性，卻不自知，如窮子不識慈父。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">化城喻</h3>
                <p className="text-[#263c47]/80">
                  佛設化城讓眾生暫歇，最終引導至寶所。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">醫子喻</h3>
                <p className="text-[#263c47]/80">
                  佛如良醫，以智慧方便救治眾生病苦。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">開顯佛性，了知成佛可能</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">堅定信心，勇猛精進</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">領受觀音菩薩護佑</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">功德廣大，福慧增長</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持法華壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
