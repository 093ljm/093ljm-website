import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function SpiritPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="flex gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#263c47] hover:text-[#9e2125] transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>返回首頁</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-[#efeeee] py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8">靈鷲山水陸精神</h2>

            {/* 起源 */}
            <div className="mb-8">
              <p className="text-base text-[#263c47]/80 leading-relaxed">
                靈鷲山佛教教團水陸法會緣於心道法師於塚間修持頭陀行之際，深刻體會淒苦眾生尋求解脫、渴求三寶依靠之心念，於是發悲願度眾。靈鷲山無生道場自創建後，在四眾弟子全心護持下，每月舉行圓滿施食與各類大小法會，尤以水陸法會超薦功德力最為殊勝。
              </p>
            </div>

            {/* 1994年 */}
            <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm font-bold">1994年</span>
                <span className="text-sm text-[#263c47]/60">首次啟建</span>
              </div>
              <p className="text-base text-[#263c47]/80 leading-relaxed">
                心道法師以「慈悲與禪」為宗風行持，並實踐對眾生的允諾，宣布啟建靈鷲山第一場水陸法會，其籌備過程極為艱辛，礙於場地因素，外壇設於台中光復國小，內壇設於台中體專體育館，分兩地同時啟建「護國息災、祈福報恩水陸大法會」。而自1994年啟建水陸法會以來，悲願無間無斷，度化眾生無數，普施利樂一切有情。
              </p>
            </div>

            {/* 2013年 */}
            <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-block bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-bold">2013年</span>
                <span className="text-sm text-[#263c47]/60">20周年慶</span>
              </div>
              <p className="text-base text-[#263c47]/80 leading-relaxed mb-3">
                適逢水陸法會啟建20周年慶，心道法師慈示並賜墨寶「<span className="font-bold text-[#9e2125]">大普施</span>」作為靈鷲山水陸法會的主題，並作偈「<span className="font-semibold text-[#263c47]">普濟十方眾、施樂拔諸苦；齋戒入經藏，滌心大懺悔。</span>」前兩句指出水陸空法會的目的，後兩句則說明參加水陸法會的方法。
              </p>
              <p className="text-sm text-[#263c47]/70 italic">
                「大普施」這三字也呼應了水陸法會舉辦的精神「悲願、嚴謹、平等」。
              </p>
            </div>
          </div>

          {/* Three Big Characters: 大普施 */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {/* 大 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="https://ext.same-assets.com/972454301/3745900892.png"
                    alt="大"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-[#263c47] mb-4">呼應「嚴謹」精神</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed">
                  具有第一、重要、偉大、尊貴等字義，多象徵靈鷲山水陸法會的規模、重要性。
                </p>
              </div>

              {/* 普 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="https://ext.same-assets.com/972454301/648483268.png"
                    alt="普"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-[#263c47] mb-4">呼應「平等」精神</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed">
                  具有廣遍的、全面性、無選擇等字義，代表超越眾生的願心如一，願力不斷。
                </p>
              </div>

              {/* 施 */}
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="https://ext.same-assets.com/972454301/3537573268.png"
                    alt="施"
                    width={150}
                    height={150}
                    className="mx-auto"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-[#263c47] mb-4">呼應「悲願」精神</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed md:text-center">
                  表示財施、法施、無畏施的關懷，冥陽兩利的法會宗旨。
                </p>
              </div>
            </div>
          </div>

          {/* 悲願 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8 text-center">悲願</h2>

            {/* Timeline Container */}
            <div className="relative space-y-6">
              {/* Vertical Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d89b3e] via-[#9e2125] to-[#d89b3e]"></div>

              {/* 早年塚間修 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-[#d89b3e] to-[#c08b2e] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#d89b3e]/5 to-transparent p-4 rounded-lg">
                  <h3 className="text-sm font-bold text-[#d89b3e] mb-2">早年 · 塚間修行</h3>
                  <p className="text-base text-[#263c47]/80 leading-relaxed">
                    心道法師早年於塚間修頭陀苦行，在最接近死亡的地方發奮體證空寂、悟證本來。其間有感於世人貪、瞋、癡熾盛，身、口、意惡業轉增，致使輪迴受苦無有出期。心道法師對幽冥眾生無間的苦楚，生起大悲心，發願若有成就，即以佛教最盛大、最莊嚴的水陸法會救度眾生，並以水陸法會為橋樑弘法利生，接引眾生修習佛法。
                  </p>
                </div>
              </div>

              {/* 塚間修期間 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-[#9e2125] to-[#7e1115] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#9e2125]/5 to-transparent p-4 rounded-lg">
                  <h3 className="text-sm font-bold text-[#9e2125] mb-2">修行期間 · 發願百場施食</h3>
                  <p className="text-base text-[#263c47]/80 leading-relaxed">
                    「塚間修」期間，心道法師以持誦《大悲咒》、《金剛經》回向給幽冥界眾生，發願為眾生修持百次「圓滿大施食」超薦法會。
                  </p>
                </div>
              </div>

              {/* 1994年出關 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-[#d89b3e] to-[#c08b2e] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#d89b3e]/5 to-transparent p-4 rounded-lg">
                  <h3 className="text-sm font-bold text-[#d89b3e] mb-2">1994年 · 實踐悲願</h3>
                  <p className="text-base text-[#263c47]/80 leading-relaxed">
                    出關後，即實踐對眾生的允諾，於1994年啟建靈鷲山第一場水陸法會迄今；而「圓滿大施食」則成為心道法師必定親自主法的法會。
                  </p>
                </div>
              </div>

              {/* 至今持續 */}
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-gradient-to-br from-[#9e2125] to-[#7e1115] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="bg-gradient-to-r from-[#9e2125]/5 to-transparent p-4 rounded-lg">
                  <h3 className="text-sm font-bold text-[#9e2125] mb-2">至今 · 無間悲願</h3>
                  <p className="text-base text-[#263c47]/80 leading-relaxed mb-3">
                    心道法師主法的「圓滿施食大法會」早已超過200場，但心道法師說：
                  </p>
                  <div className="space-y-2 pl-4 border-l-2 border-[#9e2125]/30">
                    <p className="text-sm text-[#263c47]/90 italic">
                      「我從墳場開始超度他們﹐直到現在﹐沒有終止過。」
                    </p>
                    <p className="text-sm text-[#263c47]/90 italic">
                      「身為人，才有機會做超度這樣好的事，三惡道眾生受苦、受業報，只有我們能幫他們超度、助他們轉生離苦。」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 嚴謹 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8 text-center">嚴謹</h2>

            <div className="space-y-6">
              {/* 年度先修持會 */}
              <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm font-bold">每年法會前</span>
                  <span className="text-sm text-[#263c47]/60">先修持會</span>
                </div>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  每一年，靈鷲山在正式啟建水陸法會前，必先圓滿五場水陸先修法會。其目的，就是讓功德主能夠全年謙卑禮懺，滌淨一年的障礙，成就福慧善果。同時將五場先修法會的殊勝功德普皆回向﹐使整場法會盡善盡美、冥陽兩利。
                </p>
              </div>

              {/* 獨特特色 */}
              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-bold">唯一道場</span>
                  <span className="text-sm text-[#263c47]/60">獨特傳承</span>
                </div>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  靈鷲山是開了水陸先修法會的創舉。除了五場先修，為使法會功德圓滿無漏，利益功德主，每年水陸法會啟建前一個月，靈鷲山常住法師，更預先持誦水陸法會各壇所需持誦經典427部。
                </p>
              </div>

              {/* 千年儀軌傳承 */}
              <div className="bg-gradient-to-r from-[#263c47]/5 to-transparent border-l-4 border-[#263c47] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-[#263c47] text-white px-4 py-1 rounded-full text-sm font-bold">千年傳承</span>
                  <span className="text-sm text-[#263c47]/60">如法如儀</span>
                </div>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  此外，靈鷲山水陸法會恪遵千年所流傳的儀軌，遵循古禮依時、依辰、依典制，一切供品、壇城佈置、擺設，當極盡莊嚴、清淨，以最縝密謹慎的態度，可說戒慎恐懼，盡心達到如法如儀的完美境界。
                </p>
              </div>
            </div>
          </div>

          {/* 平等 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-[#263c47] mb-8 text-center">平等</h2>

            <div className="space-y-6">
              {/* 宋朝經典 */}
              <div className="bg-gradient-to-br from-[#d89b3e]/10 to-[#d89b3e]/5 p-6 rounded-lg border border-[#d89b3e]/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-[#d89b3e] text-white px-4 py-1 rounded-full text-sm font-bold">宋朝</span>
                  <span className="text-sm text-[#263c47]/60">水陸緣起</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/50 p-4 rounded border-l-4 border-[#d89b3e]">
                    <p className="text-sm text-[#263c47]/80 leading-relaxed italic">
                      宋朝宗賾在《水陸緣起》雲：「今之供一佛、齋一僧、施一貧、勸一善﹐尚有無限功德﹐何況普遍供養十方三寶、六道萬靈﹐豈止自利一身﹐獨超三界﹐亦乃恩霑九族。」
                    </p>
                  </div>
                  <div className="bg-white/50 p-4 rounded border-l-4 border-[#9e2125]">
                    <p className="text-sm text-[#263c47]/80 leading-relaxed italic">
                      又雲：「保慶而不設水陸﹐則人不以為善；追資尊長而不設水陸，則人不以為孝；濟拔卑幼而不設水陸，則人不以為慈。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 宋朝以後 */}
              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-[#9e2125] text-white px-4 py-1 rounded-full text-sm font-bold">宋朝以後</span>
                  <span className="text-sm text-[#263c47]/60">歷代傳承</span>
                </div>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  自宋朝以後﹐時遇天災、戰爭，國家元首無不以啟建水陸法會護國息災﹐祈人心安定並超薦亡靈﹐水陸法會遂成為朝野盛行的超度法會。 靈鷲山心道法師的大悲心，是以水陸法會為弘法利生的平台。
                </p>
              </div>

              {/* 當代靈鷲山 */}
              <div className="bg-gradient-to-r from-[#263c47]/5 to-transparent border-l-4 border-[#263c47] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-[#263c47] text-white px-4 py-1 rounded-full text-sm font-bold">當代</span>
                  <span className="text-sm text-[#263c47]/60">靈鷲山傳承</span>
                </div>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  本著無緣大慈，同體大悲的心念，每年靈鷲山水陸法會皆為當年重大災難的罹難者立大牌位，不分國界、地域為亡靈超薦，體現眾生平等、愛無國界的平等心。
                </p>
              </div>
            </div>
          </div>

          {/* 常存法師談大普施 */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#263c47] to-[#4a7c8a] text-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">常存法師談大普施</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3">「大」是什麼意思呢？</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  「大」是強調水陸法會的一個重要性。歷代佛教高僧，他們修行或者是辦法會主要目的，無不希望幫六道(天道/修羅道/人間道/畜生道/餓鬼道/地獄道)眾生超渡，擺脫輪迴，往生善處。所有的法會，都沒有水陸法會來的圓滿和盛大，因為只有水陸法會可以讓陰陽兩界的眾生的都獲得功德。所以，「大」是指水陸法會的影響力是無遠弗屆的，其重要性以及舉辦法會嚴謹的程度，包括它冥陽兩利的功德力都是第一等的程度。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">「普」是什麼呢？</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  「普」是一種平等，就是希望靈鷲山水陸法會不論辦多少年，我們都更能夠願心如一；師父早年在墳墓苦行的時候，就發起這樣的願力，到現在師父從來沒有間斷過，所以「普」它是種平等願心如一的精神。也是希望普度的心願更恆常、更無間斷的繼續做下去。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">「施」的部分是?</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  「施」的部分是一種悲願，一般佛法來講，就是有財施、法施、無畏施，希望透由水陸法會來號召大家把愛心拿出來，希望達到人飢己飢，人溺己溺的普仁精神，在「施」的部分談的就是關懷與愛心。
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-lg font-bold mb-6 text-center">水陸現場如極樂世界</h3>

                <div className="space-y-4">
                  {/* 第一段：水陸現場的殊勝 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                    <p className="text-sm leading-relaxed opacity-95">
                      整個水陸法會現場與法會期間的磁場，許多人說就像是極樂世界一般。如果你不曉得甚麼叫做極樂世界，你可以到水陸現場來體驗那種感覺。
                    </p>
                  </div>

                  {/* 第二段：阿彌陀經的對照 */}
                  <div className="bg-gradient-to-r from-white/15 to-white/5 rounded-lg p-5 border-l-4 border-[#d89b3e]">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#d89b3e] rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">
                        經
                      </div>
                      <p className="text-sm leading-relaxed opacity-95 flex-1">
                        其實我們看阿彌陀經裡面講到說，每一個人一早醒過來，做的就是供佛、供法、供僧，那在水陸法會現場看得也是啊！
                      </p>
                    </div>
                  </div>

                  {/* 第三段：人間與極樂的連結 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20">
                    <p className="text-sm leading-relaxed opacity-95">
                      為什麼說極樂世界是一個人人嚮往的地方，其實在我們水陸法會裡面，可以略略去體會到，
                      <span className="font-semibold text-[#d89b3e]">人間都可以如此，更何況佛菩薩所介紹給我們的極樂世界。</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#9e2125] hover:bg-[#c02629] text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            >
              護持水陸法會
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
