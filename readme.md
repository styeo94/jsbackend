# ::Node.js로 백엔드 개발자 되기::

독서하며 정리

---

### 00장 개발 환경 구축하기

_0.1 윈도우 개발 환경 구축

__0.1.1 Node.js 설치

__0.1.2 깃 설치

__0.1.3 비주얼 스튜디오 코드 설치

_0.2 맥OS 개발 환경 구축

__0.2.1 Node.js 설치

__0.2.2 깃 설치

__0.2.3 비주얼 스튜디오 코드 설치

_0.3 리눅스 개발 환경 구축

__0.3.1 Node.js 설치

__0.3.2 깃 설치

__0.3.3 비주얼 스튜디오 코드 설치

_0.4 예제 소스 코드 내려받기

_0.5 VSCode로 내려받은 소스 코드 실행하기

> P.42 아니 VSCode로 Ctrl+F5 눌러서 Debug Console까지 띄우는 건 성공 했는데, 닫는 건 왜 안보여주는지. 중지라는 것도 있을 것인데 말이지..

_0.6 VSCode 입문자를 위한 사용법 안내

__0.6.1 코드 실행하기

__0.6.2 디버깅하기

__0.6.3 VSCode 단축키

* F9 - 해당 라인에서 브레이크 포인트 잡기
* Ctrl + K, Ctrl + S -> 단축키 설정
* Alt + Shift + A -> 블럭 주석처리 /* */
* Shift + Alt + ↑ or ↓-> 같은 줄 추가
* Ctrl + U -> 선택항목 취소

---

01장 알아두면 좋은 백엔드 개발자를 위한 지식
_1.1 백엔드 개발자가 알아야 하는 것
_1.2 백엔드 개발자의 업무
_1.3 백엔드 아키텍처
_1.4 백엔드 프로그래밍 언어
_1.5 데이터베이스
__1.5.1 RDB
__1.5.2 NoSQL(Not Only SQL)
_1.6 클라우드 서비스
_1.7 자바스크립트 생태계
__1.7.1 패키지 매니저
__1.7.2 빌드 도구
__1.7.3 개발 도구
__1.7.4 웹 프레임워크
__1.7.5 백엔드 개발 환경
__1.7.6 인프라
_학습 마무리
_연습문제


[레벨 2 Node.js와 Express로 백엔드 입문하기]


02장 Node.js로 백엔드 입문하기
_2.1 Node.js 소개
_2.2 Node.js는 서버에서 어떻게 자바스크립트를 실행할까?
__2.2.1 Node.js의 구성요소
__2.2.2 자바스크립트 실행을 위한 V8 엔진
__2.2.3 이벤트 루프와 운영체제 단 비동기 API 및
스레드 풀을 지원하는 libuv
__2.2.4 Node.js 아키텍처
_2.3 Node.js의 기술적인 특징
__2.3.1 싱글 스레드
__2.3.2 이벤트 기반 아키텍처
__2.3.3 이벤트 루프
_2.4 Node.js 과연 쓸 만한가?
_2.5 나의 첫 Node.js 서버 프로그램
__2.5.1 hello.js 파일 생성 및 실행
__2.5.2 curl 내려받기 및 테스트해보기
_2.6 정말로 동시에 요청을 처리하는지 성능 테스트하기
__2.6.1 K6 설치
__2.6.2 K6로 성능 테스트 스크립트 작성하기
_학습 마무리
_연습문제


03장 Node.js와 익스프레스로 웹 애플리케이션 서버 구현하기
_3.1 OK를 반환하는 서버 만들기
_3.2 라우터 만들기
_3.3 createServer( ) 리팩터링하기
_3.4 동적으로 응답하기
_3.5 라우터 리팩터링하기
_3.6 익스프레스 프레임워크 사용하기
__3.6.1 익스프레스 설치하기
__3.6.2 나의 첫 익스프레스 서버 만들기
__3.6.3 Node.js 라이브러리로 만든 서버를 익스프레스로 구현하기
_3.7 익스프레스로 간단한 API 서버 만들기
__3.7.1 게시판 API 코드 작성하기
__3.7.2 API 규칙에 맞게 서버 구현하기
_3.8 게시판 API 테스트하기
__3.8.1 curl로 GET 호출하기
__3.8.2 curl로 POST를 호출해 게시글 등록하기
__3.8.3 curl로 DELETE를 호출해 게시글 삭제하기
_학습 마무리
_연습문제


