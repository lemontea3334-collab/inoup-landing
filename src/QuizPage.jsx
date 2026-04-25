import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, RotateCcw, Phone, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const questions = [
  {
    q: '우리 학원 블로그나 홈페이지가 있나요?',
    options: [
      { label: '네이버 블로그를 꾸준히 운영 중이에요', score: 3 },
      { label: '있긴 한데 거의 업데이트 안 해요', score: 1 },
      { label: '없어요 / 뭘 써야 할지 모르겠어요', score: 0 },
    ],
  },
  {
    q: '지금 학원 홍보로 가장 많이 쓰는 방법은?',
    options: [
      { label: '전단지, 현수막, 지역 맘카페 광고', score: 0 },
      { label: '인스타그램·유튜브 운영 중', score: 1 },
      { label: '블로그 SEO + 검색 유입에 집중 중', score: 3 },
    ],
  },
  {
    q: '학부모가 우리 학원을 처음 알게 되는 경로는?',
    options: [
      { label: '지인 소개가 대부분이에요', score: 1 },
      { label: '네이버 검색으로 찾아와요', score: 3 },
      { label: '광고(배너·SNS 유료광고)를 보고 와요', score: 0 },
    ],
  },
  {
    q: '최근 한 달 신규 문의는 몇 건인가요?',
    options: [
      { label: '10건 이상이에요', score: 3 },
      { label: '3~9건 정도예요', score: 1 },
      { label: '2건 이하이거나 거의 없어요', score: 0 },
    ],
  },
  {
    q: '"OO동 수학학원" 외에 틈새 키워드를 알고 있나요?',
    options: [
      { label: '몇 가지 알고 실제로 사용 중이에요', score: 3 },
      { label: '들어봤지만 어떻게 찾는지 모르겠어요', score: 1 },
      { label: '키워드 전략? 처음 듣는 개념이에요', score: 0 },
    ],
  },
  {
    q: '우리 학원 블로그 글을 읽은 후 전화 문의로 이어지나요?',
    options: [
      { label: '네, 종종 "블로그 보고 전화했어요" 라고 해요', score: 3 },
      { label: '가끔 있는 것 같아요', score: 1 },
      { label: '거의 없거나 블로그 자체가 없어요', score: 0 },
    ],
  },
  {
    q: '지난 3개월 마케팅 비용은 얼마나 썼나요?',
    options: [
      { label: '월 10만 원 이하 (거의 안 씀)', score: 1 },
      { label: '월 10~50만 원 (광고비 적당히)', score: 0 },
      { label: '월 50만 원 이상 (광고에 많이 투자)', score: 0 },
    ],
  },
  {
    q: '경쟁 학원과 비교할 때 우리 학원의 차별점을 글로 표현할 수 있나요?',
    options: [
      { label: '명확하게 표현할 수 있어요', score: 3 },
      { label: '막연하게는 알지만 글로 쓰기가 어려워요', score: 1 },
      { label: '솔직히 뭐가 다른지 잘 모르겠어요', score: 0 },
    ],
  },
];

const results = [
  {
    range: [0, 7],
    grade: 'F',
    emoji: '🚨',
    icon: XCircle,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    title: '긴급 처방이 필요해요',
    subtitle: '지금 당장 마케팅 구조를 바꾸지 않으면 신규 문의는 계속 0에 가까울 거예요.',
    points: [
      '검색 유입 채널이 거의 없는 상태예요',
      '광고비만 쓰고 효율이 낮을 가능성이 높아요',
      '경쟁 학원에 검색 노출을 빼앗기고 있어요',
    ],
    cta: '지금 바로 무료 진단 신청하기',
    ctaColor: 'bg-red-500 hover:bg-red-400',
  },
  {
    range: [8, 15],
    grade: 'C',
    emoji: '⚠️',
    icon: AlertTriangle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    title: '아쉽지만 아직 최적화가 안 됐어요',
    subtitle: '방향은 맞지만 구조적으로 허점이 있어요. 지금 보완하면 빠르게 개선 가능해요.',
    points: [
      '키워드 전략이 아직 정밀하지 않아요',
      '콘텐츠가 전환으로 연결되지 않는 구조예요',
      '조금만 다듬으면 큰 효과를 볼 수 있는 상태예요',
    ],
    cta: '최적화 방법 상담받기',
    ctaColor: 'bg-yellow-400 hover:bg-yellow-300 text-neutral-950',
  },
  {
    range: [16, 24],
    grade: 'A',
    emoji: '✅',
    icon: CheckCircle2,
    color: 'text-lime-400',
    bg: 'bg-lime-500/10',
    border: 'border-lime-500/30',
    title: '잘 하고 계세요! 더 올릴 수 있어요',
    subtitle: '기본 구조는 잘 잡혀 있어요. 이노업과 함께라면 지금보다 3배 이상 문의를 만들 수 있어요.',
    points: [
      '블로그·검색 유입 기반이 어느 정도 있어요',
      '콘텐츠 전략을 고도화하면 상위 1%로 올라갈 수 있어요',
      '경쟁 학원을 확실히 앞설 기회가 있어요',
    ],
    cta: '더 높은 단계로 올라가기',
    ctaColor: 'bg-lime-500 hover:bg-lime-400',
  },
];

