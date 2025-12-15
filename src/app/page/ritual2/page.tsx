import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual2Page() {
  return (
    <RitualTemplate
      title="發符懸幡"
      day="第二天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">發符懸幡儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              發符懸幡是水陸法會的重要儀式，透過發送符牒和懸掛幡幢，向十方法界發出召請，通知諸佛菩薩、護法龍天、六道眾生，水陸法會即將舉行，邀請他們前來參與這場殊勝的法會。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              符牒如同法界的邀請函，幡幢如同法會的標記，讓法界眾生都能知曉這場盛會，準時赴會，共霑法益。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">發符的意義</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">召請諸佛</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  恭請十方三世諸佛、諸大菩薩降臨壇場，慈悲攝受，加持護佑。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">邀集聖眾</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  邀請護法龍天、歷代祖師、聲聞緣覺等聖眾蒞臨法會。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">通知眾生</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  通知六道眾生，包括天道、人道、阿修羅、畜生、餓鬼、地獄等，前來受度。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">懸幡的殊勝</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              懸掛幡幢是佛教的傳統，幡上書寫佛號、咒語、經文，隨風飄揚，傳播法音，利益眾生。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">幡幢高懸，標示法會所在，引導眾生前來</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">風吹幡動，法音遍傳，利益無量眾生</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">莊嚴道場，增添法會的隆重與神聖</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">儀軌流程</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h4 className="font-bold text-[#263c47] mb-2">製作符牒</h4>
                <p className="text-[#263c47]/80">法師書寫符牒，加持咒力，注入法力</p>
              </div>
              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h4 className="font-bold text-[#263c47] mb-2">持咒加持</h4>
                <p className="text-[#263c47]/80">持誦咒語，為符牒和幡幢加持</p>
              </div>
              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h4 className="font-bold text-[#263c47] mb-2">發送符牒</h4>
                <p className="text-[#263c47]/80">以法力將符牒發送至十方法界</p>
              </div>
              <div className="border-l-4 border-[#d89b3e] pl-6">
                <h4 className="font-bold text-[#263c47] mb-2">懸掛幡幢</h4>
                <p className="text-[#263c47]/80">將幡幢高懸於壇場內外，標示法會</p>
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
              護持水陸法會
            </a>
          </div>
        </div>
      </section>
    </RitualTemplate>
  );
}
