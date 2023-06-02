// 스크롤시 배경화면이 바뀌는 함수
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var viewportHeight = window.innerHeight;

  if (scrollPosition > 0.7 * viewportHeight) {
    //                       ^^^
    //                      전체 화면의 70퍼센트
    document.body.classList.add("scroll-background");
    // document.getElementById("yourElementId").style.backgroundColor = "red";
  } else {
    document.body.classList.remove("scroll-background");
    // document.getElementById("yourElementId").style.backgroundColor = "initial";
  }
});