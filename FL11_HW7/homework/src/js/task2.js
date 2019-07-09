let numberAttempts = 3;
let multiplePrize = 2;
let addRandom = 4;
let onceMore = true;
let firstPrize = 100;
let secondPrize = 50;
let thirdPrize = 25;
let letsPlay = confirm('Do you want to play a game?');
if (!letsPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  let totalPrize = 0;
  while (onceMore) {
    let maxRandom = 8;
    let continuePlay = true;
    let attemptPrizeUser = [firstPrize, secondPrize, thirdPrize];
    while (continuePlay) {
      let randomPocket = Math.floor(Math.random() * (maxRandom + 1));
      let win = false;
      for (let i= 0; i < numberAttempts; i++) {
        let pocketNumber = +prompt('Choose a roulette pocket number from 0 to 8'+
                                    '\nAttempt left: ' + (numberAttempts - i) +
                                    '\nTotal prize: ' + totalPrize + '$' +
                                    '\nPossible prize on current attempt: ' + attemptPrizeUser[i] + '$','');
        if (pocketNumber === randomPocket) {
          totalPrize += attemptPrizeUser[i];
          win = true;
          break;
        }
      }
      if (win) {
        alert('Congratulation, you won! Your prize is: '+ totalPrize + '$');
        continuePlay = confirm('Do you want to continue?');
        if (continuePlay) {
          for (let j = 0; j < attemptPrizeUser.length; j++) {
            attemptPrizeUser[j] *= multiplePrize;
          }
          maxRandom += addRandom;
        }
      } else {
        totalPrize = 0;
        continuePlay = false;
      }
    }
  alert('Thank you for your participation. Your prize is: '+ totalPrize +'$');
  onceMore = confirm('Do you want to play again?');
  }
}
