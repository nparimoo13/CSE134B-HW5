export function myAlert() {
    let myAlertDOM = document.createElement("dialog");
    myAlertDOM.setAttribute("id", "myAlert");
    myAlertDOM.setAttribute("open", true);
    myAlertDOM.innerHTML = 
    `
      <p>Alert Pressed!</p>
      <form method="dialog">
        <button>OK</button>
      </form>
    `;
    document.body.appendChild(myAlertDOM);
  }
  export function myConfirm() {
    var yesBtn = document.getElementById("yes button");
    var noBtn = document.getElementById("no button");

    let myConfirmDOM = document.createElement("dialog");
    myConfirmDOM.setAttribute("id", "myConfirm");
    myConfirmDOM.setAttribute("open", true);
    myConfirmDOM.innerHTML = 
    `
    <p>Do you confirm this?</p>
    <form method="dialog">
    <button id="no button" onclick="noFunction()">No</button>
    <button id="yes button" onclick="yesFunction()">Ok</button>
    </form>

    `;
    document.body.appendChild(myConfirmDOM);

  }
  export function noFunction()
  {
    let noOutput = document.getElementById("output2");
    noOutput.innerHTML = "Confirm result: false";
  }
  export function yesFunction()
  {
    let yesOutput = document.getElementById("output2");
    yesOutput.innerHTML = "Confirm result: true";
  }
  export function myPrompt() {
    let myPromptDOM = document.createElement("dialog");
    myPromptDOM.setAttribute("id", "myPrompt");
    myPromptDOM.setAttribute("open", true);
    myPromptDOM.innerHTML = 
    `
    <form method="dialog">
    <label for="nameInput">What is your name?</label><br>
    <input type = "text" id="nameInput" name = "nameInput"><br>
    <button id="cancel button">Cancel</button>
    <button id="submit button" onclick="submitFunction()">Ok</button>
    </form>
    `;
    document.body.appendChild(myPromptDOM);
  }
  export function submitFunction()
  {
    const nameInput = document.getElementById("nameInput").value;
    let thisOutput = document.getElementById("output2");
    thisOutput.innerHTML = `Prompt result: ${nameInput}`;
  }
  









