var container = document.querySelector('.multiple_section'),
    team = document.querySelector('.new_team'),
    teamSlides = document.querySelector('.team-list'),
    team_count = document.querySelectorAll('.new_team'),
    currentIdx = 0,
    slideCount = team_count.length,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');
    teamWidth = team.clientWidth;

    function moveSlide(num){
        teamSlides.style.left = (-num)*container.clientWidth+ 'px';
        currentIdx=num;
    }
    nextBtn.addEventListener('click',function(){
        console.log("다음 눌림")
        if(currentIdx<slideCount-1){
            moveSlide(currentIdx+1);
            console.log(currentIdx)
        }else{
            moveSlide(0);
        }
    });
    prevBtn.addEventListener('click',function(){
        console.log("이전 눌림")
        if(currentIdx>0){
            moveSlide(currentIdx-1);
            console.log(currentIdx)
        }else{
            moveSlide(slideCount-1);
            console.log(currentIdx)
        }
    });
    window.addEventListener('resize', function() {
        teamWidth = container.clientWidth;
        moveSlide(currentIdx);
      });

window.addEventListener('scroll', arrowScrollEvent);

function arrowScrollEvent() {
    const scrollPosition = window.scrollY;
    const arrowBox = document.querySelector('.arrow_box');
    const scrollThreshold = window.innerHeight * 0.05;

    if (scrollPosition <= scrollThreshold) {
    arrowBox.style.position = 'absolute';
    arrowBox.style.top = `${scrollPosition}px`;
    }
}
window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var viewportHeight = window.innerHeight;
  
    if (scrollPosition > 0.3 * viewportHeight) {
      //                       ^^^
      //                      전체 화면의 70퍼센트ㄴ
      document.body.classList.add("scroll-background");
    } else {
      document.body.classList.remove("scroll-background");
    }
  });
  
