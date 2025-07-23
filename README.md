## 28시간 시계
### 개요
일주일을 28시간씩 6일로 나누었을 때 사용하는 시계입니다. 라이브 호스팅은 http://28-cjm.pages.dev 에 했습니다. 28시간 모드와 14시간 모드를 선택할 수 있으며 데스크톱과 모바일 환경 모두에서 사용할 수 있습니다.
| 원 시각 | 28시간 모드 | 14시간 모드 |
|---- | ---- | ---- |
| 월요일 23시 | Day 1, 23시 | Day 1, 오후 9시 |
| 화요일 9시 | Day 2, 5시 | Day 2, 오전 5시 |
| 목요일 11시 | Day 3, 27시 |  Day 3, 오후 13시 |

### 사용기술
- 언어: HTML, CSS, Javascript
- 호스팅: Cloudflare
- 툴: VSCode, Git

### 계산방법
월요일 0시에서 현재 시 사이의 시간을 $m$ 시간으로 둡니다. 이때 $0\leq d$를 만족하는 정수 $d$와 $0\leq h \leq27$를 만족하는 정수 $h$에 대하여 $m = 28d+h$라고 할 수 있습니다. 28시간 체계에서 오늘은 Day $d+1$이고 시간은 $h$시 입니다. 분, 초는 24시간 체계와 동일합니다.

### 구조
- `index.html`: 웹 애플리케이션의 기본 토대가 있는 인덱스 파일입니다.
- `style.css`: index.html을 위한 css 파일입니다.
- `index.js`: 모든 계산을 담당합니다.
- `jstest.txt`: 새로운 시간을 계산하는 함수 getNewTime에 대한 테스트입니다. js 파일로 만들어서 getNewTime을 import하는 것이 올바른 방법이나, 프론트엔드로만 호스팅하는 데에 문제가 생겨 txt 파일에 담았습니다.
- `img`: 사용한 이미지가 있는 폴더입니다.

-----

### Introduction
This is a clock for someone who divides a week into six 28 hour days. It is live hosted at http://28-cjm.pages.dev. It supports a 28 hour mode and a 14 hour mode. It is mobile-responsive.
| Original time | 28hr mode | 14hr mode |
|:-----|:-----|:-----|
| Monday 23:00 | Day 1, 23:00 | Day 1, 9:00pm |
| Tuesday 9:00 | Day 2, 5:00 | Day 2, 5:00am |
| Thursday 11:00| Day 3, 27:00 |  Day 3, 13:00pm |

### Used
- Languages: HTML, CSS, Javascript
- Hosting: Cloudflare
- Tools: VSCode, Git

### Derivation
Let $m$ be the hours elapsed between Monday 0:00 and the current hour. We may express $m$ as $m = 28d+h$ for integers $d$ and $h$ such that $0\leq d$ and $0\leq h \leq 28$. Then today is Day $d+1$ of the week and the current hour is $h$ in the 28 hour system. The minutes and seconds remain the same.

### Structure
- `index.html`: Basic structural elements.
- `style.css`: Styling of the index file.
- `index.js`: All logic is handled here.
- `jstest.txt`: It contains tests for  the function _getNewTime_ which is used to calculate the new time. It is best practice to create this as a js file and import _getNewTime_. However importing modules as well as using Node made it difficult to host it as frontend only, so I chose to put it in a txt file.
- `img`: Contains images used.