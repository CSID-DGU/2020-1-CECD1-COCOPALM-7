<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String keyword = "코로나";
	String pageTitle = keyword + " 관련 청원 트렌드";
%>
<!DOCTYPE html>
	<html>
		<head>
			<jsp:include page="commonHead.jsp" />
			<title><%=pageTitle%></title>
		</head>
	
	<body>
		<jsp:include page="sideNavigation.jsp" />
		<!------------------------- Main -------------------------->
		<div id="main">
			<!-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) -->
			<jsp:include page="commonTop.jsp">
				<jsp:param name="pageTitle" value="<%=pageTitle%>" />
			</jsp:include>
			<!----------------------------------------------------->
			<div class="columns">
				<div class="column is-one-third">
					<span class="bold-text">만료 이전 </span> <span
						class="primary-text bold-text"><%=keyword%></span> <span
						class="bold-text"> 청원 및 동의 추이</span>
					<div id="newPetitionsKeywordChart"></div>
				</div>
				<div class="column">Second column</div>
				<div class="column">Third column</div>
			</div>
			<div class="columns">
				<div class="column">fourth column</div>
				<div class="column">fifth column</div>
			</div>
		</div>
		<!--------------------------------------------------------->
		<!------------------ Scripts are here ! ------------------->
		<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
		<script src="https://d3js.org/d3.v5.min.js"></script>
		<script src="js/billboard.min.js"></script>
		<script src="js/page-common.js"></script>
		<script src="js/keywordDetail.js"></script>
		<!--------------------------------------------------------->
	</body>
</html>
