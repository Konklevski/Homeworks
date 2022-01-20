const btn1 =document.querySelector('.btn-1')
const btn2 =document.querySelector('.btn-2')
const btn3 =document.querySelector('.btn-3')

btn1.addEventListener('click',function (){
console.log('kliknięto mnie!');
})

btn2.addEventListener('mouseover',() => console.log('najechano na mnie '))

const test = () => { 
    console.log('double click');
}




btn3.addEventListener('dblclick',test)
btn1.addEventListener('click',test)

const btns = document.querySelectorAll('button')
console.log(btns)

const smile=()=>{
    console.log('buźka')
}

btns.forEach(btn => btn.addEventListener('click',smile))

// Popularne eventy

// click	Wykrywa kliknięcie myszą na element, zdecydowanie najczęściej wykorzystywany event
// copy	Wykrywa kopiowanie treści (CMD + C / CTRL + C / PPM -> kopiuj)
// keydown	Klawisz na klawiaturze został wciśnięty (ale nie puszczony)
// keyup	Klawisz na klawiaturze został puszczony
// mousemove	Kursor porusza się po elemencie
// mouseover	Kursor znajduje się nad elementem, podobne do :hover w CSS
// mouseenter	Kursor wjechał na element
// mouseleave	Kursor zjechał z elementu
// scroll	Wykrywa zdarzenie scrolla (przewijania strony)
// DOMContentLoaded	Strona internetowa została wczytana (sam DOM, bez CSS, grafik itd.)
// load	Cała strona internetowa została wczytana (DOM, CSS, grafiki itd.)
// Seria eventów ‘drag’	Dragstart, dragend itd.
// Dzięki nim możemy za pomocą myszy przenosić elementy. 