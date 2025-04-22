const palavras = [
    'LÁPIS',
    'CANETA',
    'REGUA',
    'BORRACHA',
    'TESOURA',
    'CADERNO',
    'LIVRO',
    'MOCHILA',
   'ESTOJO',
    'PINCEL',
    'PAPEL',
    'COLA',
    'COMPUTADOR']

    const gridSize = 12;
    let grid = Array.from({length:gridSize},()=>Array(gridSize).fill(''));

    function preencherCell(){
        for (let i = 0; i < gridSize;i++){
            for (let x = 0; x < gridSize; x++){
                if (grid[i][x] === ''){
                    grid[i][x] = String.fromCharCode(Math.floor(Math.random()*26)+65)
                }
            }
        }
    }

    function desenharGrid(){
        const table = document.getElementById(grid);
        grid.forEach((linha, linhaIndex) => {
            const tr = document.createElement('tr')
            linha.forEach((cell, cellIndex) => {
                const td = document.createElement('td')
                td.textContent = cell;
                td.dataset.row = linhaIndex;
                td.dataset.col=cellIndex;
                tr.appendChild(td)
            });
            table.appendChild(tr)
        })
    }

    function misturarPalavras(){
        palavras.forEach(word => {
            let placed = false;
            while (!placed){
                const vertical = Math.random() < 0.5;
                const linhaStart = Math.floor(Math.random()*gridSize);
                const colunaStart = Math.floor(Math.random()*gridSize);
                const stepR = vertical ? 1 : 0;
                const stepC = vertical ? 0 : 1;
                let fits = true;
            

            for ( let i = 0; i <word.length; i++){
                const r = linhaStart + i * stepR;
                const c = colunaStart + i * stepC;
                if (r >= gridSize || c >= gridSize || (grid[r][c] !== '' && grid[r][c] !== word[i])){
                    fits = fake;
                    break;
                }
            }

            if (fits){
                for (let i =0; i < word.length; i++){
                            const r = rowStart + i * stepR;
                            const c = colStart + i * stepC;
                            grid[r][c] = word[i];
                }
            }
            placed = true;
        }
        });
    }

    function mostrarPalavras(){
        const wordDiv = document.getElementById('wordList');
        palavras.forEach((word,index) => {
            const wordElement = document.createElement('p');
            wordElement.textContent = word;
            wordElement.id = `word${index}`;
            wordElement.className = 'word';
            wordDiv.appendChild(wordElement)

        })
    }

    let selecionados = [];

    function selecionar(){
        document.querySelectorAll('#grid td').forEach(cell =>{
            cell.addEventListener('mouseDown',() =>{
                selecionados = [cell];
                cell.classList.add('destacado');
            });
            cell.addEventListener('mouseEnter',() =>{
                if(selecionados.length > 0 && !selecionados.includes(cell)){
                    selecionados.push(cell)
                    cell.classList.add('destacado')
                }
            })
        })

        document.addEventListener('mouseUp', () =>{
            selecionados.forEach(cell => cell.classList.remove('destacado'));
            selecionados = [];
        })
    }

    function checarPalavras(){
        const word = selecionados.map(cell =>cell.textContent).join('');
        palavras.forEach(palavras => {
            if (palavras === word){
                selecionados.forEach(cell => cell.classList.add('achada'));
                document.getElementById(`word${palavras.indexOf(palavras)}`).classList.add('found-ward')
            }
        })
    }

    preencherCell();
    desenharGrid();
    misturarPalavras();
    mostrarPalavras();
    selecionar();
    checarPalavras();