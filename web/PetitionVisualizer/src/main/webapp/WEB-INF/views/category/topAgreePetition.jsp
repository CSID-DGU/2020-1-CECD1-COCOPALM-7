<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<div class="content margin-top-large">
    <div class="margin-bottom">
        <span class="large-text bold-text">가장 많은 동의를 받은 청원</span>
    </div>
    
    <div class="in-a-row margin-bottom-small">
        <span class="icon is-cate-${categoryNumber}" style="align-self: start;"><i class="fas fa-angle-right"></i></i></span>
        <a href="#" class="bold-text is-black" id="bestPetitionTitle"></a>
    </div>

    <div class="margin-bottom-large">
        <span class="is-grey" id="bestPetitionSummary">
        -
        </span>
    </div>
</div>