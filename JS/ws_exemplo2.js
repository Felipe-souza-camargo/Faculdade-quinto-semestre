function adicionar() {
    localStorage.setItem(txtChave.value, txtValor.value)
    txtChave.value = txtValor.value = ""
}

function remover() {
    localStorage.removeItem(txtChave.value)
}

function ler() {
    var busca = localStorage.getItem(txtChave.value)
    if (busca != null)
        alert(busca)
    else alert('O item não existe')

}

function limpar() {
    localStorage.clear()
}