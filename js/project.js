//미니프로젝트 github
document.getElementById('btn_mini_github').addEventListener('click', function() {
    window.open('https://github.com/jindamgom/mini_3XX', '_blank');
});
//세미프로젝트 github
document.getElementById('btn_semi_github').addEventListener('click', function() {
    window.open('https://github.com/jindamgom/semi_petking', '_blank');
});
//파이널프로젝트 github
document.getElementById('btn_final_github').addEventListener('click', function() {
    window.open('https://github.com/jindamgom/boot-box', '_blank');
});
//파이널프로젝트  youtube 
document.getElementById('btn_final_youtube').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=D1bDZOeQXWs', '_blank');
});
//파이널프로젝트  site 
document.getElementById('btn_final_site').addEventListener('click', function() {
    window.open('https://rbootbox.online/bootbox/', '_blank');
});



//미니프로젝트 상세페이지로 이동
document.getElementById('btn_mini_more').addEventListener('click', function() {
    navigateTo(2);
});

//세미 프로젝트 상세페이지로 이동
document.getElementById('btn_semi_more').addEventListener('click', function() {
    navigateTo(3);
});

//파이널 프로젝트 상세페이지로 이동
document.getElementById('btn_final_more').addEventListener('click', function() {
    navigateTo(4);
});


function navigateTo(sectionIndex) {
    // Reset scrollAmount when navigating
    console.log("navigateTo의 currentSection:",currentSection);
    scrollAmount = 0;
    currentSection = sectionIndex;
    container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
}



// document.getElementById('btn_final_more').addEventListener('click', function() {
//     console.log("btn_final_more");
//     var scrollDistance = window.scrollY || document.documentElement.scrollTop;
//     console.log('111현재 스크롤된 거리: ' + scrollDistance + 'px');
//     var modal = document.getElementById("myModal");
//     var btn = document.getElementById("btn_final_more");
//     var span = document.getElementsByClassName("close")[0];

//     // When the user clicks the button, open the modal
//     btn.onclick = function() {
//         modal.style.display = "block";
//     }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// });