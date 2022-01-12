var checkbox = document.querySelector('input[name=theme]');
var moonIco = document.getElementById("moonDiv");
var sunIco = document.getElementById("sunDiv");

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
		moonIco.style.display = "block";
		sunIco.style.display = "none";
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
		moonIco.style.display = "none";
		sunIco.style.display = "block";
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}