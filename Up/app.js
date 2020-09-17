const input =     document.querySelector('#textinput')
const letterbox = document.querySelector('#letterbox')
const paragraph = document.querySelector('#paragraphbox');
const balloon = document.getElementById('balloon');

let current_letter, para, r_para;
let letter_no = 0;

setLetter();

input.onkeydown = (e)=>{

        //letter check 
        setInterval(() => {
            check_letter(input.value);            
        }, 10);
    
}
// input.onkeyup = ()=>{ input.value = ''}

function setLetter(){

    r_para = `i have died everyday waiting for you darling don't be afraid i have loved you for a thousend year i love you for a thousend more. long along i belive i will find you, time has brought hard to me i have loved you for a thousend year. ` 

    // r_para = `i i`;
    para = r_para.split('');
    current_letter = para[letter_no];


    para.forEach(letter => {

        let span = document.createElement('span');
        span.innerText = letter;
        paragraph.appendChild(span);
    });
}



function check_letter(letter){
    if(letter == current_letter){
        console.log('shi hai')
        letter_no++;
        current_letter = para[letter_no];

        for(let i = 0; i < paragraph.children.length; i++){
            if(i == letter_no - 1){
                paragraph.children[i ].setAttribute('class', 'highlight');
            }
            
        }
        //checking winning
        if(letter_no == paragraph.children.length){
            console.log('You Win');

            goUp('12%'); //sets the top of ballons to this value
        }

        throwLetter(letter);

    }else {console.log('goo kha', current_letter)}

    input.value = '';

}





function throwLetter(letter){

    let letEl = document.createElement('span');
    letEl.innerText = letter;

    letEl.setAttribute('class', 'letters')
    letterbox.appendChild(letEl);



    //removeing letter
    letEl.onanimationend = () =>{ 
        removeLetter(letEl);
    }

}
function removeLetter(letter){
    letterbox.removeChild(letter);
}


function goUp (pos){
    balloon.classList.remove('floating-balloon');

    setTimeout(() => {
        balloon.style.top = pos;   
        document.documentElement.style.setProperty('--balloonY', pos)
    }, 10);
    
    balloon.ontransitionend = ()=>{ balloon.classList.add('floating-balloon')}
}



