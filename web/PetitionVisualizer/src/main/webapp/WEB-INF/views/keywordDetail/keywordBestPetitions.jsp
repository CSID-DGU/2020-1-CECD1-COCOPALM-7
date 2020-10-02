<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>
<%-- 가장 많은 동의를 받은 만료 이전 청원 --%>
<div class="margin-bottom">
    <span class="large-text bold-text">가장 많은 동의를 받은</span>
    <span class="large-text bold-text is-purple">만료 이전</span>
    <span class="large-text bold-text">청원</span>
</div>

<div class="in-a-row margin-bottom-small">
    <span class="icon is-purple" style="align-self: start;"><i class="fas fa-angle-right"></i></i></span>
    <a href="#" class="bold-text is-black" id="mostAgreeOldPetitionURL"><span class="bold-text" id="mostAgreeNewPetition"></span></a>
</div>

<div class="margin-bottom">
    <span class="is-grey">2020년 05월 15일(금요일) [보건복지부]에서 헌혈자가 감소하여 주위단계라는
재난문자가 한번 왔더군요
한번으로 끝내지 마시고 매일 "보건복지부"에서 재난문자로 동참을 요하는 문자를 부탁드리며
그리고 중앙중부에서는 이 점을 심각하게 받아주기고 조치 부탁드립니다.
</span>
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
    <span class="is-grey">국민들이 국회의원들을 뽑고
국민들의 세금으로 월급 받으시는건데
작년 몇달간... 국회는 문을 열지 않았음에도..
그렇다면 일을 안한것과 다를바가 없는데도
월급 다 받아가셨습니다.
</span>
</div>