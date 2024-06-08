// import Swal from 'sweetalert2';
// // or via CommonJS
// const Swal = require('sweetalert2');

// import 'bootstrap';

// // or get all of the named exports for further usage
// import * as bootstrap from './node_modules/bootstrap/dist/js/bootstrap.bundle';

const steps = document.querySelectorAll('.step');
const bullets = document.querySelectorAll('.step .bullet');
const bulletLabels = document.querySelectorAll('.step p');
const pages = document.querySelectorAll('.page');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');
const form = document.querySelector('form');
const numberOfPages = pages.length;

document.documentElement.style.setProperty('--step-number', numberOfPages);

// Traiter les bouttons 'next' du formulaire
// on récupère les bouttons et leur index
nextButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Vous avez cliquez sur un boutton!!');
        currentPage = index + 1;
        if (isValid(this)) {
            form.style.transform = `TranslateX(${
                currentPage * (-100 / pages.length)
            }%)`;
            bullets[index].classList.add('active');
            bulletLabels[index].classList.add('active');
        }
    })
})

// Traiter les bouttons 'prev' du formulaire
// on récupère les bouttons et leur index
prevButtons.forEach((button, index) => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        currentPage = index + 1;
        form.style.transform = `TranslateX(${
            (currentPage - 1) * (-100 / pages.length)
        }%)`;
        bullets[index].classList.remove('active');
        bulletLabels[index].classList.remove('active');
    })
})

document.querySelector('.submit').addEventListener('click', function (e) {
    e.preventDefault();
    if (isValid(this)){
        bullets[numberOfPages - 1].classList.add('active');
        bulletLabels[numberOfPages - 1].classList.add('active');
        setTimeout(() => {
            bootstrap.Alert('Félicitation!! Inscription terminée!!');
            location.reload();
        }, 1000);

    }
})

function isValid(e) {
    let validInputs = true;

    const inputs = e.parentElement.parentElement.querySelectorAll('input');
    inputs.forEach(input =>{
        if(!input.checkValidity()){
            validInputs = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
    return validInputs;
}
