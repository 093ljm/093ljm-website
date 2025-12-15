import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual1Page() {
  return (
    <RitualTemplate
      title="結界"
      day="第一天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">結界儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              結界是水陸法會的第一個儀式，也是最重要的基礎儀軌。透過結界，法師以咒力和佛力，在壇場四周建立一個清淨的法界空間，隔絕外界的干擾和邪魔侵擾，確保法會順利進行。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              結界不僅是物理空間的界定，更是心靈空間的淨化。在這個清淨的法界中，諸佛菩薩得以降臨，六道眾生得以受度，一切法事都在神聖莊嚴的氛圍中進行。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">結界的意義</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">淨化壇場</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  清淨壇場內外，去除一切不淨之物，使壇場成為清淨莊嚴的法界道場。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">防護結界</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  建立防護結界，隔絕魔障干擾，護持法會平安順利。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">開啟法門</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  開啟法界之門，迎請諸佛菩薩降臨，六道眾生得以進入壇場受度。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">宣告開始</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  向法界宣告水陸法會正式開始，昭告十方諸佛菩薩證明護持。
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
                  <h4 className="font-bold text-[#263c47] mb-2">灑淨</h4>
                  <p className="text-[#263c47]/80">持大悲咒水灑淨壇場，清淨一切不淨</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">持咒</h4>
                  <p className="text-[#263c47]/80">持誦結界咒語，以咒力建立防護結界</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">繞場</h4>
                  <p className="text-[#263c47]/80">法師繞行壇場，持咒加持，鞏固結界</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">安位</h4>
                  <p className="text-[#263c47]/80">安設諸佛菩薩、護法龍天的位次</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">宣告</h4>
                  <p className="text-[#263c47]/80">宣讀疏文，向法界宣告法會開始</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">結界的重要性</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              結界儀式雖然只有一天，卻是整個水陸法會的基石。沒有完善的結界，後續的法事無法順利進行。結界的清淨與否，直接影響法會的莊嚴與功德。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              因此，主法和尚必須具備深厚的修為和清淨的戒行，才能如法結界，護持法會圓滿成就。
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">參與者的準備</h3>
            <p className="leading-relaxed mb-4">
              參與結界儀式的信眾，應當提前沐浴更衣，保持身心清淨。在儀式進行中，應當專心致志，跟隨法師持咒念佛，不可隨意走動或交談。
            </p>
            <p className="leading-relaxed">
              以清淨心、恭敬心參與結界，就是在為整個法會奠定良好的基礎，功德無量。
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