04장 npm과 yarn으로 패키지 관리하기
_4.1 npm 소개
_4.2 패키지와 모듈
_4.3 package.json 파일을 만들기
_4.4 패키지 설치, 업데이트, 삭제
__4.4.1 패키지 설치하기
__4.4.2 패키지 업데이트하기
__4.4.3 설치한 패키지 확인하기
__4.4.4 패키지 삭제하기
_4.5 스크립트 기능과 NPX
__4.5.1 npm 스크립트 파일을 정의하기
__4.5.2 NPX로 코드 포매팅 명령어 prettier 실행하기
_4.6 패키지 잠금
_4.7 npm의 대안 yarn
_학습 마무리
_연습문제


05장 자바스크립트에서 비동기 처리하기
_5.1 자바스크립트 비동기 소개
_5.2 콜백 함수 소개
_5.3 Promise 객체
__5.3.1 동시에 여러 Promise 객체 호출하기
__5.3.2 Promise 예외 처리하기
__5.3.3 프로미스의 문제점
_5.4 async await 구문
_학습 마무리
_연습문제


06장 NoSQL 데이터베이스 몽고디비 사용하기
_6.1 몽고디비 소개
__6.1.1 데이터베이스 기본 용어
__6.1.2 몽고디비 특징
_6.2 몽고디비 아틀라스 설정하기
_6.3 몽고디비 CRUD API 만들기
_6.4 몽고디비 콤파스로 데이터 확인하기
_6.5 몽구스를 사용해 CRUD 만들기
__6.5.1 몽구스 설치하기
__6.5.2 몽구스로 스키마 만들기
__6.5.3 몽구스와 익스프레스로 CRUD API 만들기
_6.6 REST 클라이언트로 API 테스트하기
_학습 마무리
_연습문제


07장 페이지네이션되는 게시판 만들기
_7.1 프로젝트 구조 소개
_7.2 게시판 프로젝트 셋업
__7.2.1 Node.js 프로젝트 초기 설정
__7.2.2 익스프레스 설치 및 프로젝트 디렉터리 구조 잡기
__7.2.3 핸들바 템플릿 엔진 설치 및 설정하기
_7.3 화면 기획하기
__7.3.1 리스트 화면 기획
__7.3.2 글쓰기 화면 기획
__7.3.3 상세 화면 기획
_7.4 UI 화면 만들기
__7.4.1 리스트 UI 만들기
__7.4.2 글쓰기 UI 만들기
__7.4.3 상세페이지 UI 만들기
_7.5 API 만들기
__7.5.1 몽고디비 연결을 위한 유틸리티 만들기
__7.5.2 UI 페이지에서 사용할 핸들바 커스텀 헬퍼 만들기
__7.5.3 nodemon 설정하기
__7.5.4 글쓰기 API 만들기
__7.5.5 리스트 API 만들기
__7.5.6 상세페이지 API 만들기
__7.5.7 글 수정 API
__7.5.8 글 삭제 API
__7.5.9 댓글 추가 API
__7.5.10 댓글 삭제 API
_학습 마무리
_연습문제


[레벨 3 NestJS 프레임워크로 점핑하기]


