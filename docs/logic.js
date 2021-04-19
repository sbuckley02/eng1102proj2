let state = 0;
let stack = [];

function forwardClick() {
    if (state >= states.length - 1) {
        return;
    }
    if (states[state].type == "question" && !updateAnswer()) {
        return;
    }
    let stateObj = states[state];
    stack.push(state);
    if (state == 1) {
        state += states[1].checked * 4;
    }
    state = stateObj.nextState ? stateObj.nextState : state + 1;
    updatePage();
}

function backClick() {
    if (state <= 0) {
        return;
    }
    state = stack.pop();
    updatePage();
}

function updatePage() {
    let stateObj = states[state];
    let main = document.getElementById("main");
    main.innerHTML = "";
    switch (stateObj.type) {
        case "intro":
            setIntro(main, stateObj);
            break;
        case "message":
            setMessage(main, stateObj);
            break;
        case "question":
            setQuestAns(main, stateObj);
            break;
        case "results":
            setResults(main, stateObj);
            break;
        case "video":
            setVideo(main, stateObj);
            break;
        case "links":
            setLinks(main, stateObj);
            break;
    }
    let bBtn = document.getElementById("backwardBtn");
    let fBtn = document.getElementById("forwardBtn");
    fBtn.innerHTML = stateObj.btnText;
    fBtn.disabled = state == (states.length - 1);
    bBtn.disabled = state == 0;
}

function setIntro(main, stateObj) {
    let text = document.createElement("p");
    text.setAttribute("class", "introTxt");
    text.innerHTML = stateObj.message;

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let carpetImg = document.createElement("img");
    carpetImg.setAttribute("src", "images/carpet.png");
    carpetImg.setAttribute("id", "carpetImg");
    let line1 = document.createElement("div");
    line1.setAttribute("class", "line");
    let beansImg = document.createElement("img");
    beansImg.setAttribute("src", "images/beans.png");
    beansImg.setAttribute("id", "beansImg");
    let line2 = document.createElement("div");
    line2.setAttribute("class", "line");
    let clothesImg = document.createElement("img");
    clothesImg.setAttribute("src", "images/clothes-assortment.png");
    clothesImg.setAttribute("id", "clothesImg");
    
    container.appendChild(carpetImg);
    container.appendChild(line1);
    container.appendChild(beansImg);
    container.appendChild(line2);
    container.appendChild(clothesImg);

    main.appendChild(container);
    main.appendChild(text);
}

function setMessage(main, stateObj) {
    let text = document.createElement("p");
    text.innerHTML = stateObj.message;
    main.appendChild(text);
}

function setQuestAns(main, stateObj) {
    let ques = document.createElement("h5");
    ques.setAttribute("class", "ques");
    ques.innerHTML = stateObj.question;
    main.appendChild(ques);

    let answers = stateObj.answers;
    let table = document.createElement("table");
    main.appendChild(table);

    let imgRow, txtRow;
    for (let i = 0; i < answers.length; i++) {
        if (i % 2 == 0) {
            table = document.createElement("table");
            main.appendChild(table);
            imgRow = document.createElement("tr");
            txtRow = document.createElement("tr");
            table.appendChild(imgRow);
            table.appendChild(txtRow);
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
        txt.setAttribute("class", "ansText");
        txt.innerHTML = answers[i].name;

        lbl.appendChild(inp);
        lbl.appendChild(img);

        let butContainer = document.createElement("th");
        let txtContainer = document.createElement("th");
        butContainer.appendChild(lbl);
        txtContainer.appendChild(txt);
        imgRow.appendChild(butContainer);
        txtRow.appendChild(txtContainer);
    }
}

function setResults(main, stateObj) {

    // Set all values to 0
    for (let answer in answers) {
        answers[answer].points = 0;
    }

    // Update the point values for all relevant fields
    let category = states[1].checked;
    let firstQInd = category * 4 + 2;
    for (let i = 0; i < 4; i++) {
        let ans = states[firstQInd + i].answers[states[firstQInd + i].checked];
        for (let key in ans.values) {
            answers[key].points += ans.values[key]
        }
    }

    let finalAnswer;
    let mostPts = -1;

    for (let answer in answers) {
        if (answers[answer].points > mostPts) {
            mostPts = answers[answer].points;
            finalAnswer = answer;
        }
    }

    let title = document.createElement("h5");
    title.setAttribute("class", "ques");
    title.innerHTML = "Results";

    let message = document.createElement("p");
    let messageTxt = "You are " + answers[finalAnswer].name + "!";
    message.innerHTML = messageTxt;
    message.setAttribute("class", "result");
    let image = document.createElement("img");
    image.setAttribute("src", "images/" + finalAnswer + ".jpg");
    image.setAttribute("class", "ansImage");
    let description = document.createElement("p");
    let descriptionTxt = answers[finalAnswer].description;
    description.innerHTML = descriptionTxt;
    let note = document.createElement("p");
    note.setAttribute("class", "note");
    let noteTxt = answers[finalAnswer].note;
    note.innerHTML = "Note: " + noteTxt;
    let outroMessage = document.createElement("p");
    outroMessage.innerHTML = stateObj.message;

    main.appendChild(title);
    main.appendChild(message);
    main.appendChild(image);
    main.appendChild(description);
    main.appendChild(note);
    main.appendChild(outroMessage);
}

function setVideo(main, stateObj) {
    let title = document.createElement("h5");
    title.setAttribute("class", "ques");
    title.innerHTML = stateObj.message1;
    let vid = document.createElement("iframe");
    vid.setAttribute("src", stateObj.url);
    let outroMessage = document.createElement("p");
    outroMessage.innerHTML = stateObj.message2;
    main.appendChild(title);
    main.appendChild(vid);
    main.appendChild(outroMessage);
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

function setLinks(main, stateObj) {
    let title = document.createElement("h5");
    title.setAttribute("class", "ques");
    title.innerHTML = "Links and Resources";

    let text = document.createElement("p");
    text.innerHTML = stateObj.message;

    main.appendChild(title);
    main.appendChild(text);

    let links = stateObj.links;
    for (let link of links) {
        let linkTitle = document.createElement("a");
        linkTitle.innerHTML = link.title;
        linkTitle.setAttribute("class", "linkTitle");
        linkTitle.setAttribute("href", link.link);
        linkTitle.setAttribute("target", "_blank");
        let linkDesc = document.createElement("p");
        linkDesc.innerHTML = link.description;
        
        main.appendChild(linkTitle);
        main.appendChild(linkDesc);
    }
}

updatePage();