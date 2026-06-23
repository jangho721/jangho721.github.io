---
name: career-positioning
description: "Jangho의 직군 포지셔닝 분석, GenAI 5년차 역량, AI 에이전트 연습 로드맵 및 지표"
metadata: 
  node_type: memory
  type: project
  originSessionId: 0658b2ec-d1f8-4a38-81c6-4acf8edd6a2d
---

## 포지션 진단 (2026년 6월 기준)

**현재 경력**: 산업 경력 약 3년 (TmaxEduAI 2년 + Ailys 1년), 연구 포함 ML 경험 약 6년

**하는 일의 핵심**: 비즈니스 의사결정 문제를 ML로 풀고 KPI로 증명하는 사람
- DS도 MLE도 SWE도 아닌 세 직군의 교차점
- "인사이트를 만드는" DS와 달리 **decision을 만드는** 사람
- "시스템을 만드는" MLE와 달리 **문제를 정의하는** 사람

**가장 맞는 타이틀**:
- `Applied Scientist` — 연구(1저자 논문) + 프로덕션 배포를 둘 다 가진 사람
- `AI Engineer` — 2026년 가장 빠르게 성장 중인 직군, DS+MLE 경계에서 AI 시스템을 비즈니스 목적에 맞게 만드는 사람
- `Decision Scientist` — fintech/보험 도메인 특화 (해외 금융사에 존재하는 타이틀)

**피해야 할 타이틀**: Data Analyst, BI Engineer, ML Platform Engineer

**JD 필터링 키워드**: `LLM`, `decision system`, `ML production`, `RAG`, `fintech AI`, `credit risk ML`

---

## 2026년 GenAI 5년차+ 필요 역량

1. **RAG 아키텍처 + AI 에이전트 시스템 설계** — LLM을 데이터·클라우드·보안과 연결하는 시스템 사고. 이 능력 유무로 시니어 여부가 갈림
2. **프로덕션 LLM 배포** — RAG + agents를 실제 서비스로 운영한 경험이 희소 자원
3. **도메인 × AI 결합** — fintech, healthcare 등 수직 도메인 전문성 + AI
4. **평가와 거버넌스** — 정확도 이상의 신뢰성·편향·비용을 판단하는 능력
5. **비즈니스 KPI 연결** — 모델 성능이 아니라 비즈니스 결과로 설명하는 능력

**현재 갭**: 기술적 ML + KPI 연결은 강하지만, **LLM 에이전트 아키텍처 깊이**가 포트폴리오에 드러나지 않음

---

## AI 에이전트 연습 로드맵

### 단계 1 — 기초 단일 에이전트 (1~2개월)

목표: tool-use + RAG 기본 흐름 익히기

| 프로젝트 | 설명 | 핵심 스킬 |
|---|---|---|
| **보험 Q&A 에이전트** | 약관 PDF를 벡터 DB에 인덱싱, 자연어 질문 → 약관 근거 답변 | RAG, 벡터 검색, 청킹 전략 |
| **재무 뉴스 요약 에이전트** | 특정 회사/도메인 뉴스를 실시간으로 수집·요약·분류 | tool-calling, web search tool |
| **SQL 에이전트** | 자연어 → SQL 생성 → DB 조회 → 결과 해석 | tool-calling, structured output |

### 단계 2 — 도메인 특화 에이전트 (2~3개월)

목표: fintech 도메인에서 실제로 의미 있는 에이전트 만들기

| 프로젝트 | 설명 | 핵심 스킬 |
|---|---|---|
| **손해율 분석 에이전트** | GA 리포트 + 내부 데이터 조회 → "이번 분기 손해율 주요 드라이버는?" 답변 | multi-tool, data analysis tool |
| **신용 리스크 설명 에이전트** | 모델 예측 결과 → 자연어 설명 생성 (규제 대응용 explainability) | LLM + ML 모델 연동 |
| **reject inference 리서치 에이전트** | 논문/레포트 검색 → 관련 방법론 요약 → 적용 가능성 평가 | RAG + reasoning chain |

### 단계 3 — 멀티 에이전트 시스템 (3~4개월)

목표: 에이전트 간 협업 오케스트레이션

