document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 73)) {
        return false;
    }
}