<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 이 컬럼 제목 --%>
<div class="margin-bottom" style="display:flex; justify-content: space-around;">
    <%-- 이전 뉴스 --%>
    <button class="button is-small" style="border:none;" id="prevNewsBtn">
      <span class="icon">
        <i class="fas fa-chevron-left"></i>
      </span>
      <span>이전</span>
    </button>
    
    <span class="large-text bold-text">관련 최신 뉴스</span>

    <%-- 다음 뉴스 --%>
    <button class="button is-small" style="border:none;" id="nextNewsBtn">
      <span>다음</span>
      <span class="icon">
        <i class="fas fa-chevron-right"></i>
      </span>
    </button>
</div>


<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <a href="#" class="news-link-0">
        <img id="news-image-0" src="https://bulma.io/images/placeholders/128x128.png">
      </a>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <a href="#" class="news-link-0 is-grey">
        <p class="small-text">
          <span id="news-title-0"></span>
          <br>
          <span id="news-time-0" class="is-purple"></span>
        </p>
      </a>
    </div>
  </div>
</article>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <a href="#" class="news-link-1">
        <img id="news-image-1" src="https://bulma.io/images/placeholders/128x128.png">
      </a>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <a href="#" class="news-link-1 is-grey">
        <p class="small-text">
          <span id="news-title-1"></span>
          <br>
          <span id="news-time-1" class="is-purple"></span>
        </p>
      </a>
    </div>
  </div>
</article>

<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <a href="#" class="news-link-2">
        <img id="news-image-2" src="https://bulma.io/images/placeholders/128x128.png">
      </a>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <a href="#" class="news-link-2 is-grey">
        <p class="small-text">
          <span id="news-title-2"></span>
          <br>
          <span id="news-time-2" class="is-purple"></span>
        </p>
      </a>
    </div>
  </div>
</article>