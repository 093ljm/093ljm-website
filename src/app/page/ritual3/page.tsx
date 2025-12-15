import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual3Page() {
  return (
    <RitualTemplate
      title="請上堂"
      day="第三天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">請上堂儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              請上堂是水陸法會中極為莊嚴隆重的儀式，恭請諸佛菩薩、聲聞緣覺、歷代祖師等聖眾降臨壇場。透過虔誠的召請，迎請這些覺悟者前來加持法會，為六道眾生說法開示，幫助他們離苦得樂。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              上堂指的是諸佛菩薩等聖眾的席位，位於壇場上方，代表最尊貴、最清淨的位次。請上堂就是恭請這些聖眾入座，接受供養。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">上堂聖眾</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">諸佛如來</h3>
                <p className="text-[#263c47]/80">
                  十方三世一切諸佛，包括釋迦牟尼佛、阿彌陀佛、藥師佛等
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">諸大菩薩</h3>
                <p className="text-[#263c47]/80">
                  觀音、文殊、普賢、地藏等諸大菩薩摩訶薩
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">聲聞緣覺</h3>
                <p className="text-[#263c47]/80">
                  阿羅漢、辟支佛等證果聖者
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">護法龍天</h3>
                <p className="text-[#263c47]/80">
                  護法善神、龍天護法、伽藍護法等
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">歷代祖師</h3>
                <p className="text-[#263c47]/80">
                  禪宗、淨土、天台等各宗派歷代祖師
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">得道高僧</h3>
                <p className="text-[#263c47]/80">
                  歷代有德高僧、大善知識
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">儀軌內容</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">至誠恭請</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  主法和尚帶領大眾，以最虔誠的心，恭請諸佛菩薩降臨壇場。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">宣讀疏文</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  恭讀疏文，說明法會緣起、目的與祈願，祈請聖眾慈悲加持。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">迎接聖駕</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  以香花、燈燭、音樂迎接聖眾降臨，極盡禮敬。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">安座供養</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  請聖眾入座，以種種妙供養品供養，表達最高敬意。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">請上堂的殊勝</h3>
            <p className="leading-relaxed">
              請上堂是水陸法會最重要的環節之一，有了諸佛菩薩的加持，後續的法事才能殊勝圓滿。透過誠心恭請，我們與諸佛菩薩相應，領受他們的慈悲與智慧，這是多麼殊勝的因緣！參與請上堂儀式，應當以最虔誠、最恭敬的心，才能真正受益。
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
