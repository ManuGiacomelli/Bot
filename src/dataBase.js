const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const pessoa = {}

function salvarPessoas(pessoa) {
    if(!pessoa.id) pessoa.id = sequence.id
    pessoas[pessoa.id] = pessoa
    return pessoa
}

function mostrarPessoa(id) {
    return pessoas[id] || {}
}

function mostrarPessoas(){
    return Object.values(pessoas)
}

module.exports = {salvarPessoas, mostrarPessoa, mostrarPessoas}