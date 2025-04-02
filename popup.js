document.getElementById("summarize").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;

        chrome.tabs.sendMessage(tabs[0].id, { action: "summarizeEmail" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error:", chrome.runtime.lastError.message);
                alert("Extension is not running on this page. Open Gmail and try again.");
            } else {
                console.log("Summary:", response);
                document.getElementById("summary").innerText = response.summary;
            }
        });
    });
});
