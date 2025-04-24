var word = ["ADJETIVO", "ATLANTICO", "PORTA", "BRIGADEIRO"];
let r = '';
let me = 6;
let e = 0;
let lc = [];
let wstatus = null;

function random(){
    r = word[Math.floor(Math.random()*word.length)]
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
        document.getElementById('teclado').innerHTML= "you lost!"
        document.getElementById('forcas').src='recursos/9.png';
    }
}

function won(){
    if(wstatus === r){
        document.getElementById('teclado').innerHTML= "you won!"
        document.getElementById('forcas').src='recursos/10.png';
    }
}

function reset(){
    e = 0
    lc = []
    document.getElementById('forcas').src='recursos/1.png';
    random();
    showWord();
    udateW();
    bnt();
}

function forca(){
    document.getElementById('forcas').src="recursos/" + e + ".png";
}

document.getElementById('Merros').innerHTML = me;
 bnt();   
 random();
 showWord();