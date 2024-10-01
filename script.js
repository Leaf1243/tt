const gameArea = document.getElementById('game');  
const width = 10; // フィールドの幅（列数）  
const height = 20; // フィールドの高さ（行数）  
const tetriminos = [  
    [[1, 1, 1, 1]], // I型  
    [[1, 1], [1, 1]], // O型  
    [[0, 1, 0], [1, 1, 1]], // T型  
    [[1, 1, 0], [0, 1, 1]], // Z型  
    [[0, 1, 1], [1, 1, 0]], // S型  
    [[1, 1, 1], [1, 0, 0]], // L型  
    [[1, 1, 1], [0, 0, 1]], // J型  
];  

let currentPiece;   
let currentPosition = {x: Math.floor(width / 2) - 1, y: 0};  

function getRandomTetrimino() {  
    const randIndex = Math.floor(Math.random() * tetriminos.length);  
    return tetriminos[randIndex];  
}  

function drawTetrimino() {  
    currentPiece.forEach((row, y) => {  
        row.forEach((value, x) => {  
            if (value) {  
                const block = document.createElement('div');  
                block.classList.add('tetrimino');  
                block.style.width = '20px';  
                block.style.height = '20px';  
                block.style.backgroundColor = 'blue';  
                block.style.left = (currentPosition.x + x) * 20 + 'px';  
                block.style.top = (currentPosition.y + y) * 20 + 'px';  
                gameArea.appendChild(block);  
            }  
        });  
    });  
}  

function dropTetrimino() {  
    clearGameArea();  
    currentPosition.y++;  
    if (!isValidPosition()) {  
        currentPosition.y--;  
        mergeTetrimino();  
        clearLines();  
        currentPiece = getRandomTetrimino();  
        currentPosition = {x: Math.floor(width / 2) - 1, y: 0};  
        if (!isValidPosition()) {  
            alert("Game Over!");  
            resetGame();  
        }  
    }  
    drawTetrimino();  
}  

function clearGameArea() {  
    const blocks = document.querySelectorAll('.tetrimino');  
    blocks.forEach(block => block.remove());  
}  

function isValidPosition() {  
    return true; // 簡易的に真を返す、ここに当たり判定を実装するべき  
}  

function mergeTetrimino() {  
    // テトリミノをフィールドに統合する処理を実装  
}  

function clearLines() {  
    // 横一列が揃った時に消す処理を実装  
}  

function resetGame() {  
    currentPosition = {x: Math.floor(width / 2) - 1, y: 0};  
    currentPiece = getRandomTetrimino();  
}  

currentPiece = getRandomTetrimino();  
setInterval(dropTetrimino, 1000);  
