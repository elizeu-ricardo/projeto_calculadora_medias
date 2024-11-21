const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));


let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNoneAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNoneAtividade.value)) {
        alert(`A atividade: ${inputNoneAtividade.value} já fi inserida`)
    }else {

    atividades.push(inputNoneAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNoneAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td}`;
    linha += `</tr>`;

    linhas += linha;
    };

    inputNoneAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calcularMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcularMediaFinal() {
    let somaDsNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaDsNotas += notas[i];
    }

    return somaDsNotas / notas.length;
}