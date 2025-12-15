import AltarTemplate from '@/components/AltarTemplate';

export default function InnerAltarPage() {
  return (
    <AltarTemplate
      title="內壇"
      subtitle="水陸法會之核心"
      breadcrumb={['首頁', '壇場介紹', '內壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">內壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              內壇是水陸法會的核心，又稱「正表」，為整個法會最重要的壇場。內壇儀軌莊嚴隆重，主要進行召請諸佛菩薩、歷代祖師、六道群靈等法界眾生，並以飲食、法味供養，使其離苦得樂。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              內壇法事從結界開始，經過七天六夜的儀軌，包含請上堂、供上堂、告赦、請下堂、供下堂、圓滿供等重要環節，最後以送聖圓滿結束。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">內壇功能</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">召請法界眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  透過法師如法召請，迎請諸佛菩薩、護法龍天、歷代祖師、六道群靈等法界眾生蒞臨壇場，接受供養。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">上供下施</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  上供諸佛菩薩，下施六道眾生，以清淨飲食、法味甘露供養，令其身心飽滿，離苦得樂。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">超度解脫</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  為亡靈說法、授戒、超度，幫助其解脫輪迴之苦，往生善道或淨土。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">功德迴向</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  將法會功德迴向法界眾生、國泰民安、世界和平，冥陽兩利，功德圓滿。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">內壇佈置</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              內壇佈置極為莊嚴，正中央設有主壇，供奉諸佛菩薩聖像。壇場四周設有上堂、下堂等席位，每一席位都有其特定的意義與功能。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">主壇：供奉三寶佛、諸大菩薩</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">上堂：諸佛菩薩、護法龍天席位</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">下堂：六道眾生席位</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">供養桌：陳設各式供品、燈燭、香花</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">參與方式</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              內壇法事由受過專業訓練的法師主持，一般信眾可在外壇參與共修，或透過設立牌位、供養等方式護持內壇法事。
            </p>
            <div className="bg-[#efeeee] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#263c47] mb-4">護持項目</h3>
              <ul className="space-y-2 text-[#263c47]/80">
                <li>• 設立超度牌位或祈福牌位</li>
                <li>• 供養內壇法事</li>
                <li>• 護持壇場佈置與供品</li>
                <li>• 隨喜功德</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持內壇法事
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
