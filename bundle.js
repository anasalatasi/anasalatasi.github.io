var getDog = document.getElementById('contacts');
function FetchDog() {
    fetch('https://random.dog/woof.json').then(function (res) { return res.json(); }).then(function (data) { return getDog.style.backgroundImage = "url('".concat(data.url, "')"); });
}
FetchDog();
