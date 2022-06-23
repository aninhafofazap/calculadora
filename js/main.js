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
        }
    });
})

const primeiroValor = [];
const segundoValor = [];
let operacao = "";

/* Operações */
const allOperations = document.querySelectorAll('.operations');
allOperations.forEach(operation => {
    // console.log(operation.dataset.action)
    operation.addEventListener("click", () => {
        if (operation.dataset.action === 'adicao') {
            operacao = operation.dataset.action;
            primeiroValorElement.textContent = primeiroValor;
            boss.textContent = 0;
            console.log(operacao)
        }
    });
});

const resultado = document.querySelector('.resultado');
resultado.addEventListener('click', () => {
    if (primeiroValor && operacao && segundoValor) {
        if (operacao === "adicao") {
            boss.textContent = adicao(primeiroValor[0], segundoValor[0]);
        }
    }
    return;
});

const allNumbers = document.querySelectorAll(".botao");
allNumbers.forEach(number => {
    // console.log(number.textContent)
    number.addEventListener("click", () => {
        if (operacao === "") {
            primeiroValor.push(parseInt(number.textContent));
            boss.textContent = primeiroValor;
            boss.textContent = primeiroValor.toString().replaceAll(",", "");
            return console.log((primeiroValor))
        }

        segundoValor.push(parseInt(number.textContent));
        boss.textContent = segundoValor;
        boss.textContent = segundoValor.toString().replaceAll(",", "");
        return console.log(segundoValor)
    });
});
