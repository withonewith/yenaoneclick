// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-R8PVZLY000');

// SNS 버튼 로드
function loadSNSButtons() {
    fetch('sns-buttons.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sns-container').innerHTML = data;
    });
}

window.onload = loadSNSButtons;