document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode === 67) {
        return false;
    }
}