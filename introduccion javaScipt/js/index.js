var nombre = "Pepe";
let apellido = "Perez";
const numero = 12;
apellido = 'Gomez';
let numeroDos = 12.36;
let datoBolleano = false;
let pares = [2, 4, 6, 8, 10];
let jobs = ['Libros', 'Deportes', 'Cine'];
console.log(pares[2]);
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    jobs: ['Libros', 'Dorminr'],
    otrosDatos: {
        telefono: 1234,
        email: 'test@test.com'
    }
};
console.log(persona['nombre'], persona.nombre);
console.log(persona.jobs[1], persona.otrosDatos.email);
const personas = [
    { nombres: 'Persona 1', edad: 17, categoria: 'a' },
    { nombres: 'Persona 2', edad: 27, categoria: 'b' },
    { nombres: 'Persona 3', edad: 40, categoria: 'c' },
    { nombres: 'Persona 4', edad: 30, categoria: 'a' },
    { nombres: 'Persona 5', edad: 15, categoria: 'b' },
    { nombres: 'Persona 6', edad: 18, categoria: 'c' }
];

console.log('For-------------------------');
for (let index = 0; index <= personas.length - 1; index++) {
    console.log(personas[index].nombres);
}
console.log('For in-------------------------');
for (let index in personas) {
    console.log(personas[index].nombres);
}
console.log('For of-------------------------');
for (let item of personas) {
    console.log(item.nombres);
}
console.log('While-------------------------');
let index = 0;
while (index < personas.length) {
    console.log(personas[index].nombres);
    index++;
}
console.log('do While-------------------------');
index = 0;
do {
    console.log(personas[index].nombres);
    index++;
} while (index < personas.length);

console.log('foreach-------------------------');
personas.forEach((item, index) => {
    console.log(index, item.nombres);
});
let m = '12';
if (m !== 12) {
    console.log(m, 'ok');
} else if (m <= 12) {
    console.log(m, 'menos 1');
} else {
    console.log(m, 'not');
}
/**
 * ! negación
 * == igual valor
 * === igual valor tipo
 * != diferente
 * <
 * >
 * <=
 * >=
 * 
 * && and
 * || or
 */

let categoria = 'a';
switch (categoria){

    case 'a': 
        console.log('Categoria A');
        break;
    case 'b': 
        console.log('Categoria B');
        break;
    case 'c': 
        console.log('Categoria C');
        break;
    default: 
        console.log('Sin definir');
        break;
}

function sumar(a,b){
    return a+b;
}

function esMayorEdad(edad){
    if(edad<18){
        return 'Es menoo de eda';
    }else{
        return 'Es mayo de eda'
    }
}

let resultado = sumar(2, 5);


function realizarSuma(a,b){
    console.log(a+b);
}
realizarSuma(2, 'dos');

/*
const sumar2 = function (a,b){
return a+b;
}
*/

const sumar2 = (a,b)=>{
    return a+b;
}

console.log(sumar2(5,9));

class Estudiante{
    nombre = '';
    edad=0;
    email='';
    codigo='';

    constructor(nombre,edad,email,codigo){ 
        this.nombre = nombre;
        this.edad = edad;
        this.email =email;
        this.codigo=codigo;
    }

    esMayorEdad(){
      /*  if(this.edad<18){
            return 'Es menor de edad';
        }else{
            return 'Es mayor de edad'
        } 
    */
   return this.edad<18? 'Es menor de edad':'Es mayor de edad';
    }
}


const estudiante = new Estudiante ('Pepito',17, 'tests@gmail.com','1234');

console.log(estudiante.nombre, estudiante.esMayorEdad());

class EstudianteSistemas extends Estudiante{
    constructor (codigo){
        super('Ana', 28, 'test@tests', codigo)
    }
}
const sistemas= new EstudianteSistemas('234234');
console.log(sistemas.nombre, sistemas.esMayorEdad(), sistemas.codigo);
