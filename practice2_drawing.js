window.addEventListener('load', ()=>{
    const canvas = document.querySelector('#draw-area');
    const context = canvas.getContext('2d');

    //直前のマウスのcanvas上のxy座標を記録する
    const lastPosition = {x: null, y: null};

    //マウスがドラッグされているか判定するためのフラグ
    let isDrag = false;

    //描画
    function draw(x,y){
        if(!isDrag){
            return;
        }

    //線の状態を定義する
    context.lineCap = 'round'; //丸みを帯びた線にする
    context.lineJoin = 'round'; //丸みを帯びた線にする
    context.lineWidth = 0.5; //線の太さ
    context.stroleStyle = 'black'; //線の色

    if(lastPosition.x == null || lastPosition.y == null){
        //ドラッグ開始時の線の開始位置
        context.moveTo(x, y);
    }else{
        //ドラッグ中の線の開始位置
        context.moveTo(lastPosition.x, lastPosition.y);
    }

    context.lineTo(x, y);

    context.stroke();

    lastPosition.x = x;
    lastPosition.y = y;
    }

//絵の全部クリア
function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function dragStart(event){
    context.beginPath();

    isDrag = true;
}

function dragEnd(event){
    //線を書く処理の終了宣言
    context.closePath();
    isDrag = false;

    lastPosition.x = null;
    lastPosition.y = null;
}

function initEventHandler(){
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', clear);

    canvas.addEventListener('mousedown', dragStart);
    canvas.addEventListener('mouseup', dragEnd);
    canvas.addEventListener('mouseout', dragEnd);
    canvas.addEventListener('mousemove', (event) => {
        draw(event.layerX, event.layerY);
    });
}

//イベント処理の初期化
initEventHandler();
});