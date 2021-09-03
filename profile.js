let color = document.getElementById("color")
let place = document.getElementById("place")
let ritual = document.getElementById("ritual")

function faveColor(e) {
    e.preventDefault()
    alert("My Favorite Color is Green.")
}
function favePlace(e) {
    e.preventDefault()
    alert("My Favorite Place is Fly-Fishing in the Mountains! I love Montana, Idaho, Fairview Canyon, and ..... the High Seas of course")
}
function faveRitual(e) {
    e.preventDefault()
    alert("My Favorite Ritual is getting ready for a fishing trip. It is exciting while also relaxing to gather the gear needed and research where you want to go")
}

color.addEventListener("click", faveColor);
place.addEventListener("click", favePlace);
ritual.addEventListener("click", faveRitual);

