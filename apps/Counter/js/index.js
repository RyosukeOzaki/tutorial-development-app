let counter = document.querySelector(".counter");
const addCount = document.querySelector('#AddCountBtn');
const lowerCount = document.querySelector('#LowerCountBtn');
const resetCount = document.querySelector('#ResetCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);
resetCount.addEventListener('click', reset);


function incrementCounter (){
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = '#4caf50';
    }
    else if(counter.innerHTML==='0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:500, fill:'forwards'});
}


function decrementCounter (){
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML<'0'){
        counter.style.color = 'red';
    }
    else if(counter.innerHTML==='0'){
        counter.style.color = 'white';
    }
    counter.animate([{opacity:'0.2'}, {opacity:'1.0'}], {duration:500, fill:'forwards'});
}


function reset(){
    count = 0;
    counter.innerHTML = count;
    counter.style.color = 'white';
}