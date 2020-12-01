$(document).ready(async function () {
  moment.locale("ko");
  var period;
  var keywordTop1,
    keywordTop2,
    keywordTop3,
    mostPostDay,
    mostAgreeMoment,
    allNotExpiredPostCount,
    keywordNotExpiredAgreeSum,
    keywordNotExpiredPostCount;
  var chart, firstchart, secondchart, thirdchart;
  var ranking = null;

  // 2번째 칸 텍스트 채움 ===================================================
  var renderPeriodTop3Keywords = async () => {
    // top 3 키워드 가져와서 렌더링
    await $.ajax({
      url: API.NEW_PETITION.KEYWORD_TOP_3 + "?period=" + period,
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
  };
  // =====================================================================

  // 3, 4번째 칸 채움 ======================================================
  var renderPeriodTop1MetaData = async () => {
    await $.ajax({
      url:
        API.NEW_PETITION.META_DATA +
        "?keyword=" +
        encodeURI(keywordTop1.keyword),
      method: "GET",
    })
      .done((res) => {
        mostPostDay = moment(res.mostPostDay).format("ll");
        mostAgreeMoment = moment(res.mostAgreeMoment).format("lll");
        allNotExpiredPostCount = res.allNotExpiredPostCount;
        keywordNotExpiredAgreeSum = res.keywordNotExpiredAgreeSum;
        keywordNotExpiredPostCount = res.keywordNotExpiredPostCount;

        // 메타 데이터 채우기
        $("#mostPostDay").text(mostPostDay);
        $("#mostAgreeMoment").text(mostAgreeMoment);
        $("#allNotExpiredPostCount").text(
          allNotExpiredPostCount.format() + "건"
        );
        $("#keywordNotExpiredAgreeSum").text(
          keywordNotExpiredAgreeSum.format() + "회"
        );

        // 원 테두리 안에 데이터 표시
        $("#circleGraph").text(keywordNotExpiredAgreeSum);
        $("#keywordNotExpiredPostCount").text(
          keywordNotExpiredPostCount.format() + "건"
        );

        // Gauge 차트
        bb.generate({
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
      })
      .fail((err) => console.log());
  };
  // =====================================================================

  // 1번째 칸, 2번째 칸 그래프 채움 ==========================================
  var renderPeriodTop3KeywordsGraphs = async () => {
    var getFullColumns = function (top1, top2, top3) {
      var top = {};
      top[1] = top1;
      top[2] = top2;
      top[3] = top3;
      var aIsBiggerThanB = function (a, b) {
        return a.increment.length > b.increment.length ? true : false;
      };

      var maxOf,
        maxCollectTimeLength = 0;

      if (aIsBiggerThanB(top1, top2) && aIsBiggerThanB(top1, top3)) maxOf = 1;
      else if (aIsBiggerThanB(top2, top1) && aIsBiggerThanB(top2, top3))
        maxOf = 2;
      else maxOf = 3;

      maxCollectTimeLength = top[maxOf].increment.length;

      var collect_times = ["collect_time"];
      top[maxOf].increment.forEach((e) => {
        collect_times.push(e.collect_time);
      });

      var top1_agree_increments = [top1.keyword],
        top2_agree_increments = [top2.keyword],
        top3_agree_increments = [top3.keyword];

      // 날짜 맞추기 - 최근 시간대는 항상 존재하므로 비어있다면 앞 쪽이 비어있음
      for (var i = 0; i < maxCollectTimeLength - top1.increment.length; i++)
        top1_agree_increments.push(0);
      for (var i = 0; i < maxCollectTimeLength - top2.increment.length; i++)
        top2_agree_increments.push(0);
      for (var i = 0; i < maxCollectTimeLength - top3.increment.length; i++)
        top3_agree_increments.push(0);

      // 데이터 채우기
      for (var i = 0; i < maxCollectTimeLength; i++) {
        top1_agree_increments.push(top1.increment[i].agree_increment);
        top2_agree_increments.push(top2.increment[i].agree_increment);
        top3_agree_increments.push(top3.increment[i].agree_increment);
      }
      return [
        collect_times,
        top1_agree_increments,
        top2_agree_increments,
        top3_agree_increments,
      ];
    };

    var getEachColumns = function (keywordInfo) {
      var collect_times = ["collect_time"];
      var increments = [keywordInfo.keyword];
      keywordInfo.increment.forEach((e) => {
        collect_times.push(e.collect_time);
        increments.push(e.agree_increment);
      });

      return [collect_times, increments];
    };

    chart && chart.destroy();
    firstchart && firstchart.destroy();
    secondchart && secondchart.destroy();
    thirdchart && thirdchart.destroy();

    chart = bb.generate({
      data: {
        x: "collect_time",
        columns: getFullColumns(keywordTop1, keywordTop2, keywordTop3),
      },
      axis: {
        x: {
          type: "category",
          tick: {
            show: false,
            text: { show: false },
          },
        },
        // y: {
        //   tick: {
        //     show: false,
        //     text: { show: false },
        //   },
        // },
      },
      point: {
        show: false,
      },
      color: {
        pattern: ["#6c5ce7", "#2b73e0", "#2da3e3"],
      },
      size: { height: 280 },
      bindto: "#newPetitionTopChart",
    });

    firstchart = bb.generate({
      data: {
        x: "collect_time",
        columns: getEachColumns(keywordTop1),
      },
      size: { height: 100, width: 160 },
      bindto: "#newPetitionTop1Chart",
      axis: {
        x: {
          show: false,
          type: "category",
        },
        y: {
          show: false,
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

    secondchart = bb.generate({
      data: {
        x: "collect_time",
        columns: getEachColumns(keywordTop2),
      },
      size: { height: 100, width: 160 },
      bindto: "#newPetitionTop2Chart",
      axis: {
        x: {
          show: false,
          type: "category",
        },
        y: {
          show: false,
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

    thirdchart = bb.generate({
      data: {
        x: "collect_time",
        columns: getEachColumns(keywordTop3),
      },
      size: { height: 100, width: 160 },
      bindto: "#newPetitionTop3Chart",
      axis: {
        x: {
          show: false,
          type: "category",
        },
        y: {
          show: false,
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
  };
  // =====================================================================

  // 5번째 칸 채움 =========================================================
  var renderPeriodTop1Summary = async () => {
    await $.ajax({
      url:
        API.NEW_PETITION.SUMMARY + "?keyword=" + encodeURI(keywordTop1.keyword),
      method: "GET",
    })
      .done((res) => {
        $("#bestNewPetitionSummary").text(res.summary);
      })
      .fail((err) => console.log(err));
  };
  // =====================================================================

  // 1시간 전체 랭킹 가져오기
  await $.ajax({
    url: API.NEW_PETITION.KEYWORD_RANKING,
    method: "GET",
  })
    .done((res) => (ranking = res))
    .fail((err) => console.log(err));

  // 주석은 category.js 참고
  var rankingArea = $("#issuedKeywordsRanking");
  ranking.forEach((keywordInfo, index) => {
    var wrapper = document.createElement("p");

    var keywordArea = document.createElement("a");
    keywordArea.href = "/keyword/" + encodeURI(keywordInfo.keyword);
    keywordArea.className = "small-text bold-text is-black hover-purple";
    keywordArea.innerHTML = index + 1 + "&nbsp;&nbsp;" + keywordInfo.keyword;
    // keywordArea.className = "small-text bold-text is-purple";

    var newLine = document.createElement("br");

    var scoreBar = document.createElement("div");
    scoreBar.className = "score-bar";
    scoreBar.style.width =
      "calc((100% - 30px) * " + keywordInfo.score + " / 100";

    var score = document.createElement("span");
    score.className = "small-text is-grey";
    score.innerHTML = keywordInfo.score;

    wrapper.append(keywordArea, newLine, scoreBar, score);
    rankingArea.append(wrapper);
  });

  // 렌더링 호출
  var renderBy = async (periodVal) => {
    period = periodVal;

    // 버튼 CSS
    $("#period-set-day").removeClass("is-outlined");
    $("#period-set-week").removeClass("is-outlined");
    $("#period-set-month").removeClass("is-outlined");

    switch (period) {
      case "DAY":
        $("#period-set-week").addClass("is-outlined");
        $("#period-set-month").addClass("is-outlined");
        break;
      case "WEEK":
        $("#period-set-month").addClass("is-outlined");
        $("#period-set-day").addClass("is-outlined");
        break;
      case "MONTH":
        $("#period-set-week").addClass("is-outlined");
        $("#period-set-day").addClass("is-outlined");
        break;
      default:
        break;
    }

    await renderPeriodTop3Keywords(); // 2번째 칸 채움
    await renderPeriodTop3KeywordsGraphs(); // 1번째 칸, 2번째 칸 그래프 채움
    await renderPeriodTop1MetaData(); // 3번재 칸, 4번째 칸 채움
    await renderPeriodTop1Summary(); // 5번째 칸 채움
  };

  $("#period-set-day").on("click", () => renderBy("DAY"));
  $("#period-set-week").on("click", () => renderBy("WEEK"));
  $("#period-set-month").on("click", () => renderBy("MONTH"));

  renderBy("DAY");
});
