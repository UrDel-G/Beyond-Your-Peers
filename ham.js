const hamBtn = document.querySelector('.hamburger-img');
const ham = document.querySelector('#menu');

hamBtn.addEventListener('click', ()=>{
    ham.classList.remove('hidden');
});

const exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', ()=>{
    ham.classList.add('hidden');
})