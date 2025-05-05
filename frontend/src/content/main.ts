function createDialog(enabled: boolean) {
  const mainDoc = document.body;
  console.log(mainDoc);
  if (!mainDoc) {
    console.error("Main document element not found");
  }
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <h2>Extension Enabled</h2>
    <p>This extension is currently enabled.</p>
  `;
  if (enabled) {
    mainDoc.appendChild(dialog);
    dialog.showModal();
  } else {
    dialog.close();
    mainDoc.removeChild(dialog);
  }
}

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync") {
    createDialog(changes.enabled.newValue);
  }
});

const init = async () => {
  const result = await chrome.storage.sync.get(["enabled"]);
  createDialog(result.enabled);
};

init();
