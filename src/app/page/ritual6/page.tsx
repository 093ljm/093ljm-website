import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual6Page() {
  return (
    <RitualTemplate
      title="請下堂"
      day="第六天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">請下堂儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              請下堂是水陸法會第六天的重要儀式，主要目的是迎請六道眾生，特別是幽冥界的眾生進入壇場接受超度。這個儀式展現了佛法慈悲平等的精神，不分貴賤、不論善惡，一律平等對待，普施甘露法雨。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              下堂是指六道眾生，包括地獄、餓鬼、畜生、阿修羅、人、天等六道。主法和尚以大悲心，召請這些在輪迴中受苦的眾生，讓他們有機會聽聞佛法，獲得解脫。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">召請對象</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">地獄道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  受極大苦報的眾生，因惡業墮入地獄，召請他們出離苦海
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">餓鬼道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  長期飢渴的眾生，因慳貪墮入餓鬼道，給予甘露飲食
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">畜生道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  愚癡無知的眾生，困於畜生道中，開啟智慧之光
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">阿修羅道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  瞋恨心重的眾生，常處鬥爭之中，令其心得安寧
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">人道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  苦樂參半的眾生，包括歷代祖先、冤親債主等
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">天道眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  享受福報的眾生，雖然快樂但福盡仍墮，需聞法修行
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">儀軌流程</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">香讚</h4>
                  <p className="text-[#263c47]/80">以香讚開始，焚香供養，昭告法界</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">宣讀召請文</h4>
                  <p className="text-[#263c47]/80">主法和尚宣讀召請文，逐一召請六道眾生</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">持咒加持</h4>
                  <p className="text-[#263c47]/80">持誦往生咒、大悲咒等，加持眾生</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">開啟法門</h4>
                  <p className="text-[#263c47]/80">打開壇場法門，迎請眾生入壇</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">設座安位</h4>
                  <p className="text-[#263c47]/80">為眾生設座安位，令其安住壇場</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">慈悲平等的精神</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              請下堂最能體現佛法的慈悲平等精神。無論是生前的身分地位、善惡業報，在法會中都一律平等對待。這種無分別的大慈悲，正是佛菩薩救度眾生的本懷。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              即使是造作極重惡業的眾生，只要能進入壇場，聽聞佛法，發起懺悔之心，都有機會獲得超度。這給予所有眾生希望，也展現了佛法的究竟慈悲。
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">如何參與請下堂</h3>
            <p className="leading-relaxed mb-4">
              參與請下堂儀式時，應以恭敬心、慈悲心對待一切眾生。可以觀想自己的歷代祖先、冤親債主都在壇場中接受超度，為他們祈福迴向。
            </p>
            <p className="leading-relaxed mb-4">
              在法師召請時，可以隨喜稱念佛號，以自己的修行功德迴向給這些受苦的眾生，幫助他們早日離苦得樂。
            </p>
            <p className="leading-relaxed">
              參與者的虔誠心念，能夠增強法會的功德力，讓更多眾生獲得利益。
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持水陸法會
            </a>
          </div>
        </div>
      </section>
    </RitualTemplate>
  );
}
