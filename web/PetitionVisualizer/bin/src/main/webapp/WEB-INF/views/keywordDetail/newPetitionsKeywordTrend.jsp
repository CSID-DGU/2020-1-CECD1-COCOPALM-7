<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 이 컬럼 제목 --%>
<div class="margin-bottom">
    <span class="large-text bold-text">만료 이전 청원 및 동의 추이</span>
</div>
<%-- 기간 설정 --%>
<div class="in-a-row margin-bottom">
    <span class="small-text is-grey" style="margin-right: 6px;">기간 설정</span>
    <div class="buttons are-small">
        <button class="button is-purple">24시간</button>
        <button class="button is-purple is-outlined">일주일</button>
        <button class="button is-purple is-outlined">전체</button>
    </div>
</div>
<%-- 시각화 차트 --%>
<%-- div를 <div id="000" /> 처럼 단일 태그로 쓰면 제대로 안됨!  --%>
<div id="newPetitionsKeywordChart"></div>
