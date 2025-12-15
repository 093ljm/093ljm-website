import AltarTemplate from '@/components/AltarTemplate';

export default function SmallAltar5Page() {
  return (
    <AltarTemplate
      title="諸經壇"
      subtitle="恭誦諸經 廣結善緣"
      breadcrumb={['首頁', '壇場介紹', '諸經壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">諸經壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              諸經壇恭誦多部佛教經典，包括《金剛經》、《心經》、《地藏經》、《普門品》等，讓信眾有機會接觸不同的佛法智慧，廣結善緣，增長福慧。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              每部經典都有其獨特的教法與功德，透過誦經能夠淨化身心，開啟智慧，與諸佛菩薩相應。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">主要誦持經典</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">《金剛般若波羅蜜經》</h3>
                <p className="text-[#263c47]/80 leading-relaxed mb-2">
                  簡稱《金剛經》，闡述空性智慧，教導修行者破除我執法執，證得般若智慧。
                </p>
                <p className="text-sm text-[#263c47]/60">
                  功德：開智慧、破煩惱、消業障、證菩提
                </p>
              </div>

              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">《般若波羅蜜多心經》</h3>
                <p className="text-[#263c47]/80 leading-relaxed mb-2">
                  簡稱《心經》，以260字闡述般若精髓，「色即是空，空即是色」是核心要義。
                </p>
                <p className="text-sm text-[#263c47]/60">
                  功德：破除煩惱、照見五蘊皆空、證得解脫
                </p>
              </div>

              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">《地藏菩薩本願經》</h3>
                <p className="text-[#263c47]/80 leading-relaxed mb-2">
                  闡述地藏菩薩「地獄不空，誓不成佛」的大願，是超度亡靈的重要經典。
                </p>
                <p className="text-sm text-[#263c47]/60">
                  功德：超度亡靈、消除業障、增長福報、孝親報恩
                </p>
              </div>

              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">《觀世音菩薩普門品》</h3>
                <p className="text-[#263c47]/80 leading-relaxed mb-2">
                  出自《法華經》，描述觀音菩薩尋聲救苦、千處祈求千處應的慈悲願力。
                </p>
                <p className="text-sm text-[#263c47]/60">
                  功德：消災解厄、逢凶化吉、求子得子、有求必應
                </p>
              </div>

              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">《阿彌陀經》</h3>
                <p className="text-[#263c47]/80 leading-relaxed mb-2">
                  介紹西方極樂世界的莊嚴與殊勝，勸導眾生發願往生。
                </p>
                <p className="text-sm text-[#263c47]/60">
                  功德：往生淨土、蒙佛接引、不退轉、成佛道
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">誦經的利益</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#263c47] mb-4">現世利益</h3>
                <ul className="space-y-2 text-[#263c47]/80">
                  <li>• 淨化身心，安定情緒</li>
                  <li>• 消除業障，增長福慧</li>
                  <li>• 開啟智慧，明辨是非</li>
                  <li>• 得佛護佑，逢凶化吉</li>
                  <li>• 家庭和諧，事業順利</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#263c47] mb-4">究竟利益</h3>
                <ul className="space-y-2 text-[#263c47]/80">
                  <li>• 累積福慧資糧</li>
                  <li>• 破除煩惱執著</li>
                  <li>• 證得般若智慧</li>
                  <li>• 成就菩提道果</li>
                  <li>• 利益法界眾生</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">如何誦經</h2>
            <div className="bg-[#efeeee] p-6 rounded-lg">
              <ol className="space-y-3 text-[#263c47]/80">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#d89b3e]">1.</span>
                  <span>淨手淨口，端正威儀</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#d89b3e]">2.</span>
                  <span>至誠恭敬，專心一志</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#d89b3e]">3.</span>
                  <span>字字分明，不急不緩</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#d89b3e]">4.</span>
                  <span>思惟經義，深入法海</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#d89b3e]">5.</span>
                  <span>發願迴向，利益眾生</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持諸經壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
