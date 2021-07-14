port = prompt('port:')
localStorage.setItem('port', JSON.stringify(port));
localStorage.setItem('old', JSON.stringify("old"));
window.location.href = "set.html";