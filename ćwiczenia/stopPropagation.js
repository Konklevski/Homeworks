
const blue = document.querySelector('blue')
const gold = document.querySelector('gold')

const infoBlue=(e)=>{
    console.log('%cten kod nie mail sie wykonac')
}
const infoGold=(e)=>{
    e.stopPropagation
    console.log('Wykonuj jakis kod')
}


blue.addEventListener('click',infoBlue)
gold.addEventListener('click',infoGold)

//https://www.w3.org/TR/DOM-Level-3-Events/#event-flow

//stopPropagation - zatrzymanie działania elementu pod spodem
//pointer-events  - zablkowanie na elemencie nakladanie sie na elemencie 