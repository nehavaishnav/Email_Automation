// Function to extract the email content from Gmail's DOM
function extractEmailContent() {
    let emailBody = document.querySelector("div[aria-label='Message body']");
    
    if (emailBody) {
        let text = emailBody.innerText;
        console.log("Extracted Email Text:", text);
        
        // Send the extracted text to the background script
        chrome.runtime.sendMessage({ action: "summarize", text: text });
    } else {
        console.log("Email body not found.");
    }
}

// Run the function when the page loads
window.onload = extractEmailContent;
