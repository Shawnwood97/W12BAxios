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
// Button and response area for random query
let randButton = document.getElementById("randButton");
let randRes = document.getElementById("randResponse");
randButton.addEventListener("click", getRandomActivity);

// code to show I do know how to create the elements in JS, wasnt sure if you wanted this for the assignment, so I made them in html,
// and commented this out to show I do know how.

// create button and reponse fiv using JS.
// let randButton = document.createElement("button");
// randButton.innerHTML = "Get Random Activity";
// document.body.appendChild(randButton);
// let resDiv = document.createElement("div");
// resDiv.setAttribute("id", "responseDiv");
// resDiv.innerHTML = "Click button to get new activity";
// document.body.appendChild(resDiv);
// randButton.addEventListener("click", getRandomActivity);

// success and error functions for # of participants reqest
function partSuccess(res) {
  let partAct = res.data.activity;
  partResponse.innerHTML = `${partAct}`;
}

function partFail(err) {
  // console.log(err);
  partResponse.innerHTML = `${err}, Please Try Again!`;
}
// Button and response area for # of participants query
let partResponse = document.getElementById("partResponse");
let partButton = document.getElementById("partButton");
partButton.addEventListener("click", getPartActivity);

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

function getPartActivity() {
  // not sure if correct, but had to define this here for it to work properly
  let numParts = document.getElementById("numParts").value;
  console.log(numParts);
  axios
    .request({
      method: "GET",
      url: "http://www.boredapi.com/api/activity",
      params: {
        participants: numParts,
      },
    })

    .then(partSuccess)
    .catch(partFail);
}

function custSuccess(res) {
  // console.log(res);

  // another undefined error catch
  if (res.data.activity == undefined) {
    custFail("No results for your search");
  } else {
    customResponse.innerHTML = `${res.data.activity}`;
  }
}
function custFail(err) {
  // console.log(err);
  custResponse.innerHTML = `${err}, Please Try Again!`;
}

let custButton = document.getElementById("custButton");
custButton.addEventListener("click", getCustomActivity);
let custResponse = document.getElementById("customResponse");

function getCustomActivity() {
  let actType = document.getElementById("strSearch").value;
  console.log(actType);
  axios
    .request({
      method: "GET",
      url: "http://www.boredapi.com/api/activity",
      params: {
        type: actType,
      },
    })

    .then(custSuccess)
    .catch(custFail);
}
