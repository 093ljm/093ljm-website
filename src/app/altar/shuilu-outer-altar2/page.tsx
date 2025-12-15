import AltarTemplate from '@/components/AltarTemplate';

export default function OuterAltar2Page() {
  return (
    <AltarTemplate
      title="密壇"
      subtitle="修持密法 加持護佑"
      breadcrumb={['首頁', '壇場介紹', '密壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">密壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              密壇是修持藏傳佛教密法的壇場，由受過嚴格訓練的金剛上師主持，透過修持本尊法、念誦密咒、觀想壇城等方式，為法會及眾生祈福加持，消災解厄。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              密法具有快速、殊勝的特點，能夠迅速累積福慧資糧，清淨業障，護持法會順利圓滿。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">密壇特色</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">藏傳佛教儀軌</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  遵循藏傳佛教傳承，以嚴謹的儀軌修持密法，展現佛法的多元與圓融。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">本尊觀想</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  修持者觀想本尊，與本尊相應，領受諸佛菩薩的加持力。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">密咒持誦</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  持誦殊勝密咒，淨化身口意，開啟智慧，消除業障。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">壇城供養</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  設立莊嚴壇城，以種種供品供養諸佛菩薩，累積福德資糧。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">主要修持法門</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">觀音法門</h3>
                <p className="text-[#263c47]/80">
                  修持觀世音菩薩本尊法，領受大慈大悲的加持，救度一切苦難眾生。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">文殊法門</h3>
                <p className="text-[#263c47]/80">
                  修持文殊菩薩智慧法，開啟本有智慧，破除無明煩惱。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">地藏法門</h3>
                <p className="text-[#263c47]/80">
                  修持地藏菩薩本願法，超度亡靈，救拔地獄眾生。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">護法法門</h3>
                <p className="text-[#263c47]/80">
                  修持護法儀軌，祈請護法龍天護持法會，遣除障礙。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">領受諸佛菩薩的殊勝加持</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">快速累積福慧資糧</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">淨化業障，消災解厄</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">護持法會，遣除障礙</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">成就菩提，利益眾生</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持密壇法事
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
