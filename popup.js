console.log("hello,");

let div = document.getElementById("button");
div.onClick = init()
div.onclick = mountComponent;

async function init() {
    console.log('getting triggered');
    let tab = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        files: [ "embed.js" ],
        target : {tabId : tab[0].id},
    });
}

async function mountComponent() {
    let divNameInput = document.getElementById("div-name-input").value;
    console.log("Div Name Input", divNameInput);
    let elementNameInput = document.getElementById("element-name-input").value;
    console.log("Element Name Input", elementNameInput);

    let tab = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        func: createBoltComponent,
        target : {tabId : tab[0].id},
        args : [ divNameInput, elementNameInput ]
    });
}

async function createBoltComponent(divNameInput, elementNameInput) {
    console.log("loaded");
    console.log(divNameInput);
    console.log(elementNameInput);
    const boltEmbedded = window.Bolt("TIsOiTSmPDYP.RfdIXniA72vt.29d5324d13b61b6b55bd21067326fb7ec592225edbeb22aba3610018db238968");
    console.log(boltEmbedded);
    let foundDiv;
    if (divNameInput === "") {
        foundDiv = document.createElement("div");
        console.log("Found Div", foundDiv.parentElement);
        document.body.appendChild(foundDiv);
    } else {
        foundDiv = document.getElementById(divNameInput).parentElement;
    }
    if (elementNameInput === "authorization_component") {
        console.log("in here");
        const auth = boltEmbedded.create("authorization_component", {
            style: {position: "right" +
                    ""},
        });
        await auth.mount(foundDiv);
        await auth.authorize({identifierType: "email"});
    }
}


