$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#date').mask('00/00/0000');

    $('#days').on('input', function() {
        const dailyRate = 100;
        let days = parseInt($(this).val());
        if (isNaN(days) || days <= 0) {
            days = 0;
        }
        let total = dailyRate * days;
        $('#total').val(total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
    });

    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    $('#reservar-btn').on('click', function() {
        $('#mensagem').show().addClass('text-success').text('Pedido de reserva feito com sucesso!');
    });
});
