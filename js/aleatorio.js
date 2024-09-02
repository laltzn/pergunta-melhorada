const nomes = ["Lucas", "Beatriz", "João", "Fernanda", "Carlos", "Mariana", "Pedro"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);

// Exemplo de como utilizar o nome selecionado
console.log(`${nome} está participando de um programa comunitário para promover a inclusão digital entre jovens em situação de vulnerabilidade social.`);
