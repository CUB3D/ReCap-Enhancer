browser.contextMenus.create({
    id: "hide-side-bar",
    title: "Hide left panel"
});

browser.contextMenus.create({
    id: "hide-title-bar",
    title: "Hide title bar"
});

browser.contextMenus.create({
    id: "download",
    title: "Download"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "hide-side-bar") {
        browser.tabs.executeScript({
            file: "hide-sidebar.js"
        });
    }
    if(info.menuItemId == "hide-title-bar") {
        browser.tabs.executeScript({
            file: "hide-title.js"
        });
    }
    if(info.menuItemId == "download") {
        browser.tabs.executeScript({
            file: "download-video.js"
        });
    }
});
