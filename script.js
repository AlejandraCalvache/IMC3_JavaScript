document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validar que ambos campos no estén vacíos
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);
    
    // Clasificación según el IMC
    let clasificacion = '';
    if (imc < 18.5) {
        clasificacion = 'Peso Bajo';
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = 'Sobrepeso';
    } else {
        clasificacion = 'Obesidad';
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `
        <p><strong>Tu IMC es:</strong> ${imc.toFixed(2)}</p>
        <p><strong>Clasificación:</strong> ${clasificacion}</p>
    `;
});
