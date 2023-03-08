chrome.action.onClicked.addListener((tab) => {
    console.log(tab.url);
});

// chrome.scripting.executeScript({
//     func: createBoltComponent,
//     target : {tabId : tabID},
// });

function createBoltComponent() {
    const bolt = window.Bolt("TIsOiTSmPDYP.RfdIXniA72vt.29d5324d13b61b6b55bd21067326fb7ec592225edbeb22aba3610018db238968");
    console.log("loaded");
    console.log(bolt);
}

