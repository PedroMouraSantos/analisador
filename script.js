let n = document.getElementById('txtn')
let numeros = []
function adiciona(){
let num = Number(n.value)
// Verificações
if (n.value.length == 0) {
    window.alert("[ERRO] Insira um número!")
    return
}
if (num < 1 || num > 100) {
    window.alert("[ERRO] Insira um número entre 1 e 100!")
    return
 }
 if (numeros.includes(num)) {
    window.alert(`[ERRO] O número ${num} já foi adicionado!`)
    return
}
 numeros.push(num);
 // Atualizar o select com o novo número
 let lista = document.getElementById('val')
 let item = document.createElement('option')
 item.text = `Valor ${num} adicionado.`
 lista.appendChild(item)
 n.value = ''
 n.focus()
}
function finalizar() {
    if (numeros.length === 0) {
        window.alert("[ERRO] Nenhum número foi adicionado!")
        return
    }

    let total = numeros.length // Total de números
    let soma = 0 // Variável para somar os valores
    let maior = numeros[0] // Assumimos que o primeiro número é o maior
    let menor = numeros[0] // Assumimos que o primeiro número é o menor

    // Percorrer o array para calcular soma, maior e menor
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i] // Soma os valores

        if (numeros[i] > maior) {
            maior = numeros[i] // Atualiza o maior número
        }

        if (numeros[i] < menor) {
            menor = numeros[i] // Atualiza o menor número
        }
    }

    let media = soma / total // Calcula a média

    // Exibir os resultados
    let res = document.getElementById('res')
    res.innerHTML = '' // Limpa o conteúdo anterior
    res.innerHTML += `<p>Total de números: ${total}</p>`
    res.innerHTML += `<p>Maior valor: ${maior}</p>`
    res.innerHTML += `<p>Menor valor: ${menor}</p>`
    res.innerHTML += `<p>Soma dos valores: ${soma}</p>`
    res.innerHTML += `<p>Média dos valores: ${media.toFixed(2)}</p>`
}
