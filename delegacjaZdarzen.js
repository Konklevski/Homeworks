const allCirles =document.querySelectorAll('.circle')
const gold = document.querySelectorAll('.gold')
const lime = document.querySelectorAll('lime')

const newCircle = document.createElement('div')
newCricle.classList('cricle','purple')
gold.append(newCricle)


// const allCirles =document.querySelectorAll('.circle')
// allCirles.forEach
// (cricle => cricle.addEventListener('click',() => console.log(cricle)))


// const newCricle = document.creat

//  console.log(allCirles.length);

lime.addEventListener('click',e => {
    if(e.target.classList.contains('.circle2')){
    console.log('e.target')
    console.log('A');
    }
})