import { pokemon } from './pokemon.js'
// console.log('TEST')

console.log(pokemon)

// Card container
const pokeContainer = document.querySelector('#container')

const cardCreator = (poke) =>{

let card = document.createElement('div')
card.className = "card"
card.addEventListener( 'click', function() {
     card.classList.toggle('is-flipped');
})


// Front Card
let frontCard = document.createElement('figure')
frontCard.className = "card__face card__face--front"
console.log(`${poke.id}${poke.ename}.png`)
let cap = document.createElement('figcaption')
let img = document.createElement('img')
img.src = `img/${poke.id}${poke.ename}.png`
cap.textContent = poke.ename
frontCard.appendChild(cap)
frontCard.appendChild(img)


// Back Card
let backCard = document.createElement('figure')
backCard.className = "card__face card__face--back"
let capt = document.createElement('figcaption')
let imag = document.createElement('img')
imag.src = "pokemonLogo2.png"
capt.textContent = poke.ename
let attack = document.createElement('p')
let defense = document.createElement('p')
let speed = document.createElement('p')
let hp = document.createElement('p')

attack.textContent = `Attack: ${poke.base.Attack}`
defense.textContent = `Defense: ${poke.base.Defense}`
speed.textContent = `Speed: ${poke.base.Speed}`
hp.textContent = `Hit Points: ${poke.base.HP}`

backCard.appendChild(imag)
backCard.appendChild(capt)
backCard.appendChild(attack)
backCard.appendChild(defense)
backCard.appendChild(speed)
backCard.appendChild(hp)
card.appendChild(frontCard)
card.appendChild(backCard)
pokeContainer.appendChild(card)
}

// Create new Card
pokemon.forEach(element => cardCreator(element))

let newCard = {
   "ename": "Exeggcute", 
    "id": "102", 
    "base": {
    "Attack": 190, 
    "Defense": 35, 
    "HP": 30,  
    "Speed": 200
}
}

let create = document.querySelector('#create')
create.addEventListener('click', () => {
return cardCreator(newCard)
})

// let createCard = document.createElement('div')
// createCard.className = "card"
// createCard.addEventListener('click', () => {
//   console.log("thanks for clicking!")
// })


// ---------------------------------------------------

// console.log(pokemon)

// const pokeContainer = document.querySelector('#container')

// pokemon.forEach(poke => {
//     console.log(`${poke.id}${poke.ename}`)
//     // let card = document.createElement('div')
//     let fig = document.createElement('figure')
//     let img = document.createElement('img')
//     let cap = document.createElement('figcaption')
//     // let backDiv = document.createElement('div')
//     // backDiv.textContent = poke.cname
//     // cap.textContent = poke.ename
//     img.src = `img/${poke.id}${poke.ename}.png`
//     fig.appendChild(img)
//     fig.appendChild(cap)
//     // card.appendChild(fig)
//     // card.appendChild(backDiv)
//     pokeContainer.appendChild(fig)
//     // card.addEventListener( 'click', function() {
//     //     console.log(poke.ename)
//     //     // console.log(`${poke.id}${poke.ename}`)
//     //     card.classList.toggle('is-flipped');
//     // });
// })

