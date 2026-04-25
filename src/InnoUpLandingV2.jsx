import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const InnoUpLandingV2 = () => {
  return (
    <div className="text-gray-900 leading-relaxed bg-white">

      {/* GNB */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-900">
            INNO-UP <span className="text-sm font-light text-gray-400">Marketing Lab</span>
          </div>
          <a href="#cta" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            무료 진단 5명 한정
          </a>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section className="pt-32 pb-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            className="md:col-span-7"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              대형 대행사가 말하지 않는 비밀
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 break-keep text-blue-950 leading-snug">
              전단지 1,000장, 인스타 광고에{' '}
              <span className="text-blue-600 font-extrabold">수백만 원</span> 쓰시고
              <br />
              몇 통의 전화를 받으셨나요?
            </h1>
            <p className="text-lg text-gray-600 mb-10 break-keep font-light leading-loose">
              지역 1등 학원은 '광고비'가 아니라 '학부모의 검색 심리'를 선점합니다.
              <br />
              이노업은 화려한 포장 대신, 전화 벨소리를 만드는 날카로운 마케팅 로직을 증명합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="bg-blue-600 text-white font-semibold text-base py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                우리 학원 무료 진단하기
              </a>
              <a href="#lab" className="bg-white text-gray-700 font-semibold text-base py-4 px-8 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition duration-300">
                실험실 일지 보기
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-blue-100 border-4 border-white shadow-2xl flex items-center justify-center text-gray-400 text-sm font-light">
              [대표님 사진]
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Real Proof */}
      <section id="lab" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">"말로만 하지 않습니다."</h2>
            <p className="text-gray-500 text-lg font-light">이노업이 파트너 학원을 위해 분석한 실제 자료의 일부를 공개합니다.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="text-blue-600 font-semibold text-sm mb-2">사례 1. OO지역 수학 교습소 키워드 분석</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">"OO동 수학학원"의 함정</h3>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm font-light mb-5">
                [실제 분석 그래프 / 엑셀 캡처]
              </div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                경쟁만 치열한 키워드를 버리고, 학부모가 새벽 2시에 검색하는 "OO초 단원평가 대비" 키워드로 변경 후 문의 3배 상승.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="text-blue-600 font-semibold text-sm mb-2">사례 2. OO 입시학원 블로그 진단</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">커리큘럼 나열의 폐해</h3>
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm font-light mb-5">
                [블로그 글 빨간펜 진단 캡처]
              </div>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                학부모의 '결핍'을 건드리는 심리 기반 카피라이팅으로 체류 시간 20초에서 2분 30초로 상승.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: 3가지 무기 */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">동네 1등 학원을 만드는 이노업의 3가지 무기</h2>
            <p className="text-gray-500 font-light">광고비 0원. 오직 콘텐츠 로직으로만 증명합니다.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: '초정밀 타겟 키워드',
                desc: '"OO동 수학학원" 같이 경쟁만 치열한 단어가 아닌, 결제율이 높은 \'학부모의 틈새 검색어\'를 찾아냅니다.',
                delay: 0,
              },
              {
                icon: '✍️',
                title: '심리 기반 카피라이팅',
                desc: '뻔한 커리큘럼 나열이 아닙니다. 원장님의 교육 철학을 학부모의 \'결핍\'과 연결해 신뢰를 만듭니다.',
                delay: 0.1,
              },
              {
                icon: '📞',
                title: '전환율(CRO) 셋팅',
                desc: '글을 잘 읽고 나가버리면 소용없습니다. 읽은 즉시 \'전화 버튼\'을 누르도록 블로그 동선을 설계합니다.',
                delay: 0.2,
              },
            ].map(({ icon, title, desc, delay }) => (
              <motion.div
                key={title}
                className="bg-white p-8 rounded-2xl border border-gray-100 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-5">{icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Live Lab */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-900">
              "마케팅 회사인데, 왜 블로그 글이 별로 없죠?"
            </h2>
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100">
              <p className="text-lg text-gray-600 mb-6 font-light leading-loose">
                남의 블로그를 대신 써주는 대행사가, 왜 정작 자기 블로그는 이제 막 시작했을까요?
              </p>
              <p className="text-lg text-gray-800 mb-6 font-semibold leading-loose">
                "저는 보여주기식 포장보다, 파트너 원장님들의 '실제 상담 문의'를 늘리는 데 제 모든 시간을 쏟았기 때문입니다."
              </p>
              <p className="text-lg text-gray-600 font-light leading-loose">
                현재 보시는 이 페이지와 제 블로그는, 이노업이 오직 마케팅 로직만으로 지역 1위를 달성하는 과정을 투명하게 공개하는{' '}
                <strong className="text-blue-600 font-semibold">『마케팅 라이브 실험실』</strong>입니다. 성장 과정을 지켜보며 실력을 판단해 주세요.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section id="cta" className="py-28 px-6 bg-blue-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="inline-block bg-blue-800 text-blue-200 px-4 py-1 rounded-full text-sm font-semibold mb-8">
              이번 달 잔여 5자리
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              우리 동네 경쟁 학원,<br />제가 대신 분석해 드립니다.
            </h2>
            <p className="text-blue-200 mb-10 text-lg font-light leading-loose">
              한 달에 딱 5분에게만 제공되는 무료 상권/블로그 분석 리포트를 받아보세요.<br />
              이 리포트 하나만으로도 당장 마케팅 방향이 잡히실 겁니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="text"
                placeholder="학원명 / 연락처를 남겨주세요"
                className="px-6 py-4 rounded-lg w-full sm:w-96 text-gray-900 font-light focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition duration-300 whitespace-nowrap">
                리포트 신청하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-gray-500 text-center text-sm font-light tracking-wide">
        <p>© 2024 INNO-UP Marketing Lab. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default InnoUpLandingV2;
