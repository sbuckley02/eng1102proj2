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
            setVideo(main, stateObj);
            break;
    }
    let bBtn = document.getElementById("backwardBtn");
    let fBtn = document.getElementById("forwardBtn");
    fBtn.innerHTML = stateObj.btnText;
    fBtn.disabled = state == (states.length - 1);
    bBtn.disabled = state == 0;
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
    let table = document.createElement("table");

    let imgRow, txtRow;
    for (let i = 0; i < answers.length; i++) {
        if (i % 2 == 0) {
            imgRow = document.createElement("tr");
            txtRow = document.createElement("tr");
        }

        let lbl = document.createElement("label");
        let inp = document.createElement("input");
        inp.setAttribute("type", "radio");
        inp.setAttribute("name", "answerRadio");
        inp.setAttribute("id", "ans" + i);
        if (stateObj.checked != null && parseInt(stateObj.checked) == i) {
            inp.setAttribute("checked", true);
        }

        let img = document.createElement("img");
        img.setAttribute("src", "images/" + answers[i].url);
        img.setAttribute("width", "200");
        let txt = document.createElement("div");
        txt.innerHTML = answers[i].name;

        lbl.appendChild(inp);
        lbl.appendChild(img);

        let butContainer = document.createElement("th");
        let txtContainer = document.createElement("th");
        butContainer.appendChild(lbl);
        txtContainer.appendChild(txt);
        imgRow.appendChild(butContainer);
        txtRow.appendChild(txtContainer);

        if (i % 2 == 1) {
            table.appendChild(imgRow);
            table.appendChild(txtRow);
        }
    }
    main.appendChild(table);
}

function setVideo(main, stateObj) {
    let introMessage = document.createElement("p");
    introMessage.innerHTML = stateObj.message;
    let vid = document.createElement("iframe");
    vid.setAttribute("src", stateObj.url);
    main.appendChild(introMessage);
    main.appendChild(vid);
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