08장 NestJS 시작하기
_8.1 왜 NestJS가 필요할까?
_8.2 NestJS 소개
__8.2.1 익스프레스와 NestJS 비교하기
__8.2.2 NestJS 둘러보기
_8.3 NestJS 설치하고 실행하기
__8.3.1 의존성 패키지 설치하기
__8.3.2 타입스크립트 설정하기
__8.3.3 NestJS의 모듈과 컨트롤러 만들기
__8.3.4 hello-nest 앱 실행시켜보기
__8.3.5 NestJS의 네이밍 규칙
_8.4 NestJS로 웹 API 만들기
__8.4.1 프로젝트 생성과 설정
__8.4.2 컨트롤러 만들기
__8.4.3 블로그 API 작성하기
__8.4.4 메모리에 데이터를 저장하는 API 만들기
__8.4.5 파일에 정보를 저장하도록 API 업그레이드하기
_8.5 의존성 주입하기
_8.6 몽고디비 연동하기
__8.6.1 의존성 설치
__8.6.2 스키마 만들기
__8.6.3 몽고디비를 사용하는 리포지토리 추가하기
__8.6.4 서비스 코드 변경
__8.6.5 모듈에 몽고 디비 설정과 프로바이더 설정 추가하기
_학습 마무리
_연습문제


09장 NestJS 환경 변수 설정하기
_9.1 환경 변수 소개
_9.2 프로젝트 생성 및 설정하기
_9.3 NestJS 설정 및 테스트하기
__9.3.1 app.module.ts에 ConfigModule 설정하기
__9.3.2 .env 파일 생성하기
__9.3.3 app.controller.ts에 코드 추가하기
__9.3.4 테스트하기
_9.4 ConfigModule을 전역 모듈로 설정 하기
__9.4.1 .env에 환경 변수 설정하기
__9.4.2 weather 모듈 만들기
__9.4.3 날씨 API 테스트용 핸들러 함수로 테스트하기
_9.5 여러 환경 변수 파일 사용하기
__9.5.1 환경별로 서버가 기동되도록 스크립트 수정하기
__9.5.2 local, dev, prod 환경 변수 생성
__9.5.3 환경 변수에 따라서 다른 환경 변수 파일을 사용하도록 설정 수정하기
__9.5.4 테스트용 핸들러 함수로 테스트하기
_9.6 커스텀 환경 설정 파일 사용하기
__9.6.1 환경 변수 파일 생성하기
__9.6.2 ConfigModule에 load 옵션 추가하기
__9.6.3 커스텀 환경 변수 읽기 테스트하기
_9.7 서버 기동과 환경 설정 파일 초기화 순서 알아보기
_9.8 YAML 파일을 사용해 환경 변수 설정하기
__9.8.1 js-yaml 설치하기
__9.8.2 config.yaml 파일 생성하기
__9.8.3 config.ts 수정하기
__9.8.4 테스트용 핸들러 함수로 테스트하기
_9.9 캐시 옵션 사용하기
_9.10 확장 변수 사용하기
__9.10.1 확장 변수를 사용할 수 있게 추가 설정하기
__9.10.2 테스트용 핸들러 함수로 테스트하기
_9.11 main.ts에서 환경 변수 사용하기
_학습 마무리
_연습문제


10장 회원 가입과 인증하기
_10.1 실습용 프로젝트 설정하기
__10.1.1 nest-cli로 프로젝트 생성하기
__10.1.2 User 모듈 생성하기
__10.1.3 SQLite 데이터베이스 설정하기
_10.2 유저 모듈의 엔티티, 서비스, 컨트롤러 생성하기
__10.2.1 엔티티 만들기
__10.2.2 컨트롤러 만들기
__10.2.3 서비스 만들기
__10.2.4 테스트하기
_10.3 파이프로 유효성 검증하기
__10.3.1 전역 ValidationPipe 설정하기
__10.3.2 UserDto 만들기
__10.3.3 테스트하기
_10.4 인증 모듈 생성 및 회원 가입하기
__10.4.1 인증 모듈 만들기 및 설정하기
__10.4.2 회원 가입 메서드 만들기
__10.4.3 sqlite 익스텐션으로 테이블 확인하기
_10.5 쿠키를 사용한 인증 구현하기
__10.5.1 AuthService에 이메일과 패스워드 검증 로직 만들기
__10.5.2 가드를 사용해 인증됐는지 검사하기
_10.6 패스포트와 세션을 사용한 인증 구현하기
__10.6.1 라이브러리 설치 및 설정
__10.6.2 로그인과 인증에 사용할 가드 구현하기
__10.6.3 세션에 정보를 저장하고 읽는 세션 시리얼라이저 구현하기
__10.6.4 email, password 인증 로직이 있는 LocalStrategy 파일 작성하기
__10.6.5 auth.module.ts에 설정 추가하기
__10.6.6 테스트하기
__10.6.7 로그인과 세션 저장까지 순서
_학습 마무리
_연습문제


