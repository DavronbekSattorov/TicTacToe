const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const container = document.querySelector(".container");
const btnNew = document.querySelector('.newGame');


// container.addEventListener('mousemove', function(e){
//     let xAxis = (window.innerWidth/2 - e.pageX) / 10;
//     let yAxis = (window.innerHeight/2 - e.pageY) / 10;
    
//     one.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
//     //one.style.width = '120px';
//     //one.style.height = '120px';
// });


let turn = true;
let play = true;


const init = function(){
    turn = true;
    play = true;

    one.textContent = '';
    two.textContent = '';
    three.textContent = '';
    four.textContent = '';
    five.textContent = '';
    six.textContent = '';
    seven.textContent = '';
    eight.textContent = '';
    nine.textContent = '';

    one.classList.remove('xplayer');
    two.classList.remove('xplayer');
    three.classList.remove('xplayer');
    four.classList.remove('xplayer');
    five.classList.remove('xplayer');
    six.classList.remove('xplayer');
    seven.classList.remove('xplayer');
    eight.classList.remove('xplayer');
    nine.classList.remove('xplayer');


    one.classList.remove('oplayer');
    two.classList.remove('oplayer');
    three.classList.remove('oplayer');
    four.classList.remove('oplayer');
    five.classList.remove('oplayer');
    six.classList.remove('oplayer');
    seven.classList.remove('oplayer');
    eight.classList.remove('oplayer');
    nine.classList.remove('oplayer');

    one.classList.remove('win');
    two.classList.remove('win');
    three.classList.remove('win');
    four.classList.remove('win');
    five.classList.remove('win');
    six.classList.remove('win');
    seven.classList.remove('win');
    eight.classList.remove('win');
    nine.classList.remove('win');
}

btnNew.addEventListener('click', init);



//Write
let write = function(a){
    if(play){
        if (a.textContent == ''){
            a.textContent= turn == true ? 'x' : 'o';
            turn = turn == true ? false: true;
            //a.classList.toggle('xplayer');
            if (a.textContent == 'x'){
                a.classList.toggle('xplayer');
            }else{
                a.classList.toggle('oplayer');
            }
        }
    }
   
}

//Boxes
one.addEventListener('click',  function(e){
    write(one);    
    check();
});

two.addEventListener('click', function(e){
    write(two); 
    check();
});

three.addEventListener('click', function(e){
    write(three);
    check();
});

four.addEventListener('click', function(e){
    write(four);
    check();
});

five.addEventListener('click', function(e){
   write(five);
   check();
});

six.addEventListener('click', function(e){
    write(six);
    check();
});

seven.addEventListener('click', function(e){
    write(seven);
    check();
});

eight.addEventListener('click', function(e){
    write(eight);
    check();
});

nine.addEventListener('click', function(e){
   write(nine);
   check();
});


//Win Conditions
let check = function(){
    
    if(one.textContent==='x' && two.textContent === 'x' && three.textContent === 'x' ||
        one.textContent==='o' && two.textContent === 'o' && three.textContent === 'o'){
        one.classList.add('win');
        two.classList.add('win');
        three.classList.add('win');
        play=false;
    }else if (one.textContent==='x' && four.textContent === 'x' && seven.textContent === 'x' ||
        one.textContent==='o' && four.textContent === 'o' && seven.textContent === 'o'){
        one.classList.add('win');
        four.classList.add('win');
        seven.classList.add('win');
        play=false;
    }else if (one.textContent==='x' && five.textContent === 'x' && nine.textContent === 'x' ||
        one.textContent==='o' && five.textContent === 'o' && nine.textContent === 'o'){
        one.classList.add('win');
        five.classList.add('win');
        nine.classList.add('win');
        play=false;
    }else if (two.textContent==='x' && five.textContent === 'x' && eight.textContent === 'x' ||
        two.textContent==='o' && five.textContent === 'o' && eight.textContent === 'o'){
        two.classList.add('win');
        five.classList.add('win');
        eight.classList.add('win');
        play=false;
    }else if (three.textContent==='x' && six.textContent === 'x' && nine.textContent === 'x' ||
        three.textContent === 'o' && six.textContent === 'o' && nine.textContent === 'o'){
        three.classList.add('win');
        six.classList.add('win');
        nine.classList.add('win');
        play=false;
    }else if (three.textContent==='x' && five.textContent === 'x' && seven.textContent === 'x' ||
        three.textContent==='o' && five.textContent === 'o' && seven.textContent === 'o'){
        three.classList.add('win');
        five.classList.add('win');
        seven.classList.add('win');
        play=false;
    }else if (four.textContent==='x' && five.textContent === 'x' && six.textContent === 'x' ||
        four.textContent==='o' && five.textContent === 'o' && six.textContent === 'o'){
        four.classList.add('win');
        five.classList.add('win');
        six.classList.add('win');
        play=false;
    }else if (seven.textContent==='x' && eight.textContent === 'x' && nine.textContent === 'x' ||
        seven.textContent==='o' && eight.textContent === 'o' && nine.textContent === 'o'){
        seven.classList.add('win');
        eight.classList.add('win');
        nine.classList.add('win');
        play=false;
    }
}
