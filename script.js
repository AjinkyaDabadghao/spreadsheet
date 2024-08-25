document.addEventListener('DOMContentLoaded', function() {

    spreadsheet.addEventListener('input', function(e) {
        const target = e.target;

        if (target.tagName === 'TD' && target.hasAttribute('contenteditable')) {
            const row = target.parentElement.rowIndex;
            const col = target.cellIndex;

            // Basic calculation logic (e.g., summing cells)
            if (target.innerText.startsWith('=')) {
                const expression = target.innerText.substring(1);
                try {
                    const result = eval(expression.replace(/([A-Z]+)(\d+)/g, function(_, c, r) {
                        const cell = spreadsheet.rows[parseInt(r)].cells[c.charCodeAt(0) - 64];
                        return cell ? cell.innerText : '';
                    }));
                    target.innerText = result;
                } catch (error) {
                    target.innerText = 'ERROR';
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const fileMenu = document.getElementById('file-menu');
    const fileMenuItem = document.querySelector('.menu-item:nth-child(1)');

    fileMenuItem.addEventListener('mouseover', function() {
        fileMenu.style.display = 'block';
        fileMenu.style.left = this.offsetLeft + 'px';
    });

    fileMenuItem.addEventListener('mouseout', function() {
        fileMenu.style.display = 'none';
    });

    fileMenu.addEventListener('mouseover', function() {
        fileMenu.style.display = 'block';
    });

    fileMenu.addEventListener('mouseout', function() {
        fileMenu.style.display = 'none';
    });
});