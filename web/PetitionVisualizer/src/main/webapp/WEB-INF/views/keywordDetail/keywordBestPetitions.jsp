<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>
<%-- 가장 많은 동의를 받은 만료 이전 청원 --%>
<br><br>
<div class="margin-bottom">
    <span class="large-text bold-text">가장 많은 동의를 받은</span>
    <span class="large-text bold-text is-purple">만료 이전</span>
    <span class="large-text bold-text">청원</span>
</div>

<div class="in-a-row margin-bottom-small">
    <span class="icon is-purple" style="align-self: start;"><i class="fas fa-angle-right"></i></i></span>
    <a href="#" class="bold-text is-black" id="mostAgreeNewPetitionURL"><span class="bold-text" id="mostAgreeNewPetition"></span></a>
</div>

<div class="margin-bottom">
    <span class="is-grey" id="mostAgreeNewPetitionSummary">-</span>
</div>

<%-- 가장 많은 동의를 받은 만료 된 청원 --%>
<div class="margin-bottom">
    <span class="large-text bold-text">가장 많은 동의를 받은</span>
    <span class="large-text bold-text is-purple">만료 된</span>
    <span class="large-text bold-text">청원</span>
</div>

<div class="in-a-row margin-bottom-small">
    <span class="icon is-purple" style="align-self: start;"><i class="fas fa-angle-right"></i></i></span>
    <a href="#" class="bold-text is-black" id="mostAgreeOldPetitionURL"><span id="mostAgreeOldPetition"></span></a>
</div>

<div class="margin-bottom">
    <span class="is-grey" id="mostAgreeOldPetitionSummary">데이터 없음</span>
</div>