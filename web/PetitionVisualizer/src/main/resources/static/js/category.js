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
  // ==================================================================================
  // 현재 경로 가져오기
  var currentPath =
    window.location.pathname === "/category"
      ? "/category/0"
      : window.location.pathname;
  // 현재 카테고리의 아이콘 찾기
  var currentCategoryIcon = $(
    "a.category-btn[href='" + currentPath + "']"
  ).find("i");
  // 현재 경로에 해당하는 아이콘 버튼이면 색칠하기
  currentCategoryIcon.removeClass("far");
  currentCategoryIcon.addClass("fas");
  // ==================================================================================

  // 사이드바 색상을 현재 카테고리 색상으로 변경
  $("#sideNav").addClass("is-cate-bg-" + categoryNumber);

  // ==================================================================================
  // 왼쪽 상단 영역 + 선 그래프
  var chart = bb.generate({
    data: {
      columns: [
        ["청원", 241, 737, 78, 66, 435, 234, 23, 416, 135, 71, 885, 124, 612],
        [
          "동의",
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
        청원: "area",
        동의: "line",
      },
    },
    color: {
      pattern: ["#c0c0c0", "#6c5ce7"],
    },
    legend: {
      item: {
        tile: {
          width: 0,
          height: 0,
        },
      },
    },
    point: {
      show: false,
    },
    line: {
      // 사용할 CSS 클래스(두번째 항에 적어서
      // line chart에만 적용)
      classes: ["", "cate-line-" + categoryNumber],
    },
    bindto: "#categoryTrendChart",
  });
  // ==================================================================================

  var ranking;
  await $.ajax({
    url: API.CATEGORY.KEYWORD_RANKING + "?categoryId=" + categoryNumber,
    method: "GET",
  })
    .done((res) => (ranking = res))
    .fail((err) => console.log(err));

  console.log(ranking);

  // 키워드 랭킹 생성
  var rankingArea = $("#categoryIssuedKeywordsRanking");
  // 위에서 샘플로 정의한 키워드 랭킹 데이터 각각에 대하여
  ranking.forEach((keywordInfo, index) => {
    // p 태그로 감싸서 넣을 예정
    var wrapper = document.createElement("p");

    // 키워드를 누르면 이동할 수 있도록 anchor 태그 이용
    var keywordArea = document.createElement("a");

    // 이동 경로 및 키워드의 CSS 클래스 설정
    keywordArea.href = "/keyword/" + encodeURI(keywordInfo.keyword);
    keywordArea.className =
      "small-text bold-text is-black hover-cate-" + categoryNumber;
    // 텍스트에 순위와 함께 키워드 적음
    keywordArea.innerHTML = index + 1 + "&nbsp;&nbsp;" + keywordInfo.keyword;

    var newLine = document.createElement("br");

    // 점수는 span 태그를 활용하여 작게 표시
    var score = document.createElement("span");
    score.className = "small-text is-grey";
    score.innerHTML = keywordInfo.score;

    // 점수를 나타내는 막대는 div 태그를 이용하여 score를 길이로 나타냄
    var scoreBar = document.createElement("div");
    scoreBar.className = "score-bar is-cate-bg-" + categoryNumber;
    scoreBar.style.width =
      "calc((100% - 30px) * " + keywordInfo.score + " / 100";

    // p에 추가하여 감싸고
    wrapper.append(keywordArea, newLine, scoreBar, score);

    // 키워드 랭킹이 표시될 영역에 추가
    rankingArea.append(wrapper);
  });
  // ==================================================================================

  // 좌측 하단 가장 동의를 많이 받은 청원
  $.ajax({
    url: API.CATEGORY.BEST_PETITION + "?categoryId=" + categoryNumber,
    method: "GET",
  })
    .done((res) => {
      $("#bestPetitionTitle").text(res.title);
      $("#bestPetitionTitle").attr("href", getPetionURL(res.post_id));
    })
    .fail((err) => console.log(err));
  // ==================================================================================

  // 상단 중간 카테고리 내 가장 많은 청원이 올라온 키워드
  $.ajax({
    url: API.CATEGORY.MOST_POST_KEYWORD + "?categoryId=" + categoryNumber,
    method: "GET",
  })
    .done((res) => {
      $("#mostPostKeyword").text(res.keyword);
      $("#mostPostKeyword").attr("href", "/keyword/" + encodeURI(res.keyword));
      $("#mostPostKeywordPostSum").text(res.post_sum.format() + "건");
    })
    .fail((err) => console.log(err));
  // ==================================================================================

  // 상단 중간 카테고리 내 가장 많은 동의 합 키워드
  $.ajax({
    url: API.CATEGORY.MOST_AGREE_KEYWORD + "?categoryId=" + categoryNumber,
    method: "GET",
  })
    .done((res) => {
      console.log(res);
      $("#mostAgreeKeyword").text(res.keyword);
      $("#mostAgreeKeyword").attr("href", "/keyword/" + encodeURI(res.keyword));
      $("#mostAgreeKeywordAgreeSum").text(res.agree_sum.format() + "회");
    })
    .fail((err) => console.log(err));
});
