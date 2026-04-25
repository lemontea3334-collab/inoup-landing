import React from 'react';

const InnoUpLanding = () => {
  return (
    <div className="text-gray-900 leading-relaxed">

      {/* Section 1: Hero */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-blue-800 text-blue-200 px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide">
            이노업마케팅 1개월 집중 프로젝트
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 break-keep leading-snug tracking-normal">
            전단지 1,000장 뿌리고 <br className="hidden md:block" />
            <span className="text-yellow-400 font-extrabold">몇 통의 상담 전화</span>를 받으셨나요?
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 break-keep font-light leading-relaxed">
            대형 대행사가 놓치는 동네 학원 마케팅의 본질.<br />
            학부모가 새벽 2시에 검색하는 '진짜 키워드'로 전화 벨소리를 바꿔드립니다.
          </p>
          <a href="#cta" className="bg-yellow-400 text-blue-900 font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
            우리 학원 무료 진단받기
          </a>
        </div>
      </section>

      {/* Section 2: Live Lab (Trust Building) */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 tracking-normal">
            "마케팅 회사인데, 왜 블로그 글이 별로 없죠?"
          </h2>
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 mb-6 font-light leading-loose">
              남의 블로그를 대신 써주는 대행사가, 왜 정작 자기 블로그는 이제 막 시작했을까요?
            </p>
            <p className="text-lg text-gray-800 mb-6 font-semibold leading-loose">
              "저는 보여주기식 포장보다, 파트너 원장님들의 '실제 상담 문의'를 늘리는 데 제 모든 시간을 쏟았기 때문입니다."
            </p>
            <p className="text-lg text-gray-700 font-light leading-loose">
              현재 보시는 이 페이지와 제 블로그는, 이노업이 오직 마케팅 로직만으로 지역 1위를 달성하는 과정을 투명하게 공개하는 <strong className="text-blue-600 font-semibold">『마케팅 라이브 실험실』</strong>입니다. 성장 과정을 지켜보며 실력을 판단해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Proof / Strategy */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 tracking-normal">동네 1등 학원을 만드는 이노업의 3가지 무기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">초정밀 타겟 키워드</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">"OO동 수학학원" 같이 경쟁만 치열한 단어가 아닌, 결제율이 높은 '학부모의 틈새 검색어'를 찾아냅니다.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">심리 기반 카피라이팅</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">뻔한 커리큘럼 나열이 아닙니다. 원장님의 교육 철학을 학부모의 '결핍'과 연결해 신뢰를 만듭니다.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">전환율(CRO) 셋팅</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">글을 잘 읽고 나가버리면 소용없습니다. 읽은 즉시 '전화 버튼'을 누르도록 블로그 동선을 설계합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section id="cta" className="py-24 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-normal">
            우리 동네 경쟁 학원, 제가 대신 분석해 드립니다.
          </h2>
          <p className="text-gray-400 mb-10 text-lg font-light leading-loose">
            한 달에 딱 5분에게만 제공되는 무료 상권/블로그 분석 리포트를 받아보세요.<br/>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-gray-500 text-center text-sm font-light tracking-wide">
        <p>© 2024 INNO-UP Marketing Lab. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default InnoUpLanding;
