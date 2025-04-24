var word = ["ADJETIVO", "ATLANTICO", "PORTA", "BRIGADEIRO",'CANUDOS','BRASIL','LENDA','ELEFANTE','OURO'];
var perguntas = ['Palavra utilizada para quando fala de um caracteristica de algo.','Em qual oceano Brasil encontra?','Objeto que a gente abre para poder entrar em uma sala','Um doce brasileiro, feito de chocolate e leite condensado, muito popular entre as crianças','Objeto que utilizados para não pegar chuva',' Qual é o nome da Guerra que houve conflito armado, no sertão da Bahia entre Exercito e a comunidade liderada por Antônio Conselheiro','De onde é a invenção do chuveiro elétrico','O que a palavra legend significa em português?','Qual o metal cujo símbolo químico é o Au?']
let r = '';
let p = '';
let me = 6;
let e = 0;
let lc = [];
let wstatus = null;

function random(){
    let rn = Math.floor(Math.random()*word.length);
    r = word[rn];
    p = perguntas[rn];
    
 };

function bnt(){
    let alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letra => 
        `<button 
        class="letra"
        id = "` + letra + `"
        onClick = "chute('` + letra + `')">
        ` + letra + `
        </button>`
    ).join('')
    document.getElementById("teclado").innerHTML=alf
};

function showWord(){
    wstatus = r.split('').map(letra => (lc.indexOf(letra) >= 0 ? letra : " _ ")).join('');

    document.getElementById('perguntas').innerHTML = p;
    document.getElementById('wordS').innerHTML = wstatus;
};

function chute(cletra){
    lc.indexOf(cletra) === -1 ? lc.push(cletra) : null;
    document.getElementById(cletra).setAttribute('disabled',true)
    if (r.indexOf(cletra) >= 0){
        showWord();
        won();
    } else if (r.indexOf(cletra) === -1){
        e++;
        udateW();
        forca();
        lost();
    }
}

function udateW(){
    document.getElementById('erros').innerHTML=e;
}

function lost(){
    if(e === me){
        document.getElementById('teclado').innerHTML= "VOCÊ PERDEU!"
        document.getElementById('forcas').src='../recursos/9.png';
    }
}

function won(){
    if(wstatus === r){
        document.getElementById('teclado').innerHTML= "VOCÊ GANHOU!!"
        document.getElementById('forcas').src='../recursos/10.png';
    }
}

function reset(){
    e = 0
    lc = []
    document.getElementById('forcas').src='../recursos/1.png';
    random();
    showWord();
    udateW();
    bnt();
}

function forca(){
    document.getElementById('forcas').src="../recursos/" + e + ".png";
}

document.getElementById('Merros').innerHTML = me;
 bnt();   
 random();
 showWord();