let colorBtn = document.querySelector('#color')
let favoriteBtn = document.querySelector('#place')
let ritualBtn = document. querySelector('#ritual')






function buttonAlert() {
    alert(`My favortie color is Purple! 🟣 `) 
}

function favoriteAlert() {
    alert('Favorite place is camping in the woods! 🌲')
}

function favRitualBtn() {
    alert('Favorite ritual is a daily walk! 🚶‍♂️')
}












colorBtn.addEventListener('click', buttonAlert )

favoriteBtn.addEventListener('click', favoriteAlert )

ritualBtn.addEventListener('click', favRitualBtn)