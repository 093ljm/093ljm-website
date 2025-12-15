import AltarTemplate from '@/components/AltarTemplate';

export default function SmallAltar3Page() {
  return (
    <AltarTemplate
      title="淨土壇"
      subtitle="念佛修持 求生淨土"
      breadcrumb={['首頁', '壇場介紹', '淨土壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">淨土壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              淨土壇專修淨土法門，以念佛為主要修持方式，祈願往生西方極樂世界。淨土法門三根普被，利鈍全收，是最契合現代眾生根機的法門。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              透過持名念佛、觀想念佛、實相念佛等方式，與阿彌陀佛相應，蒙佛接引，往生淨土，一生成就。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">淨土法門特色</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">易行道</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  只要至誠懇切念佛，即可蒙佛接引，不需複雜修持，適合各種根機。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">帶業往生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  可帶業往生極樂世界，在彌陀願力加持下繼續修行，不退轉。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">一生成就</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  往生極樂後，在無量壽、無量光中修行，必定證得菩提。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">現世利益</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  念佛能消業障、增福慧，蒙佛菩薩護佑，現世安樂，臨終往生。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">念佛方法</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">持名念佛</h3>
                <p className="text-[#263c47]/80">
                  恭敬持念「南無阿彌陀佛」聖號，攝心專注，綿綿不斷。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">觀想念佛</h3>
                <p className="text-[#263c47]/80">
                  觀想阿彌陀佛相好光明，極樂世界莊嚴清淨。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">實相念佛</h3>
                <p className="text-[#263c47]/80">
                  體悟自性彌陀、唯心淨土，證得實相理體。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">繞佛念佛</h3>
                <p className="text-[#263c47]/80">
                  邊繞佛邊念佛，動靜結合，身心專注於佛號。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">極樂世界殊勝</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">無有眾苦，但受諸樂</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">壽命無量，可盡修行</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">親近彌陀，聞法開悟</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">諸上善人聚會一處</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">不退轉，必成佛道</span>
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
              護持淨土壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
