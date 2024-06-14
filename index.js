const min=1;
const max=100;

const answer= Math.floor(Math.random()*(max-min+1))+min;

let attempts=0;
let guess;
let running=true;

while(running){

    guess=window.prompt(`Guess a number between ${min}-${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert('Enter a valid number');
    }else if(guess<min || guess>max){
        window.alert('Enter a valid number');
    }else{
        attempts++;
        if(guess < answer){
            window.alert('Low. Try again');
        }else if(guess>answer){
            window.alert('High. Try again');
        }else{
            window.alert(`Correct. Answer was ${answer}. It took u 
            ${attempts} attempts `);
            running=false;
        }
    }
}





