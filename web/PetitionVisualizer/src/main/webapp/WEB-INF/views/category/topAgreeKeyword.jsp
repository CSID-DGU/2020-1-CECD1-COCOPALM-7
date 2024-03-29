<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<div class="content margin-bottom-large">
  <div class="columns is-mobile is-vcentered">
    <div class="column is-half has-text-right">
      <span class="bold-text is-grey">동의 수 합이</span>
      <br/>
      <span class="bold-text is-grey">가장 큰 키워드</span>
    </div>
    <div class="column is-half has-text-left">
      <a href="#" class="bold-text is-cate-${categoryNumber}" id="mostAgreeKeyword"></a>
      <br/>
    </div>
  </div>
  <div class="columns is-vcentered">
    <div class="column is-full has-text-centered">
      <span class="xlarge-text bold-text" id="mostAgreeKeywordAgreeSum"></span>
    </div>
  </div>
</div>