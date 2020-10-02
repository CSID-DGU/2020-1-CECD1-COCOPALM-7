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

$(document).ready(async function () {
  // 먼저 top 3 키워드 가져오고 시작함
  var keywordTop1, keywordTop2, keywordTop3;
  await $.ajax({
    url: API.NEW_PETITION.KEYWORD_TOP_3,
    method: "GET",
  })
    .done((res) => {
      keywordTop1 = res[0];
      keywordTop2 = res[1];
      keywordTop3 = res[2];
      $(".keywordTop1").text(keywordTop1.keyword);
      $(".keywordTop1").attr(
        "href",
        "/keyword/" + encodeURI(keywordTop1.keyword)
      );
      $("#keywordTop1Score").text(keywordTop1.score);

      $(".keywordTop2").text(keywordTop2.keyword);
      $(".keywordTop2").attr(
        "href",
        "/keyword/" + encodeURI(keywordTop2.keyword)
      );
      $("#keywordTop2Score").text(keywordTop2.score);

      $(".keywordTop3").text(keywordTop3.keyword);
      $(".keywordTop3").attr(
        "href",
        "/keyword/" + encodeURI(keywordTop3.keyword)
      );
      $("#keywordTop3Score").text(keywordTop3.score);
    })
    .fail((err) => console.log(err));
  // =====================================================================

  var mostPostDay,
    allNotExpiredPostCount,
    keywordNotExpiredAgreeSum,
    keywordNotExpiredPostCount;

  await $.ajax({
    url:
      API.NEW_PETITION.META_DATA + "?keyword=" + encodeURI(keywordTop1.keyword),
    method: "GET",
  })
    .done((res) => {
      mostPostDay = res.mostPostDay;
      allNotExpiredPostCount = res.allNotExpiredPostCount;
      keywordNotExpiredAgreeSum = res.keywordNotExpiredAgreeSum;
      keywordNotExpiredPostCount = res.keywordNotExpiredPostCount;
      $("#mostPostDay").text(mostPostDay);
      $("#allNotExpiredPostCount").text(allNotExpiredPostCount.format() + "건");
      $("#keywordNotExpiredAgreeSum").text(
        keywordNotExpiredAgreeSum.format() + "회"
      );
      $("#circleGraph").text(keywordNotExpiredAgreeSum);
      $("#keywordNotExpiredPostCount").text(
        keywordNotExpiredPostCount.format() + "건"
      );
    })
    .fail((err) => console.log());
  // =====================================================================

  //top3 전체 그래프
  var chart = bb.generate({
    data: {
      columns: [
        [keywordTop1.keyword, 30, 200, 100, 400, 150, 250],
        [keywordTop2.keyword, 50, 20, 10, 40, 15, 25],
        [keywordTop3.keyword, 130, 150, 200, 300, 200, 100],
      ],
    },
    color: {
      pattern: ["#6c5ce7", "#2b73e0", "#2da3e3"],
    },
    size: { height: 280 },
    bindto: "#newPetitionTopChart",
  });
  // =====================================================================

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
  // =====================================================================

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
      pattern: ["#2b73e0"],
    },
    point: {
      show: false,
    },
  });
  // =====================================================================

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
      pattern: ["#2da3e3"],
    },
    point: {
      show: false,
    },
  });
  // =====================================================================

  var gaugeChart = bb.generate({
    data: {
      columns: [["청원", keywordNotExpiredPostCount]],
      type: "gauge",
    },
    gauge: {
      max: allNotExpiredPostCount,
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
  // =====================================================================

  // 주석은 category.js 참고
  var rankingArea = $("#issuedKeywordsRanking");
  sampleRanking.forEach((keywordInfo, index) => {
    var wrapper = document.createElement("p");

    var keywordArea = document.createElement("a");
    keywordArea.href = "/keyword/" + encodeURI(keywordInfo.keyword);
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
