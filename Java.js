// Função para calcular o valor total da estadia
function calcularEstadia() {
    var precoNoite = document.getElementById("noites").value;
    var quantidadeDias = document.getElementById("quantidade-dias").value;
    
    // Verificar se os campos foram preenchidos corretamente
    if (precoNoite !== "nada" && quantidadeDias !== "") {
        var totalEstadia = parseInt(precoNoite) * parseInt(quantidadeDias);
        document.getElementById("total-estadia").value = "R$ " + totalEstadia.toFixed(2);
    } else {
        document.getElementById("total-estadia").value = "";
    }
}

// Adicionar evento de mudança nos campos para recalcular o valor da estadia
document.getElementById("noites").addEventListener("change", calcularEstadia);
document.getElementById("quantidade-dias").addEventListener("input", calcularEstadia);

// Chamar a função inicialmente para calcular o valor da estadia com base nos valores padrão
calcularEstadia();

// Aplicar máscaras
$(document).ready(function() {
    // Máscara para CPF
    $("#CPF").inputmask("999.999.999-99", {
        placeholder: "_"
    });

    // Máscara para data
    $("#data-chegada").inputmask("99/99/9999");

    // Máscara para valor em dinheiro
    $("#total-estadia").inputmask("currency");
});

