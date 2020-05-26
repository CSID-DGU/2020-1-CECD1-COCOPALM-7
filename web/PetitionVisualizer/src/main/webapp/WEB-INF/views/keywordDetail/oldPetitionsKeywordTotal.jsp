<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- String keyword
--%>

<%-- 이 컬럼 제목 --%>
<div class="margin-bottom-large">
    <span class="large-text bold-text">만료 된 청원 기준</span>
</div>
<%-- 키워드 관련 청원 수 합 --%>
<div class="margin-bottom-small">
    <div>
        <span class="bold-text"><%=keyword%></span>
        <span>관련</span>
        <span class="bold-text is-purple">청원 수</span>
        <span>합</span>
    </div>
    <div class="has-text-right">
        <span class="xlarge-text bold-text">102건</span>
    </div>
</div>
<%-- 키워드 관련 청원 동의 수 합 --%>
<div class="margin-bottom-small">
    <div>
        <span class="bold-text"><%=keyword%></span>
        <span>관련 청원</span>
        <span class="bold-text is-purple">동의 수</span>
        <span>합</span>
    </div>
    <div class="has-text-right">
        <span class="xlarge-text bold-text">8,012,373회</span>
    </div>
</div>
<%-- 키워드 관련 청원 최다 동의 --%>
<div class="margin-bottom-small">
    <div>
        <span class="bold-text"><%=keyword%></span>
        <span>관련 청원</span>
        <span class="bold-text is-purple">최다 동의</span>
    </div>
    <div class="has-text-right">
        <span class="xlarge-text bold-text">1,201,327회</span>
    </div>
</div>