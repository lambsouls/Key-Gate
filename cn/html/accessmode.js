document.getElementById('local').onclick = function() {
    localStorage.setItem('accessmode', JSON.stringify("local"));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="set2.html";
};
document.getElementById('addr').onclick = function() {
    localStorage.setItem('accessmode', JSON.stringify("addr"));
    accessmode=localStorage.getItem('accessmode');
    addr=prompt('输入域名(不含协议头,可以包含端口号):');
    localStorage.setItem('addr', JSON.stringify(addr));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="set.html";  
};
