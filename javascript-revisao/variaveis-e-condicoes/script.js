const pessoasArray = [
    {
        nome: "Alessandra",
        idade: 48,
        sexo: "F"
    },

    {
        nome: "André",
        idade: 12,
        sexo: "M"
    },

    {
        nome: "João",
        idade: 35,
        sexo: "M"
    },

    {
        nome: "Karla",
        idade: 5,
        sexo: "F"
    },

    {
        nome: "Vitor",
        idade: 24,
        sexo: "M"
    },

    {
        nome: "Vanessa",
        idade: 42,
        sexo: "F"
    }
]

//acessa o array de pessoas e passa por cada pessoa, se encontrar uma que se chama andré digita que andré foi achado, senão se, o nome da pessoa incluir a letra "a" diz que começa com a mas não é o andré, senão for o andré digita que não é o André

// pessoasArray.forEach(p => {
//     if (p.nome === "André") {
//         console.log("André achado")
//     }
//     else if (p.nome.includes("A")) {
//         console.log(`O nome da pessoa ${p.nome} começa com A mas não é o André`)
//    }else{
//     console.log(`A pessoa ${p.nome} não é o André`)
//    }})



// pessoasArray.forEach(p => {
//     switch (p.nome.charAt(0)) {
//         case "V":
//             console.log(`${p.nome} inicia com V`)
//             break

//         case "A":
//             console.log(`${p.nome} inicia com A`)
//             break

//         case "J":
//             console.log(`${p.nome} inicia com J`)
//             break

//         default: console.log(`Inicial  não encontrada ${p.nome}`)
//     }

// })