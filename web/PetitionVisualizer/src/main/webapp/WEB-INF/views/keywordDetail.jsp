<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String pageTitle = "코로나" + " 관련 청원 트렌드";
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
			<div class="column">first column</div>
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
	<script src="js/page-common.js"></script>
	<!--------------------------------------------------------->
</body>
</html>
