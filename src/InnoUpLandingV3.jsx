import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import {
  Compass, Feather, Zap,
  Telescope, BarChart3, FileText, MapPin, KeyRound, Gem,
  GraduationCap, Briefcase,
} from 'lucide-react';

/* ── 공통 variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5 } },
};

/* ── 그리드 배경 ── */
const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(163,230,53,0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163,230,53,0.18) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

/* ── 마퀴 ── */
const marqueeItems = [
  '키워드 분석', '카피라이팅', 'CRO 셋팅', '블로그 최적화',
  '상권 분석', '전환율 개선', '학부모 심리 마케팅', '콘텐츠 설계',
  '랜딩페이지 제작', '디자인',
];

function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden py-4 bg-lime-500 border-y border-lime-400">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 pr-10 text-neutral-950 font-bold text-sm tracking-wide whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-950/50 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── 숫자 카운터 ── */
function CountUp({ to, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  );
}

/* ── FAQ 다크 ── */
function FaqItemDark({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-zinc-700"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left text-white font-medium hover:text-lime-400 transition"
      >
        <span className="pr-4 text-sm sm:text-base text-left [word-break:keep-all]">{q}</span>
        <span className={`text-xl text-lime-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-zinc-300 leading-relaxed text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ────────────────────────────────────────
   HERO 우측 — 오비탈 비주얼
──────────────────────────────────────── */
function HeroVisual() {
  const badges = [
    { label: '문의',    value: '3배↑',   note: '콘텐츠 셋팅 4주 후',  className: 'top-2 -right-2 sm:top-4 sm:-right-4 float-a',    bg: 'bg-lime-400',    labelC: 'text-lime-900', valueC: 'text-lime-950', noteC: 'text-lime-800' },
    { label: '체류시간', value: '7.5배↑', note: '카피라이팅 적용 후',  className: 'bottom-6 -left-3 sm:bottom-8 sm:-left-8 float-b',  bg: 'bg-white',       labelC: 'text-zinc-400', valueC: 'text-zinc-900', noteC: 'text-zinc-400' },
    { label: '이번달',  value: '5자리',  note: '잔여 슬롯',           className: '-bottom-2 right-6 sm:-bottom-4 sm:right-10 float-c', bg: 'bg-yellow-400',  labelC: 'text-yellow-900', valueC: 'text-yellow-950', noteC: 'text-yellow-800' },
  ];

  return (
    <div className="relative mx-auto shrink-0 overflow-visible py-5 px-4 sm:py-7 sm:px-6 md:py-4 md:px-5">
      <div className="relative flex items-center justify-center aspect-square w-[min(16rem,calc(100vw-2.75rem))] sm:w-[min(19rem,calc(100vw-2rem))] md:w-96 mx-auto overflow-visible">

      {/* 글로우 */}
      <div className="glow-orb absolute inset-0 rounded-full bg-lime-500/20 blur-3xl" />

      {/* 바깥 회전 링 (점선) */}
      <svg
        className="spin-slow absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200" cy="200" r="185"
          stroke="#a3e635"
          strokeWidth="2"
          strokeDasharray="10 10"
          strokeOpacity="0.85"
        />
      </svg>

      {/* 안쪽 역방향 링 */}
      <svg
        className="spin-slow-rev absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200" cy="200" r="152"
          stroke="#facc15"
          strokeWidth="1.5"
          strokeDasharray="5 14"
          strokeOpacity="0.75"
        />
      </svg>

      {/* 사진 원 */}
      <div className="relative z-10 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border border-lime-500/25 shadow-2xl overflow-hidden">
        <img src="/inoup-landing/images/profile-hero.png" alt="대표님 사진" className="w-full h-full object-cover" />
      </div>

      {/* 플로팅 배지들 — orbit 밖으로 나가도 padding 영역에서 보이도록 z-30 */}
      {badges.map(({ label, value, note, className, bg, labelC, valueC, noteC }) => (
        <div
          key={label}
          className={`absolute z-30 ${bg} rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 shadow-lg sm:shadow-2xl max-w-[10rem] sm:max-w-none ring-1 ring-black/10 ${className}`}
        >
          <div className={`${labelC} text-[9px] sm:text-[10px] md:text-[11px] font-semibold leading-none mb-0.5 sm:mb-1`}>{label}</div>
          <div className={`${valueC} font-extrabold text-sm sm:text-lg md:text-xl leading-none`}>{value}</div>
          <div className={`${noteC} text-[8px] sm:text-[9px] md:text-[10px] font-light mt-0.5 sm:mt-1 leading-tight sm:leading-none`}>{note}</div>
        </div>
      ))}

      {/* 궤도 위 장식 점(네모 느낌: 작은 라운드 스퀘어) */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const orbitPct = (185 / 400) * 100;
        const dx = Math.cos(rad) * orbitPct;
        const dy = Math.sin(rad) * orbitPct;
        return (
          <div
            key={deg}
            className="absolute z-[25] w-2 h-2 sm:w-2.5 sm:h-2.5 bg-lime-400 rounded-[3px] shadow-[0_0_8px_rgba(163,230,53,0.9)] -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `calc(50% + ${dx}%)`,
              top:  `calc(50% + ${dy}%)`,
            }}
          />
        );
      })}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   MAIN
──────────────────────────────────────── */
const faqs = [
  { q: '마케팅 경력이 어느 정도 되나요?',   a: '학원 전문 마케팅 실무 경력 5년 이상으로, 직접 블로그 콘텐츠 기획·키워드 분석·CRO 셋팅까지 원스톱으로 수행합니다.' },
  { q: '광고비는 따로 들어가나요?',          a: '아닙니다. 이노업은 100% 콘텐츠 마케팅 방식으로, 유료 광고 없이 자연 검색 유입만으로 문의를 만들어냅니다.' },
  { q: '얼마나 걸려야 효과를 볼 수 있나요?', a: '콘텐츠 업로드 후 평균 2~4주 내에 키워드 상위 노출이 시작됩니다. 파트너 학원 평균 첫 문의는 3주차에 발생했습니다.' },
  { q: '우리 학원이 적합한지 모르겠어요.',   a: '무료 진단 신청 시 경쟁 현황·블로그 상태·키워드 공백을 분석한 리포트를 먼저 드립니다. 적합 여부는 그걸 보고 판단하세요.' },
  { q: '1개월 이후에는 어떻게 되나요?',     a: '1개월 집중 세팅 후 지속 운영 계약 또는 셀프 운영 가이드 인계 중 선택하실 수 있습니다.' },
];

const portfolio = [
  { label: '수학 교습소',   tag: '키워드 분석',  result: '문의 3배↑',      icon: Telescope, accent: '3×',  desc: '틈새 검색어 발굴 후\n4주 만에 달성' },
  { label: '영어 학원',    tag: '블로그 CRO',   result: '체류 7.5배↑',    icon: BarChart3, accent: '7.5×', desc: '카피라이팅 개선으로\n체류 시간 급상승' },
  { label: '입시 학원',    tag: '카피라이팅',   result: '신규 등록 2배↑',  icon: FileText,  accent: '2×',  desc: '학부모 심리 기반\n콘텐츠 전면 교체' },
  { label: '미술 학원',    tag: '상권 분석',    result: '노출 순위 1위',   icon: MapPin,    accent: '#1',  desc: '경쟁 키워드 분석 후\n지역 1위 달성' },
  { label: '피아노 교습소', tag: '키워드 발굴',  result: '문의 전환율↑',   icon: KeyRound,  accent: '↑%',  desc: 'CTA 동선 설계로\n전환율 개선' },
  { label: '보습 학원',    tag: '콘텐츠 설계',  result: '지역 상위 3개월', icon: Gem,       accent: '3mo', desc: '콘텐츠 설계 후\n3개월 연속 상위 유지' },
];

const portfolioCards = [
  // 흰 배경 — 기본
  { bg: 'bg-white',     border: 'border-stone-200',  tagBg: 'bg-lime-500/10',   tagText: 'text-lime-700',  tagBorder: 'border-lime-400/40',  title: 'text-zinc-900', desc: 'text-zinc-500', divider: 'border-zinc-200',   result: 'text-lime-600',   accentOpacity: 'text-black/5',   iconColor: 'text-zinc-900'  },
  // 올리브 배경 — 영어 학원
  { bg: 'bg-lime-700',  border: 'border-lime-600',   tagBg: 'bg-white/15',      tagText: 'text-white',     tagBorder: 'border-white/20',     title: 'text-white',    desc: 'text-lime-100', divider: 'border-white/20',   result: 'text-yellow-300', accentOpacity: 'text-white/10',  iconColor: 'text-white'     },
  // 올리브 배경 — 입시 학원
  { bg: 'bg-lime-700',  border: 'border-lime-600',   tagBg: 'bg-white/15',      tagText: 'text-white',     tagBorder: 'border-white/20',     title: 'text-white',    desc: 'text-lime-100', divider: 'border-white/20',   result: 'text-yellow-300', accentOpacity: 'text-white/10',  iconColor: 'text-white'     },
  // 스톤 배경 — 기본
  { bg: 'bg-stone-100', border: 'border-stone-300',  tagBg: 'bg-lime-500/10',   tagText: 'text-lime-700',  tagBorder: 'border-lime-400/40',  title: 'text-zinc-900', desc: 'text-zinc-500', divider: 'border-stone-300',  result: 'text-lime-600',   accentOpacity: 'text-black/5',   iconColor: 'text-zinc-900'  },
  // 흰 배경 — 기본
  { bg: 'bg-white',     border: 'border-stone-200',  tagBg: 'bg-lime-500/10',   tagText: 'text-lime-700',  tagBorder: 'border-lime-400/40',  title: 'text-zinc-900', desc: 'text-zinc-500', divider: 'border-zinc-200',   result: 'text-lime-600',   accentOpacity: 'text-black/5',   iconColor: 'text-zinc-900'  },
  // 올리브 배경 — 보습 학원
  { bg: 'bg-lime-700',  border: 'border-lime-600',   tagBg: 'bg-white/15',      tagText: 'text-white',     tagBorder: 'border-white/20',     title: 'text-white',    desc: 'text-lime-100', divider: 'border-white/20',   result: 'text-yellow-300', accentOpacity: 'text-white/10',  iconColor: 'text-white'     },
];

/* ── 섹션 라벨 공통 ── */
function SectionLabel({ text, dark = false }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 max-w-full ${dark ? 'text-lime-400' : 'text-lime-600'}`}>
      <span className="w-3 h-3 bg-lime-500 rounded-sm rotate-45 flex-shrink-0" />
      <span className="font-semibold text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase text-left [word-break:keep-all]">{text}</span>
    </div>
  );
}