11장 OAuth를 사용한 구글 로그인 인증하기
_11.1 OAuth 소개
__11.1.1 OAuth 프로토콜 흐름
__11.1.2 액세스 토큰을 재발행하는 흐름
_11.2 구글 OAuth를 사용하기 위한 준비하기
__11.2.1 구글 클라우드에서 프로젝트 생성하기
__11.2.2 OAuth 동의 화면을 만들기
__11.2.3 OAuth 클라이언트의 ID와 비밀번호 만들기
_11.3 구글 OAuth 구현 순서
_11.4 NestJS 환경 설정 파일 추가하기
_11.5 구글 OAuth 스트래티지 만들기
_11.6 GoogleAuthGuard 만들기
_11.7 컨트롤러에 핸들러 메서드 추가하기
__11.7.1 테스트하기
_11.8 User 엔티티 파일 수정하기
_11.9 UserService에 구글 유저 검색 및 저장 메서드 추가하기
_11.10 GoogleStrategy에 구글 유저 저장하는 메서드 적용하기
_11.11 GoogleAuthGuard에 세션을 사용하도록 변경하기
_11.12 테스트하기
_학습 마무리
_연습문제


12장 파일 업로드 기능 구현하기
_12.1 프로젝트 생성 및 의존성 설치하기
_12.2 파일 업로드 API를 만들고 테스트하기
__12.2.1 테스트하기
_12.3 업로드한 파일을 특정한 경로에 저장하기
__12.3.1 테스트하기
_12.4 정적 파일 서비스하기
__12.4.1 테스트하기
_12.5 HTML 폼으로 업로드하기
_학습 마무리
_연습문제


13장 웹소켓을 사용한 실시간 채팅 구현하기
_13.1 웹소켓 소개
__13.1.1 웹소켓의 동작 방법
_13.2 메아리 애플리케이션 만들기 : 웹소켓
__13.2.1 ws 패키지 설치하기
__13.2.2 서버 측 구축하기 : server.js 파일 작성 및 서버 구동
__13.2.3 클라이언트 측 구현하기 : client.html 파일 작성
__13.2.4 테스트하기
__13.2.5 향후 과제 확인하기
_13.3 간단한 채팅 애플리케이션 만들기 : socket.io
__13.3.1 socket.io 프로젝트 생성하기
__13.3.2 패키지 설치하기
__13.3.3 html 파일을 불러오도록 main.ts 설정하기
__13.3.4 서버 측 작업을 위한 게이트웨이 만들기
__13.3.5 게이트웨이를 모듈에 등록하기
__13.3.6 클라이언트를 위한 index.html 수정하기
__13.3.7 테스트하기
_13.4 채팅방 기능이 있는 채팅 애플리케이션 만들기
__13.4.1 네임스페이스 사용하기
__13.4.2 닉네임 추가하기
__13.4.3 채팅방 생성하기
__13.4.4 공지 영역과 채팅방 입장 구현하기
__13.4.5 채팅방에서 대화 나누기 구현하기
__13.4.6 테스트하기
_학습 마무리
_연습문제


appendix A 타입스크립트 입문에서 고급 기능까지
appendix B 꼭 알아야 하는 리눅스 명령어 21개
