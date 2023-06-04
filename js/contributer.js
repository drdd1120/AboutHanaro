window.addEventListener('scroll', function() {
    var intros = document.querySelectorAll('.wrapper');

    for (var i = 0; i < intros.length; i++) {
        var intro = intros[i]; 
        var introOffset = intro.offsetTop; // 요소의 y값
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        // 스크롤 했을 때 스크린 위치와 요소의 y값의 차이 조절 -> 투명도 반영
        var opacity = 0.5 + ((scrollPosition - introOffset + 200) / 300);
        opacity = Math.min(Math.max(opacity, 0), 1);

        intro.style.opacity = opacity.toString();  // 적용
    }
});