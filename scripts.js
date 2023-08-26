        <script>
            document.onkeydown = function(e) {
                if (e.keyCode === 123) {
                    return false;
                }
            }
        </script>
        <script>
            document.oncontextmenu = function() {
                return false;
            }
            document.onselectstart = function() {
                return false;
            }
        </script>
        <script>
            document.onkeydown = function(e) {
                if (e.ctrlKey && e.keyCode === 67) {
                    return false;
                }
            }
        </script>
        <script>
            document.onkeydown = function(e) {
                if (e.ctrlKey && e.keyCode === 85) {
                    return false;
                }
            }
        </script>
        <script>
            document.onkeydown = function(e) {
                if (e.ctrlKey && (e.keyCode === 73)) {
                    return false;
                }
            }
        </script>
    `
};