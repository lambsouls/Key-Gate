document.getElementById('cn').onclick = function() {
    localStorage.setItem('language', JSON.stringify("cn"));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="../../../cn/html/set.html";
};

document.getElementById('en').onclick = function() {
    localStorage.setItem('language', JSON.stringify("en"));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="../../../en/html/set.html";
};