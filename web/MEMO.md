# 메모장

> **JSoup 추가**
>
> `pom.xml`에 JSoup 추가 하였음
> 클래스를 찾을 수 없다는 에러 발생 시
> [JSoup 에러 해결 방법](https://cublip.tistory.com/318) 참고

> **MyBatis 추가**
>
> `pom.xml`에 MyBatis와 MySQL Connector 추가
> `application.properties`에 관련 설정
>
> - 매핑 파일 경로 설정
> - 모델 경로 설정
>
> **Pull 이후 MySQL 경로 설정 & Github에는 url, username, password 가릴 것**

> **UTF-8 설정**
>
> `application.properties`에 **UTF-8** 관련 설정
>
> - `jdbc:mysql://서버:MYSQL포트/스키마명?useUnicode=true&characterEncoding=utf8`
> - 스프링 및 http encoding

> **모델, 서비스, 매퍼 추가**
>
> 현재 생성되어 있는 테이블들만 테스트 용 함수 추가
>
> - category
> - category_post_count
> - post
> - keyword
> - post_keyword
>
> `...Mapper.xml` 파일들의 경우
> `...Mapper.java` 파일에서 함수의 매개변수인 모델을 사용하거나 변수 사용
>
> - ex) Post => Post 멤버 변수 `#{post_id} / #{title} / ...`
> - ex) @param("쿼리에서 사용할 변수명") 어노테이션 => `#{쿼리에서 사용할 변수명}`
> - => `SELECT ... FROM ... WHERE post_id = #{post_id}`

---

> **CSS 추가**
>
> `page-common.css` 에 몇 가지 추가함.
>
> - 색 지정
>   - `is-purple` & `is-grey`
> - 폰트 지정
>   - `bold-text` : 굵은 글씨
>   - 폰트 크기
>     - `xlarge-text`, `large-text`, `small-text`
> - 버튼 (button은 Bulma의 CSS)
>   - `class="button is-purple"` : 보라색 버튼
>   - `class="button is-purple is-out-lined"` : 보라색 테두리, 하얀 바탕 버튼
> - 하단 margin
>   - `margin-bottom-small`, `margin-bottom`, `margin-bottom-large`
> - 가로로 일렬로 나열
>   - `in-a-row`

> **View의 디렉토리 구조 변경**
>
> 기존에 개별적으로 `webapp/WEB-INF/views`에 존재했던 View 파일들을, **각각 폴더** 를 가지도록 변경하고, **index.jsp** 라는 이름으로 변경하였음. 폴더 내에서 Column 단위로 개발하여, index.jsp에 `<%@ include file="Column파일.jsp" %>` 로 포함하는 구조.

> **Controller 코드 수정**
>
> View의 디렉토리 구조를 변경하면서, Controller에서도 `"폴더명/index"`를 반환하도록 함

> **include 디렉티브**
>
> JSP에 include 하는 방법 중에 `<%@ include file=".." %>` 을 이용하도록 변경하였음. 예를 들어, **index.jsp** 에 **A.jsp** 를 포함시키려 한다면, **index.jsp** 에서 선언한 변수를 **A.jsp** 에서 **따로 선언하거나 받아오는 작업 없이 사용** 할 수 있음.

> **billboard.js 렌더링**
>
> billboard.js를 사용하여 그래프를 생성하고 테스트 할 때, **크롬 및 아이폰 Safari에서는** 다른 설정 없이도 **문제없이 작동** 하였다. 하지만 **크롬-개발자 도구-아이폰** 환경에서는 **범위를 넘어 렌더링** 되는 문제가 발생함. 다른 HTML 요소들이 자리를 완벽히 잡기 전에 렌더링 되어 발생하는 문제로 보임. 개발자 도구 특유의 렌더링 방식 때문에 그런 것 같으니 **신경쓰지 않아도 될 것** 같다.

---

> **Lombok**
>
> Maven으로 Lombok을 다운로드 했지만, 사용하기 위해서는 **Lombok의 jar 파일을 실행**해, 사용할 **IDE를 지정**해주어야 IDE에서 개발할 수 있었음.

> **application.properties 파일 수정**
>
> Controller에서 jsp 파일을 파일명만으로 불러오기 위해 수정하였음.

> **tomcat-embed-jasper, jstl**
>
> Spring boot에 내장된 톰캣은 JSP 엔진이 없는 것으로 보임. application.properties 수정으로 경로는 잘 찾지만, 보여주지 못했음. 따라서 JSP 엔진인 Jasper와 JSP Standard Tag Library 설치함.
