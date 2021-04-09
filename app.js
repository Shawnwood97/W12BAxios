function randSuccess(res) {
  let randomAct = res.data.activity;
  randRes.innerHTML = `${randomAct}`;
  console.log(randomAct);

  // made this to throw error catch when undefined.
  if (randomAct === undefined) {
    randFail("Random Activity returning as undefined");
  }
}

function randFail(err) {
  // Dont understand why when I change the "activity" portion at the end of the URL, it returns undefined, but does not
  // hit the catch function, but when I change the "boredapi" portion it does.
  console.log(err);
  randRes.innerHTML = `${err}, Please Try Again!`;
}

let randButton = document.getElementById("randButton");
let randRes = document.getElementById("randResponse");
randButton.addEventListener("click", getRandomActivity);

// create button and reponse fiv using JS.
// let randButton = document.createElement("button");
// randButton.innerHTML = "Get Random Activity";
// document.body.appendChild(randButton);
// let resDiv = document.createElement("div");
// resDiv.setAttribute("id", "responseDiv");
// resDiv.innerHTML = "Click button to get new activity";
// document.body.appendChild(resDiv);
// randButton.addEventListener("click", getRandomActivity);

// Axios Functions
function getRandomActivity() {
  axios
    .request({
      method: "GET",
      url: "http://www.boredapi.com/api/activity",
    })
    .then(randSuccess)
    .catch(randFail);
}
