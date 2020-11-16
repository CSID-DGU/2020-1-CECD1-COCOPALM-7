<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%------------------ Side Navigation Bar -----------------%>
<div id="sideNav" class="side-nav">
  <a href="/">
    <ul>
      <li><i class="fas fa-home"></i></li>
      <li><span>홈</span></li>
    </ul>
  </a>
  <a href="/category">
    <ul>
      <li><i class="fas fa-grip-horizontal"></i></li>
      <li><span>카테고리</span></li>
    </ul>
  </a>
</div>
<%--------------------------------------------------------%>
