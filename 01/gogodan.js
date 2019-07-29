
while(true){
    let num = prompt("구구단 몇 단을 볼까요?");
    if(num == '' || isNaN(num)){
        alert("올바른 숫자를 입력하세요");
    }else if(num <= 1 || num >= 10){
        alert("2~9까지 숫자를 입력하세요");
    }else {
        for(var i = 1; i< 10;i++){
            document.write(`${num} x ${i} = ${num * i} <br>`);
        }
        break;
    }
    
}
