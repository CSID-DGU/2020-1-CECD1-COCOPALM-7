<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 이 컬럼 제목 --%>
<div class="margin-bottom has-text-centered">
    <a href="/keyword" class="large-text is-purple bold-text">코로나</a>
    <span class="large-text bold-text">관련 청원</span>
</div>

<div class="margin-bottom" id="keywordGaugeChart"></div>

<div class="make-circle-centered">
<div class="circle">
    <span class="bold-text">1281</span>
    <span>동의</span>
</div>
</div>