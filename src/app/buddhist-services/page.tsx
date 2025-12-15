import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function BuddhistServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://ext.same-assets.com/972454301/3753246231.jpeg"
          alt="佛事項目"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">佛事項目</h1>
            <p className="text-xl md:text-2xl">齋僧 · 齋天 · 放燄口 · 護生</p>
          </div>
        </div>
      </section>

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

          {/* 齋僧 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#263c47]">齋僧</h2>
            </div>

            <h3 className="text-2xl font-bold text-[#9e2125] mb-4">水陸齋僧圓滿 功德回向普利十方</h3>

            <div className="space-y-4 text-base text-[#263c47]/80 leading-relaxed">
              <p>
                靈鷲山第30屆水陸空大法會將於8月16日於桃園巨蛋啟建，5月29日於聖山寺善法大樓五觀堂舉行水陸第一場齋僧，由緬甸巴利大學校長鳩摩羅尊者及2位比丘受邀應供，齋主們謹慎恭敬以齋襯、資具供養鳩摩羅尊者3位比丘及全山常住法師，鳩摩羅尊者也慈悲為大眾開示，說明供養與回向功德的殊勝必要性。
              </p>

              <p>
                上午11點佛前大供儀式圓滿，齋主們排班恭迎鳩摩羅尊者陞座，東單另設賓頭盧尊者席位，賓頭盧尊者是釋迦牟尼佛的十六大阿羅漢之一，在漢傳佛教中有「福田第一」的稱號，因祂曾受佛陀教誡，要求賓頭盧尊者常住世間、受眾生供養，讓眾生種福田，而祂也發願無論何處有人請祂應供，必定前往受供。大康法師先至賓頭盧尊者席位前，祈請尊者降臨享用齋飯，而後才行過堂。
              </p>

              <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg my-6">
                <p>
                  為了此次齋僧，五觀堂特地精心準備了色、香、味俱全的素齋佳餚，服務志工們也有條不紊地為法師們盛飯、加菜、添湯，細膩的動作中流露出最恭敬的虔誠心意。供養儀式開始，齋主們將齋襯、資具高舉至眉心，虔誠供養僧寶。
                </p>
              </div>

              <p>
                鳩摩羅尊者也以頻毘娑羅王供佛的故事為大眾開示：佛陀率弟子前往王舍城，受頻毘娑羅王供養，夜裡頻毘娑羅王卻發惡夢見恐怖景象，又聞諸惡臭，心生不安，請教佛陀。佛陀告訴他：「這些都是你過去的眷屬顯現，由於生前作不善業，才化惡鬼顯現。」又提醒頻毘娑羅王，供養佛與聖僧，皆應回向給累世眷屬，祂們才能同樣獲得供養與解脫。尊者也說，供養並功德回向累世眷屬，是孝心報恩的呈現。
              </p>

              <div className="bg-gradient-to-r from-[#263c47] to-[#4a7c8a] text-white p-6 rounded-lg my-6">
                <h4 className="text-lg font-bold mb-3">心道法師開示</h4>
                <p className="text-sm leading-relaxed opacity-95">
                  「僧寶讓佛法得以住世廣傳，對僧寶的護持，也代表正法得以久住。而且，出家僧眾是恪守清淨戒律的修行者，供僧就是成就清淨的善業，就能帶來更好的善緣和殊勝功德。」因此，每年水陸法會舉辦齋僧儀式，讓信眾藉由齋僧為自己累積福德資糧，也能普利十方眾生。
                </p>
              </div>
            </div>
          </div>

          {/* 齋天 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#263c47]">齋天</h2>
            </div>

            <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg mb-6">
              <p className="text-base text-[#263c47]/80 leading-relaxed italic">
                夫三寶功德不可量，隨機感應遍十方；誠心歸敬增福慧，諸天善神護三寶，輔翼有德應感念，供佛齋天謝恩德，酥酡獻供必蒙庇佑。
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">何謂「供佛齋天」？</h3>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  齋天，或稱「供天」，全稱為「供佛齋天」。「供佛」就是禮拜供養三寶，齋天就是請諸天吃飯；為感念祂們長年的庇佑。齋天在民間稱為「拜天公」，但兩者的內涵大不相同；一般民間「拜天公」只請一人吃飯，但「供佛齋天」即「禮拜供養三寶，請二十四位天神、天將用齋」。
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">「供佛齋天」的緣起</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed mb-3">
                  水陸法會第五天內壇告赦佛事後，緊接著清晨四點半，在外壇的梁皇大壇舉行「供佛齋天」佛事。據《金光明經》記載：諸天在「金光明會」上時，於佛前發菩提心，護持佛教、奉行正法、修諸善業、不做惡行；諸天也遵照佛陀的囑咐，護持蕓蕓眾生修持佛法，以其神威為人們袪惡化邪，降福消災，提攜修道者圓滿佛果；因此諸天又稱為護法龍天。
                </p>
                <p className="text-sm text-[#263c47]/80 leading-relaxed">
                  護法是一項非常辛苦的工作，不分晝夜，日日月月地護持三寶，讓正法永住；以答謝諸天的護佑。除了感恩諸天菩薩的護持，同時也祈願諸天菩薩，以虔誠禮拜三寶及迎請諸天光降受供，使得佛法興隆，三寶常作眾生的暗夜明燈，護佑世界和平，地球平安無災無難。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">供佛齋天的儀式</h3>
                <p className="text-base text-[#263c47]/80 leading-relaxed mb-4">
                  會場佈置，供品更是考究，是佛門中一場最隆重的宴會，只是所請的賓客非一般世間人，而是諸天界的天人。
                </p>
                <p className="text-base text-[#263c47]/80 leading-relaxed mb-4">
                  齋天佛事為什麼要在淩晨進行呢？因為天人與凡人的作息不同，淩晨是天人醒來、精進辦道的「白日」。為了表達至誠感恩的心意，法會壇場三寶席、諸天及其侍從的座席、誦經禮懺，施設淨食。一切的七珍八寶、供品擺設極盡莊嚴、清淨，法會的禮讚唱誦力求如法如儀。
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#efeeee] p-4 rounded-lg">
                    <h4 className="font-bold text-[#263c47] mb-2">儀軌步驟</h4>
                    <ul className="space-y-2 text-sm text-[#263c47]/80">
                      <li>• 嚴淨壇場：誦持大悲咒灑淨</li>
                      <li>• 肅恭禮請：迎請三寶及諸天</li>
                      <li>• 敬獻齋法：上供種種供菜</li>
                      <li>• 時至上供：恭請三寶及諸天用食</li>
                      <li>• 圓滿送聖：恭送諸天聖眾</li>
                    </ul>
                  </div>
                  <div className="bg-[#efeeee] p-4 rounded-lg">
                    <h4 className="font-bold text-[#263c47] mb-2">法會時間</h4>
                    <p className="text-sm text-[#263c47]/80">
                      清晨 4:30 開始<br/>
                      於梁皇大壇舉行<br/>
                      配合天人作息時間
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 放燄口 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#263c47]">放燄口</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">瑜伽燄口</h3>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  瑜伽燄口施食法中的「瑜伽」是指相應的意思。相應有五種意義，即與「境、行、理、果、機」相應；也就是指金剛上師以「身結手印、口誦真言、意持觀想」，以身、口、意三業密相應。放燄口，是根據《佛說救拔燄口餓鬼陀羅尼經》藉由金剛上師以瑜伽施食密法對燄口餓鬼施行放賑甘露法食，對餓鬼進行救拔普渡的法門，以期能冥陽兩利。
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#9e2125]/10 to-transparent border-l-4 border-[#9e2125] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">何謂「燄口」？</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed">
                  燄口的意思就是「餓鬼」，又稱面燃。因生前慳貪吝嗇、一毛不拔，專占他人的便宜，故死後墮入無福無力的餓鬼道中，長年受餓，備受諸苦。這一類的鬼，其食量極大，喉管卻極細，有了食物也難以果腹，由於業報的關係，它們很難見到食物，縱然得到了可口的食物，進口之時，卻又變成了臭穢的膿血，從口裡邊吐出來都是火，這個火又臭又熱，它們常受餓火中燒，烈燄從口而出，故名「燄口」。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">瑜伽燄口施食緣起</h3>
                <p className="text-base text-[#263c47]/80 leading-relaxed mb-4">
                  《佛說救拔燄口餓鬼陀羅尼經》說到，世尊在迦毗羅城為諸比丘及菩薩眾說法時，阿難獨居靜處修習禪定，到了三更半夜，有一名叫燄口的餓鬼出現在前，其形體枯槁，面貌醜惡，頭髮散亂，留著長長、尖利的指甲，肚子像山一樣大，但喉嚨又細得根針一樣，臉上還噴出熊熊烈火，來對他說：「三日之後汝命將盡，即生於餓鬼之中。」
                </p>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  阿難大驚，急至佛前哀求救度。佛陀為他說「燄口經」和「施食的方法」，如果能施飲食給恆河沙數的餓鬼和諸仙，非但不墮此道，還能延年益壽，諸鬼神等常來擁護，遇事吉祥。佛教阿難持「無量威德自在光明如來陀羅尼法」七遍，讓有限的食物變成種種甘露飲食，充遍法界，使無量恆河沙數的餓鬼與諸仙等眾，普皆受食飽滿、解脫苦趣，超升到三善道。
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#263c47] mb-3">瑜伽燄口施食介紹</h3>
                <p className="text-sm text-[#263c47]/80 leading-relaxed mb-3">
                  水陸期間總共需要做五堂的燄口法會，其因規糢大小可分一大士、三大士或五大士燄口，照規矩講則稱為「單方、三方或五方」燄口。主要分別是依照有多少位金剛上師同時主法。靈鷲山水陸法會的燄口，都以規糢最盛大的五大士來舉行燄口。
                </p>
                <p className="text-sm text-[#263c47]/80 leading-relaxed">
                  放燄口法會在梁皇大壇舉行，外場則設面燃大士壇及普供桌區。法會進行時間是每天晚間五點半到夜間十一點，這是為了配合餓鬼道的生活作息，因為鬼的食時在晚間戌亥二時（晚上七點至十一點），過此時辰，鬼就不能吃東西了。燄口的主要目的在救度地獄的鬼道眾生，期望藉由菩薩的加持與願力，共同幫助這些眾生脫離苦海，善根深厚者可以出離，善根較差的至少可以得到一時的喘息機會。
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#263c47] mb-4">佛事內容與流程</h3>
                <p className="text-base text-[#263c47]/80 leading-relaxed mb-4">
                  佛事內容從迎請諸佛菩薩開始，接著供奉諸佛菩薩，再於「緣起文」之後召請十方一切眾生，以清淨甘露滋潤身田，離邪行，歸敬三寶、證無上道；接著以各種手印和咒語，包括變食、召鬼、破地獄、開咽喉、召罪、摧罪、破業、懺悔、施甘露、開咽喉、說皈依、受戒、說法，一直到奉送圓滿。
                </p>
                <p className="text-base text-[#263c47]/80 leading-relaxed mb-4">
                  靈鷲山水陸法會的規糢相當大，相應的眾生也多，所以每一堂的燄口法會在普供區都準備相當多美味又豐盛的供品。每堂燄口準備上百桌燄口供品桌，擺滿整個廣場，普度眾生，宴請參與水陸法會的歷代祖先及無人祭祀的孤魂等眾，看起來就像是民間七月的大拜拜。
                </p>
                <p className="text-base text-[#263c47]/80 leading-relaxed">
                  每天的燄口佛事長達五、六小時，參加燄口施食法會者，以「身敬、口誦、思惟」三業清淨的心來參加，當中不能吃東西也不能喝水，代表我們不能與眾生搶食，但參加的信眾卻非常踴躍，大家忍受著飢餓、口渴，似乎可以更體會到眾生受苦的感覺，自然而然更用心於觀修、感應諸聖賢，達到慈悲救苦的目的。
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#263c47] to-[#4a7c8a] text-white p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-3">心道法師開示</h4>
                <p className="text-sm leading-relaxed opacity-95 mb-3">
                  「我們在水陸法會呢，外壇我們就做施食，把東西給三惡道眾生吃。惡鬼眾生若要懺悔消除內心像山一樣高的恨、怨，要怎麼消呢？就要用施食的方法，就是放燄口。三惡道的眾生因為「燄口」就是很難能夠吃得很圓滿，所以我們就用法施食，讓他們可以吃得很好。」
                </p>
                <p className="text-sm leading-relaxed opacity-95">
                  「所以施食就是把我們的貪心拿掉，我們下施一切眾生，就可以協助他們轉識清淨，轉這個『器世間』就是這物質的世界變成慈悲、光明、開心的世界。我們在做這種燄口的時候，跟著法師帶領專心念誦經文來轉那個『識』，來讓他們得到清淨，同時給他們吃得飽飽的，讓他們心開意解，協助他們可以離苦得樂，往生淨土。」
                </p>
              </div>
            </div>
          </div>

          {/* 護生 */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-[#d89b3e] to-[#9e2125] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#263c47]">護生</h2>
            </div>

            <div className="bg-gradient-to-r from-[#d89b3e]/10 to-transparent border-l-4 border-[#d89b3e] p-6 rounded-lg">
              <p className="text-base text-[#263c47]/80 leading-relaxed text-center italic">
                內容籌備中，敬請期待...
              </p>
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
