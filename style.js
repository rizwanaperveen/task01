var toggleButton = document.getElementById('education');
var eduCation = document.getElementById('edu');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (eduCation.style.display === 'none') {
        eduCation.style.display = 'block';
    }
    else {
        eduCation.style.display = 'none';
    }
});
