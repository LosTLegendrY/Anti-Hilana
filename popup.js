chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "show_music_page") {
      window.location.href = chrome.runtime.getURL('music.html');
    }
  });
  