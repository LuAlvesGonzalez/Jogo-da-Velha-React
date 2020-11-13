export function temVencedor(caixas) {
    // Array com combinações de vitória
    const colunas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Iteração com as combinações
    for (let i = 0; i < colunas.length; i++) {
        const [a, b, c] = colunas[i]

        // Checando por combinações válidas
        if (caixas[a] && caixas[a] === caixas[b] && caixas[a] === caixas[c]) {
            // Retornando o vencedor
            return caixas[a]
        }
    }

    // Senão, não faz nada
    return null
}

export function todasCaixasMarca(caixas) {
    // Qtde de caixas clicadas
    let contador = 0

    // Iteração nas caixas
    caixas.forEach(function (item) {
        // Checando click
        if (item !== null) {
            // Se sim, aumentar o contador em 1
            contador++
        }
    })

    // Checando se todas foram clicadas
    if (contador === 9) {
        return true
    } else {
        return false
    }
}