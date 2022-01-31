namespace CalculatorHtml {
    export const CALCULATE: Element = document.getElementsByClassName('calc__getResult')[0];
    export const RESULT: Element = document.getElementsByClassName('calc-result')[0];
    export const ClEARbTN: Element = document.getElementsByClassName('calc__clearBtn')[0];
    export const CALCNUMBERS: Element = document.getElementsByClassName('calc__numbers')[0];
    export const CALCOPERATORS: Element = document.getElementsByClassName('calc__operators')[0];
}
CalculatorHtml.ClEARbTN.addEventListener('click', () => CalculatorHtml.RESULT.innerText = null);

CalculatorHtml.CALCNUMBERS.addEventListener('click', evt => {
    if (evt.target.outerText !== '=') {
        CalculatorHtml.RESULT.innerHTML += evt.target.outerText;
    }
});
CalculatorHtml.CALCOPERATORS.addEventListener('click', evt => {
    CalculatorHtml.RESULT.innerHTML += evt.target.outerText;
});


CalculatorHtml.CALCULATE.addEventListener('click', () => {
    if (CalculatorHtml.RESULT.outerText.includes('+')) {
        CalculatorHtml.RESULT.innerHTML = +CalculatorHtml.RESULT.outerText.split('+')[0] + +CalculatorHtml.RESULT.outerText.split('+')[1];
    }
    else if (CalculatorHtml.RESULT.outerText.includes('-')) {
        CalculatorHtml.RESULT.innerHTML = +CalculatorHtml.RESULT.outerText.split('-')[0] - +CalculatorHtml.RESULT.outerText.split('-')[1];
    }
    else if (CalculatorHtml.RESULT.outerText.includes('/')) {
        CalculatorHtml.RESULT.innerHTML = +CalculatorHtml.RESULT.outerText.split('/')[0] / +CalculatorHtml.RESULT.outerText.split('/')[1];
    }
    else if (CalculatorHtml.RESULT.outerText.includes('*')) {
        CalculatorHtml.RESULT.innerHTML = +CalculatorHtml.RESULT.outerText.split('*')[0] * +CalculatorHtml.RESULT.outerText.split('*')[1];
    }
});
