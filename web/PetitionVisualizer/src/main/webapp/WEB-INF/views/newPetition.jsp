<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Bulma CSS -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">

<!-- 페이지 공통 CSS -->
<link rel="stylesheet" href="css/page-common.css" />

<title>만료 이전 청원 트렌드</title>
</head>

<body>
	<!------------------ Side Navigation Bar ------------------>
	<div id="sideNav" class="side-nav">
		<a href="/">
			<ul>
				<li><i class="fas fa-home"></i></li>
				<li><span>홈</span></li>
			</ul>
		</a> <a href="/category">
			<ul>
				<li><i class="fas fa-grip-horizontal"></i></li>
				<li><span>카테고리</span></li>
			</ul>
		</a>
		<!-- 재생 버튼을 아래에 배치하기 위한 div -->
		<div style="flex: 1"></div>
		<a href="/play">
			<ul>
				<li><i class="fas fa-play"></i></li>
				<li><span>재생</span></li>
			</ul>
		</a>
	</div>
	<!--------------------------------------------------------->
	<!------------------------- Main -------------------------->
	<div id="main">
		<!-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) -->
		<nav class="level is-mobile">
			<!-- Left side -->
			<div class="level-left">
				<div class="level-item">
					<!-- 사이드 바 오픈 버튼 -->
					<span id="sideNavOpenButton"><i class="fas fa-bars"></i></span>
					<!-- 페이지 제목 -->
					<span id="pageTitle">만료 이전 청원 트렌드</span>
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