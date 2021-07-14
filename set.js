a=localStorage.getItem('old');

if(a!=='"old"'){
    localStorage.setItem('language', JSON.stringify("cn"));
    localStorage.setItem('accessmode', JSON.stringify("addr"));
    addr="ipfs.io";
    localStorage.setItem('addr', JSON.stringify(addr));
    port="8080";
    localStorage.setItem('port', JSON.stringify(port));
}

localStorage.setItem('old', JSON.stringify("old"));

language=localStorage.getItem('language');
if (language=='"cn"'){
    window.location.href = "cn/html/main.html";
}
if (language=='"en"'){
    window.location.href = "en/html/main.html";
}