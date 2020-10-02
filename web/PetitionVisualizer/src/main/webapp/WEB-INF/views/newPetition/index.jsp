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
    <link rel="stylesheet" href="/css/newPetition.css" />
    <title><%=pageTitle%></title>
  </head>

  <body>
    <%@ include file="../sideNavigation.jsp" %>
    <%------------------------- Main -------------------------%>
    <div id="main">
      <%-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) --%>
      <%@ include file="../commonTop.jsp" %>
      
      <%-------------------------페이지 상단 -------------------------%>
      <div class="columns is-variable is-8-tablet">
      
      	<%--기간 내 화제 키워드 top3 --%>
        <div class="column margin-bottom-large">
			    <%@ include file="periodTop3Keyword.jsp" %>        
        </div>
        
        <%--키워드 top3 각각의 그래프 --%>
        <div class="column is-one-quarter margin-bottom-large">
        	<%@ include file="periodTop3EachKeyword.jsp" %>
        </div>
        
        <%--TOP3 키워드 요약 --%>
        <div class="column margin-bottom-large">
		    	<%@ include file="newPetitionSummary.jsp" %>
        </div>
        
      </div>
      
      <%-------------------------페이지 하단 -------------------------%>
      <div class="columns is-variable is-8-tablet">
        <%-- 키워드 관련 청원 집계 --%>
        <div class="column margin-bottom-large">
          <%@ include file="keywordRelatedPetitionsInformation.jsp" %>
        </div>
        
        <%-- 키워드 집계 요약 및 청원 요약 --%>
        <div class="column margin-bottom-large">
          <%@ include file="keywordRelatedSummaries.jsp" %>
        </div>
        
        <%-- 최근 1시간 화제 키워드 --%>
        <div class="column margin-bottom-large">
          <%@ include file="recentHourIssuedKeywords.jsp" %>
        </div>
      </div>
    </div>
    <%--------------------------------------------------------%>
    <%------------------ Scripts are here ! ------------------%>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="/js/billboard.min.js"></script>
    <script src="/js/page-common.js"></script>
    <script src="/js/newPetition.js"></script>
    <%--------------------------------------------------------%>
  </body>
</html>
