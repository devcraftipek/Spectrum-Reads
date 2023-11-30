

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('colorChangeButton').addEventListener('click', function () {
        var selectedColor = document.getElementById('colorSelector').value;
        document.body.style.backgroundColor = selectedColor;
    });
});
