const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('draggend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if(afterElement == null){
            container.appendChild(draggable)
        }else{
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        console.log(offset)
        if(offset < 0 && offset > closest.offset){
            return{ offset: offset, element: child }
        }else{
            return closest
        }
    }, { offset: Number.POSITIVE_INFINITY }).element
}

//(function(){
//    //動かす要素(プレビュー画像)の取得
//    var elements = document.getElementsByClassName('preview');
//
//    //クリックされた位置を取得する
//    var x;
//    var y;
//
//    //要素がPCでクリックまたはスマホでタッチされたときイベントが発火
//    for(var i = 0; i < elements.length; i++){
//        elements[i].addEventListener("mousedown", mdown, false);
//        elements[i].addEventListener("touchstart", mdown, false);
//    }
//
//    //マウスクリック時
//    function mdown(e) {
//        //クラス名に.dragを追加
//        this.classList.add("drag");
//
//        //マウスクリックイベントとタッチイベントの差異を吸収
//        if(e.type === "mousedown"){
//            var event = e;
//        }else{
//            var event = e.changedTouches[0];
//        }
//
//        //要素内の相対座標を取得
//        x = event.pageX - this.offsetLeft;
//        y = event.pageY - this.offsetTop;
//
//        //ムーブイベントにコールバック
//        document.body.addEventListener("mousemove", mmove, false);
//        document.body.addEventListener("touchmove", mmove, false);
//    }
//
//    //マウスカーソルが動いたときに発火
//    function mmove(e){
//        //ドラッグ要素の取得
//        var drag = document.getElementsByClassName("drag")[0];
//
//        //マウスクリックイベントとタッチイベントの差異を吸収
//        if(e.type === "mousemove"){
//            var event = e;
//        }else{
//            var event = e.changedTouches[0];
//        }
//
//        //フリックに画面を動かさないようにデフォルト動作を抑制(画面スクロールを止める)
//        e.preventDefault();
//
//        //マウスが動いた場所に要素を動かす
//        drag.style.top = event.pageY - y + "px";
//        drag.style.left = event.pageX - x + "px";
//
//        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
//        drag.addEventListener("mouseup", mup, false);
//        document.body.addEventListener("mouseleave", mup, false);
//        drag.addEventListener("touchend", mup, false);
//        document.body.addEventListener("touchleave", mup, false);
//    }
//
//    //マウスボタンが上がったら発火
//    function mup(e){
//        var drag = document.getElementsByClassName("drag")[0];
//
//        //ムーブメントハンドラの消去
//        document.body.removeEventListener("mousemove", mmove, false);
//        drag.removeEventListener("mouseup", mup, false);
//        document.body.removeEventListener("touchmove", mmove, false);
//        drag.removeEventListener("touchend", mup, false);
//
//        //クラス, .dragも消す
//        drag.classList.remove("drag");
//    }
//})()