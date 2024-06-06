function calcularEstadia() {
    var precoNoite = document.getElementById("noites").value;
    var quantidadeDias = document.getElementById("quantidade-dias").value;
    
    if (precoNoite !== "nada" && quantidadeDias !== "") {
        var totalEstadia = parseInt(precoNoite) * parseInt(quantidadeDias);
        document.getElementById("total-estadia").value = "R$ " + totalEstadia.toFixed(2);
    } else {
        document.getElementById("total-estadia").value = "";
    }
}

document.getElementById("noites").addEventListener("change", calcularEstadia);
document.getElementById("quantidade-dias").addEventListener("input", calcularEstadia);

calcularEstadia();

document.addEventListener("DOMContentLoaded", function () {
    $('#CPF').inputmask('999.999.999-99');
    
    function calcularEstadia() {
        var quantidadeDias = parseInt(document.getElementById('quantidade-dias').value) || 0;
        var precoPorNoite = parseInt(document.getElementById('noites').value) || 0;
        var totalEstadia = quantidadeDias * precoPorNoite;

        document.getElementById('total-estadia').value = "R$ " + totalEstadia.toFixed(2);
    }

    document.getElementById('quantidade-dias').addEventListener('input', calcularEstadia);
    document.getElementById('noites').addEventListener('change', calcularEstadia);
});