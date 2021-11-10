let counter = document.getElementById('counter');
let number = counter.innerHTML;
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let pause = document.getElementById('pause');
let like = document.getElementById('heart');
function increaseCounter(){
    number++;
    counter.innerHTML = number;
}
let increase = setInterval(() => {
    increaseCounter();
}, 1500);

plus.addEventListener('click', function(){
    number ++
    counter.innerHTML = number;
})
minus.addEventListener('click', function(){
    number --
    counter.innerHTML = number;
})

//like an individual number
like.addEventListener('click', function(){
    let ul = document.getElementById('flubber')
    let li = document.createElement('Li');
    li.appendChild(document.createTextNode(`You liked ${number}!`));
    ul.appendChild(li);
})
//create pause button which
    //stops the counter
pause.addEventListener('click', function(){
    if (pause.innerText === 'pause'){
        clearInterval(increase)
        console.log('Stopping the numbers')
        pause.innerText = 'Resume'
    } else if (pause.innerText === 'Resume'){
        let increase = setInterval(() => {
        increaseCounter();
        }, 1500);
        console.log('releasing the numbers!!!')
        pause.innerText = 'pause'
    }
})

    //disables all buttons except pause

    //switch 'pause' to 'resume

//leave comments on the "game"
let comment = document.getElementById('comment-input').value;
let submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();
    alert(comment)
    
})

let restart = document.getElementById('restart')
restart.addEventListener('click', function(){
    location.reload();
    return false;
})