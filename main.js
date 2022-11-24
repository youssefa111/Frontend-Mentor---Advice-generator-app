// {"slip": { "id": 16, "advice": "It's unlucky to be superstitious."}}

const apiURL = "https://api.adviceslip.com/advice";

let diceButton = document.getElementById("dice");
let adivceText = document.getElementById("advice");
let adivceId = document.getElementById("id");

console.log(adivceId);

diceButton.onclick = async () => {
  const response = await fetch(apiURL);
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  console.log(myJson);

  adivceText.innerHTML = myJson.slip["advice"];
  adivceId.innerHTML = myJson.slip["id"];
};
