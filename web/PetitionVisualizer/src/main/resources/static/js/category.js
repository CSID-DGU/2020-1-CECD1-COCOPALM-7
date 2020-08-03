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
  var chart2 = bb.generate({
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
      classes: ["", "bold-line"],
    },
    bindto: "#categoryTrendChart",
  });
});

var rankingArea = $("#categoryIssuedKeywordsRanking");
sampleRanking.forEach((keywordInfo, index) => {
  var wrapper = document.createElement("p");

  var keywordArea = document.createElement("a");
  keywordArea.href = "/keyword";
  keywordArea.className = "small-text bold-text is-black hover-purple";
  keywordArea.innerHTML = index + 1 + "&nbsp;&nbsp;" + keywordInfo.keyword;

  var newLine = document.createElement("br");

  var score = document.createElement("span");
  score.className = "small-text is-grey";
  score.innerHTML = keywordInfo.score;
  var scoreBar = document.createElement("div");
  scoreBar.className = "score-bar";
  scoreBar.style.width = "calc(" + keywordInfo.score + "% - 30px)";

  wrapper.append(keywordArea, newLine, scoreBar, score);
  rankingArea.append(wrapper);
});
