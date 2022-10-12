// CODE BY: NoBody#9666

alert('Hola Mariana :)')
//* Old code ↓↓↓
//const nombre = prompt('¿Me Quieres?')
//const dijo_que_si =confirm('¿Aceptas quererme?')
//if (dijo_que_si) {document.write(si)}else{document.write(`<h1>nooooo</h1>`)}
//* Old code ↑↑↑
'use strict';

const documentReady = () => {
  //const heroTitle = document.querySelector('.hero__title'); // const de sumar el nombre a el titulo (No lo use)
  const BotonSi = document.getElementById('BotonSi');
  const BotonNo = document.querySelector('#BotonNo');

  const dijoSI = () => {
    alert('💞 Now somos Partner 💞');
    alert(':)')
    //alert('Cuando nos casamos'); //alertas opcionales :u
    location.href = './Respuesta/si.html';
  };

  const ImposibleBBy = () => {
    BotonNo.style.position = 'absolute';
    BotonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    BotonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  //const partner = prompt('🥰 Dime tu nombre bb 🥰');
  //heroTitle.innerHTML += partner + ' ❤';  // sumar el nombre anterior y colocarlo en el titulo (no lo use)

  BotonSi.addEventListener('click', dijoSI);
  BotonNo.addEventListener('mouseover', ImposibleBBy);
};

document.addEventListener('DOMContentLoaded', documentReady);
