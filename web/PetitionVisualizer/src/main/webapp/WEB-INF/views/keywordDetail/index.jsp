<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%
	String keyword = "코로나";
	String pageTitlePrefix = keyword;
	String pageTitleSuffix = "관련 청원 트렌드";
	String pageTitle = pageTitlePrefix + " " + pageTitleSuffix;
%>
<!DOCTYPE html>
<html>
	<head>
		<%@ include file="../commonHead.jsp" %>
		<link rel="stylesheet" href="css/keywordDetail.css" />
		<title><%=pageTitle%></title>
	</head>
	
	<body>
		<%@ include file="../sideNavigation.jsp" %>
		<%------------------------- Main -------------------------%>
		<div id="main">
			<%-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) --%>
			<%@ include file="../commonTop.jsp" %>
			<%----------------------- 첫 줄 -----------------------%>
			<div class="columns">
				<%-- 만료 이전 청원 및 동의 추이 --%>
				<div class="column margin-bottom-large">
					<%@ include file="newPetitionsKeywordTrend.jsp" %>
				</div>
				<%-- 만료 된 청원 기준 --%>
				<div class="column is-one-quarter margin-bottom-large">
					<%@ include file="oldPetitionsKeywordTotal.jsp" %>
				</div>
				<%-- 관련 최신 뉴스 --%>
				<div class="column margin-bottom-large">
					<%@ include file="keywordRelatedNews.jsp" %>
				</div>
			</div>
			<%---------------------- 다음 줄 ----------------------%>
			<div class="columns">
				<div class="column margin-bottom-large">
					<%@ include file="keywordBestPetitions.jsp" %>
				</div>
				<div class="column">fifth column</div>
			</div>
		</div>
		<%--------------------------------------------------------%>
		<%------------------ Scripts are here ! ------------------%>
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<script src="https://d3js.org/d3.v5.min.js"></script>
		<script src="js/billboard.min.js"></script>
		<script src="js/page-common.js"></script>
		<script src="js/keywordDetail.js"></script>
		<%--------------------------------------------------------%>
	</body>
</html>
