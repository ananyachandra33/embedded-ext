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
    let elementNameInput = document.getElementById("element-name").value;
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
        const auth = boltEmbedded.create("authorization_component", {
            style: {position: "right" +
                    ""},
        });
        await auth.mount(foundDiv);
        await auth.authorize({identifierType: "email"});
    } else if (elementNameInput === "credit_card_input") {
        const styles = { borderStyle: "underline"};
        const listeners = {
            error: () => {},
            valid: () => {},
        };
        const creditCard = boltEmbedded.create("credit_card_input", { styles, listeners });
        await creditCard.mount(foundDiv);
    } else if (elementNameInput === "login_status") {
        const login = boltEmbedded.create("login_status", {
            listeners: {
                show: () => {},
                login: () => {},
                logout: () => {},
            },
        });
        await login.mount(foundDiv);
    } else if (elementNameInput === "discount_wheel") {
        const login = boltEmbedded.create("discount_wheel", {
            listeners: {
                show: () => {},
                login: () => {},
                logout: () => {},
            },
        });
        await login.mount(foundDiv);
    }
}