const gridBg = {
  backgroundImage: `linear-gradient(rgba(163,230,53,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(163,230,53,0.07) 1px, transparent 1px)`,
  backgroundSize: '40px 40px',
};

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const result = results.find(r => totalScore >= r.range[0] && totalScore <= r.range[1]);
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (score) => setSelected(score);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (current + 1 >= questions.length) {
      setAnswers(newAnswers);
      setFinished(true);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 font-[Paperlogy,sans-serif]" style={gridBg}>

      {/* GNB */}
      <nav className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft size={16} />
            메인으로
          </Link>
          <div className="text-base font-bold text-white">
            INNO<span className="text-lime-500">-UP</span>
            <span className="ml-2 text-xs font-light text-zinc-500">학원 마케팅 진단</span>
          </div>
          <div className="text-zinc-500 text-sm">{finished ? '완료' : `${current + 1} / ${questions.length}`}</div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 pt-32 pb-20">

        {!finished ? (
          <>
            {/* 프로그레스 바 */}
            <div className="mb-10">
              <div className="flex justify-between text-xs text-zinc-500 mb-2">
                <span>진행률</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-lime-500 rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* 질문 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-2 text-lime-500 text-sm font-semibold tracking-widest uppercase">
                  Q{current + 1}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-tight">
                  {questions[current].q}
                </h2>

                <div className="space-y-4">
                  {questions[current].options.map(({ label, score }, i) => (
                    <motion.button
                      key={label}
                      onClick={() => handleSelect(score)}
                      className={`w-full text-left px-6 py-5 rounded-2xl border transition duration-200 ${
                        selected === score
                          ? 'bg-lime-500/15 border-lime-500 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition ${
                          selected === score ? 'border-lime-500 bg-lime-500' : 'border-zinc-600'
                        }`}>
                          {selected === score && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-base leading-relaxed">{label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-10">
                  {current > 0 ? (
                    <button
                      onClick={() => { setCurrent(current - 1); setSelected(answers[current - 1] ?? null); setAnswers(answers.slice(0, current)); }}
                      className="text-zinc-500 hover:text-zinc-300 transition text-sm flex items-center gap-1"
                    >
                      <ArrowLeft size={14} /> 이전
                    </button>
                  ) : <div />}
                  <button
                    onClick={handleNext}
                    disabled={selected === null}
                    className={`flex items-center gap-2 font-bold py-3 px-8 rounded-xl transition ${
                      selected !== null
                        ? 'bg-lime-500 text-white hover:bg-lime-400'
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    {current + 1 === questions.length ? '결과 보기' : '다음'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* 결과 화면 */
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* 점수 */}
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">{result.emoji}</div>
                <div className={`inline-block text-7xl font-black mb-2 ${result.color}`}>
                  {totalScore}
                  <span className="text-3xl text-zinc-500">/{questions.length * 3}</span>
                </div>
                <div className={`inline-block ml-4 text-2xl font-black px-4 py-1 rounded-xl ${result.bg} ${result.color}`}>
                  등급 {result.grade}
                </div>
              </div>

              {/* 결과 카드 */}
              <div className={`bg-zinc-900 border ${result.border} rounded-3xl p-8 mb-8`}>
                <h2 className={`text-2xl font-black mb-3 ${result.color}`}>{result.title}</h2>
                <p className="text-zinc-400 text-base leading-loose mb-6">{result.subtitle}</p>

                <div className="space-y-3">
                  {result.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <result.icon size={16} className={`${result.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-zinc-300 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-6">
                <h3 className="text-white font-bold text-lg mb-2">무료 상담으로 해결책 받기</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  진단 결과를 바탕으로 우리 학원에 딱 맞는 마케팅 전략을 제안해드립니다.<br />
                  광고 없이 문의받는 구조, 지금 시작할 수 있어요.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://open.kakao.com/o/XXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${result.ctaColor} text-white font-bold py-4 px-6 rounded-xl transition text-center text-sm`}
                  >
                    {result.cta}
                  </a>
                  <a
                    href="tel:010-0000-0000"
                    className="flex items-center justify-center gap-2 border border-zinc-700 text-zinc-300 font-semibold py-4 px-6 rounded-xl hover:border-lime-500/50 hover:text-white transition text-sm"
                  >
                    <Phone size={16} />
                    바로 전화하기
                  </a>
                </div>

                {/* 혜택 문구 */}
                <div className="text-center mt-5">
                  <p className="text-zinc-400 text-[13px] leading-relaxed">
                    🎁 <span className="text-zinc-300">[마케팅 진행 혜택]</span> 프리미엄 랜딩페이지 무료 제작 지원
                    <span className="text-zinc-500"> (매월 선착순 3곳)</span>
                  </p>
                </div>
              </div>

              {/* 다시 하기 + 메인 */}
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition text-sm py-3 px-5 rounded-xl border border-zinc-800 hover:border-zinc-700"
                >
                  <RotateCcw size={14} />
                  다시 테스트하기
                </button>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition text-sm py-3 px-5 rounded-xl border border-zinc-800 hover:border-zinc-700"
                >
                  <ArrowLeft size={14} />
                  메인으로 돌아가기
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
