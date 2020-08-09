var sampleRanking = [
  {
    keyword: "코로나", // 이태원 공무원
    score: 93,
  },
  {
    keyword: "이태원",
    score: 89,
  },
  {
    keyword: "공무원",
    score: 81,
  },
  {
    keyword: "국민연금",
    score: 77,
  },
  {
    keyword: "화폐",
    score: 72,
  },
  {
    keyword: "국회의원",
    score: 66,
  },
  {
    keyword: "부동산",
    score: 63,
  },
  {
    keyword: "최저",
    score: 55,
  },
  {
    keyword: "불법",
    score: 43,
  },
  {
    keyword: "지원",
    score: 35,
  },
];

$(document).ready(function () {
  // 왼쪽 상단 영역 + 선 그래프
  var chart = bb.generate({
    data: {
      columns: [
        ["area", 241, 737, 78, 66, 435, 234, 23, 416, 135, 71, 885, 124, 612],
        [
          "line",
          245,
          164,
          628,
          123,
          255,
          612,
          176,
          217,
          611,
          351,
          123,
          150,
          240,
        ],
      ],
      types: {
        area: "area",
        line: "line",
      },
    },
    color: {
      pattern: ["#c0c0c0", "#6c5ce7"],
    },
    point: {
      show: false,
    },
    line: {
      // 사용할 CSS 클래스(두번째 항에 적어서
      // line chart에만 적용)
      classes: ["", "bold-line"],
    },
    bindto: "#categoryTrendChart",
  });
});

// 키워드 랭킹 생성
var rankingArea = $("#categoryIssuedKeywordsRanking");
// 위에서 샘플로 정의한 키워드 랭킹 데이터 각각에 대하여
sampleRanking.forEach((keywordInfo, index) => {
  // p 태그로 감싸서 넣을 예정
  var wrapper = document.createElement("p");

  // 키워드를 누르면 이동할 수 있도록 anchor 태그 이용
  var keywordArea = document.createElement("a");

  // 이동 경로 및 키워드의 CSS 클래스 설정
  keywordArea.href = "/keyword";
  keywordArea.className = "small-text bold-text is-black hover-purple";
  // 텍스트에 순위와 함께 키워드 적음
  keywordArea.innerHTML = index + 1 + "&nbsp;&nbsp;" + keywordInfo.keyword;

  var newLine = document.createElement("br");

  // 점수는 span 태그를 활용하여 작게 표시
  var score = document.createElement("span");
  score.className = "small-text is-grey";
  score.innerHTML = keywordInfo.score;

  // 점수를 나타내는 막대는 div 태그를 이용하여 score를 길이로 나타냄
  var scoreBar = document.createElement("div");
  scoreBar.className = "score-bar";
  scoreBar.style.width = "calc(" + keywordInfo.score + "% - 30px)";

  // p에 추가하여 감싸고
  wrapper.append(keywordArea, newLine, scoreBar, score);

  // 키워드 랭킹이 표시될 영역에 추가
  rankingArea.append(wrapper);
});
