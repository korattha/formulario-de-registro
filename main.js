const form = document.getElementById('formulario');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Salvo"/>';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Reprovado"/>';

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('atividade');
    const inputNotaAtividade = document.getElementById('nota');

    let linha = `<tr>`;
    linha +=  `<td>${inputNomeAtividade.value}</td>`;
    linha +=  `<td>${inputNotaAtividade.value}</td>`;
    linha +=  `<td>${inputNotaAtividade.value >= 7 ? imgAprovado:imgReprovado}</td>`;
    linha +=  `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
});
