const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
let play = false;
let newWords = "";
let randomWords = "";
let sWord = [
  "python",
  "javascript",
  "c++",
  "jango",
  "java",
  "c#",
  "html",
  "css",
  "reactjs",
  "angular",
  "swift",
  "android",
  "sql",
];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWord.length);
  let newTempwords = sWord[ranNum];
  // console.log(newTempwords.split(""));
  return newTempwords;
};

const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(i);
    // console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "GUESS";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randomWords = scrambleWords(newWords.split("")).join("");
    // console.log(randomWords);
    msg.innerHTML = `Guess the word:  ${randomWords}`;
  } else {
    let tempWord = guess.value;
    if (tempWord === newWords) {
      play = false;
      msg.innerHTML = `Woohoo it's correct. it is ${newWords}`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      msg.innerHTML = `it's not correct, try again ${randomWords}`;
    }
  }
});
