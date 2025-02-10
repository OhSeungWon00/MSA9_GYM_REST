# 🏋️ **프로젝트 : 핏넥서스(REACT + REST API 전환 프로젝트)**

![jsp메인](https://chestnut-blinker-ca6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8cd794c0-c633-4008-b289-af6deeea8c4d%2Ffe1fbb5b-4dc0-461a-96a4-bcdabb325a44%2Fimage.png?table=block&id=169902bd-b12f-80eb-b7b9-cd98b3b4679a&spaceId=8cd794c0-c633-4008-b289-af6deeea8c4d&width=1420&userId=&cache=v2)


---

# :gear: 1. **프로젝트 요약**

### :bulb: 프로젝트 인원                 
- 5명                             

### :bulb: 프로젝트 기간
- 2025-01-13 ~ 2024-01-22

### :bulb: 변경내용
### **✅** React를 활용하여 MVC 패턴에서 REST API 패턴으로 전환

### **✅** 클라이언트-서버를 분리

### **✅** 데이터를 템플릿에 등록해 서버에서 View를 렌더링하여 반환하는 방식에서, 데이터(JSON 등)만 반환하고 클라이언트가 해당 데이터를 사용하여 화면을 동적으로 구성하는 방식으로 전환

### **✅** Spring Security를 사용한 세션 기반 인증 방식에서 jwt 기반 무상태 인증 방식으로 전환하여 로그인 기능 구현

---

### :bulb: 사용 기술
<p>프론트엔드</p>
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
</p>
<p>백엔드</p>
<p>
  <img src="https://img.shields.io/badge/REST%20API-0052CC?style=flat-square&logo=apachesolr&logoColor=white">  
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black">  
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"> 
  <img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white">
  <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white">
</p>
<p>데이터베이스</p>
<p>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/MyBatis-000000?style=flat-square&logo=databricks&logoColor=white">
</p>
<p>기타</p>
<p>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white">
</p>

---

# 🔧 기존 프로젝트와 차이점


- 프론트엔드 차이점
    - Spring Boot 를 활용한 지난번 프로젝트에서는 thymeleaf 를 활용해서 model에서 데이터를 가져와서 동적으로 페이지를 구현 했습니다.
    - React 를 활용한 이번 프로젝트에서는 Axios 를 활용해서 비동기적으로 데이터를 요청해서 얻은 결과 값을 State에 등록하여 동적으로 페이지를 구현 했습니다.
    
- 백엔드 차이점
    - Spring Boot 를 활용한 지난번 프로젝트에서는 GET방식이나 POST 방식으로 데이터를 서버에 보내면 Controller에서 Model에 데이터를 담아서 페이지를 리턴하여 서버 사이드 렌더링을 구현 했습니다.
    - React 를 활용한 이번 프로젝트에서는 RESTApi 방식으로 데이터를 서버에 보내면 데이터를 JSON형태로 반환해서 클라이언트 사이드 렌더링을 구현 했습니다.
    
- 지난번 프로젝트에서는 인증과 권한 관리를 사용자가 로그인을 시도하면 세션에 저장된 사용자 정보와 일치하는 정보를 확인해서 인증을 했습니다.

- 이번 프로젝트에서는 인증과 권한 관리를 사용자가 로그인을 하면 JWT 토큰을 사용자에게 발급하여 사용자는 JWT토큰을 쿠키에 저장하고 매번 요청에 JWT토큰을 포함해서 요청합니다. 그러면 서버에서는 필터를 통해서 JWT토큰이 있는지 확인하여 요청하는 데이터를 응답해줍니다.

<summary><h2>🛠️ <strong>개발 환경</strong></h2></summary>
  
  
  ![개발 환경 이미지](https://chestnut-blinker-ca6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8cd794c0-c633-4008-b289-af6deeea8c4d%2Fa15b7295-4884-4d79-a760-47e8a23443c3%2Fimage.png?table=block&id=169902bd-b12f-8054-9a60-fc844af24385&spaceId=8cd794c0-c633-4008-b289-af6deeea8c4d&width=1090&userId=&cache=v2)



---


<summary><h2>📑 <strong>요구사항 정의서</strong></h2></summary>
  
   ![image](https://github.com/user-attachments/assets/6628cdef-0e84-469a-9f1a-c7409b145b70)



---


<summary><h2>🗒️ <strong>기능 정의서</strong></h2></summary>
  
  - 사용자(유저) 기능 정의서
 
    ![image](https://github.com/user-attachments/assets/36f473e1-be4c-412c-aa74-a4ae4850f6ea)  
  - 관리자 기능 정의서

    ![image](https://github.com/user-attachments/assets/6e0eef6f-38a4-46fc-9309-9233e7c01a9a)


---


<summary><h2>🗂️ <strong>ERD</strong></h2></summary>
  
  ![ERD 이미지](https://chestnut-blinker-ca6.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F8cd794c0-c633-4008-b289-af6deeea8c4d%2F2317d53d-12bb-40e1-bf7e-43a3f29dda8a%2Fimage.png?table=block&id=16b902bd-b12f-8032-8568-e03391399423&spaceId=8cd794c0-c633-4008-b289-af6deeea8c4d&width=1920&userId=&cache=v2)



---

<details>
  <summary><h2>📃 <strong>테이블 정의서</strong></h2></summary>

  **users**  
  ![파일 1](https://drive.google.com/uc?export=view&id=1uIkf6OmogJD5af0uHBwp7YV3TTbpH3VZ)

  **user_auth**  
  ![파일 2](https://drive.google.com/uc?export=view&id=1jN24i-GWXzEaQF1ihnPVtD_BxswsBx_r)

  **trainer_profile**  
  ![파일 3](https://drive.google.com/uc?export=view&id=1TPs7lZxuO-pEYjJHMdNwJWV61aEUtdf9)

  **ticket**  
  ![파일 4](https://drive.google.com/uc?export=view&id=1scpM-FcbpngM4dxbmNXPtbgUdVckzusZ)

  **reservation**  
  ![파일 5](https://drive.google.com/uc?export=view&id=1xvzmCFNDani9r9_2bwRL4lEzRCZBXmIN)

  **qr_code**  
  ![파일 6](https://drive.google.com/uc?export=view&id=18iWrwLE9zu-smJXRqkG0e2l2ZFN8uTqI)

  **plan**  
  ![파일 7](https://drive.google.com/uc?export=view&id=1b2RnAr5tEDigonnXHQxR9BaWqA42da09)

  **persistent_logins**  
  ![파일 8](https://drive.google.com/uc?export=view&id=18N74mHKPW_teWLFvMnrmO_g9BT7kMB_X)

  **file**  
  ![파일 9](https://drive.google.com/uc?export=view&id=1LZ9m864zA8lH-9QELMlB3eMvwYrSozVY)

  **comment**  
  ![파일 10](https://drive.google.com/uc?export=view&id=1XMzew_jB9ZQr48ADICPEvtZIUg27Fw4E)

  **buy_list**  
  ![파일 11](https://drive.google.com/uc?export=view&id=1jBHzorTvyaTU4mbavzbr8hU-AmjM0GAV)

  **board**  
  ![파일 12](https://drive.google.com/uc?export=view&id=1EttYQgue7v7_pV5ST8ZMe9LE25uHIALg)

  **attendance**  
  ![파일 13](https://drive.google.com/uc?export=view&id=1XhCdlUg7401eCwPyEmInVpV7fgyPHMJJ)

  **answer**  
  ![파일 14](https://drive.google.com/uc?export=view&id=1ecTX_u14K37SFcFf8VHYahDJGN8yru5g)

</details>                                                                                                                    

---
&nbsp;
# 📊 **화면 설계서**

<details>
  <summary><h3>🖥️ <strong>메인</strong></h3></summary>
  
  - ![메인 화면 1](https://drive.google.com/uc?id=1yh6VjIbCeInYo-_KqQyW2vTEP7gnNA-F)
  - ![메인 화면 2](https://drive.google.com/uc?id=1hEVSpboUQm9o5r213w3gJHWvmnzdczJ_)  
  
</details>




<details>
  <summary>👨‍💻<h3><strong>사용자</strong></h3></summary>
  
   ![사용자 화면 1](https://drive.google.com/uc?id=1O1BXu6WmtA2OyEG3nG2A9kEhjSuktFGa)  
   ![사용자 화면 2](https://drive.google.com/uc?id=1HJqOBN6oXwjIMtY-maCrsDgMHhYoI_E1)  
   ![사용자 화면 3](https://drive.google.com/uc?id=15bSdEFbeBru9B1uCSQVIPwmcM86crBPu)  
   ![사용자 화면 4](https://drive.google.com/uc?id=15c2rdAMuEmnWuePVZUbLWwCZBsyvlZTl)  
   ![사용자 화면 5](https://drive.google.com/uc?id=1clm5jBjPY96qctQZUH6FusEwS1XF_cHT)  
   ![사용자 화면 6](https://drive.google.com/uc?id=11ZOWSOEmw6deB-CA1sTSIDZ6xsCcjL77)  
   ![사용자 화면 7](https://drive.google.com/uc?id=1Royy_rLz6QXJB7fCIqL4phCMQf1iRFjD)  
   ![사용자 화면 8](https://drive.google.com/uc?id=1voKvWLdAeKPpy0MxVfqQbo-lr9iK-NYh)  
   ![사용자 화면 9](https://drive.google.com/uc?id=1pt-fA0FSDrgToliYUJ8xpbSVUdvPyIwF)  
   ![사용자 화면 10](https://drive.google.com/uc?id=1kB_HyRvQ0BACRceCA-hcf0pYr74aKniw)  
   ![사용자 화면 11](https://drive.google.com/uc?id=1J5M1lapb-Zpg_E1OkDHWdL9Plm1JYlzR)  
   ![사용자 화면 12](https://drive.google.com/uc?id=11kg9Bni5id0ywQ9KNXb1lOTtjZhgNCeO)  
  
</details>





<details>
    <summary><h3>🛒구매</h3></summary>
  
   ![구매 화면 1](https://drive.google.com/uc?id=1NzWO2TYP_oB4soSpc6yet-DMpefrdqVf)  
   ![구매 화면 2](https://drive.google.com/uc?id=1ihFTmX9HV5qs5a4d7FoaquHDbkcHL9Di)  
   ![구매 화면 3](https://drive.google.com/uc?id=1QVO1rzbdXg5uWn4FMdSMjCtzTKhf2phd)  
   ![구매 화면 4](https://drive.google.com/uc?id=14vNoq2OgDvmC8L0wHo2WecZ7hS5CZwuA)  
   ![구매 화면 5](https://drive.google.com/uc?id=1SrJGinIcJ_SrdQyjRskCUQgbP-vK7HyB)  
   ![구매 화면 6](https://drive.google.com/uc?id=1tWKuvCN7vdryQ_Lwj9x6QKPOACXOy5Hz)  
  
</details>



<details>
   <summary><h3>📝게시판</h3></summary>

  ![게시판 화면 1](https://drive.google.com/uc?id=1uO0LOAOjzWHgF0A5mxLrnHFIxeSXTS-9)  
  ![게시판 화면 2](https://drive.google.com/uc?id=1_kohsYXQ57KAEgcDht8_iUcm63uxQSvD)  
  ![게시판 화면 3](https://drive.google.com/uc?id=1JjJ9nTbHnipXefpZvB7IYKcC4SsOKw-m)  
  ![게시판 화면 4](https://drive.google.com/uc?id=1YqUDhQAAMJrfPLT2eddZouSxMJF62Z61)

</details>






<details>
  <summary><h3>🗓️운동계획표</h3></summary>

  ![운동계획표 화면](https://drive.google.com/uc?id=1i_Eu3jcmxAmLOztfJIER5MolzlshGXSJ)

</details>





<details>
  <summary><h3>🛠️<strong>관리자</strong></h3></summary>

  ![화면1](https://drive.google.com/uc?id=153Nywa1Jwo9pR3tkO9ioTGSDTAjWeT6f)  
  ![화면2](https://drive.google.com/uc?id=12fL2jq4lFESM7zK8d5Zrg0GUFNjCJKbM)  
  ![화면3](https://drive.google.com/uc?id=1Gr429NeFAUKxSkFhZn2vBj38eF-37mfd)  
  ![화면4](https://drive.google.com/uc?id=1-97K9z_EKkNg4AxKiVI7m63kUGmqIobD)  
  ![화면5](https://drive.google.com/uc?id=18MjR2CW3hBDcwUfaGe45ra_Jp66-dEm_)  
  ![화면6](https://drive.google.com/uc?id=1VJ-BciCK5u3FcUxIJy1KYCUXX2P_41eB)  
  ![화면7](https://drive.google.com/uc?id=1uuxEzLK7scoeSVOShpmy3J3yuJ63NRi1)  
  ![화면8](https://drive.google.com/uc?id=1VGsfryN3tQ96wbblTjeKhs9IyLZTEGRg)  
  ![화면9](https://drive.google.com/uc?id=1dfZvqbG9ueTYVmzVRbyAmXvDNHe_Joyp)  
  ![화면10](https://drive.google.com/uc?id=1dUwCd3wUYsj_5ndBZNVifgXOH5LdjWqv)  
  ![화면11](https://drive.google.com/uc?id=1m9Gcwv_4PrH3krgpaQk-5UaEqvrs6-Fc)  
  ![화면12](https://drive.google.com/uc?id=1NL6cHICa1-psjZ-YmkLcv9Pb9tI_RtKb)  
  ![화면13](https://drive.google.com/uc?id=1tNXqpTcewchG1zuWEIylpeuXeGjOVsxB)  

</details>



---
&nbsp;

# ✨📊 **실제 화면**

<details>
  <summary><h3>🖥️ <strong>메인</strong></h3></summary>
    
  ![메인 화면 1](https://drive.google.com/uc?id=1Uc68G_fKXEXpbpQwmw_ehMtj28TQcP8E)
  ![메인 화면 2](https://drive.google.com/uc?id=1Uo2AOU0S0dM2wE4NOvHmBgi7-4WmaeVt)
  ![메인 화면 3](https://drive.google.com/uc?id=1hSRDulnuxRf6r9kk7ylSZxzFKHRB786z)
  ![메인 화면 4](https://drive.google.com/uc?id=1Up9a7utmk008C51bCwTNk0_pb48Jv1id)
  
</details>

---

<details>
  <summary><h3>👨‍💻 <strong>사용자</strong></h3></summary>
    
  ![사용자 화면 1](https://drive.google.com/uc?id=1Vns8UHr9Czb7mCp0oRkMvdlziCZicLsb)
  ![사용자 화면 2](https://drive.google.com/uc?id=1gKsHrmqugAXwskpHHzOj2QhOeXQhdDNS)
  ![사용자 화면 3](https://drive.google.com/uc?id=1hTpezJdzQLhH3LDQCH-kPDpb6x81u74a)
  ![사용자 화면 4](https://drive.google.com/uc?id=1-AcOC5ooqzOqnshUxfqrcAs0YUFyUmvD)
  ![사용자 화면 5](https://drive.google.com/uc?id=1ja-sOvZ2j7p15DMnEtXviqiN_18NJiFO)
  ![사용자 화면 6](https://drive.google.com/uc?id=1rLu826EyHDDes2J4IM-6gAtZn4Cc6fnO)
  ![사용자 화면 7](https://drive.google.com/uc?id=121WbRNX12d6LvIDWxccaLHhtfDm-Uls_)
  ![사용자 화면 8](https://drive.google.com/uc?id=15MMalJR4fd_4Sw1fhrwTd9Slbw16W2Nb)
  ![사용자 화면 9](https://drive.google.com/uc?id=1uQtkwajZWYumxgvRC3jHBNLXscEqlHeo)
  ![사용자 화면 10](https://drive.google.com/uc?id=1ZvEBl78uv1MwJyduIHh-0K1Vk6SXxbLd)
  ![사용자 화면 11](https://drive.google.com/uc?id=1mtO7EgM51fYJFiVh_QgKi_wR7rVK3xrM)
  ![사용자 화면 12](https://drive.google.com/uc?id=1gI3UU8nHksHzgKc-NwUHKV531sbQYdz4)

</details>

---

<details>
  <summary><h3>🛒 <strong>구매</strong></h3></summary>
    
  ![구매 화면 1](https://drive.google.com/uc?export=view&id=1mfs0TBP-93EDxgPWtjHDm4CnJVeJubfB)
  ![구매 화면 2](https://drive.google.com/uc?export=view&id=18RUIJA9hgrSM4asnp4GHeVSeJUM5nU2U)
  ![구매 화면 3](https://drive.google.com/uc?export=view&id=1O1zKaSeBCMyvTAML6RTrIiW_SLpC9a0Z) 
  ![구매 화면 4](https://drive.google.com/uc?export=view&id=1Vg5ufkETUEam0LcLRuNLrD_yTwCPGmRk)
  ![구매 화면 5](https://drive.google.com/uc?export=view&id=1e2nNdmhYeJwS6UnuKpsi71-YPCO8GnGT)
</details>


---

<details>
 <summary><h3>📝 <strong>게시판</strong></h3></summary>
    
  ![게시판 화면 1](https://drive.google.com/uc?id=1lhLfroTuvEUKkrS40B0SRMAAIXFGQDxh)
  ![게시판 화면 2](https://drive.google.com/uc?id=1w7vIgGkxcYcaTNVFk99gEY_SWYGc5Cb_)
</details>

---

<details>
  <summary><h3>🗓️ <strong>운동계획표</strong></h3></summary>
    
  ![운동계획표 화면](https://drive.google.com/uc?id=1sO1FP1Lua8ykdPyNZTe1AYWVymS02IGD)
</details>

---

<details>
  - <summary><h3>🛠️ <strong>관리자</strong></h3></summary>
    
  ![관리자 화면 1](https://drive.google.com/uc?id=1B8LTUYdehlfvMRUd_AXhCsrNtRSCAxP0)
  ![관리자 화면 2](https://drive.google.com/uc?id=11yqmvEDOs5DemuaqLkJ0RhJ-JkmdvOAx)
  ![관리자 화면 3](https://drive.google.com/uc?id=1gcoGjZpWV_wkz-ICyLhzw0Y9tHmcPOeP)
  ![관리자 화면 4](https://drive.google.com/uc?id=1wtZrhqDV9H6h6NplAFcTzQ8YPuzwYTKl)
  ![관리자 화면 5](https://drive.google.com/uc?id=1773uAE71llv-bJMFk-D1brLXNzU6U_ez)
  ![관리자 화면 6](https://drive.google.com/uc?id=1pjCkvkHeufRn-x5q0Bw39DPuT_83-0yX)
  ![관리자 화면 7](https://drive.google.com/uc?id=1gRzloprNVjySX3Ec0ZQm-fFzWgoKt9N8)
  ![관리자 화면 8](https://drive.google.com/uc?id=14XyRjNqg1T7f7kY1ZfO8JKdwCuqIGOdj)
  ![관리자 화면 9](https://drive.google.com/uc?id=1Dfd6QNfg9ZojGtGAkNB9r0D4V3bkWBTN)
  ![관리자 화면 10](https://drive.google.com/uc?id=1JhYmLXcIyMLIJhVfyU7UqtgbpuYWDFan)
  ![관리자 화면 11](https://drive.google.com/uc?id=1IKwCA9CU7cHNaaULMDOWbQ2KHbLP3AiX)
</details>



---

<h2>🌟<strong>프로젝트 소감</strong></h2>

이용권 내역 조회부터 결제까지의 모든 과정을 하나의 흐름으로 연결하는 것이 Spring Boot에서는 어려웠습니다. 특히, 여러 페이지 간 데이터를 넘겨주는 과정이 복잡하게 느껴졌습니다. 하지만 React에서는 Context를 활용할 수 있어, 데이터를 한 번 등록하면 원하는 페이지에서 쉽게 꺼내거나 추가할 수 있어 데이터 이동이 훨씬 간편했습니다.

또한, React에서는 State에 등록된 값이 변경될 때마다 페이지가 자동으로 다시 렌더링됩니다. 이로 인해 원하는 시점에만 렌더링되도록 제어하는 것이 처음에는 어려웠습니다. 하지만 프로젝트를 진행하면서 각 페이지에서 어떤 값을 State에 등록해야 하는지에 대한 감을 잡게 되었고, 이를 통해 React의 동작 방식과 활용법을 보다 깊이 이해할 수 있는 좋은 경험이 되었습니다.
  





