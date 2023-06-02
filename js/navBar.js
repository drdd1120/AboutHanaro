// window.onload = function() {
//     const toggleBtn = document.querySelector('.navbar__toggleBtn');
//     const menu = document.querySelector('.navbar__menu');
//     // const icons = document.querySelector('.navbar__icons');

//     toggleBtn.addEventListener('click', () =>{
//         menu.classList.toggle('active');
//         // icons.classList.toggle('active');
//     });
// }

// $(document).ready(function() {
//     $('.navbar__toggleBtn').click(function() {
//       $('.navbar__menu').toggleClass('active');
//     });
// });


var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.onload = function() {
  // 제이쿼리 로드 완료 후 실행할 코드 작성
$(document).ready(function() {
    $('.navbar__toggleBtn').click(function() {
        $('.navbar__menu').toggleClass('active');
    });
});
};
document.head.appendChild(script);