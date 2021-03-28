let state = 0;

function forwardClick() {
    if (state >= states.length - 1) {
        return;
    }
    if (states[state].type == "question" && !updateAnswer()) {
        return;
    }
    state++;
    updatePage();
}

function backClick() {
    if (state <= 0) {
        return;
    }
    state--;
    updatePage();
}

function updatePage() {
    let stateObj = states[state];
    let main = document.getElementById("main");
    main.innerHTML = "";
    switch (stateObj.type) {
        case "message":
            setMessage(main, stateObj);
            break;
        case "question":
            setQuestAns(main, stateObj);
            break;
        case "results":
            setMessage(main, stateObj);
            break;
        case "video":
            setMessage(main, stateObj);
            break;
    }
    let fBtn = document.getElementById("forwardBtn");
    fBtn.innerHTML = stateObj.btnText;
}

function setMessage(main, stateObj) {
    let text = document.createElement("p");
    text.innerHTML = stateObj.message;
    main.appendChild(text);
}

function setQuestAns(main, stateObj) {
    let ques = document.createElement("h3");
    ques.innerHTML = stateObj.question;
    main.appendChild(ques);

    let answers = stateObj.answers;
    for (let i = 0; i < answers.length; i++) {
        let ansBlock = document.createElement("div");
        ansBlock.setAttribute("class", "form-check");
        let ansInp = document.createElement("input");
        ansInp.setAttribute("class", "form-check-input");
        ansInp.setAttribute("type", "radio");
        ansInp.setAttribute("name", "answerRadio");
        ansInp.setAttribute("id", "ans" + i);
        ansInp.setAttribute("value", i);
        if (stateObj.checked != null && parseInt(stateObj.checked) == i) {
            ansInp.setAttribute("checked", true);
        }

        let ansLabel = document.createElement("label");
        ansLabel.setAttribute("class", "form-check-label");
        ansLabel.setAttribute("for", "ans" + i);
        ansLabel.innerHTML = answers[i].name;

        ansBlock.appendChild(ansInp);
        ansBlock.appendChild(ansLabel);
        main.appendChild(ansBlock);
    }
}

function updateAnswer() {
    let answers = states[state].answers;
    for (let i = 0; i < answers.length; i++) {
        let elem = document.getElementById("ans" + i);
        if (elem.checked) {
            states[state].checked = i;
            return true;
        }
    }
    return false;
}

updatePage();