<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 이 컬럼 제목 --%>
<div class="in-a-row margin-bottom">
    <span class="large-text bold-text" style="margin-right: 18px;">관련 청원 목록</span>
    <%-- 만료 / 만료 이전 선택 --%>
    <div class="buttons are-small">
        <button class="button is-purple">만료</button>
        <button class="button is-purple is-outlined">만료 이전</button>
    </div>
</div>

<div>
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>제목</th>
                <th>카테고리</th>
                <th>동의 수</th>
                <th>시작일</th>
            </tr>
        </thead>
    </table>
</div>