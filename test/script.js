const questions =
    [
        {
            question: 'qual o seu nome ?',
            options: ['vitorio', 'joao', 'mullet'],
            correct: 'vitorio'
        },
        {
            question: 'qual meu sobrenome?',
            options: ['ettore', 'joao', 'mullet'],
            correct: 'ettore'
        },
        {
            question: 'qual a minha cor favorita ?',
            options: ['roxo', 'amarelo', 'branco'],
            correct: 'roxo'
        }
    ]

let btns = document.getElementsByClassName('btns')


let h1 = document.querySelector('h1')
let result = document.querySelector('span')
function resposta() {
    let quest = questions[flush()]
    h1.textContent = quest.question

    for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.textContent = quest.options[index]
    }
    if (event.target.textContent == quest.correct) {
        result.textContent = 'acertou';
    }else{
        let decremento = 3;
        result.textContent = decremento--;
    }








}







function flush() {
    return Math.floor(Math.random() * 3);
}

