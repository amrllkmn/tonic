async function createDialog() {
  const mainDoc = document.body;
  console.log(mainDoc);
  if (!mainDoc) {
    console.error("Main document element not found");
  }

  const result = await chrome.storage.sync.get(["enabled"]);

  console.log(result);

  if (result.enabled) {
    console.log("Hello");
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
    <h2>Extension Enabled</h2>
    <p>This extension is currently enabled.</p>
  `;
    mainDoc.appendChild(dialog);
    dialog.showModal();
  }
}

createDialog();
