# ballboy's common backend
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

## 내부 함수 네이밍 방법
- 모듈약자 + _ + 기능 + 순번 (ex. bap_r01)
    - 모듈약자 : bap
    - 기능
        - 생성 : c / 조회 : r / 수정 : u / 삭제 : d
    - 순번 : 01 ~ 99

## curl 
- 데이터 조회
    - `curl localhost:3000/bap`
- 회원 추가
    - `curl -d '{"name":"테스트4","birthDate":19991231}' -H "Content-Type: application/json" -X POST localhost:3000/bap/bap_c01`
