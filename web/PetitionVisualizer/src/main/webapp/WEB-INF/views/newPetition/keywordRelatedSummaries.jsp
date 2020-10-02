<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

<%--
이 jsp 파일은 다른 파일에 <%@ include file="..." %> 형태로 사용됨.
따라서, 이 파일을 사용하는 jsp 파일은, 다음과 같은 변수들을 선언해두어야 함.

- 변수 필요하지 않음
--%>

<%-- 제목만큼의 공백 할당 --%>
<div class="margin-bottom">
    <span class="large-text">&nbsp;</span>
</div>

<div class="margin-bottom-large">
    <p class="margin-bottom">
        만료 이전 청원 <span id="allNotExpiredPostCount"></span> 중, <a href="#" class="bold-text is-purple keywordTop1"></a> 
        관련 청원은 총 <span class="bold-text" id="keywordNotExpiredPostCount"></span>이었으며, 
        각 청원의 동의 수를 합치면 총 <span class="bold-text" id="keywordNotExpiredAgreeSum"></span> 입니다.
    </p>
    <p>
        여러 <a href="#" class="bold-text is-purple keywordTop1"></a> 관련 청원들 중 
        가장 많은 동의를 받은 의견은 다음과 같은 내용이었습니다.
    </p>
</div>

<div class="has-text-centered is-grey">
    <span>❝</span><br/>
    여기에 문서를 요약한 결과가 들어갑니다! 문서를 약 3줄 정도로 요약할 생각입니다. 

    요약 된 내용을 통해 국민들의 의견이 어떤지 빠르게 확인할 수 있을 것으로 기대됩니다.
    <br/><span>❞</span>
</div>