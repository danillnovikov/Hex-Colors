const button = document.querySelector('button');

button.onclick = function () {
    let color = '#' + Math.random().toString(16).slice(3, 9);
    document.querySelector('.container').style.backgroundColor =
        document.querySelector('.out').innerHTML = color
}