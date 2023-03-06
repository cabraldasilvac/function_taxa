// Calcula valor com taxa de maquininha de Cartão.

// A taxa é definida no HTML
function id(tx) {
    return document.getElementById(tx);
}

function total(rec, taxa) {
    return parseFloat(rec.replace(',', '.'), 10) * parseFloat(taxa.replace(',', '.'), 10);
}
window.onload = function() {
    id('valor_recebido').addEventListener('keyup', function() {
        var result = total(this.value, id('taxa').value);
        id('total').value = String(result.toFixed(2)).formatMoney();
    });

    id('taxa').addEventListener('keyup', function() {
        var result = total(id('valor_recebido').value, this.value);
        id('total').value = String(result.toFixed(2)).formatMoney();
    });
}

String.prototype.formatMoney = function() {
    var v = this;

    if (v.indexOf('.') === -1) {
        v = v.replace(/([\d]+)/, "$1,00");
    }

    v = v.replace(/([\d]+)\.([\d]{1})$/, "$1,$20");
    v = v.replace(/([\d]+)\.([\d]{2})$/, "$1,$2");
    v = v.replace(/([\d]+)([\d]{3}),([\d]{2})$/, "$1.$2,$3");

    return v;
};