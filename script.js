// es  este ejemplos se realizara una manipulacion del DOM, utilizando github (si ya tenemos archivos en nuetro directorio no debemos agregar el README)
// por que se generaran conflictos.  
// podemos crear archivo .gitignore para que nos elimine ciertos archivos o  carpeta que desamos ignorar 
// adentro con .NombreCarpeta obiamos dichas carpetas del repositoio, ademas esta nos permite evitar node, usuarios de sistemas opertivos.
// aplicacion web gitignore.io nos permite generar archivos o lineaas para ignorar aplicaciones o sistemas operativos.
 

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const parrafo = document.querySelectorAll('p');
const h2 = document.querySelector('h2')

h1.innerHTML = 'Patito <br> Feo'



h1.innerText = 'Patito <br> Feo'


console.log(h2.getAttribute('pantalla'))

console.log(h2.getAttribute('class'))

h2.setAttribute('class', 'Rojo')


h2.classList.add('azul')
console.log(h2.getAttribute('class'))
h2.classList.remove('Rojo')
console.log(h2.getAttribute('class'))


h1.classList.toggle('Verde');


h1.classList.contains('Verde')

input.placeholder = 'Escribir aqui ahora'
input.value =  'Hola'

console.log(document.createElement('img'))
console.log(document.createElement('span'))

const img = document.createElement('img');
img.setAttribute('src', 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/seo/noticias/solar-orbiter-toma-imagenes-del-sol-como-nunca-antes/9437612-1-esl-MX/Solar-Orbiter-toma-imagenes-del-Sol-como-nunca-antes.jpg');
console.log(img)


pid.innerHTML = ""
pid.append(img);


const h3 = document.querySelector('h3')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form')


function btnOnClick() {
    console.log(input1.value + input2.value);
    let suma = input1.value + input2.value
    pResult.innerText = "Resultado: " + suma;
}



form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    console.log(input1.value + input2.value);
    let suma = input1.value + input2.value
    pResult.innerText = "Resultado: " + suma;
}