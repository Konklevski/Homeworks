const uList = document.createElement('ul')
document.body.append(uList) 

const number =10
for(let i=1; i<= number ; i++){
    const liItem = document.createElement('li')
    liItem.textContent = i
    uList.append(liItem)
}


const lastLi=uList.querySelector('li:last-child')
lastLi.textContent='Jestem ostatnim elementem'

lastLi.style.backgroundColor = 'royalblue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '28px'



const uList = document.createElement('ul')
document.body.append(uList)
