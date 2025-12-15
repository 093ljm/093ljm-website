import AltarTemplate from '@/components/AltarTemplate';

export default function SmallAltar1Page() {
  return (
    <AltarTemplate
      title="華嚴壇"
      subtitle="誦念華嚴經 圓滿法界"
      breadcrumb={['首頁', '壇場介紹', '華嚴壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">華嚴壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              華嚴壇主要誦持《大方廣佛華嚴經》，此經被譽為「經中之王」，闡述佛陀成道後在菩提樹下所說的第一部大法，展現諸佛菩薩不可思議的境界與願行。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              華嚴經義理深邃，境界廣大，描述重重無盡的法界，一即一切、一切即一的圓融思想，為大乘佛教的重要經典。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">華嚴經的殊勝</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">法界圓融</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  華嚴經闡述法界緣起、事事無礙的境界，一切法相互融攝，重重無盡。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">普賢行願</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  以普賢菩薩十大願王為修行綱領，發廣大心，行菩薩道，利益眾生。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">善財童子五十三參</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  善財童子參訪五十三位善知識的故事，啟發學人勇猛精進，求取菩提。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">開啟智慧，了悟法界實相</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">發菩提心，行普賢願</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">消除業障，增長福慧</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">圓滿功德，成就佛道</span>
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
              護持華嚴壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
