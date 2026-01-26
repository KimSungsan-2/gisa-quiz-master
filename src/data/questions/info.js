// 정보처리기사 문제 데이터
export const infoQuestions = [
  {
    id: 'INFO_001',
    subject: '소프트웨어 설계',
    question: '객체지향 설계 원칙 중 SOLID 원칙에 해당하지 않는 것은?',
    options: ['SRP (Single Responsibility Principle)', 'OCP (Open-Closed Principle)', 'DRY (Don\'t Repeat Yourself)', 'LSP (Liskov Substitution Principle)'],
    answer: 2,
    explanation: 'SOLID 원칙은 SRP(단일 책임), OCP(개방-폐쇄), LSP(리스코프 치환), ISP(인터페이스 분리), DIP(의존관계 역전) 원칙입니다.',
    difficulty: '하',
    tags: ['객체지향', 'SOLID']
  },
  {
    id: 'INFO_002',
    subject: '소프트웨어 설계',
    question: 'UML 다이어그램 중 구조적(Structural) 다이어그램이 아닌 것은?',
    options: ['클래스 다이어그램 (Class Diagram)', '컴포넌트 다이어그램 (Component Diagram)', '시퀀스 다이어그램 (Sequence Diagram)', '패키지 다이어그램 (Package Diagram)'],
    answer: 2,
    explanation: '시퀀스 다이어그램은 행위(Behavioral) 다이어그램입니다.',
    difficulty: '중',
    tags: ['UML', '다이어그램']
  },
  {
    id: 'INFO_003',
    subject: '데이터베이스 구축',
    question: '관계 데이터베이스의 정규화 과정이 올바른 순서로 나열된 것은?',
    options: ['1NF → 2NF → 3NF → BCNF', '1NF → 3NF → 2NF → BCNF', '2NF → 1NF → 3NF → BCNF', '1NF → BCNF → 2NF → 3NF'],
    answer: 0,
    explanation: '정규화는 1NF(제1정규형) → 2NF(제2정규형) → 3NF(제3정규형) → BCNF(보이스-코드 정규형) → 4NF → 5NF 순서로 진행됩니다.',
    difficulty: '하',
    tags: ['정규화', '데이터베이스']
  },
  {
    id: 'INFO_004',
    subject: '데이터베이스 구축',
    question: 'SQL에서 트랜잭션의 특성(ACID)이 아닌 것은?',
    options: ['Atomicity (원자성)', 'Consistency (일관성)', 'Isolation (격리성)', 'Availability (가용성)'],
    answer: 3,
    explanation: '트랜잭션의 ACID 특성은 Atomicity(원자성), Consistency(일관성), Isolation(격리성), Durability(지속성)입니다.',
    difficulty: '중',
    tags: ['트랜잭션', 'ACID']
  },
  {
    id: 'INFO_005',
    subject: '프로그래밍 언어 활용',
    question: '다음 C언어 코드의 출력 결과는?\n\nint a = 10, b = 20;\nprintf("%d", a > b ? a : b);',
    options: ['10', '20', '30', '컴파일 에러'],
    answer: 1,
    explanation: '삼항 연산자 (조건) ? 참일때값 : 거짓일때값 을 사용합니다. a > b는 거짓이므로 b의 값인 20이 출력됩니다.',
    difficulty: '하',
    tags: ['C언어', '연산자']
  },
  {
    id: 'INFO_006',
    subject: '프로그래밍 언어 활용',
    question: '객체지향 프로그래밍의 특징이 아닌 것은?',
    options: ['캡슐화 (Encapsulation)', '상속성 (Inheritance)', '다형성 (Polymorphism)', '순차성 (Sequentiality)'],
    answer: 3,
    explanation: '객체지향 프로그래밍의 4대 특징은 캡슐화(Encapsulation), 상속성(Inheritance), 다형성(Polymorphism), 추상화(Abstraction)입니다.',
    difficulty: '하',
    tags: ['객체지향', '특징']
  },
  {
    id: 'INFO_007',
    subject: '정보시스템 구축관리',
    question: 'OSI 7계층 중 데이터 링크 계층(Data Link Layer)에서 사용되는 프로토콜은?',
    options: ['IP', 'TCP', 'Ethernet', 'HTTP'],
    answer: 2,
    explanation: 'Ethernet은 데이터 링크 계층(2계층) 프로토콜입니다. IP는 네트워크 계층(3계층), TCP는 전송 계층(4계층), HTTP는 응용 계층(7계층) 프로토콜입니다.',
    difficulty: '중',
    tags: ['네트워크', 'OSI']
  },
  {
    id: 'INFO_008',
    subject: '정보시스템 구축관리',
    question: 'IPv4 주소 체계에서 C클래스의 기본 서브넷 마스크는?',
    options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
    answer: 2,
    explanation: 'IPv4 클래스별 기본 서브넷 마스크는 A클래스: 255.0.0.0, B클래스: 255.255.0.0, C클래스: 255.255.255.0입니다.',
    difficulty: '중',
    tags: ['네트워크', 'IP']
  },
  {
    id: 'INFO_009',
    subject: '소프트웨어 설계',
    question: '디자인 패턴 중 Singleton 패턴의 목적은?',
    options: ['객체 생성을 서브클래스에 위임', '클래스의 인스턴스를 하나만 생성', '객체 간의 일대다 의존성 정의', '알고리즘을 캡슐화하여 교체 가능하게'],
    answer: 1,
    explanation: 'Singleton 패턴은 클래스의 인스턴스가 오직 하나만 생성되도록 보장하고, 이에 대한 전역적인 접근점을 제공하는 패턴입니다.',
    difficulty: '중',
    tags: ['디자인패턴', 'Singleton']
  },
  {
    id: 'INFO_010',
    subject: '데이터베이스 구축',
    question: 'JOIN 연산 중 두 테이블의 공통된 속성값이 있는 튜플만 반환하는 것은?',
    options: ['INNER JOIN', 'LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN'],
    answer: 0,
    explanation: 'INNER JOIN은 두 테이블에서 조인 조건을 만족하는(공통된 값이 있는) 튜플만 결과로 반환합니다.',
    difficulty: '하',
    tags: ['SQL', 'JOIN']
  },
  {
    id: 'INFO_011',
    subject: '소프트웨어 설계',
    question: '애자일(Agile) 방법론의 특징이 아닌 것은?',
    options: ['짧은 개발 주기(스프린트)', '문서보다 실행 가능한 소프트웨어 중시', '계획 변경에 유연한 대응', '상세한 사전 계획과 문서화 필수'],
    answer: 3,
    explanation: '애자일은 변화에 유연하게 대응하며, 과도한 문서화보다 실행 가능한 소프트웨어를 중시합니다.',
    difficulty: '하',
    tags: ['애자일', '방법론']
  },
  {
    id: 'INFO_012',
    subject: '소프트웨어 설계',
    question: '유스케이스 다이어그램의 구성요소가 아닌 것은?',
    options: ['액터(Actor)', '유스케이스(Use Case)', '관계(Relationship)', '상태(State)'],
    answer: 3,
    explanation: '상태(State)는 상태 다이어그램의 구성요소입니다. 유스케이스 다이어그램은 액터, 유스케이스, 관계, 시스템 경계로 구성됩니다.',
    difficulty: '중',
    tags: ['UML', '유스케이스']
  },
  {
    id: 'INFO_013',
    subject: '소프트웨어 설계',
    question: '결합도(Coupling)가 가장 낮은 것은?',
    options: ['내용 결합도(Content)', '공통 결합도(Common)', '자료 결합도(Data)', '제어 결합도(Control)'],
    answer: 2,
    explanation: '결합도는 낮을수록 좋으며, 자료 결합도 < 스탬프 결합도 < 제어 결합도 < 외부 결합도 < 공통 결합도 < 내용 결합도 순입니다.',
    difficulty: '상',
    tags: ['결합도', '모듈']
  },
  {
    id: 'INFO_014',
    subject: '소프트웨어 설계',
    question: '응집도(Cohesion)가 가장 높은 것은?',
    options: ['우연적 응집도(Coincidental)', '논리적 응집도(Logical)', '기능적 응집도(Functional)', '절차적 응집도(Procedural)'],
    answer: 2,
    explanation: '응집도는 높을수록 좋으며, 기능적 > 순차적 > 통신적 > 절차적 > 시간적 > 논리적 > 우연적 순입니다.',
    difficulty: '상',
    tags: ['응집도', '모듈']
  },
  {
    id: 'INFO_015',
    subject: '소프트웨어 설계',
    question: 'GoF 디자인 패턴 중 구조 패턴이 아닌 것은?',
    options: ['어댑터(Adapter)', '브리지(Bridge)', '팩토리 메서드(Factory Method)', '데코레이터(Decorator)'],
    answer: 2,
    explanation: '팩토리 메서드는 생성 패턴입니다. 구조 패턴에는 어댑터, 브리지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시가 있습니다.',
    difficulty: '중',
    tags: ['디자인패턴', 'GoF']
  },
  {
    id: 'INFO_016',
    subject: '데이터베이스 구축',
    question: '데이터베이스 무결성 제약조건이 아닌 것은?',
    options: ['개체 무결성', '참조 무결성', '도메인 무결성', '분산 무결성'],
    answer: 3,
    explanation: '데이터베이스 무결성에는 개체 무결성, 참조 무결성, 도메인 무결성, 키 무결성 등이 있습니다.',
    difficulty: '중',
    tags: ['무결성', '데이터베이스']
  },
  {
    id: 'INFO_017',
    subject: '데이터베이스 구축',
    question: '인덱스(Index)에 대한 설명으로 틀린 것은?',
    options: ['검색 속도를 향상시킨다', 'B-트리, 해시 등의 자료구조 사용', '삽입/삭제 시 오버헤드 발생', '항상 모든 컬럼에 인덱스 생성이 좋다'],
    answer: 3,
    explanation: '인덱스는 저장 공간을 추가로 사용하고, 삽입/삭제 시 오버헤드가 발생하므로 적절한 컬럼에만 생성해야 합니다.',
    difficulty: '중',
    tags: ['인덱스', '성능']
  },
  {
    id: 'INFO_018',
    subject: '데이터베이스 구축',
    question: 'SQL의 DDL(Data Definition Language)에 해당하지 않는 것은?',
    options: ['CREATE', 'ALTER', 'DROP', 'UPDATE'],
    answer: 3,
    explanation: 'UPDATE는 DML(Data Manipulation Language)입니다. DDL에는 CREATE, ALTER, DROP, TRUNCATE 등이 있습니다.',
    difficulty: '하',
    tags: ['SQL', 'DDL']
  },
  {
    id: 'INFO_019',
    subject: '데이터베이스 구축',
    question: '뷰(View)에 대한 설명으로 틀린 것은?',
    options: ['가상의 테이블이다', '데이터 독립성 제공', '보안 기능 제공', '물리적으로 데이터를 저장한다'],
    answer: 3,
    explanation: '뷰는 가상의 테이블로 물리적으로 데이터를 저장하지 않고 논리적으로만 존재합니다.',
    difficulty: '하',
    tags: ['뷰', 'SQL']
  },
  {
    id: 'INFO_020',
    subject: '데이터베이스 구축',
    question: '이상(Anomaly)의 종류가 아닌 것은?',
    options: ['삽입 이상', '삭제 이상', '갱신 이상', '조회 이상'],
    answer: 3,
    explanation: '이상에는 삽입 이상, 삭제 이상, 갱신 이상이 있습니다. 조회 이상은 존재하지 않습니다.',
    difficulty: '중',
    tags: ['이상', '정규화']
  },
  {
    id: 'INFO_021',
    subject: '프로그래밍 언어 활용',
    question: '스택(Stack)의 특징으로 옳은 것은?',
    options: ['FIFO 구조', 'LIFO 구조', '양방향 삽입/삭제 가능', '임의 접근 가능'],
    answer: 1,
    explanation: '스택은 LIFO(Last In First Out) 구조로, 나중에 삽입된 데이터가 먼저 삭제됩니다.',
    difficulty: '하',
    tags: ['자료구조', '스택']
  },
  {
    id: 'INFO_022',
    subject: '프로그래밍 언어 활용',
    question: '이진 탐색(Binary Search)의 시간 복잡도는?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n\u00b2)'],
    answer: 1,
    explanation: '이진 탐색은 정렬된 배열에서 절반씩 탐색 범위를 줄여가므로 O(log n)의 시간 복잡도를 가집니다.',
    difficulty: '중',
    tags: ['알고리즘', '탐색']
  },
  {
    id: 'INFO_023',
    subject: '프로그래밍 언어 활용',
    question: '퀵 정렬(Quick Sort)의 평균 시간 복잡도는?',
    options: ['O(n)', 'O(n log n)', 'O(n\u00b2)', 'O(log n)'],
    answer: 1,
    explanation: '퀵 정렬의 평균 시간 복잡도는 O(n log n)이며, 최악의 경우 O(n\u00b2)입니다.',
    difficulty: '중',
    tags: ['알고리즘', '정렬']
  },
  {
    id: 'INFO_024',
    subject: '프로그래밍 언어 활용',
    question: '재귀 함수 호출 시 사용되는 메모리 영역은?',
    options: ['힙(Heap)', '스택(Stack)', '데이터(Data)', '코드(Code)'],
    answer: 1,
    explanation: '재귀 함수 호출 시 스택 영역에 함수의 지역 변수, 매개변수, 복귀 주소 등이 저장됩니다.',
    difficulty: '중',
    tags: ['메모리', '재귀']
  },
  {
    id: 'INFO_025',
    subject: '프로그래밍 언어 활용',
    question: '해시 테이블에서 충돌(Collision) 해결 방법이 아닌 것은?',
    options: ['체이닝(Chaining)', '선형 탐사(Linear Probing)', '이차 탐사(Quadratic Probing)', '이진 탐색(Binary Search)'],
    answer: 3,
    explanation: '이진 탐색은 탐색 알고리즘이며, 해시 충돌 해결에는 체이닝, 선형 탐사, 이차 탐사, 이중 해싱 등이 있습니다.',
    difficulty: '중',
    tags: ['해시', '자료구조']
  },
  {
    id: 'INFO_026',
    subject: '프로그래밍 언어 활용',
    question: '객체지향 프로그래밍의 특징이 아닌 것은?',
    options: ['캡슐화(Encapsulation)', '상속(Inheritance)', '다형성(Polymorphism)', '순차성(Sequentiality)'],
    answer: 3,
    explanation: '객체지향의 주요 특징은 캡슐화, 상속, 다형성, 추상화입니다.',
    difficulty: '하',
    tags: ['객체지향', 'OOP']
  },
  {
    id: 'INFO_027',
    subject: '프로그래밍 언어 활용',
    question: '그래프 탐색 알고리즘 중 BFS(Breadth First Search)에서 주로 사용하는 자료구조는?',
    options: ['스택', '큐', '트리', '힙'],
    answer: 1,
    explanation: 'BFS는 너비 우선 탐색으로 큐(Queue)를 사용하고, DFS는 스택(Stack)이나 재귀를 사용합니다.',
    difficulty: '중',
    tags: ['그래프', 'BFS']
  },
  {
    id: 'INFO_028',
    subject: '프로그래밍 언어 활용',
    question: 'Java의 가비지 컬렉션(Garbage Collection)에 대한 설명으로 틀린 것은?',
    options: ['자동 메모리 관리 기능', '더 이상 참조되지 않는 객체 해제', '프로그래머가 명시적으로 호출 필수', 'JVM이 자동으로 수행'],
    answer: 2,
    explanation: '가비지 컬렉션은 JVM이 자동으로 수행하며, 프로그래머가 명시적으로 호출하지 않아도 됩니다.',
    difficulty: '중',
    tags: ['Java', 'GC']
  },
  {
    id: 'INFO_029',
    subject: '정보시스템 구축관리',
    question: '소프트웨어 테스트 기법 중 화이트박스 테스트에 해당하는 것은?',
    options: ['동등 분할 테스트', '경계값 분석', '조건/결정 커버리지', '상태 전이 테스트'],
    answer: 2,
    explanation: '조건/결정 커버리지는 화이트박스 테스트 기법입니다. 동등 분할, 경계값 분석, 상태 전이는 블랙박스 기법입니다.',
    difficulty: '중',
    tags: ['테스트', '화이트박스']
  },
  {
    id: 'INFO_030',
    subject: '정보시스템 구축관리',
    question: 'HTTPS 프로토콜에서 사용하는 기본 포트 번호는?',
    options: ['80', '21', '443', '22'],
    answer: 2,
    explanation: 'HTTPS는 443 포트, HTTP는 80 포트, FTP는 21 포트, SSH는 22 포트를 사용합니다.',
    difficulty: '하',
    tags: ['네트워크', '포트']
  },
  {
    id: 'INFO_031',
    subject: '정보시스템 구축관리',
    question: 'TCP와 UDP의 차이점으로 옳은 것은?',
    options: ['TCP는 비연결형, UDP는 연결형', 'TCP는 신뢰성 보장, UDP는 신뢰성 미보장', 'TCP가 UDP보다 빠름', 'UDP는 3-way handshake 사용'],
    answer: 1,
    explanation: 'TCP는 연결형 프로토콜로 신뢰성을 보장하고, UDP는 비연결형으로 신뢰성을 보장하지 않습니다.',
    difficulty: '중',
    tags: ['TCP', 'UDP']
  },
  {
    id: 'INFO_032',
    subject: '정보시스템 구축관리',
    question: 'SQL 인젝션(SQL Injection) 공격을 방지하는 방법으로 적절하지 않은 것은?',
    options: ['입력값 검증', '파라미터화된 쿼리 사용', '저장 프로시저 활용', '에러 메시지 상세 출력'],
    answer: 3,
    explanation: '에러 메시지를 상세히 출력하면 공격자에게 정보를 제공할 수 있으므로 적절하지 않습니다.',
    difficulty: '중',
    tags: ['보안', 'SQL인젝션']
  },
  {
    id: 'INFO_033',
    subject: '정보시스템 구축관리',
    question: '대칭키 암호화 알고리즘이 아닌 것은?',
    options: ['AES', 'DES', '3DES', 'RSA'],
    answer: 3,
    explanation: 'RSA는 비대칭키(공개키) 암호화 알고리즘입니다. AES, DES, 3DES는 대칭키 알고리즘입니다.',
    difficulty: '중',
    tags: ['암호화', '보안']
  },
  {
    id: 'INFO_034',
    subject: '정보시스템 구축관리',
    question: 'XSS(Cross-Site Scripting) 공격의 유형이 아닌 것은?',
    options: ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'Buffer Overflow XSS'],
    answer: 3,
    explanation: 'XSS는 Stored, Reflected, DOM-based 세 가지 유형이 있습니다. Buffer Overflow는 다른 종류의 공격입니다.',
    difficulty: '상',
    tags: ['보안', 'XSS']
  },
  {
    id: 'INFO_035',
    subject: '소프트웨어 설계',
    question: '마이크로서비스 아키텍처의 특징이 아닌 것은?',
    options: ['서비스 간 독립적 배포', '분산 데이터 관리', '강한 결합(Tight Coupling)', 'API를 통한 통신'],
    answer: 2,
    explanation: '마이크로서비스는 느슨한 결합(Loose Coupling)을 특징으로 합니다.',
    difficulty: '중',
    tags: ['아키텍처', '마이크로서비스']
  },
  {
    id: 'INFO_036',
    subject: '소프트웨어 설계',
    question: 'REST API의 특징이 아닌 것은?',
    options: ['Stateless', 'Uniform Interface', 'Session 기반 상태 관리', 'Layered System'],
    answer: 2,
    explanation: 'REST는 Stateless(무상태성)를 특징으로 하며, 세션 기반 상태 관리를 사용하지 않습니다.',
    difficulty: '중',
    tags: ['REST', 'API']
  },
  {
    id: 'INFO_037',
    subject: '소프트웨어 설계',
    question: 'MVC 패턴에서 View의 역할은?',
    options: ['비즈니스 로직 처리', '데이터베이스 접근', '사용자 인터페이스 표시', '요청 흐름 제어'],
    answer: 2,
    explanation: 'View는 사용자 인터페이스를 표시하고, Model은 데이터와 로직, Controller는 요청 흐름을 제어합니다.',
    difficulty: '하',
    tags: ['MVC', '디자인패턴']
  },
  {
    id: 'INFO_038',
    subject: '데이터베이스 구축',
    question: '데이터베이스 회복 기법 중 검사점(Checkpoint) 기법의 장점은?',
    options: ['회복 시간 단축', '로그 기록 불필요', '트랜잭션 동시 실행 증가', '디스크 공간 절약'],
    answer: 0,
    explanation: '검사점 기법은 회복 시 검사점 이전의 트랜잭션은 처리할 필요가 없어 회복 시간이 단축됩니다.',
    difficulty: '상',
    tags: ['회복', '데이터베이스']
  },
  {
    id: 'INFO_039',
    subject: '데이터베이스 구축',
    question: '교착상태(Deadlock) 해결 방법이 아닌 것은?',
    options: ['예방(Prevention)', '회피(Avoidance)', '탐지(Detection)', '지연(Delay)'],
    answer: 3,
    explanation: '교착상태 해결 방법에는 예방, 회피, 탐지 및 복구가 있습니다.',
    difficulty: '중',
    tags: ['교착상태', '데이터베이스']
  },
  {
    id: 'INFO_040',
    subject: '데이터베이스 구축',
    question: '관계대수 연산 중 순수 관계 연산이 아닌 것은?',
    options: ['선택(Select)', '추출(Project)', '조인(Join)', '합집합(Union)'],
    answer: 3,
    explanation: '합집합, 교집합, 차집합, 카티션 프로덕트는 일반 집합 연산이고, 선택, 추출, 조인, 디비전은 순수 관계 연산입니다.',
    difficulty: '상',
    tags: ['관계대수', '데이터베이스']
  },
  {
    id: 'INFO_041',
    subject: '프로그래밍 언어 활용',
    question: '다익스트라(Dijkstra) 알고리즘의 용도는?',
    options: ['정렬', '최단 경로 탐색', '최소 신장 트리', '이진 탐색'],
    answer: 1,
    explanation: '다익스트라 알고리즘은 가중치가 있는 그래프에서 최단 경로를 찾는 알고리즘입니다.',
    difficulty: '중',
    tags: ['그래프', '다익스트라']
  },
  {
    id: 'INFO_042',
    subject: '프로그래밍 언어 활용',
    question: '동적 프로그래밍(Dynamic Programming)의 특징이 아닌 것은?',
    options: ['최적 부분 구조', '중복 부분 문제', '분할 후 독립적 해결', '메모이제이션 활용'],
    answer: 2,
    explanation: '분할 정복은 부분 문제가 독립적이지만, 동적 프로그래밍은 부분 문제가 중복됩니다.',
    difficulty: '상',
    tags: ['DP', '알고리즘']
  },
  {
    id: 'INFO_043',
    subject: '프로그래밍 언어 활용',
    question: '힙(Heap) 자료구조의 특징으로 옳은 것은?',
    options: ['FIFO 구조', '완전 이진 트리', '선형 구조', '해시 기반'],
    answer: 1,
    explanation: '힙은 완전 이진 트리 형태로, 최대 힙 또는 최소 힙의 성질을 만족합니다.',
    difficulty: '중',
    tags: ['힙', '자료구조']
  },
  {
    id: 'INFO_044',
    subject: '정보시스템 구축관리',
    question: 'CI/CD에서 CI의 의미는?',
    options: ['Continuous Integration', 'Continuous Implementation', 'Code Integration', 'Code Inspection'],
    answer: 0,
    explanation: 'CI는 Continuous Integration(지속적 통합)의 약자입니다.',
    difficulty: '하',
    tags: ['CI/CD', 'DevOps']
  },
  {
    id: 'INFO_045',
    subject: '정보시스템 구축관리',
    question: '도커(Docker) 컨테이너의 특징이 아닌 것은?',
    options: ['가벼움', '이식성', '하드웨어 가상화', '격리된 환경'],
    answer: 2,
    explanation: '도커는 OS 수준 가상화로 하드웨어 가상화가 아닌 컨테이너 기반입니다.',
    difficulty: '중',
    tags: ['Docker', '컨테이너']
  },
  {
    id: 'INFO_046',
    subject: '정보시스템 구축관리',
    question: 'Git에서 원격 저장소의 변경사항을 로컬로 가져오는 명령어는?',
    options: ['git push', 'git pull', 'git commit', 'git add'],
    answer: 1,
    explanation: 'git pull은 원격 저장소의 변경사항을 로컬로 가져오고, git push는 로컬의 변경사항을 원격으로 보냅니다.',
    difficulty: '하',
    tags: ['Git', '버전관리']
  },
  {
    id: 'INFO_047',
    subject: '소프트웨어 설계',
    question: '소프트웨어 개발 생명주기(SDLC) 모델 중 폭포수 모델의 단점은?',
    options: ['단계별 산출물 명확', '요구사항 변경 대응 어려움', '관리가 용이', '이해하기 쉬움'],
    answer: 1,
    explanation: '폭포수 모델은 순차적으로 진행되어 이전 단계로 돌아가기 어려워 요구사항 변경 대응이 어렵습니다.',
    difficulty: '하',
    tags: ['SDLC', '폭포수']
  },
  {
    id: 'INFO_048',
    subject: '소프트웨어 설계',
    question: '스크럼(Scrum)에서 개발 주기를 의미하는 용어는?',
    options: ['백로그(Backlog)', '스프린트(Sprint)', '칸반(Kanban)', '데일리 미팅'],
    answer: 1,
    explanation: '스프린트는 스크럼에서 정해진 기간(보통 2~4주) 동안의 개발 주기를 의미합니다.',
    difficulty: '중',
    tags: ['스크럼', '애자일']
  },
  {
    id: 'INFO_049',
    subject: '데이터베이스 구축',
    question: 'NoSQL 데이터베이스의 특징이 아닌 것은?',
    options: ['수평적 확장 용이', '스키마 유연성', 'ACID 완벽 보장', '대용량 데이터 처리'],
    answer: 2,
    explanation: 'NoSQL은 일반적으로 ACID보다 BASE 모델을 따르며, 완벽한 ACID 보장을 하지 않습니다.',
    difficulty: '중',
    tags: ['NoSQL', '데이터베이스']
  },
  {
    id: 'INFO_050',
    subject: '정보시스템 구축관리',
    question: 'ISO/IEC 27001은 무엇에 대한 국제 표준인가?',
    options: ['소프트웨어 품질', '정보보안 관리체계', '프로젝트 관리', '소프트웨어 개발 프로세스'],
    answer: 1,
    explanation: 'ISO/IEC 27001은 정보보안 관리체계(ISMS)에 대한 국제 표준입니다.',
    difficulty: '중',
    tags: ['표준', '보안']
  },
  {
    id: 'INFO_051',
    subject: '소프트웨어 설계',
    question: 'GoF 디자인 패턴 중 생성(Creational) 패턴이 아닌 것은?',
    options: ['Singleton', 'Factory Method', 'Strategy', 'Abstract Factory'],
    answer: 2,
    explanation: 'Strategy는 행위(Behavioral) 패턴입니다. 생성 패턴에는 Singleton, Factory Method, Abstract Factory, Builder, Prototype가 있습니다.',
    difficulty: '중',
    tags: ['디자인패턴', 'GoF']
  },
  {
    id: 'INFO_052',
    subject: '데이터베이스 구축',
    question: '데이터베이스에서 뷰(View)의 특징으로 옳지 않은 것은?',
    options: ['가상 테이블이다', '독립성을 제공한다', '데이터를 물리적으로 저장한다', '보안성을 향상시킨다'],
    answer: 2,
    explanation: '뷰는 가상 테이블로 데이터를 물리적으로 저장하지 않고 쿼리문만 저장합니다.',
    difficulty: '하',
    tags: ['View', '데이터베이스']
  },
  {
    id: 'INFO_053',
    subject: '프로그래밍 언어 활용',
    question: '다음 Python 코드의 출력 결과는?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))',
    options: ['3', '4', '에러', '0'],
    answer: 1,
    explanation: 'Python에서 리스트는 참조 타입이므로 y = x는 같은 객체를 참조합니다. y.append(4)는 x에도 영향을 주므로 x의 길이는 4입니다.',
    difficulty: '중',
    tags: ['Python', '참조']
  },
  {
    id: 'INFO_054',
    subject: '소프트웨어 설계',
    question: '애자일(Agile) 방법론의 특징이 아닌 것은?',
    options: ['반복적 개발', '고객과의 협력', '상세한 문서화', '변화에 대한 대응'],
    answer: 2,
    explanation: '애자일은 포괄적인 문서보다 작동하는 소프트웨어를 중요시합니다.',
    difficulty: '하',
    tags: ['애자일', '방법론']
  },
  {
    id: 'INFO_055',
    subject: '데이터베이스 구축',
    question: 'SQL의 DELETE와 TRUNCATE의 차이점으로 옳은 것은?',
    options: ['DELETE는 롤백 가능, TRUNCATE는 불가능', 'TRUNCATE가 DELETE보다 느리다', 'DELETE는 DDL, TRUNCATE는 DML', 'TRUNCATE는 WHERE 절 사용 가능'],
    answer: 0,
    explanation: 'DELETE는 DML로 롤백이 가능하지만, TRUNCATE는 DDL로 롤백이 불가능하고 모든 행을 삭제합니다.',
    difficulty: '중',
    tags: ['SQL', 'DELETE', 'TRUNCATE']
  },
  {
    id: 'INFO_056',
    subject: '정보시스템 구축관리',
    question: 'TCP/IP 4계층 모델에서 전송 계층에 해당하는 프로토콜은?',
    options: ['IP', 'TCP', 'HTTP', 'Ethernet'],
    answer: 1,
    explanation: 'TCP는 전송 계층 프로토콜입니다. IP는 인터넷 계층, HTTP는 응용 계층, Ethernet은 네트워크 인터페이스 계층입니다.',
    difficulty: '하',
    tags: ['TCP/IP', '네트워크']
  },
  {
    id: 'INFO_057',
    subject: '소프트웨어 설계',
    question: '소프트웨어 아키텍처 패턴 중 MVC의 구성 요소가 아닌 것은?',
    options: ['Model', 'View', 'Controller', 'Repository'],
    answer: 3,
    explanation: 'MVC는 Model(모델), View(뷰), Controller(컨트롤러)로 구성됩니다. Repository는 별도의 패턴입니다.',
    difficulty: '하',
    tags: ['MVC', '아키텍처']
  },
  {
    id: 'INFO_058',
    subject: '프로그래밍 언어 활용',
    question: 'Java에서 인터페이스(Interface)의 특징으로 옳지 않은 것은?',
    options: ['다중 상속 가능', '추상 메서드만 선언 가능', '생성자를 가질 수 있다', '상수 선언 가능'],
    answer: 2,
    explanation: '인터페이스는 생성자를 가질 수 없습니다. Java 8부터는 default 메서드와 static 메서드도 가능합니다.',
    difficulty: '중',
    tags: ['Java', 'Interface']
  },
  {
    id: 'INFO_059',
    subject: '데이터베이스 구축',
    question: '인덱스(Index) 사용의 장점이 아닌 것은?',
    options: ['검색 속도 향상', '정렬 속도 향상', '데이터 삽입 속도 향상', '조인 성능 향상'],
    answer: 2,
    explanation: '인덱스는 검색, 정렬, 조인 성능을 향상시키지만, 데이터 삽입/수정/삭제 시 인덱스 갱신이 필요하여 오히려 속도가 느려집니다.',
    difficulty: '중',
    tags: ['Index', '성능']
  },
  {
    id: 'INFO_060',
    subject: '정보시스템 구축관리',
    question: 'HTTPS에서 사용하는 기본 포트 번호는?',
    options: ['80', '443', '8080', '22'],
    answer: 1,
    explanation: 'HTTPS는 443 포트를 기본으로 사용합니다. HTTP는 80, SSH는 22 포트입니다.',
    difficulty: '하',
    tags: ['HTTPS', '포트']
  },
  {
    id: 'INFO_061',
    subject: '소프트웨어 설계',
    question: '블랙박스 테스트 기법이 아닌 것은?',
    options: ['동등 분할', '경계값 분석', '구문 커버리지', '상태 전이 테스트'],
    answer: 2,
    explanation: '구문 커버리지는 화이트박스 테스트 기법입니다. 블랙박스 테스트는 내부 구조를 모르고 입출력만으로 테스트합니다.',
    difficulty: '중',
    tags: ['테스트', '블랙박스']
  },
  {
    id: 'INFO_062',
    subject: '데이터베이스 구축',
    question: 'BCNF(Boyce-Codd Normal Form)에 대한 설명으로 옳은 것은?',
    options: ['1NF의 강화 버전', '2NF의 강화 버전', '3NF의 강화 버전', '4NF의 강화 버전'],
    answer: 2,
    explanation: 'BCNF는 3NF를 강화한 정규형으로, 모든 결정자가 후보키여야 합니다.',
    difficulty: '상',
    tags: ['정규화', 'BCNF']
  },
  {
    id: 'INFO_063',
    subject: '프로그래밍 언어 활용',
    question: '다음 중 시간 복잡도가 O(n log n)인 정렬 알고리즘은?',
    options: ['버블 정렬', '선택 정렬', '퀵 정렬(평균)', '삽입 정렬'],
    answer: 2,
    explanation: '퀵 정렬의 평균 시간 복잡도는 O(n log n)입니다. 버블, 선택, 삽입 정렬은 O(n²)입니다.',
    difficulty: '중',
    tags: ['알고리즘', '정렬', '시간복잡도']
  },
  {
    id: 'INFO_064',
    subject: '소프트웨어 설계',
    question: 'UML 다이어그램 중 객체 간의 동적 상호작용을 표현하는 것은?',
    options: ['클래스 다이어그램', '시퀀스 다이어그램', '컴포넌트 다이어그램', '배치 다이어그램'],
    answer: 1,
    explanation: '시퀀스 다이어그램은 객체 간의 메시지 교환 순서를 시간 흐름에 따라 표현합니다.',
    difficulty: '하',
    tags: ['UML', '시퀀스다이어그램']
  },
  {
    id: 'INFO_065',
    subject: '정보시스템 구축관리',
    question: 'Git에서 작업 내용을 원격 저장소에 업로드하는 명령어는?',
    options: ['git pull', 'git push', 'git commit', 'git clone'],
    answer: 1,
    explanation: 'git push는 로컬 저장소의 변경사항을 원격 저장소에 업로드합니다.',
    difficulty: '하',
    tags: ['Git', '버전관리']
  },
  {
    id: 'INFO_066',
    subject: '데이터베이스 구축',
    question: '트랜잭션의 격리 수준(Isolation Level) 중 가장 낮은 수준은?',
    options: ['READ UNCOMMITTED', 'READ COMMITTED', 'REPEATABLE READ', 'SERIALIZABLE'],
    answer: 0,
    explanation: 'READ UNCOMMITTED는 가장 낮은 격리 수준으로 Dirty Read가 발생할 수 있습니다.',
    difficulty: '상',
    tags: ['트랜잭션', '격리수준']
  },
  {
    id: 'INFO_067',
    subject: '프로그래밍 언어 활용',
    question: 'RESTful API에서 리소스 수정에 주로 사용되는 HTTP 메서드는?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    answer: 2,
    explanation: 'PUT은 리소스의 전체 수정에 사용됩니다. PATCH는 부분 수정, POST는 생성, DELETE는 삭제입니다.',
    difficulty: '하',
    tags: ['REST', 'HTTP']
  },
  {
    id: 'INFO_068',
    subject: '소프트웨어 설계',
    question: '소프트웨어 재사용 기법 중 화이트박스 재사용 방법은?',
    options: ['상속', '합성', '위임', '인터페이스 구현'],
    answer: 0,
    explanation: '상속은 부모 클래스의 내부 구조를 알아야 하므로 화이트박스 재사용입니다. 합성과 위임은 블랙박스 재사용입니다.',
    difficulty: '중',
    tags: ['재사용', '상속']
  },
  {
    id: 'INFO_069',
    subject: '데이터베이스 구축',
    question: 'NoSQL 데이터베이스 유형이 아닌 것은?',
    options: ['Key-Value', 'Document', 'Column-Family', 'Relational'],
    answer: 3,
    explanation: 'Relational은 관계형 데이터베이스(RDBMS)입니다. NoSQL 유형에는 Key-Value, Document, Column-Family, Graph가 있습니다.',
    difficulty: '하',
    tags: ['NoSQL', '데이터베이스']
  },
  {
    id: 'INFO_070',
    subject: '정보시스템 구축관리',
    question: 'SSL/TLS에서 사용하는 암호화 방식의 조합으로 옳은 것은?',
    options: ['대칭키만 사용', '비대칭키만 사용', '대칭키 + 비대칭키 모두 사용', '해시만 사용'],
    answer: 2,
    explanation: 'SSL/TLS는 초기 핸드셰이크에서 비대칭키로 세션키를 교환하고, 이후 통신에서 대칭키로 암호화합니다.',
    difficulty: '중',
    tags: ['SSL', '암호화']
  },
  {
    id: 'INFO_071',
    subject: '프로그래밍 언어 활용',
    question: 'JavaScript에서 비동기 처리를 위한 최신 문법은?',
    options: ['callback', 'Promise', 'async/await', 'setTimeout'],
    answer: 2,
    explanation: 'async/await는 ES2017에 도입된 비동기 처리 문법으로 Promise 기반으로 동작합니다.',
    difficulty: '중',
    tags: ['JavaScript', '비동기']
  },
  {
    id: 'INFO_072',
    subject: '소프트웨어 설계',
    question: 'DevOps의 핵심 원칙이 아닌 것은?',
    options: ['지속적 통합(CI)', '지속적 배포(CD)', '자동화', '폭포수 모델'],
    answer: 3,
    explanation: 'DevOps는 개발과 운영의 협업, 자동화, CI/CD를 강조합니다. 폭포수 모델은 전통적인 순차적 개발 방법론입니다.',
    difficulty: '하',
    tags: ['DevOps', 'CI/CD']
  },
  {
    id: 'INFO_073',
    subject: '데이터베이스 구축',
    question: 'SQL Injection 공격을 방지하는 방법으로 옳지 않은 것은?',
    options: ['Prepared Statement 사용', '입력값 검증', 'SQL 쿼리를 클라이언트에 노출', '최소 권한 원칙'],
    answer: 2,
    explanation: 'SQL 쿼리를 클라이언트에 노출하는 것은 보안 위협을 증가시킵니다. Prepared Statement와 입력값 검증이 중요합니다.',
    difficulty: '중',
    tags: ['보안', 'SQL Injection']
  },
  {
    id: 'INFO_074',
    subject: '정보시스템 구축관리',
    question: 'Docker 컨테이너의 특징으로 옳지 않은 것은?',
    options: ['격리된 환경 제공', '가상머신보다 가볍다', '호스트 OS 커널 공유', '하이퍼바이저 필요'],
    answer: 3,
    explanation: 'Docker는 호스트 OS 커널을 공유하므로 하이퍼바이저가 필요 없습니다. 가상머신과 달리 경량화되어 있습니다.',
    difficulty: '중',
    tags: ['Docker', '컨테이너']
  },
  {
    id: 'INFO_075',
    subject: '프로그래밍 언어 활용',
    question: '다음 중 함수형 프로그래밍의 특징이 아닌 것은?',
    options: ['불변성(Immutability)', '순수 함수', '고차 함수', '전역 변수 사용 권장'],
    answer: 3,
    explanation: '함수형 프로그래밍은 부작용을 최소화하고 순수 함수를 지향하므로 전역 변수 사용을 지양합니다.',
    difficulty: '중',
    tags: ['함수형프로그래밍', '패러다임']
  },
  {
    id: 'INFO_076',
    subject: '소프트웨어 설계',
    question: '소프트웨어 품질 특성(ISO 9126)이 아닌 것은?',
    options: ['기능성(Functionality)', '신뢰성(Reliability)', '사용성(Usability)', '수익성(Profitability)'],
    answer: 3,
    explanation: 'ISO 9126의 품질 특성은 기능성, 신뢰성, 사용성, 효율성, 유지보수성, 이식성입니다.',
    difficulty: '중',
    tags: ['품질', 'ISO']
  },
  {
    id: 'INFO_077',
    subject: '데이터베이스 구축',
    question: '데이터베이스 회복 기법이 아닌 것은?',
    options: ['로그 기반 회복', '체크포인트', '그림자 페이징', '해싱'],
    answer: 3,
    explanation: '해싱은 검색 기법입니다. 회복 기법에는 로그 기반, 체크포인트, 그림자 페이징 등이 있습니다.',
    difficulty: '중',
    tags: ['데이터베이스', '회복']
  },
  {
    id: 'INFO_078',
    subject: '프로그래밍 언어 활용',
    question: 'Big-O 표기법에서 O(1)의 의미는?',
    options: ['선형 시간', '상수 시간', '로그 시간', '지수 시간'],
    answer: 1,
    explanation: 'O(1)은 입력 크기와 관계없이 일정한 상수 시간 복잡도를 의미합니다.',
    difficulty: '하',
    tags: ['알고리즘', '시간복잡도']
  },
  {
    id: 'INFO_079',
    subject: '정보시스템 구축관리',
    question: 'VPN(Virtual Private Network)의 주요 목적은?',
    options: ['속도 향상', '보안 통신', '대역폭 증가', '서버 부하 분산'],
    answer: 1,
    explanation: 'VPN은 공중 네트워크를 통해 안전한 개인 네트워크를 구성하여 보안 통신을 제공합니다.',
    difficulty: '하',
    tags: ['VPN', '네트워크']
  },
  {
    id: 'INFO_080',
    subject: '소프트웨어 설계',
    question: '클린 코드(Clean Code)의 원칙이 아닌 것은?',
    options: ['의미있는 이름', '작은 함수', '복잡한 주석', '오류 처리'],
    answer: 2,
    explanation: '클린 코드는 코드 자체가 문서가 되도록 명확하게 작성하고, 불필요한 주석을 지양합니다.',
    difficulty: '중',
    tags: ['클린코드', '코딩']
  },
  {
    id: 'INFO_081',
    subject: '데이터베이스 구축',
    question: 'OUTER JOIN의 종류가 아닌 것은?',
    options: ['LEFT OUTER JOIN', 'RIGHT OUTER JOIN', 'FULL OUTER JOIN', 'CENTER OUTER JOIN'],
    answer: 3,
    explanation: 'OUTER JOIN은 LEFT, RIGHT, FULL로 구분됩니다. CENTER OUTER JOIN은 존재하지 않습니다.',
    difficulty: '하',
    tags: ['SQL', 'JOIN']
  },
  {
    id: 'INFO_082',
    subject: '프로그래밍 언어 활용',
    question: 'Stack 자료구조의 특징은?',
    options: ['FIFO', 'LIFO', 'Random Access', 'Priority'],
    answer: 1,
    explanation: 'Stack은 LIFO(Last In First Out) 구조로 마지막에 들어간 데이터가 먼저 나옵니다.',
    difficulty: '하',
    tags: ['자료구조', 'Stack']
  },
  {
    id: 'INFO_083',
    subject: '정보시스템 구축관리',
    question: 'Firewall의 주요 기능이 아닌 것은?',
    options: ['패킷 필터링', '접근 제어', 'NAT', '데이터 압축'],
    answer: 3,
    explanation: 'Firewall은 패킷 필터링, 접근 제어, NAT 등의 기능을 수행합니다. 데이터 압축은 주요 기능이 아닙니다.',
    difficulty: '중',
    tags: ['방화벽', '보안']
  },
  {
    id: 'INFO_084',
    subject: '소프트웨어 설계',
    question: 'Proxy 패턴의 목적은?',
    options: ['객체 생성 제어', '다른 객체에 대한 접근 제어', '알고리즘 캡슐화', '객체 간 통신'],
    answer: 1,
    explanation: 'Proxy 패턴은 다른 객체에 대한 접근을 제어하기 위한 대리자 역할을 합니다.',
    difficulty: '중',
    tags: ['디자인패턴', 'Proxy']
  },
  {
    id: 'INFO_085',
    subject: '데이터베이스 구축',
    question: '데이터베이스 튜닝의 목적이 아닌 것은?',
    options: ['성능 향상', '응답 시간 단축', '데이터 중복 증가', '처리량 증대'],
    answer: 2,
    explanation: '데이터베이스 튜닝은 성능 향상, 응답 시간 단축, 처리량 증대를 목적으로 합니다. 데이터 중복은 지양해야 합니다.',
    difficulty: '하',
    tags: ['튜닝', '성능']
  },
  {
    id: 'INFO_086',
    subject: '프로그래밍 언어 활용',
    question: '정규표현식에서 [0-9]+의 의미는?',
    options: ['0 또는 9', '0부터 9까지 1개 이상', '0과 9 사이 숫자', '0 또는 9의 합'],
    answer: 1,
    explanation: '[0-9]는 0부터 9까지의 숫자, +는 1개 이상을 의미합니다.',
    difficulty: '중',
    tags: ['정규표현식', '프로그래밍']
  },
  {
    id: 'INFO_087',
    subject: '정보시스템 구축관리',
    question: 'Load Balancing의 주요 목적은?',
    options: ['보안 강화', '서버 부하 분산', '데이터 암호화', '네트워크 속도 향상'],
    answer: 1,
    explanation: 'Load Balancing은 여러 서버에 부하를 분산시켜 시스템 성능과 가용성을 향상시킵니다.',
    difficulty: '하',
    tags: ['로드밸런싱', '시스템']
  },
  {
    id: 'INFO_088',
    subject: '소프트웨어 설계',
    question: 'TDD(Test-Driven Development)의 순서로 옳은 것은?',
    options: ['코드 작성 → 테스트 작성 → 리팩토링', '테스트 작성 → 코드 작성 → 리팩토링', '리팩토링 → 테스트 작성 → 코드 작성', '테스트 작성 → 리팩토링 → 코드 작성'],
    answer: 1,
    explanation: 'TDD는 Red(테스트 작성) → Green(코드 작성) → Refactor(리팩토링) 순서로 진행합니다.',
    difficulty: '중',
    tags: ['TDD', '테스트']
  },
  {
    id: 'INFO_089',
    subject: '데이터베이스 구축',
    question: 'Stored Procedure의 장점이 아닌 것은?',
    options: ['네트워크 트래픽 감소', '보안 향상', '재사용성', '이식성 증가'],
    answer: 3,
    explanation: 'Stored Procedure는 DBMS마다 문법이 다르므로 이식성이 낮습니다. 네트워크 트래픽 감소, 보안, 재사용성은 장점입니다.',
    difficulty: '중',
    tags: ['프로시저', '데이터베이스']
  },
  {
    id: 'INFO_090',
    subject: '프로그래밍 언어 활용',
    question: 'Queue 자료구조를 활용하는 대표적인 알고리즘은?',
    options: ['DFS(깊이 우선 탐색)', 'BFS(너비 우선 탐색)', '이진 탐색', '퀵 정렬'],
    answer: 1,
    explanation: 'BFS(너비 우선 탐색)는 Queue를 사용합니다. DFS는 Stack을 사용합니다.',
    difficulty: '중',
    tags: ['자료구조', 'BFS']
  },
  {
    id: 'INFO_091',
    subject: '정보시스템 구축관리',
    question: 'CDN(Content Delivery Network)의 주요 목적은?',
    options: ['보안 강화', '콘텐츠 빠른 전송', '데이터 백업', '서버 비용 절감'],
    answer: 1,
    explanation: 'CDN은 지리적으로 분산된 서버를 통해 사용자에게 빠르게 콘텐츠를 전송합니다.',
    difficulty: '중',
    tags: ['CDN', '네트워크']
  },
  {
    id: 'INFO_092',
    subject: '소프트웨어 설계',
    question: 'Microservices Architecture의 특징이 아닌 것은?',
    options: ['독립적 배포', '서비스별 기술 선택 자유', '단일 데이터베이스 공유', '확장성'],
    answer: 2,
    explanation: 'Microservices는 각 서비스가 독립적인 데이터베이스를 가지는 것이 원칙입니다.',
    difficulty: '중',
    tags: ['마이크로서비스', '아키텍처']
  },
  {
    id: 'INFO_093',
    subject: '데이터베이스 구축',
    question: 'Sharding의 목적은?',
    options: ['데이터 암호화', '수평적 데이터 분할', '수직적 데이터 분할', '데이터 복제'],
    answer: 1,
    explanation: 'Sharding은 데이터를 여러 데이터베이스에 수평적으로 분할하여 저장하는 기법입니다.',
    difficulty: '상',
    tags: ['Sharding', '분산']
  },
  {
    id: 'INFO_094',
    subject: '프로그래밍 언어 활용',
    question: 'Garbage Collection의 역할은?',
    options: ['메모리 할당', '사용하지 않는 메모리 회수', '프로그램 최적화', '코드 압축'],
    answer: 1,
    explanation: 'Garbage Collection은 더 이상 사용되지 않는 메모리를 자동으로 회수하는 기능입니다.',
    difficulty: '하',
    tags: ['GC', '메모리']
  },
  {
    id: 'INFO_095',
    subject: '정보시스템 구축관리',
    question: 'Kubernetes의 주요 기능이 아닌 것은?',
    options: ['컨테이너 오케스트레이션', '자동 스케일링', '로드 밸런싱', '소스 코드 컴파일'],
    answer: 3,
    explanation: 'Kubernetes는 컨테이너 오케스트레이션 도구로, 소스 코드 컴파일 기능은 없습니다.',
    difficulty: '중',
    tags: ['Kubernetes', '컨테이너']
  },
  {
    id: 'INFO_096',
    subject: '소프트웨어 설계',
    question: 'CQRS(Command Query Responsibility Segregation) 패턴의 핵심은?',
    options: ['읽기와 쓰기 모델 분리', '데이터 암호화', '캐싱', '로깅'],
    answer: 0,
    explanation: 'CQRS는 읽기(Query)와 쓰기(Command) 모델을 분리하여 성능과 확장성을 향상시킵니다.',
    difficulty: '상',
    tags: ['CQRS', '패턴']
  },
  {
    id: 'INFO_097',
    subject: '데이터베이스 구축',
    question: 'Redis의 주요 특징은?',
    options: ['관계형 데이터베이스', '인메모리 데이터 저장소', '파일 시스템', '컴파일러'],
    answer: 1,
    explanation: 'Redis는 인메모리 Key-Value 저장소로 빠른 데이터 접근을 제공합니다.',
    difficulty: '중',
    tags: ['Redis', 'NoSQL']
  },
  {
    id: 'INFO_098',
    subject: '프로그래밍 언어 활용',
    question: 'Dependency Injection(DI)의 목적은?',
    options: ['성능 향상', '결합도 감소', '코드 압축', '메모리 절약'],
    answer: 1,
    explanation: 'DI는 객체 간 의존성을 외부에서 주입하여 결합도를 낮추고 테스트 용이성을 높입니다.',
    difficulty: '중',
    tags: ['DI', '디자인']
  },
  {
    id: 'INFO_099',
    subject: '정보시스템 구축관리',
    question: 'OAuth 2.0의 주요 용도는?',
    options: ['데이터 암호화', '인증 및 권한 부여', '데이터 압축', '네트워크 라우팅'],
    answer: 1,
    explanation: 'OAuth 2.0은 제3자 애플리케이션의 리소스 접근을 위한 인증 및 권한 부여 프레임워크입니다.',
    difficulty: '중',
    tags: ['OAuth', '인증']
  },
  {
    id: 'INFO_100',
    subject: '소프트웨어 설계',
    question: 'Monolithic Architecture의 단점이 아닌 것은?',
    options: ['배포 복잡도 증가', '부분 장애가 전체 영향', '기술 스택 제약', '개발 초기 단순함'],
    answer: 3,
    explanation: 'Monolithic은 개발 초기에는 단순하다는 장점이 있습니다. 배포 복잡도, 장애 전파, 기술 제약은 단점입니다.',
    difficulty: '중',
    tags: ['모놀리식', '아키텍처']
  }
];

export default infoQuestions;