| 프로젝트 | 설명 | 핵심 스킬 |
|---|---|---|
| **언더라이팅 의사결정 파이프라인** | 데이터 수집 에이전트 → 리스크 평가 에이전트 → 규정 검토 에이전트 → 최종 결정 에이전트 | LangGraph / CrewAI, human-in-the-loop |
| **대출 심사 보조 시스템** | 지원자 정보 분석 → reject inference 결과 해석 → 심사역에게 요약 리포트 생성 | multi-agent orchestration, structured output |

**추천 프레임워크**: LangGraph (복잡한 상태 관리), LangChain (도구 연결), PydanticAI (타입 안전성)

---

## AI 에이전트 평가 지표 (2026 기준)

2026년 기준 에이전트 평가는 **"결과"가 아니라 "경로(trajectory)"**를 평가하는 방향으로 전환됨.

### 핵심 지표

| 지표 | 설명 | 언제 씀 |
|---|---|---|
| **Task Completion Rate** | 에이전트가 최종 목표를 달성했는지 (0/1) | 가장 기본 |
| **Step Efficiency** | 목표 달성에 필요한 최소 스텝 대비 실제 스텝 수 | 비용·지연 최적화 |
| **Tool Correctness** | 상황에 맞는 도구를 골랐는지 (tool selection accuracy) | tool-use 에이전트 |
| **Argument Correctness** | 도구를 맞게 골랐더라도 인자를 올바르게 넘겼는지 | 세부 정확도 |
| **Faithfulness** | 에이전트 답변이 검색된 문서/데이터에 근거하는지 | RAG 에이전트 |
| **Answer Relevancy** | 질문에 얼마나 관련성 높은 답을 했는지 | 사용자 경험 |
| **Plan Adherence** | 초기 계획대로 실행했는지, 이탈 여부 | 복잡한 워크플로우 |
| **Reasoning Coherence** | 중간 추론 단계가 논리적으로 일관되는지 | 설명 가능성 |
| **pass@k** | k번 시도 중 1번이라도 성공하면 통과 | 탐색적 에이전트 |
| **pass^k** | k번 시도 전부 성공해야 통과 | 프로덕션 안정성 |

### Trajectory 평가란

에이전트는 tool call → LLM completion → retrieval → planning 등 여러 span으로 구성된 trace를 생성함. 전통적 LLM 평가(단일 턴 정확도)로는 이걸 잡지 못함.

**실무 접근법**:
1. trace를 span 단위로 분해
2. 각 span별로 지표 측정 (tool correctness, faithfulness 등)
3. LLM-as-Judge로 reasoning quality 자동 평가
4. 프로덕션에서는 latency + cost도 함께 모니터링

**주요 평가 툴**: DeepEval, Confident AI, LangSmith, RAGAS (RAG 특화)

---

## 포트폴리오에 당장 반영할 것

ailys.html AI agents 섹션 — 완료 (2026-06-22)
- RAG + tool use + multi-agent 아키텍처 명시
- Claude(외부) + 자체 호스팅 모델(보안) 하이브리드 구조 기재
- 보안 이유로 모델을 나눈 설계 결정 설명

---

## 시스템 사고 역량이란 (데이터·클라우드·보안 연결)

"데이터·클라우드·보안과 연결하는 시스템 사고"는 GenAI 시니어 역량 중 가장 추상적으로 들리는 항목. 구체적으로 풀면:

### 정의
LLM 하나가 잘 작동하는 게 아니라, **LLM이 포함된 전체 시스템이 프로덕션에서 안정적으로 작동하도록 설계하는 능력**.
모델 선택보다 모델 주변 파이프라인, 데이터 흐름, 보안 경계, 장애 지점을 보는 눈.

### 구성 요소별 사례

**① 데이터 연결**
- 문제: LLM은 학습 시점 이후 데이터를 모름 → RAG로 실시간 데이터 공급
- 사례: 내부 보험 book 데이터를 벡터 DB에 인덱싱 → 쿼리 시 청크 검색 → LLM 컨텍스트에 주입
- 설계 결정 포인트: 청크 크기 (너무 크면 노이즈, 너무 작으면 맥락 누락), 임베딩 모델 선택, 메타데이터 필터링

