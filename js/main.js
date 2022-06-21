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

adicao(5, 8);

subtracao(17, 13);

divisao(13, 2);

multiplicacao(30, 6);



const boss = document.querySelector(".calculator-display");

const allOperations = document.querySelectorAll('.operations');
allOperations.forEach(operation => {
    console.log(operation.dataset.action)
    operation.addEventListener("click", (event) => {
        alert(operation.dataset.action)
    })
})

const allNumbers = document.querySelectorAll(".botao");
allNumbers.forEach(number => {
    console.log(number.textContent)
    number.addEventListener("click", (event) => {
        boss.textContent = number.textContent
    })
})
