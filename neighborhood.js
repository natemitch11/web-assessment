let restaurants = ["Ichiraku Ramen", "Thunder Burger", "Subway", "Carrabba's", "Ichiraku Ramen", "Arby's"]
let random = Math.floor(Math.random()* restaurants.length)

let button = document.getElementById("restaurant")

function generateRestaurant(){
    alert(`${restaurants[random]}`)

}

button.addEventListener("click", generateRestaurant)