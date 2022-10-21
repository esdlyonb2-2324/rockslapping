const cells = document.querySelectorAll('.cell')
const chris = document.querySelector('.chrisRock')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#timeLeft')

let position;
let scoreValue = 0
let timeLeftValue = null

cells.forEach(cell=>{
    cell.addEventListener('mousedown',()=>{

      if(  cell.id == position){
          scoreValue++
          score.innerHTML = scoreValue
          position = null
      }
    })
})
//bla bla


function randomlySpawnChris(){

    if(!timeLeftValue) return

        //enlever toutes les classes chrisRock => plus de chris nulle part
        cells.forEach(cell=>{cell.classList.remove('chrisRock')})
//une cellule au hasard recoit la classe chrisRock
        let randomCell = cells[Math.floor(Math.random()*9)]
        randomCell.classList.add('chrisRock')

        position = randomCell.id





}

function countdown(){

    if(!timeLeftValue) return
    timeLeftValue--
    timeLeft.innerHTML = timeLeftValue

    if (timeLeftValue == 0){

        clearInterval(moveChris)
        clearInterval(startCountdown)

        alert(`game over. Score : ${scoreValue}`)
    }
}

function start(){
    timeLeftValue = 5
}


let startCountdown = setInterval(countdown, 1000)
let moveChris = setInterval(randomlySpawnChris,500)




