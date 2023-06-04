<h1 align="middle">AboutHanro</h1>
**디지털하나로 첫번째 팀 프로젝트_정적 웹 페이지**

## 💬 페이지 소개

`AboutHanaro`는 디지털 하나로 과정 수료생 및 수강생, 예비 수강생 분들을 위한 반응형 웹 페이지 입니다.

 `AboutHanaro`에서 자신의 포트폴리오를 홍보하고 수료 후기를 남길 수 있습니다. 

`수료생`분들에게는 자기 PR의 기회를 , `수강생` 분들에게는 좋은 길잡이를, `디지털하나로 n기` 분들에게는 양질의 정보를 얻을 수 있을거에요 😎✨

## 🥰 멤버

| 메인페이지, NavBar | 과정 소개 페이지 | 팀원 소개 페이지| 고마우신분들 페이지| 하나은행 소개 페이지|
| --- | --- | --- |---|---|
| [정재헌](https://github.com/drdd1120) | [한성훈](https://github.com/seonghunhan) | [최안식](https://github.com/Ansix1207) | [황영하](https://github.com/HwangYoungHa) | [차성산](https://github.com/vaqueni)|

## ⚙️ 기술스택

### 🧷 프론트엔드

<div align="middle">

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=black">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

  
**Language |** Javascript

**Library |**  Axios, Wallop

  
</div>

### 🧷 인프라

<div align="middle">

<img src="https://img.shields.io/badge/AWS EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-4479A1?style=for-the-badge&logo=github&logoColor=white">
  


**Server |** Git, AWS
  
</div>

<div>
### Folder Structure
- `src`: 메인 로직 
- `config` 및 `util` 폴더: 메인 로직은 아니지만 `src` 에서 필요한 부차적인 파일들을 모아놓은 폴더
- 도메인 폴더 구조
> Route - Controller - Provider/Service - DAO

- Route: Request에서 보낸 라우팅 처리
- Controller: Request를 처리하고 Response 해주는 곳. (Provider/Service에 넘겨주고 다시 받아온 결과값을 형식화), 형식적 Validation
- Provider/Service: 비즈니스 로직 처리, 의미적 Validation
- DAO: Data Access Object의 줄임말. Query가 작성되어 있는 곳. 
 
### Node.js (패키지매니저 = npm)
> Request(시작) / Response(끝)  ⇄ Router (*Route.js) ⇄ Controller (*Controller.js) ⇄ Service (CUD) / Provider (R) ⇄ DAO (DB)


```
├── config                              #
│   ├── baseResponseStatus.js           # Response 시의 Status들을 모아 놓은 곳. 
│   ├── database.js                     # 데이터베이스 관련 설정
│   ├── express.js                      # express Framework 설정 파일
│   ├── jwtMiddleware.js                # jwt 관련 미들웨어 파일
│   ├── secret.js                       # 서버 key 값들 
│   └── winston.js                      # logger 라이브러리 설정
├── * log                               # 생성된 로그 폴더
├── * node_modules                    	# 외부 라이브러리 폴더 (package.json 의 dependencies)
├── src                     			# 
│   ├── app              				# 앱에 대한 코드 작성
│   │   ├── User            			# User 도메인 폴더
│   │ 	│   ├── userRoute.js          	# routing 처리 
│   │ 	│   ├── userDao.js          	# User 관련 데이터베이스
│   │ 	│   ├── userController.js 		# req, res 처리
│   │ 	│   ├── userProvider.js   		# R에 해당하는 서버 로직 처리
│   │ 	│   └── userService.js   		# CUD에 해당하는 서버 로직 처리  
Create(생성), Read(읽기), Update(갱신), Delete(삭제) 
├── .gitignore                     		# git 에 포함되지 않아야 하는 폴더, 파일들을 작성 해놓는 곳
├── index.js                            # 포트 설정 및 시작 파일                     		
├── * package-lock.json              	 
├── package.json                        # 프로그램 이름, 버전, 필요한 모듈 등 노드 프로그램의 정보를 기술
└── README.md
```
</div>

## 화면구성

### 1. 메인 페이지
AboutHanro 진입시 가장 먼저 보이는 화면입니다. 
디지털 하나로의 가장 큰 특징을 보여주는 문구들을 캐로셀 안에 배치하고 버튼을 통해 직접 움직일 수 있으며, 버튼을 클릭하지 않아도 자동으로 다음 문구로 넘어가집니다.

메인 화면의 상단에 위치한 NavBar를 통해서 다른 페이지로 진입할 수 있으며 가장 왼쪽으로 `AboutHanaro` 문구를 클릭하여 메인 화면으로 돌아올수 있습니다.


<-- 메인 페이지 사진 삽입 예정 --->

### 2. 과정소개 페이지
디지털 하나로의 목적과 특전을 제공하여 홍보하고 참여하고싶게 만드는 페이지 입니다. 

케로젤을 사용하여 과정 중 가장 핵심이라고 할 수 있는 키워드 3개를 제시하고 있습니다.
주최사와 주관 교육사 교육장소의 정보를 제공합니다.

<-- 과정소개 페이지 사진 삽입 예정 --->


### 3. 팀원소개 페이지
<-- 팀원소개 페이지 사진 삽입 예정 --->


### 4.고마우신분들 페이지


<--고마우신분들 페이지 사진 삽입 예정-->

### 5.하나은행소개 페이지


<--하나은행 소개 페이지 사진 삽입 예정-->ㅍ
