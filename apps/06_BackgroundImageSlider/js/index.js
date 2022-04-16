const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 1;


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide (){
    if(counter===4){
        counter--;
    }
    else{
        container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:1000, fill:'forwards'});
    }
    counter++;
    container.style.backgroundImage = `url(img/bcg_img${counter}.jpeg`
}

function prevSlide (){
    if(counter===1){
        counter++;
    }
    else{
       container.animate([{opacity:'0.1'}, {opacity:'1.0'}],{duration:1000, fill:'forwards'});
    }
    counter--;
    container.style.backgroundImage = `url(img/bcg_img${counter}.jpeg`
}