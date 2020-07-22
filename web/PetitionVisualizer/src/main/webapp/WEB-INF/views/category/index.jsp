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
          정치개혁, 외교통일국방, 교통건축국토, 행정, 문화예술체육, 보건복지, 육아교육, 인권성평등, 저출산고령화, 일자리, 경제민주화, 미래, 성장동력, 안전환경, 반려동물, 농산어촌
        </div>
      </div>

      <%-- 타일 구조 필요 --%>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">       
          <div class="tile">
           
            <%-- 카테고리 청원 및 동의 추이 --%>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
              </article>
            </div>
           
            <%-- 두 행 짜리 --%>
            <div class="tile is-parent is-vertical">
              <%-- 청원 수 합이 가장 큰 키워드 --%>
              <article class="tile is-child notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
              </article>

              <%-- 동의 수 합이 가장 큰 키워드 --%>
              <article class="tile is-child notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
              </article>
            </div>
          </div>

          <%-- 가장 많은 동의를 받은 청원 --%>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>

        <%-- 카테고리 화제 키워드 --%>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
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
