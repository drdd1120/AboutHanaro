// 스크롤시 배경화면이 바뀌는 함수
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;

  if (scrollPosition > 0.7 * viewportHeight) {
    //                       ^^^
    //                      전체 화면의 70퍼센트ㄴ
    document.body.classList.add("scroll-background");
  } else {
    document.body.classList.remove("scroll-background");
  }
});



// Intersection Observer 콜백 함수
const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 해당 div 요소가 화면에 보이기 시작하면 텍스트 색상을 검정색으로 변경
        entry.target.style.color = "black";
        // Intersection Observer 관찰 중지
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Intersection Observer 설정
  const options = {
    root: null, // viewport를 루트로 설정
    rootMargin: "0px", // 루트 영역에 대한 여유 공간
    threshold: 0.5, // 50% 이상이 보이면 콜백 함수 호출
  };
  
  // Intersection Observer 생성
  const observer = new IntersectionObserver(intersectionCallback, options);
  
  // 관찰할 대상 요소 선택
  const targetElement = document.querySelector(".text-wrap");
  
  // 관찰 시작
  observer.observe(targetElement);
  