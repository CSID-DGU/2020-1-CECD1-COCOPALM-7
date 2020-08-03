<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 제목만큼의 공백 할당 --%>
<div class="margin-bottom">
    <span class="large-text bold-text"><%=category %> 화제 키워드</span>
</div>

<%-- 화제 키워드 리스트 --%>
<div id="categoryIssuedKeywordsRanking"></div>