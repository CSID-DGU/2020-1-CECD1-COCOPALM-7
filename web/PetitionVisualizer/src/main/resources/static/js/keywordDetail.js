$(document).ready(async function () {
  var newsList = null;
  var newsIndex = 0;

  // 키워드에 대한 정보가 존재하는지 먼저 살핀 후 진행
  await $.ajax({
    url: API.KEYWORD.IS_EXIST + "?keyword=" + encodeURI(keyword),
    method: "GET",
  })
    .done((isExist) => {
      if (isExist == false) {
        alert("해당 키워드는 존재하지 않습니다.");
        window.history.back();
      }
    })
    .fail((err) => console.log(err));

  //
  var chart = bb.generate({
    size: { height: 240 },
    data: {
      columns: [
        ["동의", 130, 89, 165, 278, 70, 206, 137, 62, 282, 210, 54, 223],
        ["청원", 54, 84, 28, 177, 69, 57, 174, 8, 130, 187, 76, 188],
      ],
      types: {
        동의: "line",
        청원: "area",
      },
      colors: {
        동의: "#6c5ce7",
        청원: "#aaaaaa",
      },
    },
    bindto: "#newPetitionsKeywordChart",
  });

  // 카테고리 번호를 카테고리명으로 변환하는 용도
  const CATEGORY_NAME = {
    0: "정치개혁",
    1: "외교/통일/국방",
    2: "일자리",
    3: "미래",
    4: "성장동력",
    5: "농산어촌",
    6: "보건복지",
    7: "육아/교육",
    8: "안전/환경",
    9: "저출산/고령화대책",
    10: "행정",
    11: "반려동물",
    12: "교통/건축/국토",
    13: "경제민주화",
    14: "인권/성평등",
    15: "문화/예술/체육/언론",
    16: "기타",
  };

  // 관련 청원의 내용들을 한 컬럼에 집어넣기 위함
  var makeColumn = (row) => {
    return (
      "<a href='" +
      getPetionURL(row.post_id) +
      "' class='is-black'>" +
      row.title +
      "</a>" +
      "<br />" +
      "<span class='tag' style='margin-right: 12px'>" +
      (row.is_new === 1 ? "만료 이전" : "만료") +
      "</span>" +
      "<a href='/category/" +
      row.category_id +
      "' class='small-text is-purple' style='margin-right: 12px'>" +
      CATEGORY_NAME[row.category_id] +
      "</a>" +
      "<span class='small-text is-grey' style='margin-right: 12px'>" +
      row.agree_count.format() +
      "명 동의" +
      "</span>" +
      "<span class='small-text is-grey'>" +
      row.start_date.substring(0, 10) +
      "</span>"
    );
  };

  // 관련 청원 목록들을 가져와 DataTables 생성
  $.ajax({
    url: API.KEYWORD.RELATED + "?keyword=" + encodeURI(keyword),
    method: "GET",
  })
    .done((res) => {
      var table = $("#relatedPetitions").DataTable({
        pageLength: 5, // 한 페이지 당 5 게시물
        pagingType: "full", // 4개의 버튼으로 페이징
        language: {
          paginate: {
            // 페이징 버튼들 한글화
            first: "처음",
            previous: "이전",
            next: "다음",
            last: "마지막",
          },
        },
        lengthChange: false, // 기타 DataTables UI 및 기능 구성
        info: false,
        dom: "lrtip",
        data: res, // 표시될 데이터는 API 호출 결과를 사용
        order: [[0, "desc"]], // 0번째 컬럼(청원 시작일) 최신순
        columns: [
          {
            data: "start_date", // 청원 시작일을 컬럼 정렬 기준으로 잡음
            render: function (data, type, row, meta) {
              // 단, 시작일 외에도 다른 정보들도 함께
              if (type === "display") {
                // 표시할 수 있도록 렌더링 함수 사용
                return makeColumn(row);
              }
              return data;
            },
          },
          {
            data: "is_new", // 만료, 만료 이전 필터링을 위해 데이터를 집어넣기는 하지만,
          }, // columnDefs에서 visible: false로 보이지 않게 함
        ],
        columnDefs: [
          {
            targets: [0],
            visible: true,
            searchable: false,
          },
          {
            targets: [1],
            visible: false,
            searchable: true,
          },
        ],
        search: {
          // 초기에 만료(0)로 필터링 걸어둠
          search: "0",
        },
      });

      // 만료로 필터링 버튼
      $("#filterExpired").on("click", () => {
        $("#filterExpired").removeClass("is-outlined");
        $("#filterNotExpired").addClass("is-outlined");
        table.search("0").draw();
      });

      // 만료 이전으로 필터링 버튼
      $("#filterNotExpired").on("click", () => {
        $("#filterExpired").addClass("is-outlined");
        $("#filterNotExpired").removeClass("is-outlined");
        table.search("1").draw();
      });
    })
    .fail((err) => console.log(err));

  // 좌측 하단 "가장 많은 동의를 받은 만료 이전 & 된 청원"
  $.ajax({
    url: API.KEYWORD.BEST_PETITIONS + "?keyword=" + encodeURI(keyword),
    method: "GET",
  })
    .done((res) => {
      // 반환 값이 존재하면 만료 이전 청원 표시
      res[0] && res[0].title && $("#mostAgreeNewPetition").text(res[0].title);
      res[0] &&
        res[0].post_id &&
        $("#mostAgreeNewPetitionURL").attr(
          "href",
          getPetionURL(res[0].post_id)
        );
      // 반환 값이 존재하면 만료 청원 표시
      res[1] && res[1].title && $("#mostAgreeOldPetition").text(res[1].title);
      res[1] &&
        res[1].post_id &&
        $("#mostAgreeOldPetitionURL").attr(
          "href",
          getPetionURL(res[1].post_id)
        );
    })
    .fail((err) => console.log(err));

  // 상단 중간 "만료 된 청원 기준 통계"
  $.ajax({
    url: API.KEYWORD.STATUS + "?keyword=" + encodeURI(keyword),
    method: "GET",
  })
    .done((res) => {
      // 값이 존재하면 표시
      res.keywordCount &&
        $("#keywordCount").text(res.keywordCount.format() + "건");
      res.sumAgreeCount &&
        $("#sumAgreeCount").text(res.sumAgreeCount.format() + "회");
      res.maxAgreeCount &&
        $("#maxAgreeCount").text(res.maxAgreeCount.format() + "회");
    })
    .fail((err) => console.log(err));

  // 뉴스는 무조건 9개만 오며, 한번에 3개 씩 보여줌
  var setNews = () => {
    // 첫번째 뉴스
    $("#news-image-0").attr("src", newsList[newsIndex].src);
    $(".news-link-0").attr("href", newsList[newsIndex].url);
    $("#news-title-0").text(newsList[newsIndex].title);
    $("#news-time-0").text(newsList[newsIndex].time);

    // 두번째 뉴스
    $("#news-image-1").attr("src", newsList[newsIndex + 1].src);
    $(".news-link-1").attr("href", newsList[newsIndex + 1].url);
    $("#news-title-1").text(newsList[newsIndex + 1].title);
    $("#news-time-1").text(newsList[newsIndex + 1].time);

    // 세번째 뉴스
    $("#news-image-2").attr("src", newsList[newsIndex + 2].src);
    $(".news-link-2").attr("href", newsList[newsIndex + 2].url);
    $("#news-title-2").text(newsList[newsIndex + 2].title);
    $("#news-time-2").text(newsList[newsIndex + 2].time);
  };

  // 인덱스 값을 변경하여 이전 3개 뉴스를 렌더링
  var prevNews = () => {
    if (newsList == null) return;
    newsIndex = (newsIndex - 3 + newsList.length) % newsList.length;
    console.log(newsIndex, newsList.length);
    setNews();
  };

  // 인덱스 값을 변경하여 다음 3개 뉴스를 렌더링
  var nextNews = () => {
    if (newsList == null) return;
    newsIndex = (newsIndex + 3) % newsList.length;
    console.log(newsIndex);
    setNews();
  };

  // 버튼 클릭 이벤트 등록
  $("#prevNewsBtn").on("click", () => prevNews());
  $("#nextNewsBtn").on("click", () => nextNews());

  // 상단 우측 관련 뉴스 가져옴
  $.ajax({
    url: API.KEYWORD.NEWS + "?keyword=" + encodeURI(keyword),
    method: "GET",
  })
    .done((res) => {
      // 처음에 가져오자마자 첫 3개 렌더링
      newsList = res;
      setNews();
    })
    .fail((err) => console.log(err));
});
