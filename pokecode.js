import { pokemon } from './assets/pokemon.js'

// console.log('TEST')
// console.log(pokemon)

/* <---------------------------CARD CONTAINER-----------------------------> */

const pokeContainer = document.querySelector('#container')

const cardCreator = (poke) =>{
let card = document.createElement('div')
card.className = "card"
card.addEventListener( 'click', function() {
     card.classList.toggle('is-flipped');
})

/* <---------------------------FRONT CARD-----------------------------> */

let frontCard = document.createElement('figure')
frontCard.className= "card__face card__face--front"
console.log(`${poke.id}${poke.ename}.png`)
let cap = document.createElement('figcaption')
let img = document.createElement('img')
img.src = `img/${poke.id}${poke.ename}.png`
cap.textContent = poke.ename
frontCard.appendChild(cap)
frontCard.appendChild(img)

/* <---------------------------BACK CARD-----------------------------> */

let backCard = document.createElement('figure')
backCard.className = "card__face card__face--back"
let caption = document.createElement('figcaption')
let image = document.createElement('img')
image.src = "img2/pokemonLogo2.png"
caption.textContent = poke.ename
let attack = document.createElement('p')
let defense = document.createElement('p')
let speed = document.createElement('p')
let hp = document.createElement('p')

attack.textContent = `Attack: ${poke.base.Attack}`
defense.textContent = `Defense: ${poke.base.Defense}`
speed.textContent = `Speed: ${poke.base.Speed}`
hp.textContent = `Hit Points: ${poke.base.HP}`

backCard.appendChild(image)
backCard.appendChild(caption)
backCard.appendChild(attack)
backCard.appendChild(defense)
backCard.appendChild(speed)
backCard.appendChild(hp)
card.appendChild(frontCard)
card.appendChild(backCard)
pokeContainer.appendChild(card)
}

/* <---------------------------CREATE CARD-----------------------------> */

pokemon.forEach(element => cardCreator(element))

function Pokemon(ename, id, base) {
     this.ename = ename
     this.id = id
     this.base = base
}

let newPokemon = new Pokemon("Exeggcute", 102, {"Attack": 190, "Defense": 35, "HP": 30, "Speed": 200})
let create = document.querySelector('#create')
create.addEventListener('click', () => {
return cardCreator(newPokemon)
})