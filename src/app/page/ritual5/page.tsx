import RitualTemplate from '@/components/RitualTemplate';

export default function Ritual5Page() {
  return (
    <RitualTemplate
      title="告赦"
      day="第五天"
    >
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">告赦儀軌</h2>
            <p className="text-lg text-[#263c47]/80 leading-relaxed mb-6">
              告赦是水陸法會中非常特殊的儀式，向地府陰司請求赦免亡靈的罪業，讓他們能夠暫時離開地獄等苦處，前來參加水陸法會，接受超度。這是慈悲救度的具體展現。
            </p>
            <p className="text-lg text-[#263c47]/80 leading-relaxed">
              透過告赦，那些因業力牽引而墮入三惡道的眾生，得以暫時解脫束縛，來到法會接受佛法的滋潤，有機會脫離苦海。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-[#263c47] mb-6">告赦的意義</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">請求赦免</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  向冥府陰司請求，暫時赦免亡靈罪業，讓他們能夠離開地獄等苦處。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">超度機會</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  給予受苦眾生接受超度的機會，聽聞佛法，種下解脫的種子。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#263c47] mb-3">慈悲救度</h3>
                <p className="text-[#263c47]/80 leading-relaxed">
                  展現佛法的慈悲精神，不捨任何一個眾生，願一切眾生皆得解脫。
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
                  <h4 className="font-bold text-[#263c47] mb-2">宣讀赦文</h4>
                  <p className="text-[#263c47]/80">恭讀赦文，說明法會緣起與祈請</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">召請冥官</h4>
                  <p className="text-[#263c47]/80">恭請地府陰司冥官蒞臨聽赦</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">請求赦免</h4>
                  <p className="text-[#263c47]/80">以佛法威德，請求赦免亡靈罪業</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#efeeee] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#d89b3e] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#263c47] mb-2">開啟地獄門</h4>
                  <p className="text-[#263c47]/80">暫開地獄之門，讓受苦眾生得出</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-2xl font-bold mb-4">慈悲不捨</h3>
            <p className="leading-relaxed">
              告赦儀式體現了佛教「無緣大慈，同體大悲」的精神。即使是罪業深重、墮入地獄的眾生，佛菩薩也不會捨棄，仍然給予他們解脫的機會。這就是「地獄不空，誓不成佛」的菩薩願力，也是水陸法會最動人的地方。
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
