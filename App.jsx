import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  ShieldCheck, 
  Home, 
  HeartPulse, 
  PiggyBank, 
  TrendingUp, 
  CheckCircle, 
  Smartphone, 
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Instagram,
  Receipt
} from 'lucide-react';
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  // 連結與檔案路徑配置 - 嚴格對應您的上傳文件名
  const appStoreUrl = "https://apps.apple.com/app/algopro/id6757803637";
  const instagramUrl = "https://ig.me/m/algopro.toolkit";  // 聯繫我們、預約演示 Demo
  const instagramProfileUrl = "https://www.instagram.com/algopro.toolkit";  // 關注 IG
  
  const baseUrl = import.meta.env.BASE_URL;
  const logoPath = `${baseUrl}algopro_logo1.png`;
  const mainWebImage = `${baseUrl}homeview.png`;
  const instagramLogoPath = `${baseUrl}instagram-logo.png`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tools = [
    {
      id: "premium",
      title: "保費融資計算機",
      subtitle: "Premium Financing",
      description: "透過銀行融資槓桿，極大化財富增值潛力。即時模擬利率變動對回報的影響。",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      image: "pf.PNG"
    },
    {
      id: "medical",
      title: "醫療融資計算機",
      subtitle: "Medical Financing",
      description: "將靜態儲蓄轉化為動態保障。精算如何利用理財方案支付終身高端醫療開支。",
      icon: <HeartPulse className="w-6 h-6 text-rose-400" />,
      image: "mf.PNG"
    },
    {
      id: "property",
      title: "物業活化計算機",
      subtitle: "Property Activation",
      description: "喚醒不動產隱藏價值。深入分析物業加按或轉按後的資金流向，將死錢活化。",
      icon: <Home className="w-6 h-6 text-amber-400" />,
      image: "pa.PNG"
    },
    {
      id: "retirement",
      title: "退休精算工具",
      subtitle: "Retirement Planning",
      description: "對抗通脹與長壽風險。基於精確算法預測未來現金流缺口，助客戶構建尊嚴生活。",
      icon: <Calculator className="w-6 h-6 text-sky-400" />,
      image: "rt.PNG"
    },
    {
      id: "savings",
      title: "儲蓄計劃優惠",
      subtitle: "Savings Plan Optimizer",
      description: "秒速對比各大方案優惠。自動計算預存利息與保費折扣，鎖定最優時機。",
      icon: <PiggyBank className="w-6 h-6 text-indigo-400" />,
      image: "sp.PNG"
    },
    {
      id: "ci",
      title: "危疾保障規劃",
      subtitle: "Critical Illness Logic",
      description: "將抽象風險具象化。根據家庭責任量化保障缺口，解決買多少的決策痛點。",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      image: "ci.PNG"
    },
    {
      id: "tax",
      title: "稅務計算機",
      subtitle: "Tax Calculator",
      description: "簡易與進階模式計算稅項總額、扣稅三寶幫你慳幾多？",
      icon: <Receipt className="w-6 h-6 text-violet-400" />,
      image: "tc.PNG"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans antialiased">
      {/* 導航欄 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A] border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logoPath} alt="AlgoPro Logo" className="h-16 w-auto block" style={{ minWidth: '40px' }} />
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase">
            <a href="#features" className="hover:text-emerald-400 transition-colors">核心功能</a>
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">專業優勢</a>
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-black px-6 py-2.5 rounded-xl font-black hover:bg-white transition-all transform active:scale-95"
            >
              立即下載
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero 區塊 */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-widest uppercase mb-8" style={{ fontSize: 'calc(0.75rem + 2pt)' }}>
            專為頂尖理財顧問打造的iPad工具
          </div>
          
          <h1 className="text-fluid-hero font-black text-white mb-8 tracking-tighter leading-tight">
            不僅是一個計算機，<br />
            更是您的<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">開單神器</span>。
          </h1>
          
          <p className="max-w-2xl mx-auto text-fluid-subtitle text-slate-400 mb-12 font-medium">
            一個工具 · 一次專業演示 · MDRT路上的基本配置
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-24">
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 bg-emerald-500 text-black font-black rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group text-fluid-btn"
            >
              App Store免費試用
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-fluid-btn"
            >
              <Instagram className="w-5 h-5 text-rose-400" />
              預約演示 Demo
            </a>
          </div>

          {/* 產品優勢列表 */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <CheckCircle className="w-8 h-8 text-emerald-400" />,
                  title: "極簡介面",
                  description: "符合高淨值客群美學，提升專業形象。直觀操作，無需複雜學習。"
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
                  title: "隱私安全",
                  description: "數據本地存儲，保護客戶隱私。無需連接網絡，完全離線使用。"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "動態報告",
                  description: "精美圖表縮短決策路徑。即時生成專業視覺化報告。"
                },
                {
                  icon: <Calculator className="w-8 h-8 text-emerald-400" />,
                  title: "精準計算",
                  description: "複雜精算邏輯一鍵完成。支援多種金融場景計算。"
                },
                {
                  icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
                  title: "隨時隨地",
                  description: "iPad 專屬優化，隨時為客戶演示。專業工具隨身攜帶。"
                },
                {
                  icon: <HeartPulse className="w-8 h-8 text-emerald-400" />,
                  title: "提升轉化",
                  description: "視覺化呈現增強說服力。幫助您更快達成交易。"
                }
              ].map((advantage, idx) => (
                <div 
                  key={idx}
                  className="liquid-glass rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 七大功能 */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-fluid-section font-black text-white mb-6">全方位精算工具箱</h2>
            <p className="text-slate-400 text-fluid-subtitle">覆蓋保險理財七大核心場景</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {tools.map((tool) => (
              <div key={tool.id} className="liquid-glass rounded-[2rem] overflow-hidden group hover:border-emerald-500/40 transition-all">
                {/* 工具截圖 1.png - 6.png */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={`${baseUrl}${tool.image}`} 
                    alt={tool.title} 
                    className="w-full h-full object-cover block group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-xl liquid-glass flex items-center justify-center">
                    {tool.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-emerald-400 text-xs font-black tracking-widest uppercase mb-6">{tool.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 開大單神器區塊 - 再次展示 web.png */}
      <section id="how-it-works" className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-fluid-section-alt font-black text-white mb-6 leading-tight">
                一個工具，<br />
                <span className="text-emerald-400">讓專業更有說服力</span>
              </h2>
              <p className="text-fluid-subtitle text-slate-400 font-medium">
                AlgoPro 將複雜的精算邏輯轉化為優雅的視覺呈現。少步驟、快結果，助您展現不可替代的說服力。
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full flex justify-center">
               <div className="overflow-hidden rounded-2xl liquid-glass shadow-2xl w-[65%]">
                  <img 
                    src={mainWebImage} 
                    alt="AlgoPro 專業展示" 
                    className="w-full h-auto block" 
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="py-32 bg-emerald-500 text-center text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-fluid-cta font-black mb-12 tracking-tighter">準備好了嗎？</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a 
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex px-16 py-7 bg-black text-white font-black rounded-[2rem] hover:scale-105 transition-all shadow-2xl items-center justify-center gap-4 text-fluid-cta-btn"
            >
              <Smartphone className="w-10 h-10" />
              前往 App Store 下載
            </a>
            <a 
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex px-10 py-7 bg-white/95 border-2 border-black/10 text-black font-black rounded-[2rem] hover:scale-105 transition-all shadow-xl items-center justify-center gap-3 text-fluid-cta-btn"
            >
              <img src={instagramLogoPath} alt="Instagram" className="w-9 h-9" />
              關注 IG
            </a>
          </div>
          <p className="mt-5 text-black/70 font-medium">@algopro.toolkit</p>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
            <div className="flex items-center gap-4">
              <img src={logoPath} alt="AlgoPro Logo" className="h-16 w-auto" />
            </div>
            
            <div className="flex flex-col gap-3 flex-1 lg:max-w-2xl">
              {/* 產品說明 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-black mb-2">產品說明</h3>
                <a href="#features" className="text-slate-400 hover:text-emerald-400 transition-colors">核心功能</a>
                <button 
                  onClick={() => setPrivacyOpen(!privacyOpen)}
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 text-left"
                >
                  資料安全與私隱聲明
                  <ChevronDown className={`w-4 h-4 transition-transform ${privacyOpen ? 'rotate-180' : ''}`} />
                </button>
                {privacyOpen && (
                  <div className="text-white text-sm leading-relaxed space-y-4 mt-4 pl-4 border-l-2 border-white/20">
                    <p>AlgoPro 在設計上以私隱保護及資料安全為首要原則。本應用程式於正常使用情況下，毋須連接互聯網，毋須建立帳戶、登入、登記或驗證身份，亦不會要求、收集、儲存或傳輸任何個人資料、客戶資料或可識別身份之資訊。</p>
                    <p>所有計算及操作均於使用者裝置本地完成，相關輸入資料不會被上傳、同步、備份或分享至任何伺服器、第三方系統或雲端平台。</p>
                    <p>由於 AlgoPro 並不處理任何個人或客戶私隱資料，亦不涉及遠端資料傳輸機制，因此可有效杜絕因網絡入侵、伺服器外洩或第三方存取而導致個人或客戶資料外洩之風險。</p>
                    <p>使用者於本應用程式內輸入之任何數據，均只存在於其個人裝置上，其管理、保存及使用責任概由使用者自行承擔。</p>
                    <p>使用 AlgoPro 即表示您理解並同意上述資料處理及安全架構。</p>
                  </div>
                )}
              </div>
              
              {/* 收費方案 */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setPricingOpen(!pricingOpen)}
                  className="text-slate-400 font-bold mb-2 flex items-center gap-2 text-left hover:text-emerald-400 transition-colors"
                >
                  收費方案
                  <ChevronDown className={`w-4 h-4 transition-transform ${pricingOpen ? 'rotate-180' : ''}`} />
                </button>
                {pricingOpen && (
                  <div className="text-white space-y-2 mt-2 pl-4 border-l-2 border-white/20">
                    <p>7 日免費試用，其後 HK$78 / 月</p>
                    <p>可隨時於 App Store 取消</p>
                    <p className="mt-3">無合約｜無隱藏收費</p>
                  </div>
                )}
              </div>
              
              {/* 聯繫我們 */}
              <div className="flex flex-col gap-3">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">聯繫我們</a>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 font-bold transition-colors">關注 IG</a>
              </div>
              
              {/* 免責聲明 */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => setDisclaimerOpen(!disclaimerOpen)}
                  className="text-slate-400 font-bold mb-2 flex items-center gap-2 text-left hover:text-emerald-400 transition-colors"
                >
                  免責聲明
                  <ChevronDown className={`w-4 h-4 transition-transform ${disclaimerOpen ? 'rotate-180' : ''}`} />
                </button>
                {disclaimerOpen && (
                  <div className="text-white text-sm leading-relaxed space-y-4 mt-2 pl-4 border-l-2 border-white/20">
                    <p>AlgoPro 為第三方獨立開發之理財計算及展示工具，並非任何保險公司、銀行或金融機構之官方平台，亦不代表或獲授權代表任何相關機構。</p>
                    <p>本網站及應用程式內所載之所有資料、計算結果、模擬分析及圖表內容，僅供一般資料及研究用途，並不構成任何保險、投資、財務、稅務或法律意見，亦不應被視為任何要約、招攬或推薦。</p>
                    <p>所有計算結果均基於使用者所輸入之資料及假設條件，實際結果或會因市場變動、產品條款或個別情況而有所不同。使用者於作出任何決定前，應自行核實相關資料，並諮詢合資格之專業顧問。</p>
                    <p>使用本網站或應用程式即表示您同意自行承擔所有風險。</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center text-slate-500 font-bold text-sm tracking-widest uppercase mt-12">
            © 2024 AlgoPro. 優雅精算，賦能專業。
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
