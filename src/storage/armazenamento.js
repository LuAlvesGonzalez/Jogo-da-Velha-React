export class Armazenamento {
  constructor(armazNome = 'placarJogo', initialValue = '[]') {
    this.armazNome = armazNome

        // Checando por registros de jogos anteriores
    if (!localStorage.getItem(armazNome)) {
            // Senão, criando de novo para um novo jogo da velha
      localStorage.setItem(armazNome, initialValue)
    }
  }

    // Carregando dados dos jogos anteriores
  getData() {
    return JSON.parse(localStorage.getItem(this.armazNome))
  }

    // Atualizando os dados
  update(data) {
    localStorage.setItem(this.armazNome, JSON.stringify(data))
  }
}