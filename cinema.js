let filmes = require('./database/catalogo.json')
let cinema = 'Cine Belas Artes 2.4.5.6'

const filme4 = {
    codigo: 4,
    titulo: 'Rambo 2',
    duracao: 240,
    genero: 'terror',
    emCartaz: true
}

filmes.push(filme4) // add no finally

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo // o retorno tem que ser booleana
    })

    return filmeEncontrado
}

const filmeEnc = buscarFilme(1)

function adicionarFilme(codigo, titulo, duracao, genero, emCartaz) {
    const filme = {
        codigo,
        titulo,
        duracao,
        genero,
        emCartaz
    }

    filmes.push(filme)
}

adicionarFilme(5, 'Harry Potter 5', 180, 'fantasia', true)

function alterarFilmeEmCartaz(codigo, encontrarFilme) {
    const filmeEncontrado = encontrarFilme(codigo, encontrarFilme) 
        filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true
    }

    // filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
    

alterarFilmeEmCartaz(5, buscarFilme)

const imprimeFilme = (filme, index) => console.log(index + ' - ' + filme.titulo +  ' - ' + filme.emCartaz) 

function listarTodosOsFilmes() {
    for(let i = 0; i < filmes.length; i++) {
        imprimeFilme(filmes[i], i)
    }
}

listarTodosOsFilmes()

const filmesFiltrados = filmes.filter( filme => {
    return filme.genero == 'terror'
})

console.table(filmesFiltrados)

// const listarFilmes = filmes.forEach(function(nome, index){
//     return nome + index
// });

// console.log(listarFilmes)

function listarFilmesDeLongaDuracao() {
    filmes.filter(filme => filme.duracao >= 240)
    return resultado
    }
     
const filmesDeLongaDuracao = listarFilmesDeLongaDuracao()
console.table(filmesDeLongaDuracao)


