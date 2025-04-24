document.addEventListener('DOMContentLoaded',() =>{
    
    const palavras = [{palavra:'LAPIS', pose:'horizontal',n:'1'},{palavra:'CANETA', pose:'horizontal',n:'2'},{palavra:'REGUA', pose:'horizontal',n:'3'},
    {palavra:'BORRACHA', pose:'vertical',n:'4'},{palavra:'ESCOLA', pose:'vertical',n:'5'},{palavra:'LIVRO', pose:'horizontal',n:'6'},{palavra:'PROVAS', pose:'vertical',n:'7'},{palavra:'ESTOJO', pose:'vertical',n:'8'},{palavra:'ALUNOS', pose:'vertical',n:'9'},{palavra:'QUADRAS', pose:'vertical',n:'10'},{palavra:'RECREIO', pose:'vertical',n:'11'},{palavra:'MOCHILA', pose:'vertical',n:'12'},{palavra:'EDUCACAO', pose:'vertical',n:'13'},{palavra:'UNIFORME', pose:'vertical',n:'14'},{palavra:'COMPUTADOR', pose:'vertical',n:'15'},{palavra:'TESOURA', pose:'horizontal',n:'16'},{palavra:'COLA', pose:'vertical',n:'17'},{palavra:'CADERNO', pose:'horizontal',n:'18'},{palavra:'PAPEL', pose:'horizontal',n:'19'},{palavra:'PASTA', pose:'horizontal',n:'20'},{palavra:'DE', pose:'horizontal',n:'21'},{palavra:'CB', pose:'horizontal',n:'22'},{palavra:'GU', pose:'horizontal',n:'23'},{palavra:'IO', pose:'horizontal',n:'24'}
]

const all = document.getElementById('all');

palavras.forEach(word =>{
    const field = document.createElement('fieldset');
    field.classList.add(word.pose);
    field.setAttribute('name',`w${word.n}`)
    let letras = word.palavra.split('').map(letra => {
       return `<input type="checkbox" value="${letra}">`;
    }).join('');
    field.innerHTML=letras;
    all.appendChild(field);
})



})
