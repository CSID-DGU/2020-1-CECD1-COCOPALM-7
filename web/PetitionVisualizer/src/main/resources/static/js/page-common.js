const SERVER_URL = "http://petition.ga";
// const SERVER_URL = "http://localhost";
const API = {
  NEW_PETITION: {
    KEYWORD_TOP_3: SERVER_URL + "/api/newPetition/keywordTop3",
    META_DATA: SERVER_URL + "/api/newPetition/metaData",
  },
  KEYWORD: {
    BEST_PETITIONS: SERVER_URL + "/api/keyword/bestPetitions",
    STATUS: SERVER_URL + "/api/keyword/status",
    NEWS: SERVER_URL + "/api/keyword/news",
    RELATED: SERVER_URL + "/api/keyword/related",
    IS_EXIST: SERVER_URL + "/api/keyword/isExist",
  },
  CATEGORY: {
    BEST_PETITION: SERVER_URL + "/api/category/bestPetition",
    MOST_POST_KEYWORD: SERVER_URL + "/api/category/mostPostKeyword",
    MOST_AGREE_KEYWORD: SERVER_URL + "/api/category/mostAgreeKeyword",
  },
};

$(document).ready(function () {
  const NAV_WIDTH = 60;
  $("#sideNavOpenButton").on("click", toggleNav);

  function toggleNav() {
    if ($("#sideNav").offset().left === 0) {
      $("#sideNav").css("transform", "translateX(0px)");
      $("#main").css("margin-left", 0);
    } else {
      $("#sideNav").css("transform", "translateX(" + NAV_WIDTH + "px)");
      $("#main").css("margin-left", NAV_WIDTH);
    }
  }

  var isInputOkay = () => {
    var keywordInput = $("#searchInput").val();
    if (keywordInput.length < 1) {
      alert("값을 입력해주세요");
      return false;
    } else {
      return true;
    }
  };

  $("#searchButton").on("click", () => {
    if (isInputOkay()) {
      var keywordInput = $("#searchInput").val();
      window.location.href = "/keyword/" + encodeURI(keywordInput);
    }
  });
  $("#searchInput").on("keydown", (e) => {
    if (e.keyCode === 13 && isInputOkay()) {
      var keywordInput = $("#searchInput").val();
      window.location.href = "/keyword/" + encodeURI(keywordInput);
    }
  });
});

var getPetionURL = (postId) => {
  return "https://www1.president.go.kr/petitions/" + postId;
};

// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.format = function () {
  if (this == 0) return 0;

  var reg = /(^[+-]?\d+)(\d{3})/;
  var n = this + "";

  while (reg.test(n)) n = n.replace(reg, "$1" + "," + "$2");

  return n;
};

// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function () {
  var num = parseFloat(this);
  if (isNaN(num)) return "0";

  return num.format();
};
