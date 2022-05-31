const requestUrl = 'https://api.adviceslip.com/advice';
const dataWrapper = document.querySelector('.advice-text');
const numberAdvice = document.querySelector('.number-advice');
const newAdviceBtn = document.querySelector('.random-advice');

const randomAdvice = () => {
  fetch(requestUrl)
    // fetching random data from the API  and parsing it intro JS object
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dataWrapper.innerText = data.slip.advice;
      numberAdvice.innerText = data.slip.id;
    });
};
newAdviceBtn.addEventListener('click', randomAdvice);
