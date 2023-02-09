 const inital = document.querySelector('.start');
 const guess = document.querySelector('input');
 const btn = document.querySelector('.btn');
 let score = document.querySelector('.score-1');
 score.innerHTML = 0;
 let sc = 0;
 let game = false;
 let newV = "";
 let randomV = "";

 const words = ['Victim', 'Mentor', 'Psychiatrist', 'Resist', 'Business', 'Migration', 'Experiment', 'Eclipse', 'Communication', 'Asteroid','Continent','Computer','Temperature','Environment','Evolution','Refrigerator','Calender','Ceiling','Blizzard','Weather','Internet','Application','Circuit','Crystal','Compound','Substance','Suspension'];

 const createWords = () => {                                         //Selecting random words from the array 
     let number = Math.floor(Math.random() * words.length);
     let random = words[number];
     return random;
 }

 const jumbledWord = (el) => {                                       //For jumbling the word
     for (let i = el.length - 1; i >= 0; i--) {
         let temp = el[i];
         let j = Math.floor(Math.random() * (i + 1));
         el[i] = el[j];
         el[j] = temp;

     }
     return el.join("");


 }

 btn.addEventListener('click', function () {
     if (!game) {
         game = true;
         inital.style.color = 'darkred';

         btn.textContent = 'Guess Word';
         guess.classList.toggle('hidden');
         newV = createWords();
         randomV = jumbledWord(newV.split(""));
         console.log(randomV);
         inital.innerHTML = 'Arrange the word \'' + randomV + '\'';

     } else {

         let inputWord = guess.value;
         if (inputWord === newV) {
             console.log('correct');
             game = false;
             inital.innerHTML = `Correct Answer!\n
                           It is ${newV}`;
             inital.style.color = 'darkviolet';
             sc += 5;
             score.innerHTML = sc;
             guess.classList.toggle('hidden');
             btn.innerHTML = 'Next Word';
             guess.value = "";

         } else {
             console.log('incorrect');
             inital.innerHTML = `Wrong Answer, Try Again! '${randomV}'`;
             inital.style.color = 'red';
             btn.innerHTML = 'Try Again';
             guess.value = "";
             guess.classList.toggle('hidden');
         }

     }
 })