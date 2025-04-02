// Wait for Gmail to load fully
setTimeout(() => {
    let emailBody = document.querySelector("div[aria-label='Message body']"); // Find email body
    if (emailBody) {
        let text = emailBody.innerText;
        summarizeEmail(text);
    } else {
        console.log("Email body not found.");
    }
}, 3000);

function summarizeEmail(emailText) {
    fetch("http://localhost:5000/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: emailText })
    })
    .then(response => response.json())
    .then(data => {
        displaySummary(data.summary);
    })
    .catch(error => console.error("Error summarizing:", error));
}


// Function to display the summary in Gmail UI
function displaySummary(summary) {
    let summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = `<b>Summary:</b> ${summary}`;
    summaryDiv.style.background = "#f0f0f0";
    summaryDiv.style.padding = "10px";
    summaryDiv.style.marginTop = "10px";
    summaryDiv.style.border = "1px solid #ccc";

    let emailContainer = document.querySelector("div[aria-label='Message body']");
    if (emailContainer) emailContainer.parentNode.insertBefore(summaryDiv, emailContainer.nextSibling);
}