**② 클라우드 연결**
- 문제: 노트북에서 돌아가는 에이전트 ≠ 프로덕션 에이전트
- 사례: AWS SageMaker에서 모델 서빙 + API Gateway로 엔드포인트 노출 + Airflow로 배치 파이프라인
- 설계 결정 포인트: 동기 vs 비동기 처리, 오토스케일링 설정, 비용 vs 응답 속도 트레이드오프

**③ 보안 연결**
- 문제: 기업 내부 데이터(고객 정보, 청구 데이터)를 외부 LLM API에 보내면 데이터 유출 위험
- 사례 (Jangho 실제 적용): 민감 내부 데이터 처리 에이전트 → 자체 호스팅 모델 사용 / 외부 리서치 에이전트 → Claude 사용. 두 경로를 라우팅으로 분리
- 설계 결정 포인트: 데이터 분류 (공개 가능 vs 내부 한정), RBAC (역할 기반 접근 제어), 벡터 DB 테넌트 격리

**④ 전체 시스템 관점**
- 단일 컴포넌트 최적화가 아니라 retriever → generator → API gateway → 모니터링의 전체 체인을 보는 것
- 장애 지점 예측: RAG가 관련 없는 청크를 반환하면 LLM이 hallucinate → retrieval 품질 모니터링 필요
- 각 컴포넌트를 독립적으로 교체 가능하게 설계 (retriever를 바꿔도 generator에 영향 없게)

### 시니어와 주니어의 차이
| 주니어 | 시니어 |
|---|---|
| "어떤 LLM을 쓸까?" | "이 데이터가 외부 LLM에 가도 되나? 안 된다면 어떻게 분리하나?" |
| RAG 파이프라인 구현 | 청크 크기·임베딩 선택·리트리벌 실패 시나리오까지 설계 |
| 에이전트가 잘 작동함 | 에이전트가 실패할 때 어떤 메트릭이 먼저 움직이는지 앎 |
| 클라우드에 배포 | 비용·레이턴시·보안의 트레이드오프를 설명하고 결정 |

### Jangho 현재 상태
- 보안 이유로 모델을 분리한 결정 → 시스템 사고의 실제 적용 사례
- SageMaker + Polars + SQL 프로덕션 경험 → 클라우드 연결 있음
- 부족한 부분: 벡터 DB 운영 경험 (HNSW, 청크 전략), LLMOps 모니터링 (LangSmith, 평가 자동화)

---

## 평가 지표 전체 정리

### 추천 시스템 (TmaxEduAI)

**포트폴리오에 현재 있는 것** (온라인 / 비즈니스 지표):
- CVR +5%, 콘텐츠 완료율 +25% → A/B 또는 런칭 후 3개월 모니터링
- Knowledge-tracing AUC 0.88 (PoC)

**포트폴리오에 없는 것** (오프라인 / 모델 지표):
- MRR, NDCG@K, Hit Rate@K, Precision@K, Recall@K
- 기술 면접에서 "오프라인에서 어떤 지표로 모델 선택했나?"를 물어볼 수 있으므로 실제 수치가 있으면 추가 권장

> 온라인 지표(CVR, completion)가 채용 맥락에서는 NDCG보다 설득력 있음 — 현재 포트폴리오 방향 유지 OK

**오프라인 vs 온라인 구분**:
| 종류 | 지표 | 언제 씀 |
|---|---|---|
| 오프라인 | NDCG@K, MRR, Hit Rate, Precision@K | 모델 선택·실험 단계 |
| 온라인 | CTR, CVR, dwell time, completion rate | A/B 테스트·프로덕션 |

---

### LLM / RAG 평가 지표

**RAG Retrieval 단계 (문서를 잘 찾았는가)**
| 지표 | 설명 |
|---|---|
| Recall@K | 관련 문서 K개 중 찾아온 비율 |
| Precision@K | 찾아온 K개 중 실제 관련 문서 비율 |
| MRR | 첫 번째 정답 문서 순위의 역수 평균 |
| NDCG@K | 순위 높을수록 가중치 → 랭킹 품질 |
| Hit Rate@K | K개 중 관련 문서 1개라도 있으면 1 |

