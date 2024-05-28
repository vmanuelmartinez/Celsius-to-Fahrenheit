function Converter_temperatura() {
    const celsius = document.getElementById('celsius').value;
    
    if (celsius === '') {
        alert('Por favor, ingrese una temperatura en Celsius.');
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = parseFloat(celsius) + 273.15;
    
    document.getElementById('Resultado-Fahrenheit').innerText = `Fahrenheit: ${fahrenheit} °F`;
    document.getElementById('Resultado-Kevin').innerText = `Kelvin: ${kelvin} K`;
}
