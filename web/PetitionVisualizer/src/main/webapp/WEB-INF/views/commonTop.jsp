<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) -->
<nav class="level is-mobile">
	<!-- Left side -->
	<div class="level-left">
		<div class="level-item">
			<!-- 사이드 바 오픈 버튼 -->
			<span id="sideNavOpenButton"><i class="fas fa-bars"></i></span>
			<!-- 페이지 제목 -->
			<span id="pageTitle"><%=request.getParameter("pageTitle")%></span>
		</div>
	</div>

	<!-- Right side -->
	<div class="level-right">
		<div class="level-item">
			<!-- 검색창 -->
			<span id="Search">Search...</span>
		</div>
	</div>
</nav>
<!----------------------------------------------------->
