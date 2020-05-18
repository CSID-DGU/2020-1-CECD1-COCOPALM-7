# 메모장


- **2020.05.18**

>**Lombok**  
>
>Maven으로 Lombok을 다운로드 했지만, 사용하기 위해서는 **Lombok의 jar 파일을 실행**해, 사용할 **IDE를 지정**해주어야 IDE에서 개발할 수 있었음.

>**application.properties 파일 수정**
>
>Controller에서 jsp 파일을 파일명만으로 불러오기 위해 수정하였음.

>**tomcat-embed-jasper, jstl**
>
>Spring boot에 내장된 톰캣은 JSP 엔진이 없는 것으로 보임. application.properties 수정으로 경로는 잘 찾지만, 보여주지 못했음. 따라서 JSP 엔진인 Jasper와 JSP Standard Tag Library 설치함.

---

## STS4

**Spring Tools 4 (4.6.0 Release)**는 Spring 기반 엔터프라이즈 애플리케이션 개발을 위한 지원을 제공한다.

### 설치 과정 (Windows)

[https://spring.io/tools](https://spring.io/tools)에서 **WINDOWS 64-BIT**를 선택하면, 압축 파일을 다운로드 한다.
다운로드 한 파일을 압축 해제하면, **contents**라는 이름의 압축 파일이 나타난다. 이 파일을 압축 해제하고 압축 해제된 파일을 컴퓨터 내 원하는 위치에 복사한 후 **SpringToolSuite4**라는 이름의 응용프로그램을 실행해 사용하면 된다.

요약하면,

> 1. 다운로드 받은 파일 압축 해제
> 2. **contents**라는 이름의 압축 파일의 압축 해제
> 3. 압축 해제로 나타난 폴더를 원하는 위치에 복사
> 4. **SpringToolSuite4** 라는 이름의 응용프로그램을 실행

---

## MySQL

데이터베이스로는 가장 유명한 오픈 소스 데이터베이스인 **MySQL (8.0.19)** 을 선 택했다.

### 설치 과정 (Windows)

[https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)에 방문해서 "Windows (x86, 32-bit), MSI Installer / 8.0.19 / 398.9M"를 선택해 다운로드 한다. (시간이 꽤 걸린다.😑)

MSI Installer를 실행시켜 설치를 진행한다. 이때, **Choosing a Setup Type** 에서 Custom으로 필요한 것만 설치해도 되겠지만, 혹시 모를 상황에 대비해 **Developer Default**를 선택한다.

**Check Requirements**에서 사전 설치가 필요한 항목들을 보여주는데, **Execute**를 눌러 설치해준다. 사전 설치가 필요한 것 중에서 파이썬의 경우 수동으로 설치를 해주어야 한다. 파이썬의 버전은 **Connector/Python**이 요구하는 **3.7**로 한다. Python Installer(64비트의 경우, **Windows x86-64 executable installer**)를 통해 설치할 때 PATH 추가를 선택하면 편하다. 👏

Requirements의 설치가 끝나면 본격적으로 설치를 한다. 설치 후 MySQL Server를 구성하는 단계가 나타난다.

> - High Availability (기본 설정 그대로) : Standalone MySQL Server...
> - Type and Networking (기본 설정 그대로)
>   - Config Type : Development Computer
>   - Connectivity : TCP/IP, 3306 Port, 33060 X Protocol Port, Open Windows Firewall ports for network access
> - Authentication Method (기본 설정 그대로) : Use Strong...
> - Accounts and Roles : 비밀번호 입력 (상관 없음), User Accounts 추가하지 않음
> - Windows Service (기본 설정 그대로) : name의 경우 편한 것으로

MySQL Router 구성의 경우 바로 Finish를 눌러 끝낸다.

Samples and Examples 구성의 경우 비밀번호를 입력해 연결을 시도해본다.