chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "summarize") {
        console.log("Received email text:", message.text);

        // Simple summarization using the first few sentences (basic method)
        let summary = message.text.split('.').slice(0, 3).join('.') + '.';

        // Send the summary back to the content script
        chrome.tabs.sendMessage(sender.tab.id, { action: "displaySummary", summary: summary });
    }
});
