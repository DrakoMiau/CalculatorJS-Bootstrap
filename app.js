console.log('Aplicacion Calculadora');
function sumar(){
    const formulario = document.getElementById('formulario');
    let resultado = 0;
    resultado = parseInt(formulario['operandoA'].value) + parseInt(formulario['operandoB'].value);
    if (isNaN(resultado)) {
        document.getElementById('resultado').innerHTML = `No se proporcionaron los valores indicados`;
    } else {
        document.getElementById('resultado').innerHTML = `El resultado es: ${resultado}`;
    }
}