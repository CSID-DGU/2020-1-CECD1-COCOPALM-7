<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- String pageTitlePrefix
- String pageTitleSuffix
--%>

<%-- 상단 (사이드 바 오픈 버튼, 페이지 제목, 검색창) --%>
<nav class="level">
	<%-- Left side --%>
	<div class="level-left">
		<div class="level-item">
			<%-- 사이드 바 오픈 버튼 --%>
			<span id="sideNavOpenButton">
				<i class="fas fa-bars"></i>
			</span>
			<%-- 페이지 제목 --%>
			<% if(pageTitlePrefix.length() >0) { %>
				<span class="page-title is-purple">
					<%=pageTitlePrefix%>&nbsp;
				</span>
			<% } %>
			<span class="page-title">
				<%=pageTitleSuffix%>
			</span>
		</div>
	</div>

	<%-- Right side --%>
	<div class="level-right">
		<div class="level-item">
			<div class="field has-addons">
				<p class="control">
					<input id="searchInput" class="input" type="text" placeholder="키워드를 입력하세요">
				</p>
				<div class="control">
					<a id="searchButton" class="button">
						<i class="fas fa-search"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>
<%----------------------------------------------------%>