**RAG Generation / 에이전트 단계 (잘 답했는가)**
| 지표 | 설명 |
|---|---|
| Faithfulness | 답변이 검색 문서에 근거하는가 (hallucination 반대) |
| Answer Relevancy | 질문과 답변의 관련성 |
| Context Relevancy | 검색된 문서가 질문과 관련 있는가 |
| Hallucination Rate | 문서에 없는 내용을 지어낸 비율 |
| Citation Coverage | 출처 인용 정확도 |

**에이전트 특화**
| 지표 | 설명 |
|---|---|
| Task Completion Rate | 최종 목표 달성 여부 |
| Tool Correctness | 상황에 맞는 도구 선택 여부 |
| Step Efficiency | 최소 스텝 대비 실제 스텝 수 |
| pass@k | k번 중 1번이라도 성공 |
| pass^k | k번 전부 성공 (프로덕션 안정성) |

**정성 평가 (Qualitative)**
- **LLM-as-Judge**: Claude/GPT-4가 질문·컨텍스트·답변을 읽고 채점. ground truth 없이 사용 가능. 실질적 표준
- **Human Evaluation**: Correctness, Helpfulness, Groundedness, Coherence 기준으로 사람이 직접 평가

**RAG 트라이어드 (실무 핵심 3개)**
```
Context Relevancy → Faithfulness → Answer Relevancy
(문서를 잘 찾았나?)  (근거 있게 답했나?)  (질문에 맞는 답인가?)
```
이 세 개가 RAG 주요 실패 지점 대부분을 커버함

**주요 평가 프레임워크**: RAGAS, DeepEval, LangSmith, Confident AI

---

## AI Engineer 정체성 & 패러다임 전환 (2026-06-23 추가)

**Jangho의 정확한 현재 타이틀 = AI Engineer (ML 백그라운드 보유)**. "ML 엔지니어가 아닌 게" 아니라 ML 기반 위에서 AI Engineer로 진화 중.

### ML Engineer vs AI Engineer (시장 표준 구분)
- **ML Engineer**: 모델이 *제품*. 데이터→학습→배포→SLA. embedding 모델·reranker·classifier·eval 인프라를 ship. (Jangho의 과거)
- **AI Engineer**: 모델은 *의존성*. 그 위에서 prompt·tool·retrieval·eval·latency·cost·guardrail로 제품을 ship. 에이전트를 ship하는 쪽. (Jangho의 현재)
- 핵심 정의: "AI engineer는 **비결정적 시스템 위의 feedback loop를 최적화**하며, 레버리지의 대부분은 **무엇을 측정할지 고르는 데서** 나온다" → ML의 정량적 사고가 그대로 무기.
- 시장: GenAI/Agent 전문 AI Engineer base $175K~250K, 2026까지 ~35% 성장.

### 평가축 전환: "무엇으로 만들었나" → "어떻게 신뢰성을 확보했나"
- 모델은 commodity. "오라마/특정 모델 썼다"는 어필 안 됨. "LangChain/CrewAI 썼다"도 흔함.
- 지금 일의 본질 = "distributed systems engineering + probabilistic component". 평가 질문: "이 사람이 reliable·observable·cost-controlled·safe한 시스템을 프로덕션 트래픽에서 6개월 버티게 ship할 수 있나?"
- 예전: 데이터→학습→메트릭→반복 / 지금: **eval set→prompt·tool·context 수정→eval→반복**. "측정하며 개선하는 사이클" 본질 동일, 대상이 weights→system.

### Framework-free가 셀링 포인트 (기존 로드맵의 LangGraph/CrewAI 권장 보정)
- Jangho는 회사 솔루션에 들어갈 **코딩 에이전트**를 LangChain/CrewAI 없이 Claude API 위에 직접 구현 (agent loop·tool dispatch·context 관리 직접, tool도 Claude가 찾도록).
- Anthropic "Building Effective Agents"가 프레임워크 추상화 걷어내고 단순·조합 가능 패턴 직접 짜라고 권장 → 밑바닥에서 동작 원리 이해하고 만든 사람이 귀함. **약점 아니라 강점.**
- 포트폴리오 문구: "프레임워크 의존 없이 Claude API 위에 agent loop·tool dispatch·context 관리를 직접 구현, 디버깅 가능성과 토큰/지연 제어권 확보."

