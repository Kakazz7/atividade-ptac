async function executar() {
    console.log("Dentro da função - antes do await");

    await null;

    console.log("Dentro da função - depois do await");
}

console.log("Início");

executar();

console.log("Fim");