const counter = document.getElementById("counter");

const addCount = () =>{
    //文字列を数値に変換
    let num = parseInt(counter.textContent, 10);

    //1を足す
    counter.textContent = num + 1;
};

//イベントリスナー登録
//要素.addEventListener(イベント、関数、オプション);

counter.addEventListener("click", addCount);