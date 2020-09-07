function darkMode() {
    const slider = document.getElementById("slider-checkbox");
    const body = document.body;

    body.style.transition = "0.4s";
    if (slider.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}