<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 이 컬럼 제목 --%>
<div class="margin-bottom">
    <span class="large-text bold-text">관련 최신 뉴스</span>
</div>

<%-- 뉴스 이미지 --%>
<div class="margin-bottom">
    <img class="news-image" src="https://img.hankyung.com/photo/202005/AA.22728005.1.jpg" alt="뉴스 이미지" />
</div>

<%-- 뉴스 제목 --%>
<div>
    <span>쿠팡·마켓컬리 물류센터 터졌다…67명 코로나 감염</span>
</div>
<%-- 이전 / 다음 뉴스 --%>