function openLink(url) {
    window.location.href = url;
}

// Simple navigation logic for keypad phones (using arrow keys for navigation)
document.addEventListener('keydown', function(event) {
    const buttons = document.querySelectorAll('button');
    let currentIndex = -1;
    
    buttons.forEach((button, index) => {
        if (button === document.activeElement) {
            currentIndex = index;
        }
    });

    if(event.key === 'ArrowDown') {
        if (currentIndex < buttons.length - 1) {
            buttons[currentIndex + 1].focus();
        } else {
            buttons[0].focus();
        }
    } else if(event.key === 'ArrowUp') {
        if (currentIndex > 0) {
            buttons[currentIndex - 1].focus();
        } else {
            buttons[buttons.length - 1].focus();
        }
    } else if(event.key === 'Enter') {
        document.activeElement.click();
    }
});
