# js-algorithms

![repo size](https://img.shields.io/github/repo-size/jaem1n207/js-algorithms.svg)

## Description
이 저장소는 다양한 알고리즘 문제를 해결한 JavaScript 기반 저장소입니다.

## Table of Contents

- [Structure](#structure)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Structure

폴더별로 정렬, 검색, 데이터 구조, 그래프 알고리즘, 동적 프로그래밍과 같은 다양한 범주의 알고리즘으로 구성되어 있습니다. 각 범주에는 해결한 문제에 해당하는 개별 JS 파일이 있습니다.

```sql
js-algorithms (Example)
|
├── README.md
├── LICENSE
├── src/
| ├── graph/
| | ├── dijkstra/
| | | ├── dijkstra.js
| | | ├── test/
| | | | ├── dijkstra.test.js
| | ├── prim/
| | | ├── prim.js
| | | ├── test/
| | | | ├── prim.test.js
| | ├── kruskal/
| | | ├── kruskal.js
| | | ├── test/
| | | | ├── kruskal.test.js
| | └── ...
| ├── sorting/
| ├── searching/
| ├── data-structures/
| └── dynamic-programming/
|
└── ...
```

## Usage

JS 파일을 실행하려면 Node.js 또는 ES6 구문을 지원하는 환경이 필요합니다.

## Testing

이 저장소의 해답들은 JS 테스트 프레임워크인 Jest로 테스트를 실행할 수 있습니다.

코드의 품질을 확인 할 수 있습니다.

```bash
pnpm run lint
```
모든 테스트 실행

```bash
pnpm test
```

이름을 통해 특정 테스트 실행

```bash
pnpm test -- 'filename'
```

'filename'을 테스트할 파일의 이름으로 바꿉니다.

## Contributing

개인적으로 해결한 문제들을 담아두려는 저장소이지만, 더 나은 해결책이나 대안적인 접근 방식을 개선하기 위한 어떤 형태의 제안, 토론 또는 조언도 진심으로 환영합니다! 이러한 토론에 대해 자유롭게 [Issues](https://github.com/jaem1n207/js-algorithms/issues)에 작성해주세요.

## License

이 프로젝트는 MIT 라이선스에 따라 라이센스가 부여됩니다. 자세한 내용은 [LICENSE](https://github.com/jaem1n207/js-algorithms/blob/main/LICENSE) 파일을 참조해주세요.
