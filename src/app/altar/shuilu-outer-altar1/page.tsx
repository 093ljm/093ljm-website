import AltarTemplate from '@/components/AltarTemplate';

export default function OuterAltar1Page() {
  return (
    <AltarTemplate
      title="梁皇大壇"
      subtitle="禮拜梁皇寶懺 懺悔業障"
      breadcrumb={['首頁', '壇場介紹', '梁皇大壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">梁皇大壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              梁皇大壇是水陸法會外壇中最重要的壇場之一，主要禮拜《慈悲道場懺法》，又稱《梁皇寶懺》。此懺法由南朝梁武帝為超度郗氏皇后而延請寶誌禪師等高僧所集成，為漢傳佛教最殊勝的懺法之一。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              透過禮拜梁皇寶懺，能夠懺悔累世業障，消除罪業，祈求平安吉祥，功德廣大無邊。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">梁皇寶懺的由來</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              南朝梁武帝的皇后郗氏，生性嫉妒瞋恨，死後墮入蟒蛇道受苦。一日化作巨蟒現身求救，梁武帝悲痛萫已，延請寶誌禪師等十位高僧，搜羅佛經，編輯成《慈悲道場懺法》十卷。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              梁武帝虔誠禮拜懺法，皇后得以脫離畜生道，投生天道。此後，梁皇寶懺廣為流傳，成為最殊勝的懺悔法門。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">現世利益</h3>
                <ul className="space-y-2 text-[#263c47]/80">
                  <li>• 消除業障，身心安康</li>
                  <li>• 化解冤親債主</li>
                  <li>• 家庭和諧，事業順利</li>
                  <li>• 增長智慧，福德圓滿</li>
                </ul>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">未來利益</h3>
                <ul className="space-y-2 text-[#263c47]/80">
                  <li>• 超度亡靈，往生善道</li>
                  <li>• 累積福慧資糧</li>
                  <li>• 成就菩提道果</li>
                  <li>• 利益法界眾生</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">壇場儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              梁皇大壇法事莊嚴隆重，由法師帶領信眾恭誦懺文，禮佛懺悔。全卷共十卷，分數日完成，每卷都有其特定的懺悔主題。
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-[#d89b3e] pl-4">
                <h4 className="font-bold text-[#263c47] mb-2">懺悔內容</h4>
                <p className="text-[#263c47]/80">從無始劫來所造諸惡業，至誠懺悔，發願不再造作</p>
              </div>
              <div className="border-l-4 border-[#d89b3e] pl-4">
                <h4 className="font-bold text-[#263c47] mb-2">禮拜諸佛</h4>
                <p className="text-[#263c47]/80">恭敬禮拜三世諸佛、諸大菩薩、護法龍天</p>
              </div>
              <div className="border-l-4 border-[#d89b3e] pl-4">
                <h4 className="font-bold text-[#263c47] mb-2">發願迴向</h4>
                <p className="text-[#263c47]/80">發菩提心，迴向法界眾生，願共成佛道</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持梁皇寶懺
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