### 지금 집중할 4축 (검색 종합)
1. **Context Engineering** (가장 핫): write(외부저장)·select(동적선택)·compress(compaction)·isolate(서브에이전트 분리). 입력 토큰 늘수록 성능 저하 → 핵심.
2. **Evals**: 모든 context/prompt 변경을 코드처럼 테스트. trajectory 평가(tool선택·추론·error recovery·되물음). 관측성 89% vs eval 52% → eval 갖추면 차별화.
3. **Observability/Tracing**: 매 호출에 어떤 토큰·tool·retrieval이 들어갔나 안 보면 개선 불가.
4. **Cost & Reliability**: 서브에이전트별 토큰 budget, 캐싱, step별 토큰을 1급 지표로, retry/rollback/guardrail.
- 추가: 시스템 프롬프트를 "software contract"로 — 버전관리·코드처럼 리뷰/테스트.

### 코딩 에이전트 포트폴리오 케이스 골격
1. 문제 정의 (솔루션 내 어떤 요구사항을 왜 에이전트로) → 2. 아키텍처(agent loop·tool·context 흐름 다이어그램) → 3. 엔지니어링 결정(framework-free 이유·모델 라우팅·caching·context 전략) → 4. **Eval(성공/실패 측정·개선 delta = ML 엔지니어 티 나는 부분)** → 5. 신뢰성(실패 핸들링·guardrail·프로덕션 교훈).

---

## (초급자용 쉬운 설명) Tool · Eval · 신뢰성 — 강사 풀이 (2026-06-23)

> 위 내용을 용어 부연설명과 함께 쉽게 풀어쓴 버전. 면접/포트폴리오에서 설명할 때 이 톤으로.

### 0. 먼저 큰 그림
에이전트 = "Claude(LLM)에게 도구(tool)를 쥐여주고, 스스로 생각하며 그 도구를 골라 쓰게 만든 프로그램". 우리가 하는 일은 모델을 *학습*시키는 게 아니라, 모델이 **일을 잘 끝내도록 주변 환경을 설계**하는 것.

### 1. Tool 세트 — "직접 만들기 vs 불러다 쓰기"
- **tool(도구)** = Claude가 호출할 수 있는 기능 하나(예: "DB에서 고객 조회", "파일 수정"). Claude는 "이 도구 써줘"라고 *요청*만 하고, 실제 실행은 우리가 짠 코드가 함.
- **① 직접 만든 tool (custom tool)**: 내가 도구의 사용설명서(이름·설명·입력값 형식 = `JSON schema`, 즉 "입력이 어떻게 생겼는지 적은 양식")를 쓰고, 실행 코드도 직접 짬. 사내 시스템 연결은 거의 이것.
- **② 불러다 쓰는 tool**: Anthropic이 이미 만들어 호스팅하는 도구(웹검색·코드실행 등)를 *켜기만* 함. = `server tool`("서버 쪽에서 대신 돌려주는 도구").
- **③ MCP**: "남이 만든 도구 묶음을 표준 규격으로 가져다 꽂는 콘센트" 같은 것. (`MCP` = Model Context Protocol, 도구 연결 표준)
- **핵심 한 줄**: 불러다 쓰는 건 누구나 함. 잘하는 사람은 **직접 만든 도구의 설명을 Claude가 헷갈리지 않게 잘 써서, 모델이 매번 올바른 도구를 고르게** 만듦(= `tool selection accuracy`, 도구 선택 정확도).

### 2. Eval — "에이전트 성적표 만들기"
- **eval(평가)** = "에이전트가 일을 제대로 했는지 점수 매기는 시험지". 학교 시험처럼 *문제(task)* 를 모아두고 채점함.
- **채점기(grader) 3종류** (= "누가/무엇이 채점하나"):
  - **code-based**: 코드로 자동 채점(예: "정답 문자열과 똑같나?", "테스트 통과하나?"). 빠르고 객관적이지만, 정답인데 표현만 다르면 틀렸다고 함(= brittle, 융통성 없음).
  - **model-based / LLM-as-judge**: *다른 LLM에게 채점을 맡김*("이 답이 근거 있고 질문에 맞아?"). 융통성 있지만, 사람 채점과 어긋나지 않게 **맞춰보는 작업(calibration, 교정)** 이 필요.
  - **human**: 사람이 직접 봄. 제일 정확하지만 느리고 비쌈.
