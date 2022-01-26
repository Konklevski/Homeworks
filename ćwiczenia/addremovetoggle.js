const addBtn = document.querySelector('.add')
const removeBtn =  document.querySelector('.remove')
const toggleBtn = document.querySelector('.toggle')
const text = document.querySelector('.p')
// DODAJ
const addClass = () =>{
text.classList.add('test')
}

//USUN

const removeClass = () =>{
    text.classList.remove('test')
}

// TOGGLE 

const toggleClass=()=>{
    text.classList.toggle('test')
}





addBtn.addEventListener('click',addClass)
removeBtn.addEventListener('click',removeClass)
toggleBtn.addEventListener('click',toggleBtn)