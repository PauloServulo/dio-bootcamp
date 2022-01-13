function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco:30,
    }
]

const saldoDisponivel = 100;

console.log(calculaSaldo(saldoDisponivel, lista));