- **점수 용어**:
  - `pass@1` = "**첫 시도에** 맞춘 비율". 50% pass@1 = 문제 절반을 한 번에 성공.
  - `pass@k` = "k번 중 한 번이라도 성공" (관대한 기준, 탐색용).
  - `pass^k` = "**k번 전부** 성공"(엄격한 기준, 프로덕션 안정성용 — 운영에선 매번 돼야 하니까).
- **시험지 만드는 법(쉽게)**: 실제로 에이전트가 *틀렸던 사례* 20~50개를 모아 문제로 만든다 → 정답(reference)을 같이 적는다 → "되는 경우"와 "안 되는 경우"를 섞는다 → 깨끗한 격리 환경에서 자동으로 돌린다 → **"과정 말고 결과물을 채점한다"**(에이전트가 돌아간 길이 아니라 최종 산출물이 맞는지 본다).
- **실제 개선 숫자(포트폴리오엔 이런 delta를 적어야 설득력 있음)**:
  - SWE-bench(코딩 에이전트 시험): 1년 만에 40% → 80%+.
  - CORE-Bench: 알고 보니 **채점기 버그**(`96.124991`을 `96.12`로 기대해 멀쩡한 답을 오답 처리)였고, 그걸 고치니 42% → 95%. → 교훈: **"성능 개선의 절반은 채점 기준 자체를 고치는 일"** (ML로 치면 "데이터 라벨 잘못된 거 고치니 점수 오른" 것과 같음).
  - AgentCoder: pass@1을 57% → 80%대로.

### 3. 신뢰성 — "실패해도 안 무너지게 만들기"
- **왜 어렵나(쉬운 비유)**: 한 스텝 성공률 95%여도, **10스텝을 연달아** 하면 0.95를 10번 곱해 약 60%만 끝까지 성공 → 절반 가까이 실패. (`p^n` = 단계가 많을수록 전체 성공률이 급락) → 그래서 **단계를 줄이고, 단계마다 검사**.
- **guardrail(가드레일)** = "차선 이탈 방지 난간". 나쁜 입력이 Claude에 가기 전(pre), 나쁜 출력이 사용자에 가기 전(post)에 걸러냄.
  - **self-correction loop(자가 교정 반복)**: 출력이 난간에 걸리면 → 사용자에게 에러 보여주는 대신 → "여기가 문제야 다시 해봐"라고 Claude에 되먹임 → 다시 검사 → 통과하거나 정해진 횟수까지 반복.
- **retry/backoff(재시도)**: LLM API는 원래 1~5%는 그냥 실패함(서버 혼잡·시간초과). 그러면 **잠깐 기다렸다 다시**(backoff = 점점 더 길게 기다림, jitter = 동시에 몰리지 않게 시간을 살짝 흩뜨림), 그래도 안 되면 **대체 경로**(fallback)로.
- **idempotency(멱등성) 사고 사례**: "여러 번 실행해도 결과가 한 번과 같아야 한다"는 성질. 실제 사고 — 3단계 작업의 2단계에서 실패해 재시도했더니, 1단계에서 만든 고객 레코드가 **또 생성**돼서 고객이 청구서를 두 번 받음(200건+). → 재시도가 있는 시스템은 "같은 일을 두 번 해도 안전한가?"를 꼭 설계.
- **비용 가드레일은 맨 처음에**: "토큰(=모델이 읽고 쓰는 글자 단위, 쓸수록 돈)" 사용량에 상한선을 둬서, 넘으면 에이전트를 멈추고 대체 응답. 나중에 붙이지 말고 처음부터.

> 출처: Anthropic "Demystifying evals", LangChain agent eval checklist, Arthur.ai guardrails, jztan error-handling, k8slens(p^n), AgentCoder/EvoCodeBench 논문.
