/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function func (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
func(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function retorneValor(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var arr2 = [1, 'string', 1.3 ];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
function book(nome) {
   
    var obj = {
        'harry potter': {
            'quantidadePaginas': 500,
            'autor': 'Hilderlan',
            'editora': 'APT'
        },
        'harry potter 2': {
            'quantidadePaginas': 500,
            'autor': 'Hilderlan',
            'editora': 'APT'
        },
        'harry potter 3': {
            'quantidadePaginas': 500,
            'autor': 'Hilderlan',
            'editora': 'APT'
        }
    };

    if(nome) {
        console.log(`O livro ${nome}  tem ${obj[nome].quantidadePaginas} páginas!`)
        console.log(`O autor do livro ${nome}  é  ${obj[nome].autor}.`)
        console.log(`O livro  ${nome}  foi publicado pela editora  ${obj[nome].editora}.`)
        "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
        return obj[nome];
    }

    return obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
book('harry potter 3');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

book('harry potter 2');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
book('harry potter');
