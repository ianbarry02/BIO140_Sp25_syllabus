document.addEventListener('DOMContentLoaded', () => {
    const fontSelector = document.getElementById('font-selector');
    const increaseFontSizeButton = document.getElementById('increase-font-size');
    const decreaseFontSizeButton = document.getElementById('decrease-font-size');
    const fontColorSelector = document.getElementById('font-color-selector');
    const invertColorButton = document.getElementById('invert-color');

    let currentFontSize = 16;
    let isInverted = false;

    // Change font
    fontSelector.addEventListener('change', () => {
        const selectedFont = fontSelector.value;

        if (selectedFont === 'opendyslexic') {
            document.body.style.fontFamily = '"OpenDyslexic", sans-serif';
        } else if (selectedFont === 'times-new-roman') {
            document.body.style.fontFamily = '"Times New Roman", sans-serif';
        }
		else if (selectedFont === 'arial') {
            document.body.style.fontFamily = '"Arial", sans-serif';
        }
    });

    // Change text size
    increaseFontSizeButton.addEventListener('click', () => {
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    });

    decreaseFontSizeButton.addEventListener('click', () => {
        currentFontSize = Math.max(12, currentFontSize - 2); // Prevent font size from becoming too small
        document.body.style.fontSize = currentFontSize + 'px';
    });

    // Change text color
    fontColorSelector.addEventListener('input', (event) => {
        const selectedColor = event.target.value;
        document.body.style.color = selectedColor;
    });

    // Dark mode option
    invertColorButton.addEventListener('click', () => {
        if (isInverted) {
            document.body.style.backgroundColor = '#f0f0f0';
            document.body.style.color = '#000000';
        } else {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        }
        isInverted = !isInverted;
    });
});
