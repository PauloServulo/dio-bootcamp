function calculadora () {
    const operacao = Number(prompt('Escolha uma opção: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)'));
    
    if (!operacao || operacao > 6) {
        alert('Erro: operação inválida');
        calculadora();
    } else {
    
        let n1 = Number(prompt("Insira o primeiro valor:"));
        let n2 = Number(prompt("Insira o sergundo valor:"));
        let resultado;

        if (!n1 || !n2) {
            alert("Erro: parâmetros inválidos");
            calculadora();
        } else {

            function soma () {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }

            function subtracao () {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }

            function multiplicacao () {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }

            function divisaoReal () {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }

            function divisaoInteira () {
                resultado = n1 % n2;
                alert(`O  resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            }

            function potenciacao () {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é ${resultado}`);
            }

            function novaOperacao () {
                let opcao = prompt("Deseja fazer outra operação?\n1 - Sim\n2 - Não");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais!");
                } else {
                    alert("Erro: digite uma opção válida!");
                }
            }
        }
        
        // if (operacao == 1) {
        //     soma();
        //     novaOperacao ()
        // } else if (operacao == 2) {
        //     subtracao();
        //     novaOperacao ()
        // } else if (operacao == 3) {
        //     multiplicacao();
        //     novaOperacao ()
        // } else if (operacao == 4) {
        //     divisaoReal();
        //     novaOperacao ()
        // } else if (operacao == 5) {
        //     divisaoInteira();
        //     novaOperacao ()
        // } else if (operacao == 6) {
        //     potenciacao();
        //     novaOperacao ()
        // }

        switch (operacao) {
            case 1:
                soma();
                novaOperacao();
                break;
            case 2:
                subtracao();
                novaOperacao();
                break;
            case 3:
                multiplicacao()
                novaOperacao();
                break;
            case 4:
                divisaoReal()
                novaOperacao();
                break;
            case 5:
                divisaoInteira();
                novaOperacao();
                break;
            case 6:
                potenciacao();
                novaOperacao();
                break;
        }
    }
}

calculadora()