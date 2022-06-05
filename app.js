let palindromBtn = document.getElementById('palinBtn');
let perfectBtn = document.getElementById('perfectBtn');
let low = document.getElementById('low');
let high = document.getElementById('high');


palindromBtn.addEventListener('click', ()=> {
    if(Number(low.value) >= Number(high.value)) {
        alert('High number should be bigger than low number.')
    }
    else {
        for (let i = Number(low.value); i <= Number(high.value) ; i++ ){
            if(palindrom(i)){
                document.querySelector('.palindromeList').innerHTML += i + `<br>`
            }
        }
    }
})

perfectBtn.addEventListener('click', () => {
    if(Number(low.value) >= Number(high.value)) {
        alert('High number should be bigger than low number.')
    }
    else {
        for (let i = Number(low.value); i <= Number(high.value); i++){
            if(perfectNumber(i)) {
                document.querySelector('.perfectNumberList').innerHTML += i + `<br>`
            }
        }
    }
})

function palindrom(num) {
    let reverseNum = num.toString().split('').reverse().join('');
    return num == reverseNum
}

function perfectNumber(num) {
    let count = 0;
    for (let i = 1; i < num ; i++){
        if(num % i == 0){
            count += i;
        }
    }
    return count == num;
}