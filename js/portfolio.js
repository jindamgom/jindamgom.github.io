// let currentSection = 0;
//         const sections = document.querySelectorAll('.section');
//         const totalSections = sections.length;
//         const container = document.querySelector('.container');
//         let scrollAmount = 0;
//         const scrollThreshold = 400; // 스크롤 감도를 낮추기 위해 증가

//         function scrollPage(event) {
//             scrollAmount += event.deltaY;

//             if (scrollAmount >= scrollThreshold) {
//                 // Scroll down
//                 if (currentSection < totalSections - 1) {
//                     currentSection++;
//                     container.style.transform = `translateY(-${currentSection * 100}vh)`;
//                     scrollAmount = 0;
//                 }
//             } else if (scrollAmount <= -scrollThreshold) {
//                 // Scroll up
//                 if (currentSection > 0) {
//                     currentSection--;
//                     container.style.transform = `translateY(-${currentSection * 100}vh)`;
//                     scrollAmount = 0;
//                 }
//             }
//         }

//         function navigateTo(sectionIndex) {
//             // Reset scrollAmount when navigating
//             console.log("navigateTo,sectionIndex:",sectionIndex);
//             scrollAmount = 0;
//             currentSection = sectionIndex;
//             container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
//         }

//         window.addEventListener('wheel', scrollPage);
        

//         // 초기 로드
// $(document).ready(function() {
//     navigateToFirst(0); // 처음에 About 페이지를 로드
// });


let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;
const container = document.querySelector('.container');
let scrollAmount = 0;
const scrollThreshold = 400; // 스크롤 감도를 낮추기 위해 증가

function scrollPage(event) {
    console.log("스크롤페이지 이벤트scrollAmount : ",scrollAmount);
    scrollAmount += event.deltaY;
    if (scrollAmount >= scrollThreshold) {
        // Scroll down
        if (currentSection < totalSections - 1) {
            currentSection++;
            container.style.transform = `translateY(-${currentSection * 100}vh)`;
            scrollAmount = 0;
        }
    } else if (scrollAmount <= -scrollThreshold) {
        // Scroll up
        if (currentSection > 0) {
            currentSection--;
            container.style.transform = `translateY(-${currentSection * 100}vh)`;
            scrollAmount = 0;
        }
    }
}

function navigateTo(sectionIndex) {
    // Reset scrollAmount when navigating
    console.log("navigateTo의 currentSection:",currentSection);
    scrollAmount = 0;
    currentSection = sectionIndex;
    container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
}

window.addEventListener('wheel', scrollPage);

// 초기 로드
$(document).ready(function() {
    loadSections();
    getPageStart();
});



function loadSections() {
    var sectionIds = ["#page1", "#page2","#page3","#page4","#page5"];
    //var urls = ["about.html", "project.html"];
    var urls = ["about.html","project.html","project2.html","project3.html","project4.html"];
    sectionIds.forEach(function(sectionId, index) {
        $(sectionId).load(urls[index], function(response, status, xhr) {
            if (status == "error") {
                console.log("Error loading page: " + xhr.status + " " + xhr.statusText);
            } else {
                // 각 페이지 로드 후에 모달 버튼 이벤트 핸들러 설정
                setupModalHandlers(sectionId);
            }
        });
    });
}

function setupModalHandlers(sectionId) {
    // sectionId 내부에서 모달 버튼에 대한 이벤트 핸들러 설정
    $(sectionId).find('.btn_final_mypart').click(function() {
        // 모달 표시 로직 구현
        // 예: 모달 ID 가져오기
        var modalId = $(this).data('target');
        // 모달 보이기
        $(modalId).modal('show');
    });
}


// 페이지 시작 위치 계산 함수
function getPageStart() {
    var section1Start = document.getElementById('page1').offsetTop;
    var section2Start = document.getElementById('page2').offsetTop;

    console.log('Section 1 starts at: ' + section1Start + 'px');
    console.log('Section 2 starts at: ' + section2Start + 'px');
}



document.getElementById('tistoryLogo').addEventListener('click', function() {
    window.open('https://lifeisgoguma.tistory.com/', '_blank');
});
document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/jindamgom?tab=repositories/', '_blank');
});