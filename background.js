chrome.contextMenus.create({
    id: "hide-side-bar",
    title: "Hide left panel"
});

chrome.contextMenus.create({
    id: "hide-title-bar",
    title: "Hide title bar"
});

chrome.contextMenus.create({
    id: "download",
    title: "Download"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "hide-side-bar") {
        chrome.tabs.executeScript({
            file: "hide-sidebar.js"
        });
    }
    if(info.menuItemId == "hide-title-bar") {
        chrome.tabs.executeScript({
            file: "hide-title.js"
        });
    }
    if(info.menuItemId == "download") {
        chrome.tabs.executeScript({
            file: "download-video.js"
        });
    }
});
