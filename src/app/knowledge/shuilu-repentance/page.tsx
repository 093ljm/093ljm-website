import AltarTemplate from '@/components/AltarTemplate';

export default function ShuiluRepentancePage() {
  const offerings = [
    {
      name: '香供養',
      icon: '🕯️',
      meaning: '戒德清香',
      description: '香代表戒律的清香，持戒清淨則身心清淨，如同香氣芬芳，遍滿十方。供香提醒我們守持戒律，不造惡業。',
      practice: '每日焚香禮佛，提醒自己守持戒律，身口意三業清淨。觀想香煙化作無量供雲，遍滿虛空，供養十方諸佛。',
      merit: '持戒清淨，身心安穩，諸天護佑，災難消除，未來生生世世身相莊嚴。'
    },
    {
      name: '花供養',
      icon: '🌸',
      description: '菩提心花',
      meaning: '花代表菩提心和善根福德的開花結果。供花就像種下菩提種子，未來必定開花結果，成就佛道。',
      practice: '以鮮花供佛，觀想花朵代表自己的善心善行。發願讓菩提心之花在心中綻放，利益一切眾生。',
      merit: '相好莊嚴，人見歡喜，善根增長，菩提心堅固，未來必定成佛。'
    },
    {
      name: '燈供養',
      icon: '🕯️',
      meaning: '智慧光明',
      description: '燈代表智慧的光明，能夠破除無明黑暗。供燈就是祈求智慧，照破煩惱，明心見性。',
      practice: '點燈供佛，觀想燈光如同智慧光明，照破自己和眾生的無明煩惱。發願開啟般若智慧，利益眾生。',
      merit: '智慧明亮，眼目清淨，心地光明，能夠照破煩惱，獲得解脫。'
    },
    {
      name: '塗供養',
      icon: '💧',
      meaning: '功德莊嚴',
      description: '塗香代表功德的莊嚴，清淨的香水塗抹身體，象徵功德莊嚴身心，去除污垢。',
      practice: '以香水或香油供養，觀想清淨香水能夠洗滌身心的污垢，讓功德莊嚴自己的身心。',
      merit: '身相清淨，莊嚴殊勝，功德圓滿，煩惱清除。'
    },
    {
      name: '果供養',
      icon: '🍎',
      meaning: '修行成果',
      description: '果代表修行的成果，果圓因滿。供果象徵祈求修行有成，福慧圓滿，最終成佛。',
      practice: '以水果供佛，觀想這是自己修行的成果。發願精進修行，讓善業之果成熟，福慧圓滿。',
      merit: '修行有成，福慧雙全，善果成熟，所願皆成。'
    },
    {
      name: '茶供養',
      icon: '🍵',
      meaning: '法水滋潤',
      description: '茶代表甘露法味，清涼解渴。供茶象徵以佛法滋潤眾生，解除煩惱的焦渴。',
      practice: '以清茶供佛，觀想法水甘露能夠滋潤自己和眾生的心田，解除煩惱的乾渴。',
      merit: '心得清涼，煩惱解除，法味充滿，智慧增長。'
    },
    {
      name: '食供養',
      icon: '🍚',
      meaning: '資養慧命',
      description: '食物代表資養身心，供食象徵以佛法資養慧命，增長道心。',
      practice: '以飲食供佛，觀想法食能夠資養自己和眾生的慧命，增長修行的力量。',
      merit: '身心安穩，道心增長，資糧充足，修行精進。'
    },
    {
      name: '寶供養',
      icon: '💎',
      meaning: '法財無價',
      description: '珍寶代表佛法的無價之寶，供寶象徵以最珍貴的財物供養，表達最大的虔誠。',
      practice: '以珍寶供佛，觀想佛法是最珍貴的法寶，比世間任何財寶都更有價值。',
      merit: '財富增長，資財豐足，福德圓滿，所求如意。'
    },
    {
      name: '珠供養',
      icon: '📿',
      meaning: '如意自在',
      description: '摩尼寶珠能滿眾生願，代表如意自在。供珠象徵祈求一切如意，滿眾生願。',
      practice: '以寶珠供佛，觀想摩尼寶珠能夠滿足自己和眾生的善願，讓一切如意自在。',
      merit: '所願皆成，心想事成，如意自在，無所罣礙。'
    },
    {
      name: '衣供養',
      icon: '👔',
      meaning: '慚愧莊嚴',
      description: '衣服遮蔽身體，代表慚愧心和威儀莊嚴。供衣象徵以功德法衣莊嚴身心。',
      practice: '以衣服供佛，觀想功德法衣能夠莊嚴自己的身心，保持威儀，心懷慚愧。',
      merit: '威儀莊嚴，相好圓滿，衣食豐足，具足慚愧。'
    }
  ];

  return (
    <AltarTemplate
      title="十供養的意義"
      subtitle="香花燈塗果茶食寶珠衣 - 圓滿供養諸佛菩薩"
      breadcrumb={['首頁', '水陸知識', '十供養的意義']}
    >
      <div className="bg-[#efeeee]">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">十供養的起源</h2>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                十供養源自佛教經典，是供養諸佛菩薩最圓滿的方式。在水陸法會中，特別是圓滿供時，會依次獻上這十種供養，每一種供養都有其深刻的象徵意義，不僅是物質的供養，更是心靈的修持。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
                《普賢行願品》中說：「諸供養中，法供養最。」雖然物質供養重要，但最殊勝的供養是法供養，也就是依教修行。十供養的每一種，都可以對應到我們的修行，提醒我們在日常生活中實踐佛法。
              </p>
              <p className="text-lg text-[#263c47]/80 leading-relaxed">
                供養不在於物品的貴賤多寡，而在於心的虔誠。即使是一炷香、一朵花、一杯水，只要心存恭敬，功德都是無量的。關鍵是要理解每種供養背後的意義，讓供養成為修行的助緣。
              </p>
            </div>

            {/* Ten Offerings */}
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl">{offering.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-[#263c47]">{offering.name}</h3>
                      <span className="text-xl text-[#d89b3e]">{offering.meaning}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-[#263c47] mb-2">象徵意義</h4>
                        <p className="text-[#263c47]/80 leading-relaxed">{offering.description}</p>
                      </div>

                      <div className="bg-[#efeeee] p-4 rounded-lg">
                        <h4 className="font-bold text-[#263c47] mb-2">修持方法</h4>
                        <p className="text-[#263c47]/80 leading-relaxed">{offering.practice}</p>
                      </div>

                      <div className="bg-gradient-to-r from-[#d89b3e]/10 to-[#d89b3e]/20 p-4 rounded-lg border-l-4 border-[#d89b3e]">
                        <h4 className="font-bold text-[#263c47] mb-2">功德利益</h4>
                        <p className="text-[#263c47]/80 leading-relaxed">{offering.merit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Deeper Understanding */}
            <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold mb-6">供養的深層意義</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">外在供養與內在修行</h3>
                  <p className="leading-relaxed text-white/90">
                    十供養不僅是外在的儀式，更重要的是內在的修行。例如供香時，要觀想自己的戒律是否清淨；供花時，要反省自己的菩提心是否堅固；供燈時，要檢視自己的智慧是否增長。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">物質供養與法供養</h3>
                  <p className="leading-relaxed text-white/90">
                    《普賢行願品》列舉七種法供養：依教修行供養、利益眾生供養、攝受眾生供養、代眾生苦供養、勤修善根供養、不捨菩薩業供養、不離菩提心供養。這些法供養比物質供養更加殊勝。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">有相供養與無相供養</h3>
                  <p className="leading-relaxed text-white/90">
                    初學者從有相供養開始，透過實際的供養物來培養恭敬心。隨著修行進步，要逐漸進入無相供養，也就是「三輪體空」：沒有能供的我，沒有所供的佛，沒有供養這件事，一切都是因緣和合，當體即空。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">供養的究竟意義</h3>
                  <p className="leading-relaxed text-white/90">
                    供養的究竟意義不是為了獲得什麼，而是為了放下執著。透過供養，放下對物質的執著，放下對自我的執著，最終證悟空性，這才是供養的最高境界。
                  </p>
                </div>
              </div>
            </div>

            {/* Daily Practice */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-[#263c47] mb-6">日常供養的實踐</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">早課供養</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    每天早上可以簡單供養：一炷香、一杯水、一盞燈。重要的不是供品多少，而是心的虔誠。供養時要觀想供品變化無量，遍滿虛空，供養十方諸佛菩薩。
                  </p>
                  <div className="bg-[#efeeee] p-6 rounded-lg">
                    <p className="text-[#263c47]/80 leading-relaxed">
                      供養偈：「願此香花雲，遍滿十方界，供養一切佛，尊法諸賢聖，無邊佛土中，受用作佛事。」
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">用餐供養</h3>
                  <p className="text-[#263c47]/80 leading-relaxed mb-4">
                    每次用餐前，可以先供養三寶。將飯菜觀想化作甘露，上供諸佛菩薩，下施六道眾生。這樣不僅積累功德，也能培養感恩心和慈悲心。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#263c47] mb-4">行為供養</h3>
                  <p className="text-[#263c47]/80 leading-relaxed">
                    日常生活中的每一個善行都可以成為供養。幫助他人、孝順父母、工作盡責，只要迴向給諸佛菩薩，都是殊勝的供養。這種供養不需要任何物品，卻功德無量。
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-[#d89b3e] to-[#b8821f] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">十供養總結</h2>
              <p className="text-xl mb-6 leading-relaxed">
                香花燈塗果，茶食寶珠衣<br />
                十種供養圓，功德無量邊<br />
                外供諸佛尊，內修菩提心<br />
                物我兩皆空，同證涅槃城
              </p>
              <p className="text-white/90 leading-relaxed">
                願以十供養的功德，迴向法界一切眾生<br />
                願眾生離苦得樂，福慧雙修，早證菩提
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                參加水陸法會，獻上圓滿供養
              </a>
            </div>
          </div>
        </div>
      </div>
    </AltarTemplate>
  );
}
