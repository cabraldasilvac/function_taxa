// Calcula valor com taxa de maquininha
var taxa = function() {
    var rec = document.getElementById('rec').value
    var tx = document.getElementById('tx').value
    var resultado = parseFloat(rec) * parseFloat(tx);
    document.querySelector('.resultado').innerHTML = resultado;
}