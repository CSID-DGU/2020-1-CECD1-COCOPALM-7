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
  //top3 전체 그래프
  var chart = bb.generate({
    data: {
      columns: [
        ["코로나", 30, 200, 100, 400, 150, 250],
        ["이태원", 50, 20, 10, 40, 15, 25],
        ["공무원", 130, 150, 200, 300, 200, 100],
      ],
    },
    size: { height: 280 },
    bindto: "#newPetitionTopChart",
  });

  //top3 각각 그래프
  var firstchart = bb.generate({
    data: {
      columns: [["코로나", 30, 200, 100, 400, 150, 250]],
    },
    size: { height: 100, width: 160 },
    bindto: "#newPetitionTop1Chart",
    axis: {
      x: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
      y: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
    },
    legend: { show: false },
    color: {
      pattern: ["#6c5ce7"],
    },
    point: {
      show: false,
    },
  });

  var secondchart = bb.generate({
    data: {
      columns: [["이태원", 50, 20, 10, 40, 15, 25]],
    },
    size: { height: 100, width: 160 },
    bindto: "#newPetitionTop2Chart",
    axis: {
      x: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
      y: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
    },
    legend: { show: false },
    color: {
      pattern: ["#6c5ce7"],
    },
    point: {
      show: false,
    },
  });

  var thirdchart = bb.generate({
    data: {
      columns: [["공무원", 130, 150, 200, 300, 200, 100]],
    },
    size: { height: 100, width: 160 },
    bindto: "#newPetitionTop3Chart",
    axis: {
      x: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
      y: {
        tick: {
          show: false,
          text: { show: false },
        },
      },
    },
    legend: { show: false },
    color: {
      pattern: ["#6c5ce7"],
    },
    point: {
      show: false,
    },
  });

  var gaugeChart = bb.generate({
    data: {
      columns: [["청원", 18]],
      type: "gauge",
    },
    gauge: {
      max: 42,
      label: {
        format: function (value, ratio) {
          return value + "건";
        },
      },
    },
    color: {
      pattern: ["#6c5ce7"],
    },
    size: {
      height: 150,
    },
    bindto: "#keywordGaugeChart",
  });

  // 주석은 category.js 참고
  var rankingArea = $("#issuedKeywordsRanking");
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
});