/* ────────────────────────────────────────
   컴포넌트
──────────────────────────────────────── */
const InnoUpLandingV3 = () => {

  return (
    <div className="leading-relaxed min-w-0">

      {/* ══ GNB ══ */}
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="text-base md:text-xl font-bold tracking-tight text-zinc-900">
            INNO<span className="text-lime-600">-UP</span>
            <span className="ml-1.5 text-xs font-light text-zinc-400 tracking-widest uppercase hidden sm:inline">Marketing Lab</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-500">
            <Link to="/about" className="hover:text-lime-600 transition font-medium">소개</Link>
            <a href="#process" className="hover:text-lime-600 transition">작업방식</a>
            <a href="#cta" className="hover:text-lime-600 transition">상담문의</a>
          </div>
          <Link to="/quiz" className="bg-lime-500 text-white px-3 md:px-5 py-2 rounded-full font-bold hover:bg-lime-600 transition flex-shrink-0" style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
            무료&nbsp;진단&nbsp;받기
          </Link>
        </div>
      </nav>

      {/* ══ HERO — 다크 + 그리드 ══ */}
      <section className="relative min-h-screen flex items-center overflow-x-hidden overflow-y-visible bg-neutral-950" style={gridBg}>

        {/* 배경 글로우 오브 */}
        <div className="glow-orb absolute -top-60 -left-60 w-[700px] h-[700px] bg-lime-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="glow-orb absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '2.5s' }} />

        {/* 우측 장식 사선 */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-lime-500/20 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-16 w-full min-w-0 flex flex-col items-center gap-10 lg:gap-14">

          {/* ── 카피 (위) ── */}
          <motion.div className="flex flex-col min-w-0 w-full max-w-3xl max-sm:max-w-full mx-auto" variants={stagger} initial="hidden" animate="show">

            {/* 뱃지 */}
            <motion.div
              variants={fadeUp}
              className="inline-flex w-full max-w-full sm:w-fit items-start sm:items-center gap-2 sm:gap-3 text-lime-400 px-1 sm:px-2 py-2 mb-6 sm:mb-8"
              style={{ fontFamily: "'Nanum Brush Script', cursive", fontSize: 'clamp(0.95rem, 3.6vw, 2.2rem)', letterSpacing: '0.02em', lineHeight: 1.35 }}
            >
              <span className="w-2.5 h-2.5 bg-lime-400 rounded-full animate-pulse flex-shrink-0 mt-1.5 sm:mt-0" />
              <span className="min-w-0 break-words">
                [긴급 진단] 2026년, 동네 학원 마케팅의 룰이 바뀌었습니다
              </span>
            </motion.div>

            {/* 헤드라인 */}
            <motion.div variants={stagger} className="mb-6 min-w-0">
              <div className="overflow-hidden">
                <motion.div
                  variants={wordVariant}
                  className="leading-[1.15] sm:leading-[1.2] md:leading-[1.15] text-white [word-break:keep-all] text-[clamp(2rem,8vw+1rem,4.5rem)] md:text-6xl lg:text-7xl"
                >
                  <span className="font-normal">전단지 1,000장,</span>
                </motion.div>
              </div>
              <div className="overflow-hidden mt-1.5 md:mt-1">
                <motion.div
                  variants={wordVariant}
                  className="leading-[1.08] sm:leading-[1.18] md:leading-[1.15] text-white [word-break:keep-all] text-[clamp(2.15rem,9vw+0.85rem,4.5rem)] md:text-7xl lg:text-8xl"
                >
                  <span className="font-extrabold">영혼 없는 블로그 글...</span>
                </motion.div>
              </div>
              <div className="overflow-hidden mt-2.5 md:mt-2">
                <motion.div
                  variants={wordVariant}
                  className="leading-[1.15] sm:leading-[1.2] md:leading-[1.15] [word-break:keep-all] text-[clamp(2rem,8vw+1rem,4.5rem)] md:text-6xl lg:text-7xl"
                >
                  <span className="font-normal text-white">아직도 </span>
                  <span className="font-extrabold text-lime-400 text-[clamp(2.15rem,9vw+0.85rem,4.5rem)] md:text-7xl lg:text-8xl">예전 방식</span>
                  <span className="font-normal text-white">에 돈을 버리고 계신가요?</span>
                </motion.div>
              </div>
            </motion.div>

            {/* 서브 설명 */}
            <motion.p variants={fadeUp} className="text-zinc-400 text-[0.95rem] sm:text-base mb-8 font-light leading-relaxed sm:leading-loose min-w-0 [word-break:keep-all]">
              요즘 학부모는 뻔한 홍보글은 읽지 않습니다. 의미 없는 &apos;조회수 뻥튀기&apos; 사기에서 벗어나, 진짜 학부모의 마음을 움직여 &apos;상담 예약&apos;을 잡는 이노업만의 로직을 확인하세요.
            </motion.p>

            {/* CTA 버튼 */}
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 min-w-0">
                          <Link to="/quiz" className="group relative overflow-hidden bg-lime-500 text-white font-bold text-base sm:text-base py-4 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-lime-400 transition duration-300 w-full sm:w-auto text-center flex justify-center items-center sm:inline-flex">
                            <span className="relative z-10">우리 학원 무료 진단하기</span>
                            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                          </Link>
                          <a href="#process" className="bg-white/5 text-white font-semibold text-base sm:text-base py-4 sm:py-4 px-6 sm:px-8 rounded-xl border border-zinc-700 hover:border-lime-500/50 hover:bg-white/10 transition duration-300 w-full sm:w-auto text-center flex justify-center items-center sm:inline-block">
                            작업 방식 보기 →
                          </a>
                        </motion.div>

            {/* 소셜 프루프 */}
            <motion.div variants={fadeUp} className="flex flex-row items-center gap-3 sm:gap-4 border-t border-zinc-800 pt-6 min-w-0">
              <div className="flex -space-x-2 flex-shrink-0">
                {[GraduationCap, GraduationCap, Briefcase, Briefcase].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Icon size={14} className="text-zinc-400" strokeWidth={1.5} />
                  </div>
                ))}
              </div>
              <div className="text-zinc-300 text-sm leading-snug min-w-0 [word-break:keep-all]">
                현재 <span className="text-lime-400 font-bold">학원·교습소·교육업체</span> 등 이노업과 파트너십 중
              </div>
            </motion.div>
          </motion.div>

          {/* ── 오비탈 비주얼 (아래, 항상 텍스트 아래 중앙) ── */}
          <motion.div
            className="flex w-full min-w-0 justify-center items-center overflow-visible pt-2 pb-10 sm:pb-8 sm:pt-2"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      {/* ══ 마퀴 띠 ══ */}
      <Marquee />

      {/* ══ LIVE LAB — Hero 바로 아래 ══ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {/* 텍스트 */}
            <div>
              <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 mb-8 leading-snug [word-break:keep-all]">
                &quot;마케팅 회사인데,<br />
                왜 블로그 글이 별로 없죠?&quot;
              </motion.h2>
              <motion.div variants={fadeUp} className="bg-stone-50 p-8 rounded-2xl border-l-4 border-lime-500 space-y-5">
                <p className="text-base text-zinc-600 leading-loose">
                  남의 블로그를 대신 써주는 대행사가, 왜 정작 자기 블로그는 이제 막 시작했을까요?
                </p>
                <p className="text-base text-zinc-900 font-semibold leading-loose">
                  "저는 보여주기식 포장보다, 파트너 원장님들의 '실제 상담 문의'를 늘리는 데 제 모든 시간을 쏟았기 때문입니다."
                </p>
                <p className="text-base text-zinc-600 leading-loose">
                  현재 보시는 이 페이지와 제 블로그는, 이노업이 오직 마케팅 로직만으로 지역 1위를 달성하는 과정을 투명하게 공개하는{' '}
                  <strong className="text-lime-600 font-semibold">『마케팅 라이브 실험실』</strong>입니다.
                  성장 과정을 지켜보며 실력을 판단해 주세요.
                </p>
              </motion.div>
            </div>

            {/* 대표 프로필 */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-lime-500/30 shadow-2xl overflow-hidden">
                  <img src="/inoup-landing/images/profile-about.png" alt="대표님 사진" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-lime-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  마케팅 전략가
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ VISUAL PROOF — 데이터 증명 ══ */}
      <section className="py-24 px-6 bg-neutral-950" style={gridBg}>
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="실제 데이터 증명" dark />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug [word-break:keep-all]">말로만 하지 않습니다.</h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed [word-break:keep-all]">실제 파트너 학원의 키워드 분석 데이터와 콘텐츠 진단 결과입니다</p>
          </motion.div>

          <div className="space-y-10">
            {/* 증거 1 */}
            <motion.div
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full aspect-video bg-zinc-800 border-b border-zinc-700 flex items-center justify-center text-zinc-500 text-xs sm:text-sm px-3 text-center leading-snug [word-break:keep-all]">
                [실제 타 학원 틈새 키워드 분석 엑셀 / 블로그 빨간펜 진단 캡처 이미지 삽입]
              </div>
              <div className="p-6">
                <div className="inline-block bg-lime-500/15 text-lime-400 text-xs font-bold px-3 py-1 rounded-full mb-3">키워드 전략</div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  &apos;OO동 수학학원&apos;으로만 검색하는 학부모는 없습니다. &apos;중2 수학 기말 벼락치기&apos;처럼 엄마들이 밤에 고민하며 검색하는 진짜 틈새 키워드를 발굴합니다.
                </p>
              </div>
            </motion.div>

            {/* 증거 2 */}
            <motion.div
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-full aspect-video bg-zinc-800 border-b border-zinc-700 flex items-center justify-center text-zinc-500 text-xs sm:text-sm px-3 text-center leading-snug [word-break:keep-all]">
                [블로그 카피라이팅 전/후 체류 시간 비교 스크린샷 삽입]
              </div>
              <div className="p-6">
                <div className="inline-block bg-yellow-500/15 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-3">카피라이팅 개선</div>
                <p className="text-zinc-200 text-base font-semibold mb-2">
                  커리큘럼 나열 글에서 학부모 심리 기반 카피로 교체 후 평균 체류시간 7.5배 증가
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  단순한 "체계적 커리큘럼, 친절한 선생님" 나열은 3초 만에 이탈을 만듭니다. 학부모의 불안과 결핍을 건드리는 카피로 교체하면 끝까지 읽고 전화하는 구조가 만들어집니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ 통계 — 라이트 그레이 ══ */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="왜 이노업인가" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 leading-snug [word-break:keep-all]">숫자로 말합니다</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            {[
              { to: 3,   suffix: '×',  label: '파트너 학원\n평균 문의 증가', sub: '콘텐츠 셋팅 후 4주 내',  bar: 60 },
              { to: 30,  suffix: '일', label: '1개월 집중\n프로젝트',        sub: '단기 집중 성과 구조',    bar: 80 },
              { to: 75,  suffix: '%',  label: '블로그 체류시간\n평균 증가',  sub: '카피라이팅 적용 후',      bar: 75 },
              { to: 5,   suffix: '명', label: '월 최대\n파트너 학원',        sub: '퀄리티 유지를 위한 제한', bar: 50 },
            ].map(({ to, suffix, label, sub, bar }, i) => (
              <motion.div
                key={label}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-stone-200 hover:border-lime-400 hover:shadow-md transition group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-lime-600 mb-2 sm:mb-3 leading-none tabular-nums">
                  <CountUp to={to} suffix={suffix} />
                </div>
                <div className="text-zinc-700 font-semibold mb-1 whitespace-pre-line text-[11px] sm:text-sm leading-snug sm:leading-relaxed">{label}</div>
                <div className="text-zinc-500 text-[10px] sm:text-xs mb-3 sm:mb-4 leading-snug">{sub}</div>
                <div className="h-1.5 rounded-full bg-stone-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-lime-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.6, delay: i * 0.1 + 0.4, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CHECK POINT — 다크 + 그리드 ══ */}
      <section className="py-24 px-6 bg-neutral-950" style={gridBg}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="이노업을 선택하는 이유" dark />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug [word-break:keep-all]">Check Point</h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base leading-relaxed [word-break:keep-all]">대부분의 학원 마케팅이 실패하는 이유, 이노업은 다릅니다</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: '키워드 전략',
                title: '[엄마들의 \'새벽 검색어\' 선점]',
                before: { label: '기존 방식', text: '대형 대행사의 기계적인 \'동네 이름 + 학원\' 키워드 도배 ➔ 경쟁에 밀려 노출조차 안 됨' },
                after:  { label: '이노업 방식', text: '\'OO동 수학학원\' 같은 필수 간판 키워드 선점은 기본입니다. 여기에 결제 직전의 학부모가 밤잠 설치며 검색하는 틈새 키워드까지 싹 잡아냅니다.' },
                result: '검색 유입 4주 내 3배↑',
              },
              {
                tag: '카피라이팅',
                title: '[뻔한 홍보글이 무시당하는 시대, \'진심\' 번역]',
                before: { label: '기존 방식', text: '"원장님 약력, 학원 시설, 커리큘럼" 단순 나열 ➔ 지루함을 느낀 학부모가 3초 만에 이탈함' },
                after:  { label: '이노업 방식', text: '밤늦게까지 아이들을 챙기는 원장님의 진심을, 학부모가 감동하는 원고로 다듬습니다.' },
                result: '블로그 체류시간 7.5배↑',
              },
              {
                tag: '전환 설계',
                title: '[조회수가 줄어도 \'전화\'는 더 많이 오게 셋팅]',
                before: { label: '기존 방식', text: '학부모의 행동 유도 없이 그저 뻔한 정보만 주고 끝나는 포스팅 ➔ 글만 읽고 그냥 나가버림 (문의 0건)' },
                after:  { label: '이노업 방식', text: '방문자가 줄었다고 불안해하실 필요 없습니다. 원장님의 글에 감동한 10명의 진짜 학부모가 고민 없이 바로 [전화 상담] 버튼을 누르도록 완벽한 동선을 설계합니다.' },
                result: '월평균 신규 문의 12건↑',
              },
            ].map(({ tag, title, before, after, result }, i) => (
              <motion.div
                key={title}
                className="group bg-zinc-900 border border-zinc-800 hover:border-lime-500/50 rounded-2xl overflow-hidden transition duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* 상단 태그 */}
                <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-zinc-800">
                  <span className="inline-block bg-lime-500/15 text-lime-400 border border-lime-500/30 text-xs font-semibold px-3 py-1 rounded-full mb-3">{tag}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug [word-break:keep-all]">{title}</h3>
                </div>

                {/* Before */}
                <div className="px-4 sm:px-6 py-4 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded">BEFORE</span>
                    <span className="text-zinc-500 text-[11px]">{before.label}</span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed line-through decoration-zinc-600 [word-break:keep-all]">{before.text}</p>
                </div>

                {/* After */}
                <div className="px-4 sm:px-6 py-4 border-b border-zinc-800/60 bg-lime-950/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold bg-lime-500/20 text-lime-400 px-2 py-0.5 rounded">AFTER</span>
                    <span className="text-lime-600 text-[11px]">{after.label}</span>
                  </div>
                  <p className="text-zinc-200 text-sm leading-relaxed [word-break:keep-all]">{after.text}</p>
                </div>

                {/* 결과 */}
                <div className="px-4 sm:px-6 py-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full flex-shrink-0" />
                  <span className="text-lime-400 font-bold text-sm">{result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW WE WORK — 화이트 ══ */}
      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="작업 프로세스" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 leading-snug [word-break:keep-all]">How We Work</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '현황 분석',   desc: '블로그·키워드·경쟁 학원 포지션을 체계적으로 진단합니다.' },
              { step: '02', title: '키워드 발굴', desc: "학부모가 결제 직전 검색하는 '틈새 키워드'를 추출합니다." },
              { step: '03', title: '콘텐츠 제작', desc: '심리 기반 카피와 SEO 구조로 글을 설계하고 발행합니다.' },
              { step: '04', title: '전환 최적화', desc: '읽은 즉시 전화 버튼을 누르도록 동선과 CTA를 셋팅합니다.' },
            ].map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                className="relative p-4 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 hover:border-lime-400 hover:shadow-xl transition duration-300 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {i < 3 && <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-stone-300 z-10" />}
                <div className="text-3xl sm:text-5xl font-extrabold text-stone-200 group-hover:text-lime-100 transition mb-3 sm:mb-4 leading-none select-none">{step}</div>
                <div className="w-8 h-1 bg-lime-500 rounded-full mb-3 sm:mb-4" />
                <h3 className="font-bold text-sm sm:text-lg text-zinc-900 mb-2 leading-snug [word-break:keep-all]">{title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed [word-break:keep-all]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO — 다크 zinc ══ */}
      <section className="py-24 px-6 bg-zinc-900" style={gridBg}>
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="실제 성과" dark />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug [word-break:keep-all]">Portfolio</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portfolio.map(({ label, tag, result, icon: Icon, accent, desc }, i) => {
              const c = portfolioCards[i];
              return (
                <motion.div
                  key={label}
                  className={`${c.bg} border ${c.border} rounded-2xl p-4 sm:p-6 flex flex-col justify-between min-h-[200px] sm:aspect-square cursor-pointer group overflow-hidden relative shadow-sm`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                >
                  {/* 우측 상단 배경 아이콘 */}
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <Icon size={72} className={`${c.iconColor} opacity-10 group-hover:opacity-18 transition duration-300`} strokeWidth={1} />
                  </div>

                  {/* 상단 — 태그 */}
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className={`inline-block ${c.tagBg} ${c.tagText} border ${c.tagBorder} text-xs font-semibold px-3 py-1 rounded-full`}>
                        {tag}
                      </span>
                    </div>
                    <h3 className={`${c.title} font-bold text-lg leading-snug mb-2`}>{label}</h3>
                    <p className={`${c.desc} text-xs leading-relaxed whitespace-pre-line`}>{desc}</p>
                  </div>

                  {/* 배경 대형 액센트 */}
                  <div className={`absolute bottom-14 right-3 text-[5rem] font-extrabold leading-none select-none pointer-events-none ${c.accentOpacity}`}>
                    {accent}
                  </div>

                  {/* 하단 성과 */}
                  <div className="relative z-10 pt-3">
                    <div className={`w-10 h-px mb-3 ${c.divider} border-t`} />
                    <span className="block text-xs font-semibold tracking-widest uppercase opacity-50 mb-1" style={{ color: 'inherit' }}>성과 지표</span>
                    <span className={`${c.result} font-black text-3xl md:text-4xl leading-none tracking-tight`}>{result}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p className="text-center text-zinc-400 text-xs mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            * 모든 수치는 실제 파트너 학원의 비식별화 데이터 기준입니다.
          </motion.p>

          {/* 퀴즈 진입 배너 */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-lime-900/50 to-zinc-900 border border-lime-700/40 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-lime-400 text-xs font-bold tracking-widest uppercase mb-2">3분 무료 진단</div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1 leading-snug [word-break:keep-all]">우리 학원도 이런 결과가 가능할까요?</h3>
              <p className="text-zinc-400 text-sm leading-relaxed [word-break:keep-all]">8가지 질문으로 지금 당장 확인해보세요.</p>
            </div>
            <Link
              to="/quiz"
              className="flex-shrink-0 bg-lime-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-lime-400 transition whitespace-nowrap"
            >
              진단 테스트 시작 →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ 고객 후기 — 스톤 ══ */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel text="파트너 후기" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 leading-snug [word-break:keep-all]">원장님들의 이야기</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: '전단지 돌리고 인스타 광고도 해봤는데 전화가 없었어요. 이노업이랑 블로그 콘텐츠 셋팅하고 4주 만에 주 5건 이상 문의가 들어오기 시작했습니다.',
                name: '이 원장님',
                type: '강서구 초등 수학학원',
                result: '4주 내 문의 5배↑',
                color: 'border-lime-400',
              },
              {
                quote: '키워드를 이렇게 세분화해서 접근하는 곳은 처음이에요. "이 학원 원장이 직접 쓴 글이구나"라는 신뢰를 학부모들이 느낀다고 하더라고요.',
                name: '박 원장님',
                type: '성남시 영어·논술학원',
                result: '블로그 체류 7배↑',
                color: 'border-yellow-400',
              },
              {
                quote: '솔직히 반신반의했는데 지금은 광고비를 거의 안 씁니다. 블로그 하나로 한 달에 신규 등록이 7명 늘었어요. 진작 시작할걸 그랬어요.',
                name: '김 원장님',
                type: '마포구 입시·재수학원',
                result: '신규 등록 월 7명↑',
                color: 'border-lime-400',
              },
            ].map(({ quote, name, type, result, color }, i) => (
              <motion.div
                key={name}
                className={`bg-white border-t-4 ${color} rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* 따옴표 */}
                <div className="text-5xl text-lime-300 font-serif leading-none mb-4 select-none">"</div>
                <p className="text-zinc-700 text-sm leading-loose mb-6">{quote}</p>
                <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                  <div>
                    <div className="font-bold text-zinc-900 text-sm">{name}</div>
                    <div className="text-zinc-400 text-xs">{type}</div>
                  </div>
                  <div className="bg-lime-50 text-lime-700 text-xs font-bold px-3 py-1.5 rounded-full border border-lime-200">
                    {result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA — 퀴즈 유도 ══ */}
      <section id="cta" className="py-28 px-6 bg-neutral-950 relative overflow-hidden" style={gridBg}>
        <div className="glow-orb absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              이번 달 잔여 5자리
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 leading-snug sm:leading-tight [word-break:keep-all]">
              우리 동네 마케팅 정답, 무료로 진단해 드립니다.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-zinc-400 text-base sm:text-lg leading-relaxed sm:leading-loose mb-10 [word-break:keep-all]">
              시대가 변했습니다. 대행사도 모르는 우리 학원의 진짜 문제점, 단 3분 만에 확인해 보세요.
            </motion.p>

            {/* 혜택 목록 */}
            <motion.ul variants={fadeUp} className="mx-auto flex w-max max-w-full flex-col items-start gap-3 mb-12 text-left">
              {[
                '우리 학원 경쟁 현황 키워드 분석',
                '현재 블로그·콘텐츠 빨간펜 진단',
                '즉시 적용 가능한 마케팅 방향 제안',
                '광고 없이 문의받는 전략 리포트',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <span className="w-5 h-5 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lime-400 text-xs font-bold">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* 메인 CTA 버튼 */}
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <Link
                to="/quiz"
                className="group relative flex w-full max-w-md sm:max-w-none items-center justify-center gap-2 sm:gap-3 bg-yellow-400 text-neutral-950 font-black text-base sm:text-lg py-4 sm:py-5 px-8 sm:px-12 rounded-2xl shadow-2xl hover:bg-yellow-300 transition duration-300 overflow-hidden sm:inline-flex sm:w-auto"
              >
                <span className="relative z-10">무료 진단 신청하기</span>
                <span className="relative z-10 text-xl">→</span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
              <p className="text-zinc-600 text-xs mt-4 text-center">※ 테스트 완료 후 24시간 내 맞춤 전략을 제안해드립니다.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-6 bg-zinc-900" style={gridBg}>
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <SectionLabel text="자주 묻는 질문" dark />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug [word-break:keep-all]">FAQ</h2>
          </motion.div>

          <div className="bg-zinc-800/50 rounded-2xl px-4 sm:px-8 py-4 border border-zinc-700">
            {faqs.map((faq, i) => (
              <FaqItemDark key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="py-10 bg-black border-t border-zinc-800 text-zinc-400 text-sm" style={gridBg}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-zinc-300 tracking-tight">
            INNO<span className="text-lime-500">-UP</span>
            <span className="ml-2 text-xs font-light text-zinc-500 tracking-widest uppercase">Marketing Lab</span>
          </div>
          <p className="text-center">© 2025 INNO-UP Marketing Lab. All rights reserved.</p>
          <p className="text-zinc-500 text-xs">사업자등록번호 000-00-00000</p>
        </div>
      </footer>

    </div>
  );
};

export default InnoUpLandingV3;
