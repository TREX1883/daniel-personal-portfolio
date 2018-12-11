import { senatorData } from './assets/senators.js'

/* <---------------------------DATA-----------------------------> */

const senators = senatorData.results[0].members
const republicans = senators.filter(senator => senator.party === 'R')
const democrats = senators.filter(senator => senator.party === 'D')
const females = senators.filter(senator => senator.gender === 'F')
const males = senators.filter(senator => senator.gender === 'M')
const loyalRepublican = republicans.reduce((acc, senator) => (senator.votes_with_party_pct > 0) ? senator : acc, 0) 
const loyalDemocrats = democrats.reduce((acc, senator) => (senator.votes_with_party_pct > 0) ? senator : acc, 0)

/* <---------------------------STATISTICS-----------------------------> */

let repsdems = document.querySelector('#repsdems')
let malesfemales = document.querySelector('#malesfemales')
let loyalrep = document.querySelector('#loyalrep')
let loyaldemo = document.querySelector('#loyaldemo')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
p1.textContent = `There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`
p2.textContent = `There are ${males.length} men and ${females.length} woman in the Senate.`
p3.textContent = `The most Loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`
p4.textContent = `The most Loyal democrat is ${loyalDemocrats.first_name} ${loyalDemocrats.last_name} from ${loyalDemocrats.state} who votes with democrats ${loyalDemocrats.votes_with_party_pct}% of the time.`
repsdems.appendChild(p1)
malesfemales.appendChild(p2)
loyalrep.appendChild(p3)
loyaldemo.appendChild(p4)

// console.log(`There are ${republicans.length} republicans and ${democrats.length} democrats in the Senate.`)
// console.log(`There are ${males.length} men and ${females.length} woman in the Senate.`)
// console.log(`The most Loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} from ${loyalRepublican.state} who votes with republicans ${loyalRepublican.votes_with_party_pct}% of the time.`)
// console.log(`The most Loyal democrat is ${loyalDemocrats.first_name} ${loyalDemocrats.last_name} from ${loyalDemocrats.state} who votes with democrats ${loyalDemocrats.votes_with_party_pct}% of the time.`)

/* <---------------------------MISSING IMAGE-----------------------------> */

const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id === '412743'){
        senator.imgURL = `https://bloximages.newyork1.vip.townnews.com/djournal.com/content/tncms/assets/v3/editorial/d/f6/df6a5b09-1d8d-58ec-9bef-2c6d5877fbca/5b553847030fe.image.jpg`
    }
    if(senator.govtrack_id === '107311'){
        senator.imgURL = `https://pbs.twimg.com/profile_images/988848877515100160/0echd7Yh_400x400.jpg`
    }
    return senator
})

// console.log(senWithPics)

/* <---------------------------PROFILES-----------------------------> */

let picDiv = document.querySelector('.container')

senWithPics.forEach(senator => {
    let senatorPic = document.createElement('img')
    let senatorCap = document.createElement('figcaption')
    let senatorFig = document.createElement('figure')
    senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
    senatorPic.src = senator.imgURL
    senatorFig.appendChild(senatorPic)
    senatorFig.appendChild(senatorCap)
    picDiv.appendChild(senatorFig)
})

