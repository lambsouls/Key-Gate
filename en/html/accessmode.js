document.getElementById('local').onclick = function() {
    localStorage.setItem('accessmode', JSON.stringify("local"));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="set2.html";
};
document.getElementById('addr').onclick = function() {
    localStorage.setItem('accessmode', JSON.stringify("addr"));
    accessmode=localStorage.getItem('accessmode');
    addr=prompt('Adress:');
    localStorage.setItem('addr', JSON.stringify(addr));
    localStorage.setItem('old', JSON.stringify("old"));
    window.location.href="set.html";  
};
