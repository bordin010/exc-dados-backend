// CRIE UM PREÇO E DESCONTO

let preco = 100;
let desconto = 20;

let valorDesconto = preco * (desconto / 100);
let precoFinal = preco - valorDesconto;

console.log(`O desconto de 20% numa compra de R$100 é: ${precoFinal}!`)