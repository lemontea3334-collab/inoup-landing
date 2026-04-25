import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, BookOpen, TrendingUp, Award, Users, Lightbulb, MessageSquare } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(163,230,53,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(163,230,53,0.08) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

export default function AboutPage() {
  return (
    <div className="leading-relaxed font-[Paperlogy,sans-serif]">

      {/* GNB */}
      <nav className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-zinc-400 hover:text-white transition text-sm">
            <ArrowLeft size={16} />
            메인으로
          </Link>
          <div className="text-xl font-bold tracking-tight text-white">
            INNO<span className="text-lime-500">-UP</span>
            <span className="ml-2 text-xs font-light text-zinc-500 tracking-widest uppercase">Marketing Lab</span>
          </div>
          <Link to="/quiz" className="bg-lime-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-lime-400 transition">
            무료 진단 받기
          </Link>
        </div>
      </nav>

      {/* 히어로 */}
      <section className="min-h-screen flex items-center bg-neutral-950 pt-24 pb-16 px-6" style={gridBg}>
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            variants={stagger} initial="hidden" animate="show"
          >
            {/* 텍스트 */}
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 border border-lime-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                이노업 마케팅랩 소개
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                광고비 없이<br />
                <span className="text-lime-400">전화벨을 울리는</span><br />
                마케팅 로직
              </motion.h1>
              <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-loose mb-8">
                이노업은 화려한 포장보다 학부모의 검색 심리를 선점하는
                날카로운 마케팅 구조를 만드는 곳입니다.
                지역 1등 학원의 공통점은 광고비가 아니라 콘텐츠 전략이었습니다.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-4">
                <Link to="/quiz" className="bg-lime-500 text-white font-bold py-3 px-7 rounded-xl hover:bg-lime-400 transition">
                  내 학원 진단해보기
                </Link>
                <a href="mailto:contact@inno-up.kr" className="border border-zinc-700 text-white font-semibold py-3 px-7 rounded-xl hover:border-lime-500/50 transition">
                  바로 문의하기
                </a>
              </motion.div>
            </div>

            {/* 대표 프로필 카드 */}
            <motion.div variants={fadeUp} className="relative">
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-lime-500/5 rounded-full blur-3xl" />

                {/* 프로필 사진 영역 */}
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-lime-800/50 to-zinc-800 border border-lime-500/20 flex items-center justify-center mb-6 text-zinc-500 text-xs">
                  [대표 사진]
                </div>

                <div className="text-white font-bold text-xl mb-1">이노업 대표</div>
                <div className="text-lime-400 text-sm font-semibold mb-4">학원 마케팅 전략가</div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  7년간 콘텐츠 마케팅을 연구하며 학원 업종 특화 SEO 전략을 개발했습니다.
                  학부모의 검색 패턴과 심리를 분석해 "광고 없이 문의받는 구조"를 만드는 것에 집중하고 있습니다.
                </p>

                <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-6">
                  {[
                    { label: '파트너 학원', value: '20+' },
                    { label: '평균 문의 증가', value: '3배' },
                    { label: '업력', value: '7년' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center">
                      <div className="text-lime-400 font-black text-2xl leading-none">{value}</div>
                      <div className="text-zinc-500 text-xs mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 이노업의 철학 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-lime-600">
              <span className="w-3 h-3 bg-lime-500 rounded-sm rotate-45" />
              <span className="font-semibold text-sm tracking-widest uppercase">Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">이노업이 믿는 것</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: '타겟 정밀도가 전부다', desc: '넓게 뿌리는 광고보다 학부모가 결제 직전 입력하는 단어 하나가 더 강력합니다. 정밀한 키워드 전략이 모든 것의 시작입니다.' },
              { icon: Lightbulb, title: '심리가 카피를 만든다', desc: '원장님의 교육 철학을 학부모의 불안·결핍·욕구와 연결할 때, 글이 아니라 신뢰가 만들어집니다.' },
              { icon: TrendingUp, title: '구조가 전환을 만든다', desc: '좋은 글도 동선이 잘못되면 전화 한 통 없습니다. 읽는 즉시 행동하게 만드는 CRO 설계가 핵심입니다.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="p-8 rounded-2xl bg-stone-50 border border-stone-200 hover:border-lime-400 hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-lime-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-zinc-900 text-lg mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 스토리 */}
      <section className="py-24 px-6 bg-neutral-950" style={gridBg}>
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-lime-400">
              <span className="w-3 h-3 bg-lime-500 rounded-sm rotate-45" />
              <span className="font-semibold text-sm tracking-widest uppercase">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">왜 이노업을 시작했나</h2>
          </motion.div>

          <motion.div
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-zinc-300 text-base leading-loose">
              <p>
                처음엔 단순한 블로그 대행이었습니다.
                글을 써드리면 학원이 잘 될 거라 믿었습니다.
              </p>
              <p>
                그런데 어느 날 3개월째 파트너십을 이어오던 원장님께서 이런 말을 하셨습니다.
              </p>
              <blockquote className="border-l-4 border-lime-500 pl-6 py-2 my-6">
                <p className="text-white text-lg font-semibold italic">
                  "글은 잘 올라가는데... 전화는 왜 안 오는 거죠?"
                </p>
              </blockquote>
              <p>
                그 질문이 저를 바꿨습니다. 콘텐츠의 질이 아니라 <strong className="text-lime-400">구조의 문제</strong>였습니다.
                어떤 키워드로 유입시키고, 어떤 감정을 건드리며, 어디서 전화 버튼을 보여주는가.
              </p>
              <p>
                이노업은 그 구조를 설계합니다. 글쓰기 대행이 아닌, <strong className="text-lime-400">전화벨이 울리는 시스템</strong>을 만드는 곳입니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 이노업 vs 대형 대행사 비교표 */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-lime-600">
              <span className="w-3 h-3 bg-lime-500 rounded-sm rotate-45" />
              <span className="font-semibold text-sm tracking-widest uppercase">Comparison</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">이노업이 다른 이유</h2>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="py-4 px-6 text-left font-semibold w-1/3">항목</th>
                  <th className="py-4 px-6 text-center font-semibold text-zinc-400">대형 대행사</th>
                  <th className="py-4 px-6 text-center font-semibold text-zinc-400">직접 운영</th>
                  <th className="py-4 px-6 text-center font-bold text-lime-400 border-l border-lime-500/30">이노업</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: '학원 업종 전문성', large: '✕ 다업종 혼합', self: '△ 개인 역량', inno: '✓ 학원 특화' },
                  { item: '키워드 전략', large: '△ 일반 SEO', self: '✕ 리소스 부족', inno: '✓ 학부모 심리 기반' },
                  { item: '카피라이팅', large: '△ 템플릿 사용', self: '✕ 전문성 부족', inno: '✓ 전환 최적화 설계' },
                  { item: '월 담당 학원 수', large: '50~100개', self: '—', inno: '월 최대 5개' },
                  { item: '성과 추적 & 피드백', large: '△ 리포트만 제공', self: '✕ 기준 없음', inno: '✓ 주간 성과 공유' },
                  { item: '비용 대비 효율', large: '낮음 (대규모 비용)', self: '높음 (시간 비용↑)', inno: '✓ 합리적 + 고효율' },
                ].map(({ item, large, self, inno }, i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}>
                    <td className="py-4 px-6 font-semibold text-zinc-800">{item}</td>
                    <td className="py-4 px-6 text-center text-zinc-400">{large}</td>
                    <td className="py-4 px-6 text-center text-zinc-400">{self}</td>
                    <td className="py-4 px-6 text-center font-bold text-lime-600 border-l border-lime-200 bg-lime-50/50">{inno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 작업 방식 타임라인 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-lime-600">
              <span className="w-3 h-3 bg-lime-500 rounded-sm rotate-45" />
              <span className="font-semibold text-sm tracking-widest uppercase">Timeline</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">계약 후 한 달 로드맵</h2>
            <p className="text-zinc-500 mt-3">언제 뭘 하는지 투명하게 공개합니다</p>
          </motion.div>

          <div className="relative">
            {/* 세로선 */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-stone-200" />

            {[
              { week: '1주차', title: '현황 정밀 진단', desc: '학원 블로그·경쟁사·키워드 포지션 전수 분석. 틈새 키워드 후보 30개 발굴.', color: 'bg-lime-500' },
              { week: '2주차', title: '키워드 & 카피 설계', desc: '선택 키워드 확정 + 심리 기반 카피 초안 작성. 원장님 피드백 반영.', color: 'bg-lime-500' },
              { week: '3주차', title: '콘텐츠 발행 & CRO 셋팅', desc: '첫 포스팅 발행 + 블로그 CTA 동선 최적화. 전화 버튼 위치/문구 셋팅.', color: 'bg-yellow-400' },
              { week: '4주차', title: '성과 측정 & 다음 달 전략', desc: '유입·체류·전화 클릭 분석. 결과 리포트 공유 + 2개월차 전략 수립.', color: 'bg-yellow-400' },
            ].map(({ week, title, desc, color }, i) => (
              <motion.div
                key={week}
                className="relative flex gap-8 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className={`w-16 h-16 ${color} rounded-2xl flex-shrink-0 flex items-center justify-center z-10`}>
                  <span className="text-white font-black text-xs text-center leading-tight">{week}</span>
                </div>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 flex-1">
                  <h3 className="font-bold text-zinc-900 text-base mb-2">{title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-lime-950 relative overflow-hidden" style={gridBg}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              이번 달 잔여 슬롯 확인하기
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              먼저 내 학원 상태를<br />무료로 진단해보세요
            </h2>
            <p className="text-lime-200 mb-10 leading-loose">
              3분 테스트로 우리 학원 마케팅의 구멍을 찾아드립니다.<br />
              결과에 따라 맞춤 전략도 제안해드려요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz" className="bg-yellow-400 text-neutral-950 font-bold py-4 px-10 rounded-xl hover:bg-yellow-300 transition text-base">
                무료 진단 테스트 시작 →
              </Link>
              <Link to="/" className="border border-lime-700 text-lime-300 font-semibold py-4 px-10 rounded-xl hover:border-lime-500 transition text-base">
                메인 페이지로
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
