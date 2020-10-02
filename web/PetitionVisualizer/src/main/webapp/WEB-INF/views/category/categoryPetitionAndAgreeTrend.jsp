<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<div class="content">
    <div class="columns">
        <div class="column is-full margin-bottom-large">
            <div class="margin-bottom">
                <span class="large-text bold-text is-cate-${categoryNumber}"><%=category %></span> 
                <span class="large-text bold-text">&nbsp;카테고리 청원 및 동의 추이</span>
            </div>

            <div id="categoryTrendChart"></div>
        </div>
    </div>
</div>
