const nomes = ["Fernandão", "Jojo", "Negão da zs", "Caica", "Vinão", "Xaumer", "Gaybriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)