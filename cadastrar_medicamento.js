function salvar() {
    const nome = document.getElementById('nombre').value;
    const validade = document.getElementById('validade').value;
    const quantidade = document.getElementById('quantidade').value;
    const unidades = document.getElementById('unidades').value;
    const estoque_minimo = document.getElementById('estoque_minimo').value;
    let medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicamentos.push({
        nome: nome,
        validade: validade,
        quantidade: quantidade,
        unidades: unidades,
        estoque_minimo: estoque_minimo
    });
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
    
}
document.getElementById('CadastrarMedicamento')
        .addEventListener('submit', function (event) {

            event.preventDefault();
            salvar();

            alert('Medicamento cadastrado com sucesso!');

            this.reset();
        });