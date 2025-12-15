import AltarTemplate from '@/components/AltarTemplate';
import Link from 'next/link';

export default function TwentyFourSeatsPage() {
  const upperSeats = [
    { number: 1, title: '大梵天王席', description: '供奉大梵天王及諸天眾，為欲界之主，統領諸天' },
    { number: 2, title: '帝釋天王席', description: '供奉帝釋天及三十三天眾，護持佛法，降伏魔軍' },
    { number: 3, title: '護世四王席', description: '供奉東南西北四大天王，守護四方，護持正法' },
    { number: 4, title: '金剛密跡席', description: '供奉金剛密跡及諸金剛力士，護持道場，降伏魔障' },
    { number: 5, title: '日宮太陽席', description: '供奉日天子及日宮天眾，光明遍照，破除黑暗' },
    { number: 6, title: '月宮太陰席', description: '供奉月天子及月宮天眾，清涼光明，柔和照耀' },
    { number: 7, title: '南斗六星席', description: '供奉南斗六星君，掌管延壽增福，消災解厄' },
    { number: 8, title: '北斗七星席', description: '供奉北斗七星君，掌管生死祿籍，轉禍為福' },
    { number: 9, title: '五嶽聖帝席', description: '供奉東南西北中五嶽大帝，鎮守五方，保境安民' },
    { number: 10, title: '四海龍王席', description: '供奉東南西北四海龍王，興雲布雨，風調雨順' }
  ];

  const lowerSeats = [
    { number: 11, title: '十方法界席', description: '普召十方法界一切眾生，無論聖凡善惡，平等受度' },
    { number: 12, title: '開國歷代席', description: '超度開國元勳、歷代帝王將相，報國恩、君恩' },
    { number: 13, title: '文武官僚席', description: '超度歷代文武百官，感恩其治理國家、造福百姓' },
    { number: 14, title: '陣亡將士席', description: '超度為國捐軀的將士英靈，慰其忠魂，離苦得樂' },
    { number: 15, title: '師長恩德席', description: '超度歷代師長、傳授佛法及世間知識的恩師' },
    { number: 16, title: '父母宗親席', description: '超度自己及眷屬的歷代祖先、父母宗親' },
    { number: 17, title: '嬰靈孤魂席', description: '超度無依無靠的嬰靈、孤魂野鬼，給予溫暖關懷' },
    { number: 18, title: '十類孤魂席', description: '超度十類特殊孤魂：自殺、橫死、水厄等各類冤魂' },
    { number: 19, title: '畜生道眾席', description: '超度畜生道眾生，開啟智慧，脫離畜生道' },
    { number: 20, title: '地獄道眾席', description: '超度地獄道眾生，解除極苦，早日出離地獄' },
    { number: 21, title: '餓鬼道眾席', description: '超度餓鬼道眾生，施予甘露，解除飢渴之苦' },
    { number: 22, title: '阿修羅道席', description: '超度阿修羅道眾生，化解瞋恨，心得安寧' },
    { number: 23, title: '人道眾生席', description: '超度人道中受苦的眾生，包括冤親債主等' },
    { number: 24, title: '天道眾生席', description: '超度天道眾生，令其聞法修行，不墮輪迴' }
  ];

  return (
    <AltarTemplate
      title="水陸二十四席介紹"
      subtitle="上堂十席供養諸天 下堂十四席超度六道"
      breadcrumb={['首頁', '水陸知識', '二十四席介紹']}
    >
      <div className="bg-[#efeeee]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">二十四席的由來</h2>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                水陸法會設立二十四席位，是根據佛教的宇宙觀和眾生觀而設計的。這二十四席涵蓋了從諸天聖眾到地獄眾生，從護法龍天到六道輪迴，體現了水陸法會「法界聖凡水陸大齋勝會」的完整性和包容性。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                上堂十席主要供養諸天護法，這些天神雖非究竟解脫的聖者，但他們護持佛法、守護眾生，功德巨大。透過供養，一方面表達感恩，另一方面也希望他們繼續護持道場，降伏魔障。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed">
                下堂十四席則是超度六道眾生，特別是那些在輪迴中受苦的眾生。無論是歷代祖先、陣亡將士，還是孤魂野鬼、地獄餓鬼，都一律平等對待，給予超度的機會。這體現了佛教大慈大悲、平等救度的精神。
              </p>
            </div>

            {/* Upper Hall - 10 Seats */}
            <div className="bg-gradient-to-br from-[#d89b3e] to-[#b8821f] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">上堂十席 · 供養諸天</h2>
              <p className="text-center text-white/90 mb-8 text-lg">
                上堂供養護法龍天，祈求護持道場，風調雨順，國泰民安
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {upperSeats.map((seat) => (
                  <div
                    key={seat.number}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold">{seat.number}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{seat.title}</h3>
                        <p className="text-white/90 leading-relaxed">{seat.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Upper Hall Explanation */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">上堂諸天詳解</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">天界的階層</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    佛教將天界分為三界：欲界六天、色界十八天、無色界四天。水陸法會上堂所供養的主要是欲界諸天，這些天神雖然享受福報，但仍在輪迴之中，並未究竟解脫。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    大梵天王統領初禪天，帝釋天主管忉利天，四大天王守護須彌山腰。這些天神都是佛法的護持者，在佛陀成道、說法、涅槃等重要時刻，都曾現身護持。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">星宿信仰的融合</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    水陸法會將中國傳統的星宿信仰融入佛教儀軌中，設立日月宮、南北斗、五嶽、四海龍王等席位。這種融合體現了佛教的包容性和本土化。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    南斗主延壽，北斗主消災，日月星辰影響著天象氣候，五嶽龍神掌管山川水澤。供養這些天神，祈求風調雨順、國泰民安，也是利益眾生的方便法門。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">供養的意義</h3>
                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">感恩護持</h4>
                      <p className="text-[#263c47]/80">
                        感恩諸天護法長期護持佛法、守護眾生
                      </p>
                    </div>
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">祈求加持</h4>
                      <p className="text-[#263c47]/80">
                        祈求諸天繼續護持道場，降伏魔障
                      </p>
                    </div>
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">利益眾生</h4>
                      <p className="text-[#263c47]/80">
                        祈求風調雨順，國泰民安，五穀豐登
                      </p>
                    </div>
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">圓滿福德</h4>
                      <p className="text-[#263c47]/80">
                        供養天神，累積福德資糧，增長善根
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Hall - 14 Seats */}
            <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-center">下堂十四席 · 超度六道</h2>
              <p className="text-center text-white/90 mb-8 text-lg">
                下堂超度六道眾生，慈悲平等，無有分別，願眾生離苦得樂
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {lowerSeats.map((seat) => (
                  <div
                    key={seat.number}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold">{seat.number}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{seat.title}</h3>
                        <p className="text-white/90 leading-relaxed">{seat.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Lower Hall Explanation */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">下堂六道詳解</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">六道輪迴</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    六道是指眾生在輪迴中所處的六種境界：天道、人道、阿修羅道、畜生道、餓鬼道、地獄道。前三道稱為三善道，後三道稱為三惡道。
                  </p>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    水陸法會下堂特別著重於超度三惡道眾生，因為他們最為痛苦，最需要救度。同時也不忘三善道眾生，因為即使生在善道，如果不聞佛法、不修行，仍然會繼續輪迴受苦。
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">特殊席位的設立</h3>
                  <div className="space-y-4">
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">報恩席位</h4>
                      <p className="text-[#263c47]/80 leading-relaxed">
                        開國歷代席、文武官僚席、師長恩德席、父母宗親席等，這些是報四重恩（國恩、師恩、父母恩、眾生恩）的具體體現。透過超度，報答這些恩德。
                      </p>
                    </div>
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">慈悲席位</h4>
                      <p className="text-[#263c47]/80 leading-relaxed">
                        陣亡將士席、嬰靈孤魂席、十類孤魂席等，這些是對特殊受苦眾生的關懷。他們或為國捐軀、或無依無靠、或橫死冤死，特別需要超度和慰藉。
                      </p>
                    </div>
                    <div className="bg-[#efeeee] p-6 rounded-lg">
                      <h4 className="font-bold text-[#263c47] mb-2">平等席位</h4>
                      <p className="text-[#263c47]/80 leading-relaxed">
                        十方法界席涵蓋一切眾生，不分聖凡善惡，都有機會接受超度。這體現了佛法的平等精神：眾生平等，皆有佛性，皆可成佛。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#263c47] mb-4">超度的意義</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    超度不是簡單地讓亡者升天，而是透過佛法的力量，幫助他們：
                  </p>
                  <ul className="space-y-3 text-[#263c47]/80 pl-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#d89b3e] mt-1">●</span>
                      <span>消除業障，減輕罪報</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d89b3e] mt-1">●</span>
                      <span>聽聞佛法，發菩提心</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d89b3e] mt-1">●</span>
                      <span>脫離惡道，往生善處</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#d89b3e] mt-1">●</span>
                      <span>種下善根，未來成佛</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Participate */}
            <div className="bg-gradient-to-br from-[#9e2125] to-[#7e1115] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6">如何參與二十四席供養？</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">立牌位</h3>
                  <p className="leading-relaxed text-white/90">
                    為自己的祖先、親人、冤親債主等立牌位，讓他們有專屬的位置接受超度。牌位分為陽上牌位（為在世者祈福）和往生牌位（為亡者超度）。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">誠心參與</h3>
                  <p className="leading-relaxed text-white/90">
                    在法會期間，誠心參與每一個儀式，跟隨法師誦經持咒。你的虔誠心念，能夠增強法會的功德力，讓更多眾生獲得利益。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">發菩提心</h3>
                  <p className="leading-relaxed text-white/90">
                    不只為自己的親人祈福，更要發願利益一切眾生。這種無私的菩提心，能讓功德更加廣大圓滿。
                  </p>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">相關連結</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/knowledge/ritual"
                  className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white p-6 rounded-lg transition-all duration-300 group"
                >
                  <h3 className="font-bold text-lg mb-2">內壇儀軌</h3>
                  <p className="text-sm opacity-80">了解七天十二個儀式的完整流程</p>
                </Link>
                <Link
                  href="/knowledge/shuilu-offering"
                  className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white p-6 rounded-lg transition-all duration-300 group"
                >
                  <h3 className="font-bold text-lg mb-2">齋天儀式</h3>
                  <p className="text-sm opacity-80">深入了解供養諸天的儀軌</p>
                </Link>
                <Link
                  href="/knowledge/shuilu-giving"
                  className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white p-6 rounded-lg transition-all duration-300 group"
                >
                  <h3 className="font-bold text-lg mb-2">放燄口</h3>
                  <p className="text-sm opacity-80">了解施食餓鬼的瑜伽焰口法會</p>
                </Link>
                <Link
                  href="/altar"
                  className="bg-[#efeeee] hover:bg-[#d89b3e] hover:text-white p-6 rounded-lg transition-all duration-300 group"
                >
                  <h3 className="font-bold text-lg mb-2">壇場介紹</h3>
                  <p className="text-sm opacity-80">參觀水陸法會的各個壇場</p>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                立即報名參加水陸法會
              </a>
            </div>
          </div>
        </div>
      </div>
    </AltarTemplate>
  );
}
