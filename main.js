import { films } from './assets/films.js'
import { people } from './assets/people.js'
import { starships } from './assets/starships.js'

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})


let peopleList = document.querySelector("#people-list")

// This enables to limit how many lists with 10 max 
let limitedPeople = people.slice(0, 10)

limitedPeople.forEach((people) => {
    let listPeople = document.createElement('li')
    listPeople.textContent = people.name
    peopleList.appendChild(listPeople)
    console.log(people.name)
})
