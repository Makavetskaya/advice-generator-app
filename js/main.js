const requestUrl = 'https://api.adviceslip.com/advice';
const dataWrapper = document.querySelector('.advice-text');
const numberAdvice = document.querySelector('.number-advice');
const newAdviceBtn = document.querySelector('.random-advice');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');

const randomAdvice = () => {
  fetch(requestUrl)
    // fetching random data from the API  and parsing it intro JS object
    .then((response) => response.json())
    .then((data) => {
      dataWrapper.innerText = data.slip.advice;
      numberAdvice.innerText = data.slip.id;
    });
};

soundBtn.addEventListener('click', () => {
  // the SpeechSynthesisUtterance is a web speech api that respesenr speech advice
  let utterance = new SpeechSynthesisUtterance(`${dataWrapper.innerText}`);
  speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks utterance
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(dataWrapper.innerText);
});
newAdviceBtn.addEventListener('click', randomAdvice);
