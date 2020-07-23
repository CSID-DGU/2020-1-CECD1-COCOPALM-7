<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%
  String pageTitlePrefix = ""; 
  String pageTitleSuffix = "카테고리 별 청원 트렌드"; 
  String pageTitle = pageTitlePrefix + pageTitleSuffix;
%>
<!DOCTYPE html>
<html>
  <head>
    <%@ include file="../commonHead.jsp" %>
    <link rel="stylesheet" href="css/category.css" />
    <title>
      <%=pageTitle%>
    </title>
  </head> 

  <body>
    <%@ include file="../sideNavigation.jsp" %>
    <%------------------------- Main -------------------------%>
    <div id="main">
      <%-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) --%>
      <%@ include file="../commonTop.jsp" %>
      <%----------------------------------------------------%>

      <%-- 카테고리 목록 --%>
      <div class="columns">
        <div class="column">
          <%@ include file="./categoryTags.jsp" %>
        </div>
      </div>

      <%-- 타일 구조 필요 --%>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">       
          <div class="tile">
           
            <%-- 카테고리 청원 및 동의 추이 --%>
            <div class="tile is-parent">
              <article class="tile is-child">
                <%@ include file="./categoryPetitionAndAgreeTrend.jsp" %>
              </article>
            </div>
           
            <%-- 두 행 짜리 --%>
            <div class="tile is-parent is-vertical">
              <%-- 청원 수 합이 가장 큰 키워드 --%>
              <article class="tile is-child is-primary">
                <%@ include file="./topPetitionsKeyword.jsp" %>
              </article>

              <%-- 동의 수 합이 가장 큰 키워드 --%>
              <article class="tile is-child is-warning">
                <%@ include file="./topAgreeKeyword.jsp" %>
              </article>
            </div>
          </div>

          <%-- 가장 많은 동의를 받은 청원 --%>
          <div class="tile is-parent">
            <article class="tile is-child is-danger">
              <%@ include file="./topAgreePetition.jsp" %>
            </article>
          </div>
        </div>

        <%-- 카테고리 화제 키워드 --%>
        <div class="tile is-parent">
          <article class="tile is-child is-success">
            <%@ include file="./categoryIssuedKeywords.jsp" %>
          </article>
        </div>
      </div>
    </div>
    <%--------------------------------------------------------%>
    <%------------------ Scripts are here ! ------------------%>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="js/billboard.min.js"></script>
    <script src="js/page-common.js"></script>
    <%--------------------------------------------------------%>
  </body>
</html>
