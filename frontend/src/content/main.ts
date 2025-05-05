// At the beginning of your content script
let dialogElement: HTMLDialogElement | null;

// Initial setup
async function initialize() {
  const result = await chrome.storage.sync.get(["enabled"]);
  handleEnabledState(result.enabled);
}

// Function to create or remove dialog based on enabled state
function handleEnabledState(isEnabled: boolean) {
  if (isEnabled) {
    if (!dialogElement) {
      createAndShowDialog();
    }
  } else {
    if (dialogElement) {
      dialogElement.remove();
      dialogElement = null;
    }
  }
}

// Create and store reference to dialog
function createAndShowDialog() {
  dialogElement = document.createElement("dialog");
  // Set up dialog content
  dialogElement.innerHTML = `
    <h2>Extension Enabled</h2>
    <p>This dialog updates in real-time.</p>
    <button id="close-dialog">Close</button>
  `;
  document.body.appendChild(dialogElement);
  dialogElement.showModal();

  // Add event listener for close button
  const buttonElement = dialogElement.querySelector("#close-dialog");
  if (buttonElement) {
    buttonElement.addEventListener("click", () => {
      dialogElement?.close();
    });
  }
}

// Listen for changes to storage
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync" && changes.enabled) {
    handleEnabledState(changes.enabled.newValue);
  }
});

// Initialize on load
initialize();
