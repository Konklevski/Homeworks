const lime = document.querySelector('lime')
const blue = document.querySelector('blue')
const gold = document.querySelector('gold')

const infoLime= () =>{
console.log('%clime','color: lime test-transform:uppercase')
}

const infoBlue= () =>{
console.log('%cblue','color: est-transform:uppercase')
}

const infoGold= () =>{
console.log('%cgold','color: est-transform:uppercase')
}

lime.addEventListener('click',infoLime , {capture:true}) 
blue.addEventListener('click',infoBlue)
gold.addEventListener('click',infoGold)

//https://www.w3.org/TR/DOM-Level-3-Events/#event-flow