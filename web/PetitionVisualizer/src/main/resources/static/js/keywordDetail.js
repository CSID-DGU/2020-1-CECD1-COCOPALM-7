/*
만약 모바일에서 제대로 그래프가 화면 밖으로 넘치는 경우,
다른 html 요소들이 자리를 잡을 때 까지 기다렸다가 렌더링 해줘야함.
이 방법을 사용하기 위해서는, 바인딩 하려는 div에 style="display: none;"
적용 후 setTimeout으로 약 600ms 후 display: block으로 바꿔줘야 한다.
=> 현재는 크롬의 개발자 도구로 모바일 화면 테스트 시, 문제 발생

$(document).ready(function () {
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

  setTimeout(() => $("#newPetitionsKeywordChart").css("display", "block"), 0);
});
*/

$(document).ready(function () {
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

  // 관련 청원 목록을 임시로 DataTable 라이브러리로 처리하였음
  // sampleList.json 파일에 임시 데이터 넣어둠
  var table = $("#example").DataTable({
    pageLength: 5,
    lengthChange: false,
    info: false,
    searching: false,
    ajax: "js/sampleList.json",
    columns: [
      { data: "제목" },
      { data: "카테고리", width: "15%" },
      { data: "동의 수", width: "15%" },
      { data: "시작일", width: "15%" },
    ],
  });
});
