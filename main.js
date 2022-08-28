
console.log(window.scrollY+" "+window.scrollX)
const footer = document.getElementById('footer');
const attributionBtn = document.querySelector('.btn-attribution');


function attributionOpen() {
	if(footer.classList.contains('open')) {
        footer.classList.add('close')
        footer.classList.remove('open')
        attributionBtn.textContent = 'Crédits'
    } else {
        footer.classList.add('open')
        footer.classList.remove('close')
        attributionBtn.textContent = 'fermer crédits'
    }
}

attributionBtn.addEventListener('click', attributionOpen);
