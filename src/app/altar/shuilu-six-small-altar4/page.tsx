import AltarTemplate from '@/components/AltarTemplate';

export default function SmallAltar4Page() {
  return (
    <AltarTemplate
      title="楞嚴壇"
      subtitle="誦持楞嚴咒 破除邪魔"
      breadcrumb={['首頁', '壇場介紹', '楞嚴壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">楞嚴壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              楞嚴壇主要誦持《大佛頂首楞嚴經》及楞嚴咒，此經被譽為「開悟楞嚴」，闡述如來藏妙真如性，教導修行者如何破除妄想，證得真心。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              楞嚴咒是佛教中最長、最靈驗的咒語之一，能破除一切魔障，護持正法，消災解厄，功德廣大無邊。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">楞嚴經的要義</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">破妄顯真</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  破除七處征心、八還辨見等妄想，顯示真如本性，明心見性。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">如來藏思想</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  闡述如來藏妙真如性，一切眾生皆具如來智慧德相。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">二十五圓通</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  介紹二十五位菩薩的修行法門，以觀音耳根圓通最為殊勝。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">五十陰魔</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  詳述修行過程中可能遇到的五十種魔境，教導如何辨識與對治。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">楞嚴咒的威力</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              楞嚴咒是佛頂光明中所流露的咒語，包含五會，共427句，2620字。持誦楞嚴咒能得諸佛菩薩、護法龍天的護持，破除一切邪魔外道。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">護持正法</h3>
                <p className="text-[#263c47]/80">
                  楞嚴咒住世，正法就住世，是佛教的重要護法咒語。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">破除魔障</h3>
                <p className="text-[#263c47]/80">
                  能降伏天魔外道，破除一切邪術，保護修行者。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">消災解厄</h3>
                <p className="text-[#263c47]/80">
                  消除災難，化解厄運，保佑平安吉祥。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">開智慧</h3>
                <p className="text-[#263c47]/80">
                  增長智慧，破除無明，證得菩提。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">護持正法久住，魔不能侵</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">消除業障，破除無明</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">增長智慧，明心見性</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">得諸佛護持，吉祥平安</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">速證菩提，成就佛果</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">虛雲老和尚開示</h3>
            <p className="leading-relaxed italic">
              「楞嚴經是佛教的骨髓，楞嚴咒是佛教的命根。楞嚴咒在，佛法就在；楞嚴咒滅，佛法就滅。持誦楞嚴咒，就是護持正法，功德無量。」
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持楞嚴壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
