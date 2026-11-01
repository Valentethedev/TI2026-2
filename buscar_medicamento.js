let medicamentos = [
    { nome: "Paracetamol", dosagem: "500mg", hospital: "Hospital A", validade: "2023-12-31" },
    { nome: "Ibuprofeno", dosagem: "200mg", hospital: "Hospital B", validade: "2023-12-31" },
    { nome: "Amoxicilina", dosagem: "250mg", hospital: "Hospital C", validade: "2023-12-31" },
    { nome: "Omeprazol", dosagem: "20mg", hospital: "Hospital D", validade: "2023-12-31" },
    { nome: "Paracetamol", dosagem: "500mg", hospital: "Hospital E", validade: "2024-06-30" },
];
const formulario = document.getElementById("formBusca");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nombre")
        .value.trim().toLowerCase();

    const validade = document.getElementById("validade").value;

    const encontrados = medicamentos.filter(m => {

        const nomeConfere =
            m.nome.toLowerCase().includes(nome);

        const validadeConfere =
            !validade || m.validade === validade;

        return nomeConfere && validadeConfere;
    });

    resultado.replaceChildren();

    if (encontrados.length === 0) {
        resultado.textContent = "Nenhum medicamento encontrado.";
        return;
    }

    encontrados.forEach(m => {
    const card = document.createElement("div");
    card.className = "card mb-3";

    const corpo = document.createElement("div");
    corpo.className = "card-body";

    // Cabeçalho com nome e botão
    const cabecalho = document.createElement("div");
    cabecalho.className = "d-flex justify-content-between align-items-center";

    const titulo = document.createElement("h5");
    titulo.className = "card-title mb-0";
    titulo.textContent = m.nome;

    const botao = document.createElement("button");
    botao.className = "btn btn-success btn-sm";
    botao.textContent = "Solicitar";

    botao.addEventListener("click", function() {
        alert("Solicitação do medicamento: " + m.nome);
    });

    cabecalho.append(titulo, botao);

    // Informações do medicamento
    const informacoes = document.createElement("div");
    informacoes.className = "mt-3";

    informacoes.innerHTML = `
        <p><strong>Dosagem:</strong> ${m.dosagem}</p>
        <p><strong>Hospital:</strong> ${m.hospital}</p>
        <p><strong>Validade:</strong> ${m.validade}</p>
    `;

    corpo.append(cabecalho, informacoes);
    card.appendChild(corpo);
    resultado.appendChild(card);
});
});