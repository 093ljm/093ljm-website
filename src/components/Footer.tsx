import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#263c47] text-white pt-16 pb-8">
      {/* Mountain Waves */}
      <div className="relative h-32 mb-12 overflow-hidden">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q150,90 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" fill="#4a7c8a" opacity="0.5"/>
          <path d="M0,80 Q200,50 400,80 T800,80 T1200,80 L1200,120 L0,120 Z" fill="#5a8c9a" opacity="0.7"/>
          <path d="M0,100 Q250,70 500,100 T1000,100 T1200,100 L1200,120 L0,120 Z" fill="#6a9caa"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="https://ext.same-assets.com/972454301/245953241.png"
              alt="靈鷲山水陸空大法會"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">靈鷲山水陸空大法會</h2>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-[#d89b3e] font-bold mb-4">關於我們</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hsintao" className="hover:text-[#d89b3e] transition-colors">心道法師</Link></li>
              <li><Link href="/spirit" className="hover:text-[#d89b3e] transition-colors">水陸精神</Link></li>
              <li><Link href="/characteristic" className="hover:text-[#d89b3e] transition-colors">水陸特色</Link></li>
              <li><Link href="/altar" className="hover:text-[#d89b3e] transition-colors">壇場介紹</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[#d89b3e] font-bold mb-4">最新資訊</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/note" className="hover:text-[#d89b3e] transition-colors">最新消息</Link></li>
              <li><Link href="/witness" className="hover:text-[#d89b3e] transition-colors">見證分享</Link></li>
              <li><Link href="/video" className="hover:text-[#d89b3e] transition-colors">影音專區</Link></li>
              <li><a href="https://donate.093.org.tw/donation/content.html?id=4DMIjyxo1dsQ4cIfAtN7dS" target="_blank" rel="noopener noreferrer" className="hover:text-[#d89b3e] transition-colors">線上報名</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[#d89b3e] font-bold mb-4">水陸知識</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge/twenty-four-seats" className="hover:text-[#d89b3e] transition-colors">水陸24席介紹</Link></li>
              <li><Link href="/knowledge/ritual" className="hover:text-[#d89b3e] transition-colors">內壇儀軌</Link></li>
              <li><Link href="/knowledge/shuilu-offering" className="hover:text-[#d89b3e] transition-colors">齋天</Link></li>
              <li><Link href="/knowledge/shuilu-giving" className="hover:text-[#d89b3e] transition-colors">放燄口</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[#d89b3e] font-bold mb-4">相關網站</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.hsintao.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d89b3e] transition-colors">心道法師官方網站</a></li>
              <li><a href="https://www.ljm.org.tw/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d89b3e] transition-colors">靈鷲山佛教教團</a></li>
              <li><a href="https://www.mwr.org.tw/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d89b3e] transition-colors">世界宗教博物館</a></li>
              <li><a href="https://www.gflp.org/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d89b3e] transition-colors">大悲兒全球心靈網</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
            微
          </button>
          <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
            f
          </button>
          <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
            IG
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white/60 border-t border-white/10 pt-8">
          <p>Copyright © 2019 靈鷲山佛教教團 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
