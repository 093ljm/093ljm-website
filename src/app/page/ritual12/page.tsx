import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual12Page() {
  return (
    <RitualTemplate
      title="送聖"
      day="第七天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">送聖儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              送聖是水陸法會的最後一個儀式，標誌著整個法會圓滿結束。在這個莊嚴肅穆的儀式中，主法和尚帶領全體參與者，恭送十方諸佛菩薩、護法龍天、六道眾生回歸本位，感恩七天以來的護持與參與。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              送聖不是結束，而是另一個開始。諸佛菩薩雖然在形式上離開了壇場，但他們的加持和慈悲永遠與我們同在。六道眾生也在法會功德的加持下，往生善處，繼續修行之路。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">恭送的對象</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#efeeee] to-white p-6 rounded-lg border-l-4 border-[#d89b3e]">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">恭送諸佛菩薩</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  感恩十方三世一切諸佛菩薩降臨壇場，放光加持，護佑法會圓滿。特別感恩觀世音菩薩、地藏王菩薩等大菩薩的慈悲護持。
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#efeeee] to-white p-6 rounded-lg border-l-4 border-[#d89b3e]">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">恭送護法龍天</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  感恩四大天王、韋馱菩薩、伽藍菩薩等護法龍天，守護壇場，降伏魔障，令法會順利進行。
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#efeeee] to-white p-6 rounded-lg border-l-4 border-[#d89b3e]">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">恭送上堂聖眾</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  恭送上堂所請的諸天聖眾、歷代祖師、聲聞緣覺等，感恩他們接受供養，為眾生說法。
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#efeeee] to-white p-6 rounded-lg border-l-4 border-[#d89b3e]">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">恭送下堂眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  恭送六道眾生，祝願他們在法會功德加持下，離苦得樂，往生善道，早證菩提。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">送聖儀式流程</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">香讚</h4>
                  <p className="text-[#263c47]/80">以香讚開始，焚香供養，莊嚴送別</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">總迴向</h4>
                  <p className="text-[#263c47]/80">將七天法會所有功德，總迴向法界眾生</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">誦送聖偈</h4>
                  <p className="text-[#263c47]/80">誦念送聖偈，恭敬送別諸佛菩薩聖眾</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">燒化牌位</h4>
                  <p className="text-[#263c47]/80">將所有牌位焚化，送往西方淨土</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">三皈依</h4>
                  <p className="text-[#263c47]/80">帶領大眾三皈依，堅定修行信念</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">韋馱讚</h4>
                  <p className="text-[#263c47]/80">唱誦韋馱讚，感恩護法菩薩護持</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">7</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">圓滿開示</h4>
                  <p className="text-[#263c47]/80">主法和尚為大眾做最後開示，勉勵精進</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">送聖偈</h2>
            <div className="bg-gradient-to-br from-[#263c47]/5 to-[#d89b3e]/10 p-8 rounded-lg">
              <div className="text-center space-y-4 text-[#263c47]">
                <p className="text-lg leading-relaxed">
                  諸佛菩薩摩訶薩<br />
                  摩訶般若波羅蜜
                </p>
                <p className="text-sm text-[#263c47]/70 mt-4">（三稱）</p>
                <p className="text-lg leading-relaxed mt-6">
                  恭送諸佛菩薩聖眾<br />
                  還歸本位<br />
                  願垂加被<br />
                  再來應供
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">七天法會的圓滿功德</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#263c47]">對亡者的利益</h3>
                <ul className="space-y-3 text-[#263c47]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>罪業消除，離苦得樂</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>超生善道，往生淨土</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>聞法得度，發菩提心</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>蓮品增上，早證菩提</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#263c47]">對陽眷的利益</h3>
                <ul className="space-y-3 text-[#263c47]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>消災免難，增福延壽</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>家宅平安，眷屬和睦</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>事業順利，財源廣進</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#d89b3e] mt-1">✓</span>
                    <span>善根增長，智慧開啟</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">法會後的實踐</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              水陸法會圓滿結束，但修行的道路永無止境。參與法會所獲得的啟發和功德，要在日常生活中持續實踐：
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h4 className="font-bold text-[#263c47] mb-3">持續修行</h4>
                <p className="text-[#263c47]/80">
                  每日定課，誦經持咒，禪修念佛，不懈怠
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h4 className="font-bold text-[#263c47] mb-3">行善積德</h4>
                <p className="text-[#263c47]/80">
                  布施、持戒、忍辱、精進、禪定、般若
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h4 className="font-bold text-[#263c47] mb-3">慈悲利他</h4>
                <p className="text-[#263c47]/80">
                  以慈悲心對待一切眾生，隨緣幫助他人
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h4 className="font-bold text-[#263c47] mb-3">護持三寶</h4>
                <p className="text-[#263c47]/80">
                  護持佛法僧三寶，參與法會，供養道場
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">期待再相會</h3>
            <p className="leading-relaxed mb-4">
              送聖雖然是告別，但也是再相會的期待。諸佛菩薩的慈悲永遠與我們同在，只要我們保持正念，精進修行，時時刻刻都能與諸佛菩薩相應。
            </p>
            <p className="leading-relaxed mb-4">
              明年此時，我們將再次相聚於水陸法會，繼續這份殊勝的因緣。而在這一年中，我們要將法會的精神落實在生活中，讓每一天都是修行的道場。
            </p>
            <p className="leading-relaxed">
              願一切眾生，皆能離苦得樂，同證菩提。願我們生生世世，不離三寶，不退菩提，直至成佛！
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 text-center">
            <h3 className="text-2xl font-bold text-[#263c47] mb-4">水陸法會圓滿</h3>
            <p className="text-[#d89b3e] text-xl mb-6">
              南無阿彌陀佛 🙏
            </p>
            <p className="text-[#263c47]/80 leading-relaxed">
              感恩十方諸佛菩薩慈悲加持<br />
              感恩護法龍天護持道場<br />
              感恩法師大德辛勤主法<br />
              感恩所有護法信眾發心護持<br />
              <br />
              願以此功德，莊嚴佛淨土<br />
              上報四重恩，下濟三途苦<br />
              若有見聞者，悉發菩提心<br />
              盡此一報身，同生極樂國
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
