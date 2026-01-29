// 정보처리기사 지식맵
export const infoKnowledgeMap = {
  certId: 'info',
  subjects: {
    '소프트웨어 설계': {
      name: '소프트웨어 설계',
      description: '소프트웨어 개발 생명주기, 설계 원칙, 아키텍처 패턴, 디자인 패턴, UML, 테스트 전략 등 소프트웨어를 체계적으로 설계하고 구축하는 데 필요한 지식을 다룹니다.',
      topics: {
        '객체지향 설계': {
          name: '객체지향 설계',
          description: '객체지향 프로그래밍의 핵심 원칙(SOLID)과 설계 기법을 학습합니다.',
          concepts: {
            '객체지향': {
              name: '객체지향(OOP)',
              description: '캡슐화, 상속, 다형성, 추상화를 기반으로 하는 프로그래밍 패러다임입니다. SOLID 원칙(SRP, OCP, LSP, ISP, DIP)을 통해 유연하고 유지보수 가능한 설계를 지향합니다.',
              formulas: [],
              relatedConcepts: ['디자인패턴', 'UML', '결합도', '응집도']
            },
            '결합도': {
              name: '결합도(Coupling)',
              description: '모듈 간의 상호 의존 정도를 나타냅니다. 자료 < 스탬프 < 제어 < 외부 < 공통 < 내용 결합도 순으로 결합도가 높아지며, 낮을수록 좋은 설계입니다.',
              formulas: [],
              relatedConcepts: ['응집도', '객체지향', '모놀리식']
            },
            '응집도': {
              name: '응집도(Cohesion)',
              description: '모듈 내부 요소들이 하나의 기능을 위해 협력하는 정도입니다. 기능적 > 순차적 > 통신적 > 절차적 > 시간적 > 논리적 > 우연적 순으로 응집도가 낮아지며, 높을수록 좋은 설계입니다.',
              formulas: [],
              relatedConcepts: ['결합도', '객체지향', '클린코드']
            },
            '재사용': {
              name: '소프트웨어 재사용',
              description: '기존 소프트웨어 자산을 활용하여 새로운 시스템을 구축하는 기법입니다. 상속(화이트박스 재사용)과 합성/위임(블랙박스 재사용)으로 구분됩니다.',
              formulas: [],
              relatedConcepts: ['객체지향', '디자인패턴']
            }
          }
        },
        'UML 모델링': {
          name: 'UML 모델링',
          description: 'Unified Modeling Language를 활용한 소프트웨어 시스템 모델링 기법입니다.',
          concepts: {
            'UML': {
              name: 'UML(Unified Modeling Language)',
              description: '소프트웨어 시스템을 시각적으로 모델링하기 위한 표준 언어입니다. 구조 다이어그램(클래스, 컴포넌트, 배치 등)과 행위 다이어그램(시퀀스, 유스케이스, 상태 등)으로 구분됩니다.',
              formulas: [],
              relatedConcepts: ['객체지향', '디자인패턴', 'MVC']
            }
          }
        },
        '디자인 패턴': {
          name: '디자인 패턴',
          description: 'GoF 디자인 패턴을 중심으로 소프트웨어 설계에서 반복적으로 등장하는 문제의 해결 방안을 학습합니다.',
          concepts: {
            '디자인패턴': {
              name: '디자인 패턴(Design Pattern)',
              description: 'GoF 디자인 패턴은 생성(Singleton, Factory Method, Abstract Factory, Builder, Prototype), 구조(Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy), 행위(Strategy, Observer, Command 등) 패턴으로 분류됩니다.',
              formulas: [],
              relatedConcepts: ['객체지향', 'MVC', 'CQRS']
            },
            'MVC': {
              name: 'MVC(Model-View-Controller)',
              description: 'Model(데이터와 비즈니스 로직), View(사용자 인터페이스), Controller(요청 흐름 제어)로 구성된 아키텍처 패턴입니다.',
              formulas: [],
              relatedConcepts: ['디자인패턴', '아키텍처', 'REST']
            },
            'CQRS': {
              name: 'CQRS(Command Query Responsibility Segregation)',
              description: '읽기(Query)와 쓰기(Command)를 분리된 모델로 처리하여 성능과 확장성을 향상시키는 패턴입니다. Event Sourcing과 함께 사용되는 경우가 많습니다.',
              formulas: [],
              relatedConcepts: ['Event Sourcing', '마이크로서비스', 'Saga']
            },
            'Event Sourcing': {
              name: 'Event Sourcing',
              description: '현재 상태 대신 모든 상태 변경 이벤트를 순차적으로 저장하여 전체 이력을 추적하고 상태를 재구성할 수 있게 하는 패턴입니다.',
              formulas: [],
              relatedConcepts: ['CQRS', 'Saga', '마이크로서비스']
            },
            'Saga': {
              name: 'Saga 패턴',
              description: '마이크로서비스 환경에서 분산 트랜잭션을 관리하기 위해 일련의 로컬 트랜잭션으로 분할하는 패턴입니다. Choreography와 Orchestration 방식이 있습니다.',
              formulas: [],
              relatedConcepts: ['CQRS', 'Event Sourcing', '마이크로서비스', 'Circuit Breaker']
            },
            'Circuit Breaker': {
              name: 'Circuit Breaker 패턴',
              description: '외부 서비스 장애 시 연쇄 장애를 방지하는 패턴입니다. Closed(정상), Open(차단), Half-Open(반개방) 3가지 상태를 가집니다.',
              formulas: [],
              relatedConcepts: ['Saga', '마이크로서비스', 'API Gateway']
            },
            'BFF': {
              name: 'BFF(Backend For Frontend)',
              description: '각 프론트엔드(웹, 모바일 등)에 최적화된 별도의 백엔드 서비스를 제공하는 패턴입니다.',
              formulas: [],
              relatedConcepts: ['API Gateway', '마이크로서비스', 'REST']
            },
            'Strangler Fig': {
              name: 'Strangler Fig 패턴',
              description: '레거시 시스템을 새 시스템으로 점진적으로 교체하는 마이그레이션 전략입니다. 기존 시스템을 감싸면서 점진적으로 대체합니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', '모놀리식', '아키텍처']
            }
          }
        },
        '소프트웨어 아키텍처': {
          name: '소프트웨어 아키텍처',
          description: '소프트웨어 시스템의 고수준 구조와 설계 원칙을 다룹니다.',
          concepts: {
            '아키텍처': {
              name: '소프트웨어 아키텍처',
              description: '소프트웨어 시스템의 고수준 구조를 정의합니다. 마이크로서비스, 모놀리식, 계층형, 이벤트 기반 등 다양한 아키텍처 스타일이 있습니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', '모놀리식', 'MVC', 'Hexagonal']
            },
            '마이크로서비스': {
              name: '마이크로서비스 아키텍처',
              description: '서비스를 독립적으로 배포 가능한 작은 단위로 분리하는 아키텍처입니다. 느슨한 결합, 독립적 배포, 서비스별 기술 선택 자유가 특징입니다.',
              formulas: [],
              relatedConcepts: ['아키텍처', '모놀리식', 'API Gateway', 'Saga', 'CQRS']
            },
            '모놀리식': {
              name: '모놀리식 아키텍처(Monolithic)',
              description: '하나의 단일 애플리케이션으로 구성된 전통적인 아키텍처입니다. 초기 개발이 단순하지만, 규모가 커지면 배포 복잡도 증가, 장애 전파, 기술 스택 제약 등의 단점이 있습니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', '아키텍처', 'Strangler Fig']
            },
            'Hexagonal': {
              name: 'Hexagonal Architecture(포트와 어댑터)',
              description: '비즈니스 로직을 중심에 두고 외부 시스템(DB, UI 등)과 포트/어댑터를 통해 분리하여 테스트 용이성과 유연성을 높이는 아키텍처입니다.',
              formulas: [],
              relatedConcepts: ['아키텍처', 'DDD', 'Architecture']
            },
            'Architecture': {
              name: '아키텍처 설계 원칙',
              description: '소프트웨어 아키텍처의 다양한 설계 원칙과 패턴을 다룹니다. Hexagonal, Layered, Event-Driven 등 다양한 스타일을 포함합니다.',
              formulas: [],
              relatedConcepts: ['Hexagonal', '아키텍처', 'Polyglot']
            },
            'Polyglot': {
              name: 'Polyglot Persistence',
              description: '각 데이터의 특성에 맞춰 관계형 DB, NoSQL, Graph DB 등을 적재적소에 사용하는 접근 방식입니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', 'Architecture', '아키텍처']
            },
            'API Gateway': {
              name: 'API Gateway',
              description: 'API 라우팅, 인증/인가, Rate Limiting, 부하 분산 등을 담당하는 진입점 역할의 서비스입니다. 마이크로서비스 아키텍처에서 핵심 구성요소입니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', 'REST', 'BFF']
            },
            'ATAM': {
              name: 'ATAM(Architecture Tradeoff Analysis Method)',
              description: '아키텍처의 품질 속성 간 트레이드오프를 분석하고 평가하는 방법입니다. 이해관계자를 참여시켜 아키텍처 결정의 근거를 문서화합니다.',
              formulas: [],
              relatedConcepts: ['아키텍처', '품질']
            }
          }
        },
        'API 설계': {
          name: 'API 설계',
          description: 'REST API 설계 원칙과 버전 관리 등 API 관련 지식을 다룹니다.',
          concepts: {
            'REST': {
              name: 'REST(Representational State Transfer)',
              description: 'Stateless, Uniform Interface, Layered System 등을 특징으로 하는 아키텍처 스타일입니다. HTTP 메서드(GET, POST, PUT, DELETE)를 활용하여 리소스를 조작합니다.',
              formulas: [],
              relatedConcepts: ['API', 'MVC', 'API Gateway']
            },
            'API': {
              name: 'API 설계 및 버전 관리',
              description: 'API 설계 원칙과 버전 관리 방법(URI, Header, Query Parameter)을 다룹니다. RESTful, GraphQL 등 다양한 API 스타일이 있습니다.',
              formulas: [],
              relatedConcepts: ['REST', 'API Gateway', 'BFF']
            }
          }
        },
        '소프트웨어 개발 방법론': {
          name: '소프트웨어 개발 방법론',
          description: '소프트웨어 개발 프로세스와 방법론을 학습합니다.',
          concepts: {
            '애자일': {
              name: '애자일(Agile)',
              description: '변화에 유연하게 대응하며, 짧은 개발 주기(스프린트)와 고객 협력을 통해 가치를 빠르게 전달하는 소프트웨어 개발 방법론입니다.',
              formulas: [],
              relatedConcepts: ['스크럼', 'XP', '칸반', 'SDLC']
            },
            '스크럼': {
              name: '스크럼(Scrum)',
              description: '애자일의 대표적 프레임워크로, 스프린트(1~4주), 백로그, 데일리 스탠드업, 스프린트 리뷰/회고 등으로 구성됩니다.',
              formulas: [],
              relatedConcepts: ['애자일', 'XP', '칸반']
            },
            'XP': {
              name: 'XP(Extreme Programming)',
              description: '애자일 방법론으로 짝 프로그래밍, TDD, 지속적 통합, 리팩토링, 작은 릴리스 등 12가지 실천 방법을 포함합니다.',
              formulas: [],
              relatedConcepts: ['애자일', 'TDD', '스크럼']
            },
            '칸반': {
              name: '칸반(Kanban)',
              description: '작업 시각화, WIP(Work In Progress) 제한, 흐름 관리를 핵심 원칙으로 하는 유연한 애자일 방법론입니다.',
              formulas: [],
              relatedConcepts: ['애자일', '스크럼']
            },
            'SDLC': {
              name: 'SDLC(소프트웨어 개발 생명주기)',
              description: '소프트웨어의 계획, 분석, 설계, 구현, 테스트, 유지보수에 이르는 전체 생명주기를 관리하는 프레임워크입니다. 폭포수, 나선형, V-모델, 애자일 등이 있습니다.',
              formulas: [],
              relatedConcepts: ['애자일', '품질']
            },
            'DevOps': {
              name: 'DevOps',
              description: '개발(Development)과 운영(Operations)의 협업과 통합을 강조하는 문화 및 방법론입니다. CI/CD, 자동화, 모니터링을 핵심으로 합니다.',
              formulas: [],
              relatedConcepts: ['애자일', 'TDD', 'CI/CD']
            }
          }
        },
        '소프트웨어 테스트 및 품질': {
          name: '소프트웨어 테스트 및 품질',
          description: '소프트웨어 테스트 기법과 품질 관리를 다룹니다.',
          concepts: {
            '테스트': {
              name: '소프트웨어 테스트',
              description: '소프트웨어의 결함을 발견하기 위한 기법입니다. 화이트박스(구문/조건/결정 커버리지)와 블랙박스(동등 분할, 경계값 분석, 상태 전이) 테스트로 구분됩니다.',
              formulas: [],
              relatedConcepts: ['TDD', 'Contract Testing', '품질']
            },
            'TDD': {
              name: 'TDD(Test-Driven Development)',
              description: 'Red(테스트 작성) -> Green(코드 작성) -> Refactor(리팩토링) 순서로 진행하는 테스트 주도 개발 방법입니다.',
              formulas: [],
              relatedConcepts: ['테스트', 'XP', '클린코드']
            },
            'Contract Testing': {
              name: 'Contract Testing',
              description: 'API 제공자와 소비자 간의 계약(인터페이스)이 일치하는지 검증하는 테스트 기법입니다. 마이크로서비스 환경에서 중요합니다.',
              formulas: [],
              relatedConcepts: ['테스트', '마이크로서비스', 'API']
            },
            '품질': {
              name: '소프트웨어 품질(ISO 9126)',
              description: 'ISO 9126에서 정의한 6가지 품질 특성: 기능성(Functionality), 신뢰성(Reliability), 사용성(Usability), 효율성(Efficiency), 유지보수성(Maintainability), 이식성(Portability)입니다.',
              formulas: [],
              relatedConcepts: ['테스트', 'ATAM', 'SDLC']
            },
            '클린코드': {
              name: '클린 코드(Clean Code)',
              description: '의미있는 이름, 작은 함수, 적절한 오류 처리, 불필요한 주석 지양 등 가독성과 유지보수성이 높은 코드를 작성하는 원칙입니다.',
              formulas: [],
              relatedConcepts: ['TDD', '객체지향', '응집도']
            },
            'SBOM': {
              name: 'SBOM(Software Bill of Materials)',
              description: '소프트웨어의 모든 구성요소와 의존성을 명시한 목록으로 보안 취약점 관리와 라이선스 컴플라이언스에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['품질', 'Supply Chain']
            }
          }
        },
        '리액티브 및 도메인 설계': {
          name: '리액티브 및 도메인 설계',
          description: '리액티브 프로그래밍과 도메인 주도 설계를 다룹니다.',
          concepts: {
            'Reactive': {
              name: 'Reactive Programming',
              description: '비동기 데이터 스트림을 선언적으로 처리하는 프로그래밍 패러다임입니다. 변화 전파와 데이터 흐름을 중심으로 합니다.',
              formulas: [],
              relatedConcepts: ['Event Sourcing', 'CQRS', '마이크로서비스']
            },
            'DDD': {
              name: 'DDD(Domain-Driven Design)',
              description: '도메인 전문가와 개발자가 보편 언어(Ubiquitous Language)를 사용하여 도메인 모델을 설계합니다. Entity, Value Object, Aggregate, Bounded Context 등이 핵심 개념입니다.',
              formulas: [],
              relatedConcepts: ['마이크로서비스', 'Hexagonal', '객체지향']
            },
            '알고리즘': {
              name: '알고리즘 설계 기법',
              description: '문제를 효율적으로 해결하기 위한 알고리즘 설계 기법입니다. 동적 프로그래밍, 그리디, 분할 정복 등 다양한 접근법을 포함합니다.',
              formulas: [],
              relatedConcepts: ['DP', '자료구조']
            }
          }
        }
      }
    },
    '데이터베이스 구축': {
      name: '데이터베이스 구축',
      description: '관계형 데이터베이스 설계, SQL, 정규화, 트랜잭션 관리, NoSQL, 분산 데이터베이스 등 데이터 관리에 필요한 전반적인 지식을 다룹니다.',
      topics: {
        '데이터베이스 설계': {
          name: '데이터베이스 설계',
          description: '관계형 데이터베이스의 설계 원칙과 정규화를 다룹니다.',
          concepts: {
            '정규화': {
              name: '정규화(Normalization)',
              description: '데이터 중복을 최소화하고 이상 현상을 방지하기 위해 테이블을 분해하는 과정입니다. 1NF -> 2NF -> 3NF -> BCNF -> 4NF -> 5NF 순서로 진행됩니다.',
              formulas: [],
              relatedConcepts: ['이상', '무결성', '관계대수']
            },
            '이상': {
              name: '이상(Anomaly)',
              description: '잘못된 테이블 설계로 인해 발생하는 데이터 불일치 현상입니다. 삽입 이상, 삭제 이상, 갱신 이상의 3가지 유형이 있습니다.',
              formulas: [],
              relatedConcepts: ['정규화', '무결성']
            },
            '무결성': {
              name: '무결성 제약조건(Integrity Constraints)',
              description: '데이터의 정확성과 일관성을 보장하기 위한 규칙입니다. 개체 무결성, 참조 무결성, 도메인 무결성, 키 무결성 등이 있습니다.',
              formulas: [],
              relatedConcepts: ['정규화', '트랜잭션', 'SQL']
            },
            '관계대수': {
              name: '관계대수(Relational Algebra)',
              description: '관계형 데이터베이스의 이론적 기반입니다. 순수 관계 연산(선택, 추출, 조인, 디비전)과 일반 집합 연산(합집합, 교집합, 차집합, 카티션 프로덕트)으로 구분됩니다.',
              formulas: [],
              relatedConcepts: ['SQL', '정규화']
            }
          }
        },
        'SQL': {
          name: 'SQL(Structured Query Language)',
          description: '데이터베이스 조작 및 정의 언어를 다룹니다.',
          concepts: {
            'SQL': {
              name: 'SQL(Structured Query Language)',
              description: '데이터베이스를 조작하고 정의하는 표준 언어입니다. DDL(CREATE, ALTER, DROP), DML(SELECT, INSERT, UPDATE, DELETE), DCL(GRANT, REVOKE)로 분류됩니다.',
              formulas: [],
              relatedConcepts: ['뷰', '인덱스', '트랜잭션', 'Window Function']
            },
            '뷰': {
              name: '뷰(View)',
              description: '가상의 테이블로 물리적으로 데이터를 저장하지 않고 쿼리문만 저장합니다. 데이터 독립성과 보안성을 제공합니다.',
              formulas: [],
              relatedConcepts: ['SQL', 'View', 'Materialized View']
            },
            'View': {
              name: 'View(가상 테이블)',
              description: '가상 테이블로서 데이터를 물리적으로 저장하지 않고 쿼리 정의만 저장하여 데이터 독립성과 보안을 제공합니다.',
              formulas: [],
              relatedConcepts: ['뷰', 'Materialized View', 'SQL']
            },
            'Materialized View': {
              name: 'Materialized View',
              description: '쿼리 결과를 물리적으로 저장하여 조회 성능을 향상시키는 데이터베이스 객체입니다. 주기적 갱신이 필요합니다.',
              formulas: [],
              relatedConcepts: ['뷰', 'View', '튜닝']
            },
            'Window Function': {
              name: 'Window Function(윈도우 함수)',
              description: 'SQL에서 행 집합에 대해 계산을 수행하는 함수입니다. ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), LAG() 등이 있습니다.',
              formulas: [],
              relatedConcepts: ['SQL', '튜닝']
            },
            '프로시저': {
              name: 'Stored Procedure(저장 프로시저)',
              description: '데이터베이스에 저장된 SQL 프로그램으로, 네트워크 트래픽 감소, 보안 향상, 재사용성 등의 장점이 있으나 이식성이 낮습니다.',
              formulas: [],
              relatedConcepts: ['SQL', '튜닝']
            }
          }
        },
        '트랜잭션 및 동시성': {
          name: '트랜잭션 및 동시성',
          description: '데이터베이스 트랜잭션 관리와 동시성 제어를 다룹니다.',
          concepts: {
            '트랜잭션': {
              name: '트랜잭션(Transaction)',
              description: '데이터베이스의 논리적 작업 단위입니다. ACID 특성(Atomicity, Consistency, Isolation, Durability)을 보장합니다.',
              formulas: [],
              relatedConcepts: ['교착상태', 'Isolation', 'MVCC']
            },
            'Isolation': {
              name: '격리 수준(Isolation Level)',
              description: '트랜잭션 간 격리 정도를 정의합니다. READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE 순으로 격리 수준이 높아집니다.',
              formulas: [],
              relatedConcepts: ['트랜잭션', 'MVCC']
            },
            '교착상태': {
              name: '교착상태(Deadlock)',
              description: '두 개 이상의 트랜잭션이 상호 잠금을 대기하며 무한 대기하는 상태입니다. 예방(Prevention), 회피(Avoidance), 탐지 및 복구(Detection & Recovery)로 해결합니다.',
              formulas: [],
              relatedConcepts: ['트랜잭션', 'MVCC']
            },
            'MVCC': {
              name: 'MVCC(Multi-Version Concurrency Control)',
              description: '각 트랜잭션이 데이터의 스냅샷을 보므로 읽기와 쓰기가 서로 차단하지 않아 동시성을 향상시키는 기법입니다.',
              formulas: [],
              relatedConcepts: ['트랜잭션', 'Isolation', '교착상태']
            }
          }
        },
        '인덱스 및 성능': {
          name: '인덱스 및 성능',
          description: '데이터베이스 인덱스와 성능 최적화를 다룹니다.',
          concepts: {
            '인덱스': {
              name: '인덱스(Index)',
              description: '데이터베이스 검색 속도를 향상시키기 위한 자료구조입니다. B-트리, 해시 등을 사용하며, 삽입/삭제 시 오버헤드가 발생합니다.',
              formulas: [],
              relatedConcepts: ['Index', 'B-Tree', '튜닝']
            },
            'Index': {
              name: 'Index(인덱스 활용)',
              description: '인덱스를 활용하면 검색, 정렬, 조인 성능이 향상되지만, 삽입/수정/삭제 시 인덱스 갱신 오버헤드가 발생합니다.',
              formulas: [],
              relatedConcepts: ['인덱스', 'B-Tree', '튜닝']
            },
            'B-Tree': {
              name: 'B-Tree 인덱스',
              description: '모든 리프 노드가 같은 레벨에 있는 균형 잡힌 트리 구조의 인덱스입니다. 범위 검색에 효율적이며, 대부분의 RDBMS에서 기본 인덱스로 사용됩니다.',
              formulas: [],
              relatedConcepts: ['인덱스', 'Index', '튜닝']
            },
            '튜닝': {
              name: '데이터베이스 튜닝',
              description: '데이터베이스 성능 향상, 응답 시간 단축, 처리량 증대를 목적으로 하는 최적화 활동입니다.',
              formulas: [],
              relatedConcepts: ['인덱스', 'B-Tree', 'Connection Pool']
            },
            'Connection Pool': {
              name: 'Database Connection Pool',
              description: '데이터베이스 연결을 미리 생성하여 풀에 보관하고 재사용하는 기법입니다. 연결 재사용, 응답 시간 감소, 동시 접속 제어에 효과적입니다.',
              formulas: [],
              relatedConcepts: ['튜닝', 'SQL']
            }
          }
        },
        '회복 및 로깅': {
          name: '회복 및 로깅',
          description: '데이터베이스 장애 회복과 로깅 기법을 다룹니다.',
          concepts: {
            '회복': {
              name: '데이터베이스 회복(Recovery)',
              description: '장애 발생 시 데이터베이스를 일관된 상태로 복원하는 기법입니다. 로그 기반 회복, 체크포인트, 그림자 페이징 등이 있습니다.',
              formulas: [],
              relatedConcepts: ['트랜잭션', 'WAL', '데이터베이스']
            },
            'WAL': {
              name: 'WAL(Write-Ahead Logging)',
              description: '실제 데이터 변경 전에 로그를 먼저 기록하여 장애 발생 시 트랜잭션 복구를 보장하는 기법입니다.',
              formulas: [],
              relatedConcepts: ['회복', '트랜잭션']
            },
            'CDC': {
              name: 'CDC(Change Data Capture)',
              description: '데이터베이스의 변경 사항을 실시간으로 감지하고 추적하는 기술입니다. 데이터 동기화와 이벤트 기반 아키텍처에 활용됩니다.',
              formulas: [],
              relatedConcepts: ['WAL', 'Event Sourcing', 'Replication']
            },
            '데이터베이스': {
              name: '데이터베이스 일반',
              description: '데이터베이스 시스템의 기본 개념과 관리 기법을 다룹니다. 회복, 프로시저, 파티셔닝 등 다양한 주제를 포함합니다.',
              formulas: [],
              relatedConcepts: ['SQL', '트랜잭션', '회복']
            }
          }
        },
        'NoSQL 데이터베이스': {
          name: 'NoSQL 데이터베이스',
          description: '비관계형 데이터베이스와 분산 시스템을 다룹니다.',
          concepts: {
            'NoSQL': {
              name: 'NoSQL',
              description: '비관계형 데이터베이스로 수평적 확장, 스키마 유연성, 대용량 데이터 처리가 특징입니다. Key-Value, Document, Column-Family, Graph 유형이 있으며 BASE 모델을 따릅니다.',
              formulas: [],
              relatedConcepts: ['Redis', 'MongoDB', 'Cassandra', 'BASE']
            },
            'Redis': {
              name: 'Redis',
              description: '인메모리 Key-Value 저장소로 빠른 데이터 접근을 제공합니다. String, List, Set, Hash, Sorted Set 등의 데이터 타입을 지원합니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'Connection Pool']
            },
            'MongoDB': {
              name: 'MongoDB',
              description: 'JSON 형식의 문서를 저장하는 Document Store NoSQL 데이터베이스입니다. Embedded Documents와 References로 관계를 표현합니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'Elasticsearch']
            },
            'Cassandra': {
              name: 'Apache Cassandra',
              description: '분산 Column-Family Store NoSQL 데이터베이스입니다. 높은 가용성과 확장성을 제공하며, 선형적 수평 확장이 가능합니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'CAP']
            },
            'Elasticsearch': {
              name: 'Elasticsearch',
              description: '분산 전문 검색 및 분석 엔진입니다. 대용량 데이터의 실시간 검색과 분석에 최적화되어 있습니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'MongoDB']
            },
            'BASE': {
              name: 'BASE 특성',
              description: 'NoSQL의 특성으로 Basically Available(기본적 가용성), Soft state(유연한 상태), Eventual consistency(최종 일관성)를 의미합니다. ACID와 대비되는 개념입니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'CAP', '트랜잭션']
            },
            'Graph DB': {
              name: 'Graph Database',
              description: '노드와 엣지로 데이터 간의 관계를 표현하는 데이터베이스입니다. Neo4j가 대표적이며 Cypher 쿼리 언어를 사용합니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'Cassandra']
            },
            'Time-series': {
              name: 'Time-series Database',
              description: '시간 기반 데이터에 최적화된 데이터베이스입니다. InfluxDB, TimescaleDB 등이 있으며 높은 쓰기 성능과 데이터 압축을 제공합니다.',
              formulas: [],
              relatedConcepts: ['NoSQL', 'TSDB']
            },
            'TSDB': {
              name: 'TSDB(시계열 데이터베이스)',
              description: '시계열 데이터에 최적화된 데이터베이스 유형으로, 높은 쓰기 성능과 압축을 제공하며 모니터링 데이터 저장에 주로 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Time-series', 'NoSQL']
            }
          }
        },
        '분산 데이터베이스': {
          name: '분산 데이터베이스',
          description: '분산 환경에서의 데이터 관리와 확장 기법을 다룹니다.',
          concepts: {
            'Sharding': {
              name: 'Sharding(샤딩)',
              description: '데이터를 여러 데이터베이스에 수평적으로 분할하여 저장하는 기법입니다. Range-based, Hash-based, Directory-based 전략이 있습니다.',
              formulas: [],
              relatedConcepts: ['파티셔닝', 'Replication', 'CAP']
            },
            '파티셔닝': {
              name: '파티셔닝(Partitioning)',
              description: '대규모 테이블을 더 작은 단위로 분할하여 관리하는 기법입니다. 쿼리 성능 향상, 관리 용이성, 가용성 향상의 장점이 있습니다.',
              formulas: [],
              relatedConcepts: ['Sharding', '튜닝']
            },
            'Replication': {
              name: 'Replication(복제)',
              description: '데이터를 여러 노드에 복제하여 가용성, 읽기 성능, 재해 복구 능력을 향상시키는 기법입니다. Master-Slave, Master-Master 구조가 있습니다.',
              formulas: [],
              relatedConcepts: ['Sharding', 'CAP', 'WAL']
            },
            'CAP': {
              name: 'CAP 정리',
              description: '분산 시스템에서 Consistency(일관성), Availability(가용성), Partition tolerance(분할 내성) 중 최대 2가지만 동시에 보장할 수 있다는 이론입니다.',
              formulas: [],
              relatedConcepts: ['BASE', 'NoSQL', 'Replication', '분산시스템']
            },
            '분산시스템': {
              name: '분산 시스템',
              description: '여러 컴퓨터가 네트워크로 연결되어 하나의 시스템처럼 동작하는 시스템입니다. CAP 정리, 분산 트랜잭션, 합의 알고리즘 등의 개념을 포함합니다.',
              formulas: [],
              relatedConcepts: ['CAP', 'Sharding', 'Replication']
            }
          }
        }
      }
    },
    '프로그래밍 언어 활용': {
      name: '프로그래밍 언어 활용',
      description: '자료구조, 알고리즘, 프로그래밍 언어 특성, 메모리 관리, 동시성 프로그래밍 등 프로그래밍에 필요한 핵심 지식을 다룹니다.',
      topics: {
        '자료구조': {
          name: '자료구조',
          description: '데이터를 효율적으로 저장하고 관리하기 위한 구조를 학습합니다.',
          concepts: {
            '자료구조': {
              name: '자료구조(Data Structure)',
              description: '데이터를 효율적으로 저장, 관리, 접근하기 위한 구조입니다. 선형(배열, 연결리스트, 스택, 큐)과 비선형(트리, 그래프, 해시) 자료구조로 분류됩니다.',
              formulas: [],
              relatedConcepts: ['해시', '힙', '그래프']
            },
            '해시': {
              name: '해시 테이블(Hash Table)',
              description: '키를 해시 함수로 변환하여 데이터를 저장하는 자료구조입니다. 충돌 해결 방법으로 체이닝, 선형 탐사, 이차 탐사, 이중 해싱 등이 있습니다.',
              formulas: [],
              relatedConcepts: ['자료구조', '알고리즘']
            },
            '힙': {
              name: '힙(Heap)',
              description: '완전 이진 트리 형태의 자료구조로, 최대 힙(부모 >= 자식) 또는 최소 힙(부모 <= 자식)의 성질을 만족합니다. 우선순위 큐 구현에 사용됩니다.',
              formulas: [],
              relatedConcepts: ['자료구조', '알고리즘']
            },
            '그래프': {
              name: '그래프(Graph)',
              description: '정점(Vertex)과 간선(Edge)으로 구성된 비선형 자료구조입니다. BFS(너비 우선, 큐 사용)와 DFS(깊이 우선, 스택/재귀 사용) 탐색 알고리즘이 있습니다.',
              formulas: [],
              relatedConcepts: ['자료구조', '알고리즘', 'DP']
            }
          }
        },
        '알고리즘': {
          name: '알고리즘',
          description: '정렬, 탐색, 동적 프로그래밍 등 핵심 알고리즘을 다룹니다.',
          concepts: {
            '알고리즘': {
              name: '알고리즘(Algorithm)',
              description: '문제를 효율적으로 해결하기 위한 절차입니다. 시간복잡도(O(1), O(log n), O(n), O(n log n), O(n^2))로 성능을 분석하며, 정렬, 탐색 등 다양한 유형이 있습니다.',
              formulas: [
                'O(1): 상수 시간',
                'O(log n): 이진 탐색',
                'O(n): 선형 탐색',
                'O(n log n): 퀵/합병 정렬 평균',
                'O(n^2): 버블/선택/삽입 정렬'
              ],
              relatedConcepts: ['자료구조', 'DP', '그래프']
            },
            'DP': {
              name: '동적 프로그래밍(Dynamic Programming)',
              description: '최적 부분 구조와 중복 부분 문제 성질을 가진 문제를 효율적으로 해결하는 알고리즘 기법입니다. Top-down(메모이제이션)과 Bottom-up(타뷸레이션) 접근법이 있습니다.',
              formulas: [],
              relatedConcepts: ['알고리즘', '그래프']
            }
          }
        },
        '메모리 및 시스템': {
          name: '메모리 및 시스템',
          description: '프로그래밍 언어의 메모리 관리와 시스템 관련 개념을 다룹니다.',
          concepts: {
            '메모리': {
              name: '메모리 관리',
              description: '프로그램의 메모리 영역은 코드, 데이터, 힙, 스택으로 구분됩니다. 재귀 함수 호출 시 스택 영역에 지역 변수, 매개변수, 복귀 주소가 저장됩니다.',
              formulas: [],
              relatedConcepts: ['GC', '자료구조']
            },
            'GC': {
              name: '가비지 컬렉션(Garbage Collection)',
              description: '더 이상 사용되지 않는 메모리를 자동으로 회수하는 기능입니다. JVM, .NET, Python 등의 런타임에서 자동으로 수행됩니다.',
              formulas: [],
              relatedConcepts: ['메모리', 'Java']
            }
          }
        },
        '프로그래밍 언어': {
          name: '프로그래밍 언어',
          description: '주요 프로그래밍 언어의 특성과 기능을 다룹니다.',
          concepts: {
            'C언어': {
              name: 'C언어',
              description: '절차적 프로그래밍 언어로 포인터, 메모리 직접 관리, 구조체 등을 지원합니다. 삼항 연산자, 비트 연산자 등 다양한 연산자를 제공합니다.',
              formulas: [],
              relatedConcepts: ['메모리', '알고리즘']
            },
            'Java': {
              name: 'Java',
              description: '객체지향 프로그래밍 언어로 JVM 기반으로 플랫폼 독립적입니다. 가비지 컬렉션, 인터페이스, Optional, 멀티스레딩 등을 지원합니다.',
              formulas: [],
              relatedConcepts: ['객체지향', 'GC', 'Kotlin']
            },
            'Python': {
              name: 'Python',
              description: '동적 타입의 인터프리터 언어로 간결한 문법이 특징입니다. GIL(Global Interpreter Lock)로 인해 CPU 멀티스레딩에 제한이 있습니다.',
              formulas: [],
              relatedConcepts: ['GC', 'Lambda', 'FP']
            },
            'JavaScript': {
              name: 'JavaScript',
              description: '동적 타입 스크립팅 언어로 이벤트 루프 기반 비동기 처리를 지원합니다. async/await, Promise, Microtask/Macrotask Queue 등의 개념이 있습니다.',
              formulas: [],
              relatedConcepts: ['TypeScript', 'REST', 'CORS']
            },
            'TypeScript': {
              name: 'TypeScript',
              description: 'JavaScript에 정적 타입을 추가한 슈퍼셋 언어입니다. 컴파일 타임에 타입 검사를 수행하여 안정성을 높입니다.',
              formulas: [],
              relatedConcepts: ['JavaScript', 'Java']
            },
            'Kotlin': {
              name: 'Kotlin',
              description: 'JVM 기반의 프로그래밍 언어로 nullable/non-nullable 타입 구분을 통한 null 안전성을 제공합니다. Android 공식 언어입니다.',
              formulas: [],
              relatedConcepts: ['Java', 'Lambda']
            },
            'Golang': {
              name: 'Go(Golang)',
              description: 'Google에서 개발한 정적 타입 컴파일 언어로, goroutine을 통한 경량 동시성을 지원합니다.',
              formulas: [],
              relatedConcepts: ['Go', 'Actor']
            },
            'Go': {
              name: 'Go 언어(Goroutine)',
              description: 'Go의 고루틴(Goroutine)은 OS 스레드보다 훨씬 가벼운 경량 스레드로, 수천~수만 개를 동시에 실행할 수 있습니다.',
              formulas: [],
              relatedConcepts: ['Golang', 'Actor']
            },
            'Rust': {
              name: 'Rust',
              description: '소유권(Ownership) 시스템을 통해 가비지 컬렉션 없이 메모리 안전성을 보장하는 시스템 프로그래밍 언어입니다.',
              formulas: [],
              relatedConcepts: ['메모리', 'WebAssembly']
            }
          }
        },
        '프로그래밍 패러다임': {
          name: '프로그래밍 패러다임',
          description: '함수형 프로그래밍, 리액티브 프로그래밍 등 다양한 프로그래밍 패러다임을 다룹니다.',
          concepts: {
            '객체지향': {
              name: '객체지향 프로그래밍(OOP)',
              description: '캡슐화, 상속, 다형성, 추상화를 4대 특징으로 하는 프로그래밍 패러다임입니다.',
              formulas: [],
              relatedConcepts: ['Java', 'DI', '함수형프로그래밍']
            },
            '함수형프로그래밍': {
              name: '함수형 프로그래밍(Functional Programming)',
              description: '불변성(Immutability), 순수 함수, 고차 함수, 부수효과 최소화를 추구하는 프로그래밍 패러다임입니다.',
              formulas: [],
              relatedConcepts: ['Lambda', 'FP', 'Reactive']
            },
            'FP': {
              name: 'Functional Programming',
              description: '함수형 프로그래밍의 핵심 개념으로 불변성, 순수 함수, 부수효과 최소화를 추구하며 전역 상태 사용을 지양합니다.',
              formulas: [],
              relatedConcepts: ['함수형프로그래밍', 'Lambda', 'Reactive']
            },
            'Lambda': {
              name: 'Lambda(익명 함수)',
              description: '이름 없이 정의되는 익명 함수로 일급 객체로 취급되며, 고차 함수와 함께 사용됩니다. 간결한 문법이 특징입니다.',
              formulas: [],
              relatedConcepts: ['함수형프로그래밍', 'FP', 'Python']
            },
            'Reactive': {
              name: 'Reactive Programming',
              description: '비동기 데이터 스트림과 변화 전파를 중심으로 하는 프로그래밍 패러다임입니다.',
              formulas: [],
              relatedConcepts: ['함수형프로그래밍', 'JavaScript', 'FP']
            },
            'DI': {
              name: 'Dependency Injection(의존성 주입)',
              description: '객체 간 의존성을 외부에서 주입하여 결합도를 낮추고 테스트 용이성을 높이는 설계 기법입니다.',
              formulas: [],
              relatedConcepts: ['객체지향', 'Java']
            }
          }
        },
        '동시성 및 고급 기술': {
          name: '동시성 및 고급 기술',
          description: '동시성 프로그래밍과 고급 기술 주제를 다룹니다.',
          concepts: {
            'Actor': {
              name: 'Actor 모델',
              description: '액터 간 메시지 전달로 동시성을 구현하며, 상태를 공유하지 않는 동시성 프로그래밍 모델입니다. Erlang, Akka 등에서 사용됩니다.',
              formulas: [],
              relatedConcepts: ['Go', 'Golang', 'Reactive']
            },
            'WebAssembly': {
              name: 'WebAssembly(WASM)',
              description: '브라우저에서 네이티브에 가까운 성능으로 실행되는 바이너리 포맷입니다. C/C++/Rust 등을 컴파일하여 사용합니다.',
              formulas: [],
              relatedConcepts: ['Rust', 'JavaScript']
            },
            'GraphQL': {
              name: 'GraphQL',
              description: 'API 쿼리 언어로 Over-fetching과 Under-fetching을 방지하고 강력한 타입 시스템을 제공합니다. REST의 대안으로 사용될 수 있습니다.',
              formulas: [],
              relatedConcepts: ['REST', 'API']
            },
            'CORS': {
              name: 'CORS(Cross-Origin Resource Sharing)',
              description: 'Same-Origin Policy를 우회하여 다른 도메인의 리소스에 안전하게 접근하기 위한 보안 메커니즘입니다.',
              formulas: [],
              relatedConcepts: ['JavaScript', 'REST', 'CSP']
            },
            '정규표현식': {
              name: '정규표현식(Regular Expression)',
              description: '문자열 패턴을 정의하고 매칭하기 위한 특수 문법입니다. [0-9]+는 0~9까지 숫자 1개 이상, \\w는 단어 문자 등의 패턴을 사용합니다.',
              formulas: [],
              relatedConcepts: ['Python', 'JavaScript']
            },
            'REST': {
              name: 'REST API 활용',
              description: 'HTTP 메서드(GET, POST, PUT, DELETE)의 멱등성을 이해하고 RESTful API를 활용합니다. GET, PUT, DELETE는 멱등성을 보장합니다.',
              formulas: [],
              relatedConcepts: ['GraphQL', 'CORS', 'JavaScript']
            },
            'Git': {
              name: 'Git(버전 관리)',
              description: '분산 버전 관리 시스템으로 rebase(선형 히스토리)와 merge(분기 히스토리 유지)의 차이 등 고급 기능을 포함합니다.',
              formulas: [],
              relatedConcepts: ['Monorepo', 'DevOps']
            },
            'Monorepo': {
              name: 'Monorepo',
              description: '여러 프로젝트를 하나의 저장소에서 관리하는 방식입니다. 코드 공유 용이, 일관된 의존성 관리, 통합 CI/CD가 장점입니다.',
              formulas: [],
              relatedConcepts: ['Git', 'CI/CD']
            }
          }
        }
      }
    },
    '정보시스템 구축관리': {
      name: '정보시스템 구축관리',
      description: '네트워크, 보안, 시스템 관리, 클라우드 인프라, DevOps, 컨테이너 오케스트레이션 등 정보시스템 구축과 운영에 필요한 지식을 다룹니다.',
      topics: {
        '네트워크': {
          name: '네트워크',
          description: 'OSI 7계층, TCP/IP, 프로토콜 등 네트워크 기초를 다룹니다.',
          concepts: {
            '네트워크': {
              name: '네트워크(Network)',
              description: 'OSI 7계층 모델을 기반으로 하는 컴퓨터 네트워크 기초입니다. 각 계층별 프로토콜(물리, 데이터링크-Ethernet, 네트워크-IP, 전송-TCP/UDP, 응용-HTTP)을 포함합니다.',
              formulas: [],
              relatedConcepts: ['TCP', 'TCP/IP', 'VPN', 'CDN']
            },
            'TCP': {
              name: 'TCP와 UDP',
              description: 'TCP는 연결형 프로토콜로 3-way handshake를 통해 신뢰성을 보장합니다. UDP는 비연결형으로 신뢰성은 낮지만 빠른 전송이 가능합니다.',
              formulas: [],
              relatedConcepts: ['네트워크', 'TCP/IP', 'SSL']
            },
            'TCP/IP': {
              name: 'TCP/IP 4계층 모델',
              description: '인터넷 프로토콜 스위트로 네트워크 인터페이스, 인터넷(IP), 전송(TCP/UDP), 응용(HTTP/FTP) 계층으로 구성됩니다.',
              formulas: [],
              relatedConcepts: ['TCP', '네트워크', 'HTTPS']
            },
            'HTTPS': {
              name: 'HTTPS',
              description: 'HTTP에 SSL/TLS 암호화를 추가한 보안 프로토콜로 443 포트를 기본으로 사용합니다.',
              formulas: [],
              relatedConcepts: ['SSL', 'TCP/IP', '네트워크']
            },
            'SSL': {
              name: 'SSL/TLS',
              description: '초기 핸드셰이크에서 비대칭키로 세션키를 교환하고 이후 대칭키로 암호화하는 보안 프로토콜입니다.',
              formulas: [],
              relatedConcepts: ['HTTPS', 'TCP', '암호화']
            },
            'VPN': {
              name: 'VPN(Virtual Private Network)',
              description: '공중 네트워크를 통해 안전한 개인 네트워크를 구성하여 보안 통신을 제공하는 기술입니다.',
              formulas: [],
              relatedConcepts: ['네트워크', 'SSL', '방화벽']
            },
            'CDN': {
              name: 'CDN(Content Delivery Network)',
              description: '지리적으로 분산된 서버를 통해 사용자에게 빠르게 콘텐츠를 전송하는 네트워크 서비스입니다.',
              formulas: [],
              relatedConcepts: ['네트워크', '로드밸런싱']
            },
            'gRPC': {
              name: 'gRPC',
              description: 'HTTP/2 기반의 고성능 RPC 프레임워크로 Protocol Buffers를 사용한 바이너리 직렬화와 양방향 스트리밍을 지원합니다.',
              formulas: [],
              relatedConcepts: ['TCP', 'REST', 'Service Mesh']
            }
          }
        },
        '보안': {
          name: '보안',
          description: '네트워크 보안, 암호화, 인증 등 정보보안 기본 개념을 다룹니다.',
          concepts: {
            '보안': {
              name: '정보보안',
              description: 'SQL 인젝션, XSS 등 보안 취약점 방어와 암호화, 인증, 접근 제어 등 정보보안 전반을 다룹니다.',
              formulas: [],
              relatedConcepts: ['암호화', '방화벽', 'Zero Trust']
            },
            '암호화': {
              name: '암호화(Encryption)',
              description: '대칭키(AES, DES, 3DES)와 비대칭키(RSA) 암호화 알고리즘을 포함합니다. SSL/TLS에서는 두 방식을 조합하여 사용합니다.',
              formulas: [],
              relatedConcepts: ['보안', 'SSL', 'HTTPS']
            },
            '방화벽': {
              name: '방화벽(Firewall)',
              description: '네트워크 보안 장비로 패킷 필터링, 접근 제어, NAT 등의 기능을 수행합니다.',
              formulas: [],
              relatedConcepts: ['보안', 'VPN', 'Zero Trust']
            },
            'Zero Trust': {
              name: 'Zero Trust 보안 모델',
              description: '"신뢰하지 말고 항상 검증하라"는 원칙으로 내부/외부 구분 없이 모든 접근을 검증하는 보안 모델입니다.',
              formulas: [],
              relatedConcepts: ['보안', '방화벽', 'OAuth']
            },
            'OAuth': {
              name: 'OAuth 2.0',
              description: '제3자 애플리케이션의 리소스 접근을 위한 인증 및 권한 부여 프레임워크입니다.',
              formulas: [],
              relatedConcepts: ['보안', 'Zero Trust', 'JWT']
            },
            '표준': {
              name: '정보보안 표준(ISO/IEC 27001)',
              description: 'ISO/IEC 27001은 정보보안 관리체계(ISMS)에 대한 국제 표준으로, 조직의 정보보안 관리를 체계적으로 수립하고 운영하기 위한 프레임워크를 제공합니다.',
              formulas: [],
              relatedConcepts: ['보안', '품질']
            }
          }
        },
        '테스트 및 품질관리': {
          name: '테스트 및 품질관리',
          description: '시스템 수준의 테스트와 품질 관리를 다룹니다.',
          concepts: {
            '테스트': {
              name: '시스템 테스트',
              description: '화이트박스(구문/조건/결정 커버리지)와 블랙박스(동등 분할, 경계값 분석, 상태 전이) 테스트 기법을 포함합니다.',
              formulas: [],
              relatedConcepts: ['Chaos Engineering', '보안']
            }
          }
        },
        'DevOps 및 CI/CD': {
          name: 'DevOps 및 CI/CD',
          description: '지속적 통합/배포, 자동화, 인프라 관리를 다룹니다.',
          concepts: {
            'CI/CD': {
              name: 'CI/CD(지속적 통합/지속적 배포)',
              description: 'CI(Continuous Integration)는 코드 변경을 자동으로 빌드/테스트하고, CD(Continuous Deployment/Delivery)는 자동으로 배포하는 프로세스입니다.',
              formulas: [],
              relatedConcepts: ['Docker', 'Git', 'ArgoCD', 'DevOps']
            },
            'DevOps': {
              name: 'DevOps 문화',
              description: '개발과 운영의 협업, 자동화, CI/CD를 통해 소프트웨어 전달 속도와 품질을 향상시키는 문화와 실천 방법입니다.',
              formulas: [],
              relatedConcepts: ['CI/CD', 'IaC', 'GitOps']
            },
            'Git': {
              name: 'Git(버전 관리 시스템)',
              description: '분산 버전 관리 시스템으로 git pull, git push, git commit, git clone 등의 명령어를 사용합니다.',
              formulas: [],
              relatedConcepts: ['CI/CD', 'GitOps']
            },
            'ArgoCD': {
              name: 'ArgoCD',
              description: 'Kubernetes를 위한 GitOps 기반 지속적 배포(CD) 도구입니다. Git 저장소의 선언적 구성을 클러스터에 자동 동기화합니다.',
              formulas: [],
              relatedConcepts: ['GitOps', 'Kubernetes', 'CI/CD']
            },
            'GitOps': {
              name: 'GitOps',
              description: 'Git을 단일 진실 공급원으로 사용하여 선언적 구성과 자동 동기화로 인프라와 애플리케이션을 관리하는 방식입니다.',
              formulas: [],
              relatedConcepts: ['ArgoCD', 'Git', 'IaC']
            },
            'IaC': {
              name: 'IaC(Infrastructure as Code)',
              description: '인프라를 코드로 관리하여 재현성, 버전 관리, 자동화를 제공하는 방식입니다. Terraform이 대표적 도구입니다.',
              formulas: [],
              relatedConcepts: ['Terraform', 'GitOps', 'DevOps']
            },
            'Terraform': {
              name: 'Terraform',
              description: 'HashiCorp의 IaC(Infrastructure as Code) 도구로, 선언적 구성 언어(HCL)를 사용하여 인프라를 프로비저닝합니다.',
              formulas: [],
              relatedConcepts: ['IaC', 'Kubernetes', 'DevOps']
            },
            'Blue-Green': {
              name: 'Blue-Green Deployment',
              description: '구 버전(Blue)과 신 버전(Green)을 동시에 유지하여 무중단 배포를 가능하게 하는 배포 전략입니다.',
              formulas: [],
              relatedConcepts: ['Feature Flag', 'CI/CD']
            },
            'Feature Flag': {
              name: 'Feature Flag(Feature Toggle)',
              description: '코드 배포 없이 런타임에 기능을 동적으로 활성화하거나 비활성화할 수 있는 기법입니다.',
              formulas: [],
              relatedConcepts: ['Blue-Green', 'CI/CD']
            }
          }
        },
        '컨테이너 및 오케스트레이션': {
          name: '컨테이너 및 오케스트레이션',
          description: 'Docker, Kubernetes 등 컨테이너 기술과 오케스트레이션을 다룹니다.',
          concepts: {
            'Docker': {
              name: 'Docker',
              description: 'OS 수준 가상화를 통한 컨테이너 기반 격리 환경을 제공합니다. 호스트 OS 커널을 공유하여 가볍고 이식성이 뛰어납니다.',
              formulas: [],
              relatedConcepts: ['Kubernetes', 'CI/CD']
            },
            'Kubernetes': {
              name: 'Kubernetes',
              description: '컨테이너 오케스트레이션 플랫폼으로 자동 스케일링, 로드 밸런싱, 셀프 힐링 등의 기능을 제공합니다. Pod, Service, Deployment, StatefulSet 등의 리소스를 관리합니다.',
              formulas: [],
              relatedConcepts: ['Docker', 'Service Mesh', 'Sidecar']
            },
            'Service Mesh': {
              name: 'Service Mesh',
              description: '마이크로서비스 간 통신을 관리하는 인프라 계층입니다. Istio가 대표적인 구현체로 보안, 관찰성, 트래픽 관리를 제공합니다.',
              formulas: [],
              relatedConcepts: ['Kubernetes', 'Sidecar', 'gRPC']
            },
            'Sidecar': {
              name: 'Sidecar 패턴',
              description: '주 컨테이너와 함께 배포되어 로깅, 모니터링, 프록시 등 보조 기능을 제공하는 패턴입니다.',
              formulas: [],
              relatedConcepts: ['Kubernetes', 'Service Mesh']
            }
          }
        },
        '모니터링 및 관찰성': {
          name: '모니터링 및 관찰성',
          description: '시스템 모니터링, 관찰성, 장애 복원력 테스트를 다룹니다.',
          concepts: {
            'Prometheus': {
              name: 'Prometheus',
              description: '시계열 데이터 기반의 오픈소스 모니터링 및 알림 시스템입니다. Pull 방식으로 메트릭을 수집합니다.',
              formulas: [],
              relatedConcepts: ['Observability', 'Kubernetes']
            },
            'Observability': {
              name: 'Observability(관찰성)',
              description: '시스템을 관찰하고 이해하기 위한 능력으로 Logs(로그), Metrics(메트릭), Traces(추적)의 3가지 기둥으로 구성됩니다.',
              formulas: [],
              relatedConcepts: ['Prometheus', 'Chaos Engineering']
            },
            'Chaos Engineering': {
              name: 'Chaos Engineering',
              description: '의도적으로 장애를 주입하여 시스템의 회복력과 안정성을 테스트하고 개선하는 실천 방법입니다.',
              formulas: [],
              relatedConcepts: ['Observability', 'Kubernetes']
            },
            '로드밸런싱': {
              name: '로드 밸런싱(Load Balancing)',
              description: '여러 서버에 부하를 분산시켜 시스템 성능과 가용성을 향상시키는 기술입니다. L4(전송 계층), L7(응용 계층) 로드밸런서가 있습니다.',
              formulas: [],
              relatedConcepts: ['CDN', 'Kubernetes', '네트워크']
            }
          }
        },
        '분산 시스템': {
          name: '분산 시스템',
          description: '분산 시스템의 트랜잭션 관리를 다룹니다.',
          concepts: {
            '2PC': {
              name: '2PC(Two-Phase Commit)',
              description: 'Prepare 단계(모든 노드에 커밋 준비 요청)와 Commit 단계(실제 커밋 수행)로 구성되어 분산 트랜잭션의 원자성을 보장하는 프로토콜입니다.',
              formulas: [],
              relatedConcepts: ['Saga', 'CAP']
            }
          }
        }
      }
    },
    '정보보안': {
      name: '정보보안',
      description: '웹 보안, 인증/인가, 암호화, 보안 정책 등 정보보안 전반에 걸친 지식을 다룹니다.',
      topics: {
        '웹 보안': {
          name: '웹 보안',
          description: 'OWASP Top 10, XSS, CSRF 등 웹 애플리케이션 보안을 다룹니다.',
          concepts: {
            'OWASP': {
              name: 'OWASP Top 10',
              description: 'Open Web Application Security Project에서 선정한 주요 웹 보안 취약점 목록입니다. 2021년 기준 Broken Access Control이 1위입니다.',
              formulas: [],
              relatedConcepts: ['CSP', 'HTTPS', 'Supply Chain']
            },
            'CSP': {
              name: 'CSP(Content Security Policy)',
              description: '브라우저에서 로드할 수 있는 리소스를 제한하여 XSS 공격을 방지하는 HTTP 보안 헤더 정책입니다.',
              formulas: [],
              relatedConcepts: ['OWASP', 'HSTS', 'HTTPS']
            },
            'Supply Chain': {
              name: 'Supply Chain Attack',
              description: '소프트웨어 공급망의 취약점을 이용한 공격입니다. 의존성 취약점 스캔, 코드 서명 검증, SBOM 관리로 예방합니다.',
              formulas: [],
              relatedConcepts: ['OWASP', 'SBOM']
            }
          }
        },
        '인증 및 인가': {
          name: '인증 및 인가',
          description: '사용자 인증과 권한 부여 메커니즘을 다룹니다.',
          concepts: {
            'JWT': {
              name: 'JWT(JSON Web Token)',
              description: 'Header(알고리즘/토큰 타입).Payload(클레임 데이터).Signature(서명) 3부분으로 구성된 인증 토큰 표준입니다.',
              formulas: [],
              relatedConcepts: ['OAuth', 'SAML', 'Zero Trust']
            },
            'OAuth': {
              name: 'OAuth 2.0',
              description: '제3자 애플리케이션의 리소스 접근을 위한 인증 및 권한 부여 프레임워크입니다. Authorization Code, Implicit, Resource Owner Password, Client Credentials Grant Type이 있습니다.',
              formulas: [],
              relatedConcepts: ['JWT', 'SAML', 'Zero Trust']
            },
            'SAML': {
              name: 'SAML(Security Assertion Markup Language)',
              description: '서로 다른 보안 도메인 간에 인증 및 권한 정보를 교환하여 SSO(Single Sign-On)를 구현하는 XML 기반 표준입니다.',
              formulas: [],
              relatedConcepts: ['OAuth', 'JWT']
            },
            'Zero Trust': {
              name: 'Zero Trust 보안 모델',
              description: '"절대 신뢰하지 말고 항상 검증하라"는 원칙으로 내부/외부 구분 없이 모든 접근을 검증합니다.',
              formulas: [],
              relatedConcepts: ['JWT', 'OAuth', 'mTLS']
            }
          }
        },
        '전송 보안': {
          name: '전송 보안',
          description: 'HTTPS, TLS, mTLS 등 데이터 전송 보안을 다룹니다.',
          concepts: {
            'HTTPS': {
              name: 'HTTPS 및 SSL/TLS',
              description: 'SSL/TLS 핸드셰이크(Client Hello, Server Hello, Certificate Exchange, Key Exchange)를 통해 보안 통신을 수립합니다.',
              formulas: [],
              relatedConcepts: ['mTLS', 'HSTS', 'CSP']
            },
            'mTLS': {
              name: 'mTLS(Mutual TLS)',
              description: '서버와 클라이언트가 서로를 인증하는 양방향 인증 방식입니다. 일반 TLS는 서버만 인증합니다. Service Mesh에서 주로 사용됩니다.',
              formulas: [],
              relatedConcepts: ['HTTPS', 'Zero Trust', 'Service Mesh']
            },
            'HSTS': {
              name: 'HSTS(HTTP Strict Transport Security)',
              description: '브라우저가 해당 사이트에 항상 HTTPS로만 접속하도록 강제하여 다운그레이드 공격을 방지하는 보안 헤더입니다.',
              formulas: [],
              relatedConcepts: ['HTTPS', 'CSP']
            }
          }
        }
      }
    }
  }
};

export default infoKnowledgeMap;
