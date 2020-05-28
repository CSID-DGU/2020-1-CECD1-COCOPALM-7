<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
<%
  // 페이지에 보여지는 제목 중 앞에 보라색 글씨 부분
  String pageTitlePrefix = "만료 이전"; 
  // 페이지에 보여지는 제목 중 앞에 검은색 글씨 부분
  String pageTitleSuffix = "청원 트렌드"; 
  String pageTitle = pageTitlePrefix + pageTitleSuffix;
%>
<!DOCTYPE html>
<html>
  <head>
    <%@ include file="../commonHead.jsp" %>
    <title><%=pageTitle%></title>
  </head>

  <body>
    <%@ include file="../sideNavigation.jsp" %>
    <%------------------------- Main -------------------------%>
    <div id="main">
      <%-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) --%>
      <%@ include file="../commonTop.jsp" %>
      <%----------------------------------------------------%>
      <div class="columns">
      	<%--기간 내 화제 키워드 top3 --%>
        <div class="column margin-bottom-large">
			<%@ include file="periodTop3Keyword.jsp" %>        
        </div>
        <div class="column">Second column</div>
        <div class="column">Third column</div>
      </div>
      <div class="columns">
        <div class="column">fourth column</div>
        <div class="column">fifth column</div>
      </div>
    </div>
    <%--------------------------------------------------------%>
    <%------------------ Scripts are here ! ------------------%>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="js/billboard.min.js"></script>
    <script src="js/page-common.js"></script>
    <script src="js/newPetitionDetail.js"></script>
    <%--------------------------------------------------------%>
  </body>
</html>
