document.getElementById('btn_project2_github').addEventListener('click', function() {
    console.log("프로젝트 2의 버튼1을 눌렀습니다.");
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'project.html', true);
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var response = xhr.responseText;
    //         // 특정 위치에 삽입할 수 있는 예시
    //         var targetElement = document.querySelector('.project-section .section-content');
    //         if (targetElement) {
    //             targetElement.innerHTML = response;
    //         }
    //     }
    // };
    // xhr.send();
    window.open('https://github.com/jindamgom/mini_3XX', '_blank');
});
