import AltarTemplate from '@/components/AltarTemplate';

export default function OuterAltar3Page() {
  return (
    <AltarTemplate
      title="南傳羅漢壇"
      subtitle="南傳佛教儀軌 清淨僧團"
      breadcrumb={['首頁', '壇場介紹', '南傳羅漢壇']}
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">南傳羅漢壇簡介</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              南傳羅漢壇是靈鷲山水陸法會的一大特色，展現佛教三乘（漢傳、藏傳、南傳）合一的精神。此壇由南傳佛教僧團主持，遵循巴利語系佛教傳統，進行托鉢、誦經、坐禪等修行。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              南傳佛教保留了佛陀時代最原始的教法與僧團制度，強調戒定慧三學，以解脫煩惱、證得涅槃為目標。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">南傳佛教特色</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">保留原始教法</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  南傳佛教以巴利三藏為依據，保存了佛陀最原始的教法，強調四聖諦、八正道、十二因緣等核心教義。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">嚴謹持戒</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  南傳僧團嚴格遵守戒律，過午不食，托鉢乞食，展現出家人清淨莊嚴的修行風範。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">內觀禪修</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  重視禪修實踐，以內觀（Vipassana）培養覺知力，觀照身心實相，證得智慧解脫。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">正念生活</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  強調將正念融入日常生活，行住坐臥皆是修行，培養清明覺察的心。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">壇場活動</h2>
            <div className="space-y-6">
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">托鉢行腳</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  南傳僧侶每日清晨托鉢，接受信眾供養，展現僧團依靠十方供養的傳統，也讓信眾有機會種植福田。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">誦經祝福</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  以巴利語恭誦佛經，為法會及眾生祝福，護持正法久住。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">禪修指導</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  開示禪修要領，指導信眾修習內觀，培養正念覺知。
                </p>
              </div>
              <div className="bg-[#efeeee] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-4">三乘交流</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  與漢傳、藏傳僧團交流學習，促進不同傳承之間的理解與融合。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">功德利益</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">親近清淨僧團，種植福田</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">學習原始佛法，回歸佛陀本懷</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">體驗三乘佛教的圓融與包容</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">培養正念，淨化心靈</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d89b3e] mt-1">●</span>
                <span className="text-[#263c47]/80">累積福慧，邁向解脫</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">靈鷲山的三乘精神</h3>
            <p className="leading-relaxed">
              靈鷲山水陸法會融合漢傳、藏傳、南傳三乘佛教，展現佛法的多元與圓融。三乘雖有不同的修行方法與傳承，但都是佛陀的教法，目標都是幫助眾生離苦得樂、成就菩提。透過三乘合一的法會，我們學習互相尊重、包容，共同護持正法，利益眾生。
            </p>
          </div>

          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors"
            >
              護持南傳羅漢壇
            </a>
          </div>
        </div>
      </section>
    </AltarTemplate>
  );
}
