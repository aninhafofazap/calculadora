function adicao(x, y) {
    console.log(x + y);
    return x + y;
}

function subtracao(x, y) {
    console.log(x - y);
    return x - y;
}

function divisao(x, y) {
    console.log(x / y);
    return x / y;
}

function multiplicacao(x, y) {
    console.log(x * y);
    return x * y;
}

// adicao(5, 8);

// subtracao(17, 13);

// divisao(13, 2);

// multiplicacao(30, 6);

const boss = document.querySelector(".calculator-display-result");
const primeiroValorElement = document.querySelector('.primeiro-valor');
const segundoValorElement = document.querySelector('.segundo-valor');
const buttons = document.querySelectorAll('button');

console.log(buttons)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.action === "deletar") {
            primeiroValor.splice(0, primeiroValor.length);
            primeiroValorElement.textContent = ""
            segundoValor.splice(0, segundoValor.length);
            segundoValorElement.textContent = ""
            boss.textContent = 0
            primeiro = 0;
            segundo = 0;
        }

        if (button.dataset.action === "decimal") {
            if (primeiro === 0 && boss.textContent === "0") {
                boss.textContent = boss.textContent + '.';
                parseFloat(primeiro);
                console.log(primeiro, segundo)
            }
        }
    });
})

const primeiroValor = [];
const segundoValor = [];
let primeiro = 0;
let segundo = 0;
let operacao = "";

/* Operações */
const allOperations = document.querySelectorAll('.operations');
allOperations.forEach(operation => {
    // console.log(operation.dataset.action)
    operation.addEventListener("click", () => {
        if (operation.dataset.action === 'adicao') {
            operacao = operation.dataset.action;
            primeiroValorElement.textContent = primeiro;
            boss.textContent = 0;
            console.log(operacao)
        }
        else if (operation.dataset.action === 'subtracao') {
            operacao = operation.dataset.action;
            primeiroValorElement.textContent = primeiro;
            boss.textContent = 0;
            console.log(operacao)
        } else if (operation.dataset.action === 'divisao') {
            operacao = operation.dataset.action;
            primeiroValorElement.textContent = primeiro;
            boss.textContent = 0;
            console.log(operacao)
        }
        else if (operation.dataset.action === 'multiplicacao') {
            operacao = operation.dataset.action;
            primeiroValorElement.textContent = primeiro;
            boss.textContent = 0;
            console.log(operacao)
        }
        else {
            console.log("operação inválida")
        }
    });
});

const resultado = document.querySelector('.resultado');
resultado.addEventListener('click', () => {
    if (primeiroValor && operacao && segundoValor) {

        if (operacao === "adicao") {
            boss.textContent = adicao(primeiro, segundo);
            primeiroValor.splice(0, primeiroValor.length);
            segundoValor.splice(0, segundoValor.length);
            operacao = "";
            primeiro = 0;
            segundo = 0;
        } else if (operacao === 'subtracao') {
            boss.textContent = subtracao(primeiro, segundo);
            primeiroValor.splice(0, primeiroValor.length);
            segundoValor.splice(0, segundoValor.length);
            operacao = "";
            primeiro = 0;
            segundo = 0;
        } else if (operacao === 'divisao') {
            boss.textContent = divisao(primeiro, segundo);
            primeiroValor.splice(0, primeiroValor.length);
            segundoValor.splice(0, segundoValor.length);
            operacao = "";
            primeiro = 0;
            segundo = 0;
        } else if (operacao === 'multiplicacao') {
            boss.textContent = multiplicacao(primeiro, segundo);
            primeiroValor.splice(0, primeiroValor.length);
            segundoValor.splice(0, segundoValor.length);
            operacao = "";
            primeiro = 0;
            segundo = 0;
        }

        else {
            return;
        }
    }
    return;
});

const allNumbers = document.querySelectorAll(".botao");
allNumbers.forEach(number => {
    // console.log(number.textContent)
    number.addEventListener("click", () => {
        if (operacao === "") {
            if (boss.textContent === "0.") {
                primeiroValor.push(0.)
            }
            primeiroValor.push(parseFloat(number.textContent));
            boss.textContent = primeiroValor;
            boss.textContent = primeiroValor.toString().replaceAll(",", "");
            primeiro = parseInt(boss.textContent);
            return console.log('Aqui', primeiroValor, boss.textContent)
        }

        segundoValor.push(parseInt(number.textContent));
        boss.textContent = segundoValor;
        boss.textContent = segundoValor.toString().replaceAll(",", "");
        segundo = parseInt(boss.textContent);
        return console.log(segundoValor)
    });
});